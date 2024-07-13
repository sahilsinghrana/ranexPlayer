import {generateRandomInteger} from "../../../utils/helpers";

const moonAndMusicImagesPaths = Array.from(
  {length: 29},
  (_, idx) => `images/moonAndMusic/moonAndMusic${idx + 1}.webp`
);

const bwMoonAndMusicImagesPaths = Array.from(
  {length: 4},
  (_, idx) => `images/moonAndMusic/bwMoonAndMusic${idx + 1}.webp`
);

export function getRandomBWMoonAndMusicImage() {
  return bwMoonAndMusicImagesPaths[
    generateRandomInteger(0, bwMoonAndMusicImagesPaths.length - 1)
  ];
}

let lastGeneratedIdxs = [];

function generateIndexTillLastGeneratedIsDifferent() {
  if (lastGeneratedIdxs.length === moonAndMusicImagesPaths.length) {
    lastGeneratedIdxs = [];
  }
  const newIndex = generateRandomInteger(0, moonAndMusicImagesPaths.length - 1);
  if (lastGeneratedIdxs.includes(newIndex)) {
    return generateIndexTillLastGeneratedIsDifferent();
  } else {
    lastGeneratedIdxs.push(newIndex);
    return newIndex;
  }
}

export function getRandomMoonAndMusicImage() {
  return (
    (import.meta.env.VITE_BASE_URL || "") +
    "/" +
    moonAndMusicImagesPaths[generateIndexTillLastGeneratedIsDifferent()]
  );
}

export default moonAndMusicImagesPaths;
