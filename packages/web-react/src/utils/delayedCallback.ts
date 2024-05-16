export const delayedCallback = (callback: () => void, interval: number) => {
  const timeoutId = setTimeout(() => {
    callback();
    clearTimeout(timeoutId);
  }, interval);
};
