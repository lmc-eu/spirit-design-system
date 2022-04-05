import { getElement } from './utils/index';

class BaseComponent {
  constructor(element) {
    this.element = getElement(element);
  }

  static createInstance(element) {
    return new this(element);
  }
}

export default BaseComponent;
