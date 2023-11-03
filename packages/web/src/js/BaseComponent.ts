import InstanceMap from './dom/InstanceMap';
import { Config, SpiritConfig, getElement } from './utils';

interface IBaseComponent extends FunctionConstructor {
  INSTANCE_KEY: string;
}

class BaseComponent extends Config {
  element: SpiritElement;
  config: unknown;
  NAME: string | null;

  constructor(element: SpiritElement | string, config?: SpiritConfig) {
    super();
    this.element = getElement(element);
    this.NAME = '';
    this.config = this.getConfig(config);

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

  getConfig(config?: SpiritConfig) {
    const mergedConfig = this.mergeConfigObj(config, this.element);
    this.typeCheckConfig(mergedConfig);

    return mergedConfig;
  }

  static get NAME() {
    return '';
  }

  static getInstance(element: SpiritElement) {
    return InstanceMap.get(getElement(element), this.INSTANCE_KEY);
  }

  static getOrCreateInstance(element: SpiritElement, config = {}) {
    return this.getInstance(element) || this.createInstance(element, config);
  }

  static createInstance(element: SpiritElement, config: SpiritConfig) {
    return new this(element, typeof config === 'object' ? config : null);
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
