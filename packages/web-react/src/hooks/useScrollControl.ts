import { useEffect, MutableRefObject } from 'react';

const CLASSNAME_SCROLLING_DISABLED = 'is-scrolling-disabled';

const disableScroll = () => {
  const { body } = document;
  const scrollBarWidth = window.innerWidth - body.clientWidth;

  body.style.paddingRight = `${scrollBarWidth}px`;
  body.classList.add(CLASSNAME_SCROLLING_DISABLED);
};

const enableScroll = () => {
  const { body } = document;
  body.style.paddingRight = '';
  body.classList.remove(CLASSNAME_SCROLLING_DISABLED);
};

export const useScrollControl = (ref: MutableRefObject<HTMLDialogElement | null>, isOpen: boolean) => {
  useEffect(() => {
    if (isOpen) {
      disableScroll();
    } else if (ref.current && !ref.current.open) {
      enableScroll();
    }
  }, [isOpen, ref]);
};
