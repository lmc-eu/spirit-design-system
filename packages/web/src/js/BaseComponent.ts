import { getElement } from './utils/index';
import InstanceMap from './dom/InstanceMap';

type Element = HTMLElement | Window | Document | null;

interface IBaseComponent extends Function {
  INSTANCE_KEY: string;
}

class BaseComponent {
  element: Element | null;
  NAME: string | null;

  constructor(element: Element) {
    this.element = getElement(element);
    this.NAME = '';

    InstanceMap.set(this.element, (this.constructor as IBaseComponent).INSTANCE_KEY, this);
  }

  dispose() {
    InstanceMap.remove(this.element, (this.constructor as IBaseComponent).INSTANCE_KEY);

    for (const propertyName of Object.getOwnPropertyNames(this)) {
      // To type index signature is already hard
      // @see: https://bobbyhadz.com/blog/typescript-element-implicitly-has-any-type-expression
      // @ts-expect-error TS2322: Type 'null' is not assignable to type 'Element & (string | null) & (() => void)'
      this[propertyName as keyof BaseComponent] = null;
    }
  }

  static get NAME() {
    return '';
  }

  static getInstance(element: Element) {
    return InstanceMap.get(getElement(element), this.INSTANCE_KEY);
  }

  static getOrCreateInstance(element: Element) {
    return this.getInstance(element) || this.createInstance(element);
  }

  static createInstance(element: Element) {
    return new this(element);
  }

  static get INSTANCE_KEY() {
    return `spirit.${this.NAME}`;
  }
}

export default BaseComponent;
