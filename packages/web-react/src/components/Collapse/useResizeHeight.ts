import { useState, RefObject } from 'react';
import useResizeObserver from '@react-hook/resize-observer';

export const useResizeHeight = (ref: RefObject<HTMLElement>): string => {
  const [height, setHeight] = useState<string>('0px');

  useResizeObserver(ref, (entry: ResizeObserverEntry) => {
    const currentHeight = entry.contentRect.height;
    setHeight(`${currentHeight}px`);
  });

  return height;
};
