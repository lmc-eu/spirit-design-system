import type { SpiritElement } from '../types';

const elementMap = new Map();

export default {
  set(element: SpiritElement, key: string, instance: unknown): void {
    if (!elementMap.has(element)) {
      elementMap.set(element, new Map());
    }

    const instanceMap = elementMap.get(element);

    // make it clear we only want one instance per element
    // can be removed later when multiple key/instances are fine to be used
    if (!instanceMap.has(key) && instanceMap.size !== 0) {
      // eslint-disable-next-line no-console
      console.error(
        `Spirit do not allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`,
      );

      return;
    }

    instanceMap.set(key, instance);
  },

  get(element?: SpiritElement, key?: string | null): SpiritElement {
    if (elementMap.has(element)) {
      return elementMap.get(element).get(key) || null;
    }

    return null;
  },

  remove(element: SpiritElement, key?: string | undefined): void {
    if (!elementMap.has(element)) {
      return;
    }

    const instanceMap = elementMap.get(element);

    instanceMap.delete(key);

    // free up element references if there are no instances left for an element
    if (instanceMap.size === 0) {
      elementMap.delete(element);
    }
  },
};
