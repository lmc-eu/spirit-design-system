import { useState, useEffect, MutableRefObject } from 'react';

export const useResizeHeight = (ref: MutableRefObject<HTMLElement | null | undefined>): string => {
  const [height, setHeight] = useState<string>('0px');

  const adjustHeight = () => {
    const currentHeight = ref?.current?.clientHeight || ref?.current?.offsetHeight;
    setHeight(`${currentHeight}px`);
  };

  useEffect(() => {
    adjustHeight();
    window.addEventListener('resize', adjustHeight);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return height;
};
