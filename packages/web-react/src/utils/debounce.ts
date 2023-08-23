export const debounce = <T>(callback: (props: T) => void, delay: number) => {
  let timeout: NodeJS.Timeout;
  let isThrottled = false;

  return (args: T): void => {
    if (!isThrottled) {
      isThrottled = true;

      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(() => {
        callback(args);
        isThrottled = false;
      }, delay);
    }
  };
};
