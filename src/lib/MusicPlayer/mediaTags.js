export const readTags = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = function (e) {
      const dv = new DataView(e.target.result);
      // Helper function to get a string from DataView with specific encoding
      const getString = (length, offset, encoding = "iso-8859-1") => {
        const bytes = new Uint8Array(dv.buffer, offset, length);
        const decoder = new TextDecoder(encoding);
        return decoder.decode(bytes).replace(/\0/g, "").trim();
      };

      // Check for ID3v2 tag
      if (getString(3, 0) === "ID3") {
        // const version = dv.getUint8(3); // ID3 version
        // const flags = dv.getUint8(5); // ID3 flags
        const size =
          ((dv.getUint8(6) & 0x7f) << 21) |
          ((dv.getUint8(7) & 0x7f) << 14) |
          ((dv.getUint8(8) & 0x7f) << 7) |
          (dv.getUint8(9) & 0x7f); // ID3 size

        // Read frames
        let offset = 10; // Initial offset after ID3 header
        const frames = {};

        while (offset < size + 10) {
          const frameID = getString(4, offset);
          if (!frameID.trim()) break;
          const frameSize = dv.getUint32(offset + 4);
          const frameData = new DataView(dv.buffer, offset + 10, frameSize);

          // Save frame data
          frames[frameID] = frameData;

          offset += 10 + frameSize;
        }

        // Extract text frames (TIT2: title, TPE1: artist, TALB: album, TYER: year, TBPM: BPM, TCON: genre)
        const getTextFrame = (frameID) => {
          if (!frames[frameID]) return "";
          const frame = frames[frameID];
          const encodingByte = frame.getUint8(0);
          let encoding = "iso-8859-1";
          if (encodingByte === 1) encoding = "utf-16";
          else if (encodingByte === 2) encoding = "utf-16be";
          else if (encodingByte === 3) encoding = "utf-8";
          return getString(
            frame.byteLength - 1,
            frame.byteOffset + 1,
            encoding
          );
        };

        const title = getTextFrame("TIT2");
        const artist = getTextFrame("TPE1");
        const album = getTextFrame("TALB");
        const year = getTextFrame("TYER");
        const bpm = getTextFrame("TBPM");
        const genre = getTextFrame("TCON");

        // Extract album art (APIC frame)
        let albumArt = null;
        if (frames.APIC) {
          const frameData = frames.APIC;
          // const textEncoding = frameData.getUint8(0); // Text encoding
          let offset = 1;
          let mimeType = "";
          while (frameData.getUint8(offset) !== 0) {
            mimeType += String.fromCharCode(frameData.getUint8(offset));
            offset++;
          }
          offset++; // Skip the null terminator
          const pictureType = frameData.getUint8(offset);
          offset++; // Move to description
          let description = "";
          while (frameData.getUint8(offset) !== 0) {
            description += String.fromCharCode(frameData.getUint8(offset));
            offset++;
          }
          offset++; // Skip the null terminator
          const pictureData = new Blob(
            [frameData.buffer.slice(frameData.byteOffset + offset)],
            {type: mimeType}
          );

          albumArt = {
            mimeType,
            pictureType,
            description,
            pictureData,
          };
        }

        resolve({
          title,
          artist,
          album,
          year,
          bpm,
          genre,
          albumArt,
        });
      } else if (getString(3, dv.byteLength - 128) === "TAG") {
        // Check for ID3v1 tag
        const tagOffset = dv.byteLength - 128;
        const title = getString(30, tagOffset + 3);
        const artist = getString(30, tagOffset + 33);
        const album = getString(30, tagOffset + 63);
        const year = getString(4, tagOffset + 93);
        const genre = getString(30, tagOffset + 97); // ID3v1 genre

        // Resolve with ID3v1 data (no album art, no bpm)
        resolve({
          title,
          artist,
          album,
          year,
          genre,
        });
      } else {
        // No ID3 tag found
        console.log("No ID3 tag");
        reject(new Error("No ID3 Tag"));
      }
    };

    reader.readAsArrayBuffer(file);
  });
