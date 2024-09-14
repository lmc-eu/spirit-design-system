import { RefObject, useState } from 'react';
import { useResizeObserver } from 'usehooks-ts';

type Size = {
  height: number | undefined;
};

export const useResizeHeight = (ref: RefObject<HTMLElement>): string => {
  const [height, setHeight] = useState<string>('0px');

  const onResize = (size: Size) => {
    const currentHeight = size.height;
    setHeight(`${currentHeight}px`);
  };

  useResizeObserver({ ref, onResize });

  return height;
};
