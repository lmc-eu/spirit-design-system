/* eslint-disable @typescript-eslint/no-explicit-any */
const isElement = (object: any): boolean => {
  if (!object || typeof object !== 'object') {
    return false;
  }

  return typeof object.nodeType !== 'undefined';
};

const getElement = (object?: any): SpiritElement => {
  // it's a node element
  if (isElement(object)) {
    return object;
  }

  if (typeof object === 'string' && object.length > 0) {
    return document.querySelector(object);
  }

  return null;
};

const getTargetOrElement = (element?: SpiritElement): SpiritElement => {
  let target;

  if (element?.dataset?.target) {
    target = getElement(element.dataset.target);
  }

  return target || element;
};

const getSelector = (element: HTMLElement | null) => element?.getAttribute('data-target');

const getElementFromSelector = (element: HTMLElement | null): HTMLElement | null => {
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

export { isElement, getElement, getSelector, getElementFromSelector, getTargetOrElement, reflow };
