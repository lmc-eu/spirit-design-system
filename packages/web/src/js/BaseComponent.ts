import { getElement } from './utils/index';
import InstanceMap from './dom/InstanceMap';

interface IBaseComponent extends Function {
  INSTANCE_KEY: string;
}

class BaseComponent {
  element: SpiritElement;
  NAME: string | null;

  constructor(element: SpiritElement) {
    this.element = getElement(element);
    this.NAME = '';

    InstanceMap.set(this.element, (this.constructor as IBaseComponent).INSTANCE_KEY, this);
  }

  dispose() {
    InstanceMap.remove(this.element, (this.constructor as IBaseComponent).INSTANCE_KEY);

    for (const propertyName of Object.getOwnPropertyNames(this)) {
      // To type index signature is already hard
      // @see: https://bobbyhadz.com/blog/typescript-element-implicitly-has-any-type-expression
      // TS2322: Type 'null' is not assignable to type 'Element & (string | null) & (() => void)'
      this[propertyName as keyof BaseComponent] = null;
    }
  }

  static get NAME() {
    return '';
  }

  static getInstance(element: SpiritElement) {
    return InstanceMap.get(getElement(element), this.INSTANCE_KEY);
  }

  static getOrCreateInstance(element: SpiritElement) {
    return this.getInstance(element) || this.createInstance(element);
  }

  static createInstance(element: SpiritElement) {
    return new this(element);
  }

  static get INSTANCE_KEY() {
    return `spirit.${this.NAME}`;
  }

  static get DATA_KEY() {
    return `${this.NAME}`;
  }

  static get EVENT_KEY() {
    return `.${this.DATA_KEY}`;
  }

  static eventName(name: string) {
    return `${name}${this.EVENT_KEY}`;
  }
}

export default BaseComponent;
