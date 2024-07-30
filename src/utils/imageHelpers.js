export function getAverageRGB(imgEl) {
  const blockSize = 5; // only visit every 5 pixels
  const defaultRGB = {r: 0, g: 0, b: 0}; // for non-supporting envs
  const canvas = document.createElement("canvas");
  const context = canvas.getContext && canvas.getContext("2d");
  const rgb = {r: 0, g: 0, b: 0};

  let data;
  let count = 0;
  let i = -4;

  if (!context) {
    return defaultRGB;
  }

  const height = (canvas.height =
    imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height);
  const width = (canvas.width =
    imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width);

  context.drawImage(imgEl, 0, 0);

  try {
    data = context.getImageData(0, 0, width, height);
  } catch (e) {
    /* security error, img on diff domain */
    return defaultRGB;
  }

  const length = data.data.length;

  while ((i += blockSize * 4) < length) {
    ++count;
    rgb.r += data.data[i];
    rgb.g += data.data[i + 1];
    rgb.b += data.data[i + 2];
  }

  // ~~ used to floor values
  rgb.r = ~~(rgb.r / count);
  rgb.g = ~~(rgb.g / count);
  rgb.b = ~~(rgb.b / count);

  return rgb;
}

function rgbToHsl(r, g, b) {
  // Normalize r, g, b values
  r /= 255;
  g /= 255;
  b /= 255;

  // Find the maximum and minimum values of r, g, and b
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  // Calculate luminance
  let h;
  let s;
  const l = (max + min) / 2;

  // If max and min are equal, it's a shade of gray
  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    // Calculate saturation
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    // Calculate hue

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  // Return h, s, l values as an array
  return [h * 360, s * 100, l * 100];
}

export function getDarkerHslFromRgb(r, g, b) {
  const [h, s] = rgbToHsl(r, g, b);

  return [h.toFixed(0), s.toFixed(0), "14"];
}

export function generateRgbCssString(r, g, b) {
  return `rgb(${r},${g},${b})`;
}

export function generateHslString(h, s, l) {
  return `hsl(${h}deg, ${s}%, ${l}%)`;
}

export function topToBottomGradientCssGenerator(
  topColor = "",
  bottomColor = "#000000",
  cutOff = "23%"
) {
  return `linear-gradient(0deg, ${bottomColor} ${cutOff}, ${topColor} 100%)`;
}

export function leftToRightGradientCssGenerator(
  leftColor = "",
  rightColor = "#000000",
  cutOff = "23%"
) {
  return `linear-gradient(90deg, ${rightColor} ${cutOff}, ${leftColor} 100%)`;
}
