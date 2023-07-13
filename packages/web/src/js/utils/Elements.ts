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

type Aim = 'trigger' | 'target';

const getTriggerOrTarget = (element?: SpiritElement, aim: Aim = 'target'): SpiritElement => {
  const trigger = element;
  const target = trigger?.dataset?.spiritTarget ? getElement(element.dataset.spiritTarget) : null;

  return aim === 'target' ? target : trigger;
};

const getSelector = (element: HTMLElement | null) => element?.getAttribute('data-spirit-target');

const getElementFromSelector = (element: HTMLElement | null): HTMLElement | null => {
  const selector = getSelector(element);

  return selector ? document.querySelector(selector) : null;
};

export { isElement, getElement, getElementFromSelector, getSelector, getTriggerOrTarget };
export type { Aim };
