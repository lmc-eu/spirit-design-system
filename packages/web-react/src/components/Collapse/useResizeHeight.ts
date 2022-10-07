import { useState, useEffect, MutableRefObject } from 'react';

export interface ResizeHeightProps {
  contentRef: MutableRefObject<HTMLElement | null | undefined>;
}
export interface ResizeHeightReturn {
  height: string;
}

export const useResizeHeight = (props: ResizeHeightProps): ResizeHeightReturn => {
  const { contentRef } = props;

  const [height, setHeight] = useState<string>('0px');

  const adjustHeight = () => {
    const currentHeight = contentRef?.current?.clientHeight || contentRef?.current?.offsetHeight;
    setHeight(`${currentHeight}px`);
  };

  useEffect(() => {
    adjustHeight();
    window.addEventListener('resize', adjustHeight);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    height,
  };
};
