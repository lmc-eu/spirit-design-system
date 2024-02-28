import { CSSProperties } from 'react';
import EventHandler from '../dom/EventHandler';

const triggerTransitionEnd = (element: HTMLElement) => {
  EventHandler.trigger(element, 'transitionend');
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

const execute = (possibleCallback: (...args: unknown[]) => void, args = [], defaultValue = possibleCallback) =>
  typeof possibleCallback === 'function' ? possibleCallback(...args) : defaultValue;

const executeAfterTransition = (
  transitionElement: HTMLElement,
  callback: () => void,
  waitForTransition = true,
  propertyName: CSSProperties | null = null,
) => {
  if (!waitForTransition) {
    execute(callback);

    return;
  }

  const durationPadding = 5;
  const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;

  let called = false;

  const handler = (event: TransitionEvent) => {
    if (event.target !== transitionElement || (propertyName && event.propertyName !== propertyName)) {
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

export { executeAfterTransition };
