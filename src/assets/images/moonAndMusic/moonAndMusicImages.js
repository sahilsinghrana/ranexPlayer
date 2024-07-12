import {generateRandomInteger} from "../../../utils/helpers";

const moonAndMusicImagesPaths = Array.from(
  {length: 24},
  (_, idx) => `images/moonAndMusic/moonAndMusic${idx + 1}.webp`
);

let lastGeneratedIdx;

function generateIndexTillLastGeneratedIsDifferent() {
  const newIndex = generateRandomInteger(0, moonAndMusicImagesPaths.length - 1);
  if (newIndex === lastGeneratedIdx) {
    return generateIndexTillLastGeneratedIsDifferent();
  } else {
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
