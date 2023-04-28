export const debounce = <T>(callback: (props: T) => void, delay: number) => {
  let timeout: NodeJS.Timeout;

  return (args: T): void => {
    clearTimeout(timeout);
    timeout = setTimeout(() => callback(args), delay);
  };
};
