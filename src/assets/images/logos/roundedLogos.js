import {generateRandomInteger} from "../../../utils/helpers";

const roundedLogosPaths = Array.from(
  {length: 9},
  (_, idx) => `images/logos/logo${idx + 1}.webp`
);

let lastGeneratedIdx;

function generateIndexTillLastGeneratedIsDifferent() {
  const newIndex = generateRandomInteger(0, roundedLogosPaths.length - 1);
  if (newIndex === lastGeneratedIdx) {
    return generateIndexTillLastGeneratedIsDifferent();
  } else {
    return newIndex;
  }
}

export function getRandomRoundedLogoPath() {
  return (
    (import.meta.env.VITE_BASE_URL || "") +
    "/" +
    roundedLogosPaths[generateIndexTillLastGeneratedIsDifferent()]
  );
}

export default roundedLogosPaths;
