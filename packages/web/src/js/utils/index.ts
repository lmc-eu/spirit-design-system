/* eslint-disable @typescript-eslint/no-explicit-any */
const isElement = (object: any) => {
  if (!object || typeof object !== 'object') {
    return false;
  }

  return typeof object.nodeType !== 'undefined';
};

const getElement = (object?: any) => {
  // it's a node element
  if (isElement(object)) {
    return object;
  }

  if (typeof object === 'string' && object.length > 0) {
    return document.querySelector(object);
  }

  return null;
};

const getSelector = (element: HTMLElement) => element.getAttribute('data-target');

const getElementFromSelector = (element: HTMLElement): HTMLElement | null => {
  const selector = getSelector(element);

  return selector ? document.querySelector(selector) : null;
};

/**
 * Trick to restart an element's animation
 *
 * @param element
 * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
 */
const reflow = (element: HTMLElement): void => {
  // eslint-disable-next-line no-unused-expressions
  element.offsetHeight;
};

export { isElement, getElement, getSelector, getElementFromSelector, reflow };
