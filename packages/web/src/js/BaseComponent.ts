import { getElement } from './utils/index';

type Element = HTMLElement | Window | Document | null;

class BaseComponent {
  element: Element;

  constructor(element: Element) {
    this.element = getElement(element);
  }

  static createInstance(element: Element) {
    return new this(element);
  }
}

export default BaseComponent;
