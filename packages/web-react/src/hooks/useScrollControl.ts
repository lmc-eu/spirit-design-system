import { MutableRefObject, useEffect } from 'react';

const CLASSNAME_SCROLLING_DISABLED = 'is-scrolling-disabled';

const disableScroll = () => {
  const { body } = document;
  const scrollBarWidth = window.innerWidth - body.clientWidth;
  const offsetY = window.scrollY;

  body.style.paddingRight = `${scrollBarWidth}px`;
  body.style.top = `-${offsetY}px`;
  body.classList.add(CLASSNAME_SCROLLING_DISABLED);
};

const enableScroll = (offsetY: number) => {
  const { body } = document;
  body.style.paddingRight = '';
  body.style.top = '';
  body.classList.remove(CLASSNAME_SCROLLING_DISABLED);
  window.scrollTo(0, offsetY);
};

export const useScrollControl = (ref: MutableRefObject<HTMLDialogElement | null>, isOpen: boolean) => {
  useEffect(() => {
    if (isOpen) {
      disableScroll();
    } else if (ref.current && !ref.current.open) {
      const offsetY = parseFloat(document.body.style.top || '0') || window.scrollY;
      enableScroll(offsetY);
    }
  }, [isOpen, ref]);
};
