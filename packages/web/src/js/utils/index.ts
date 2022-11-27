/* eslint-disable @typescript-eslint/no-explicit-any */
const isElement = (object: any): boolean => {
  if (!object || typeof object !== 'object') {
    return false;
  }

  return typeof object.nodeType !== 'undefined';
};

const getElement = (object?: any): Node | Element | HTMLElement | null => {
  // it's a node element
  if (isElement(object)) {
    return object;
  }

  if (typeof object === 'string' && object.length > 0) {
    return document.querySelector(object);
  }

  return null;
};

const getSelector = (element: HTMLElement | null) => element?.getAttribute('data-target');

const getElementFromSelector = (element: HTMLElement | null): HTMLElement | null => {
  const selector = getSelector(element);

  return selector ? document.querySelector(selector) : null;
};

const triggerTransitionEnd = (element: HTMLElement) => {
  element.dispatchEvent(new Event('transitionend'));
};

const getTransitionDurationFromElement = (element: HTMLElement) => {
  if (!element) {
    return 0;
  }

  let { transitionDuration, transitionDelay } = window.getComputedStyle(element);
  const floatTransitionDuration = Number.parseFloat(transitionDuration);
  const floatTransitionDelay = Number.parseFloat(transitionDelay);

  if (!floatTransitionDuration && !floatTransitionDelay) {
    return 0;
  }

  [transitionDuration] = transitionDuration.split(',');
  [transitionDelay] = transitionDelay.split(',');

  return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * 1000;
};

const execute = (possibleCallback: (...args: any[]) => void, args = [], defaultValue = possibleCallback) => {
  return typeof possibleCallback === 'function' ? possibleCallback(...args) : defaultValue;
};

const executeAfterTransition = (transitionElement: HTMLElement, callback: () => void, waitForTransition = true) => {
  if (!waitForTransition) {
    execute(callback);

    return;
  }

  const durationPadding = 5;
  const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;

  let called = false;

  const handler = (event: Event) => {
    if (event.target !== transitionElement) {
      return;
    }

    called = true;
    transitionElement.removeEventListener('transitionend', handler);
    execute(callback);
  };

  transitionElement.addEventListener('transitionend', handler);
  setTimeout(() => {
    if (!called) {
      triggerTransitionEnd(transitionElement);
    }
  }, emulatedDuration);
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

export { isElement, getElement, getSelector, getElementFromSelector, reflow, executeAfterTransition };
