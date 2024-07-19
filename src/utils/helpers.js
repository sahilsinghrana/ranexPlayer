export const formatTimeStampForSongDuration = (sec = 0) => {
  const seconds = Number(sec).toFixed(0);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
};

export function debounce(func, wait) {
  let timeout;

  return function (...args) {
    const context = this;

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}

export function generateRandomInteger(min = 0, max = 10) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function fileReaderPromise(file) {
  return new Promise((resolve, reject) => {
    const fr = new FileReader();

    fr.readAsDataURL(file);
    fr.onload = () => {
      resolve(fr.result);
    };

    fr.onerror = () => {
      resolve();
    };
  });
}
