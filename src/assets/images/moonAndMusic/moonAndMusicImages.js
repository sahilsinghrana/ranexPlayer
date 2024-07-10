// import moonAndMusic1 from "./moonAndMusic1.webp";
// import moonAndMusic2 from "./moonAndMusic2.webp";
// import moonAndMusic3 from "./moonAndMusic3.webp";
// import moonAndMusic4 from "./moonAndMusic4.webp";
// import moonAndMusic5 from "./moonAndMusic5.webp";
// import moonAndMusic6 from "./moonAndMusic6.webp";

import {generateRandomInteger} from "../../../utils/helpers";

const moonAndMusicImagesPaths = [
  "/images/moonAndMusic/moonAndMusic1.webp",
  "/images/moonAndMusic2.webp",
  "/images/moonAndMusic3.webp",
  "/images/moonAndMusic4.webp",
  "/images/moonAndMusic5.webp",
  "/images/moonAndMusic6.webp",
];

export async function getRandomMoonAndMusicImage() {
  return moonAndMusicImagesPaths[
    generateRandomInteger(0, moonAndMusicImagesPaths.length - 1)
  ];
  // const path =
  //   moonAndMusicImagesPaths[
  //     generateRandomInteger(0, moonAndMusicImagesPaths.length - 1)
  //   ];
  // const image = await import(
  //   /* @vite-ignore */
  //   path
  // );
  // return image.default;
}

export default moonAndMusicImagesPaths;
