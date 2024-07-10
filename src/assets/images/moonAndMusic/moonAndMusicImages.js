// import moonAndMusic1 from "./moonAndMusic1.webp";
// import moonAndMusic2 from "./moonAndMusic2.webp";
// import moonAndMusic3 from "./moonAndMusic3.webp";
// import moonAndMusic4 from "./moonAndMusic4.webp";
// import moonAndMusic5 from "./moonAndMusic5.webp";
// import moonAndMusic6 from "./moonAndMusic6.webp";

import {generateRandomInteger} from "../../../utils/helpers";

const moonAndMusicImagesPaths = [
  "./moonAndMusic1.webp",
  "./moonAndMusic2.webp",
  "./moonAndMusic3.webp",
  "./moonAndMusic4.webp",
  "./moonAndMusic5.webp",
  "./moonAndMusic6.webp",
];

export async function getRandomMoonAndMusicImage() {
  const path =
    moonAndMusicImagesPaths[
      generateRandomInteger(0, moonAndMusicImagesPaths.length - 1)
    ];
  const image = await import(
    /* @vite-ignore */
    path
  );
  return image.default;
}

export default moonAndMusicImagesPaths;
