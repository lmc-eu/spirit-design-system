function normalizeData(value: unknown) {
  if (value === 'true') {
    return true;
  }

  if (value === 'false') {
    return false;
  }

  if (value === Number(value).toString()) {
    return Number(value);
  }

  if (value === '' || value === 'null') {
    return null;
  }

  if (typeof value !== 'string') {
    return value;
  }

  try {
    return JSON.parse(decodeURIComponent(value));
  } catch {
    return value;
  }
}

function normalizeDataKey(key: string) {
  return key.replace(/[A-Z]/g, (chr) => `-${chr.toLowerCase()}`);
}

const Manipulator = {
  setDataAttribute(element: SpiritElement, key: string, value: string) {
    element.setAttribute(`data-spirit-${normalizeDataKey(key)}`, value);
  },

  removeDataAttribute(element: SpiritElement, key: string) {
    element.removeAttribute(`data-spirit-${normalizeDataKey(key)}`);
  },

  getDataAttributes(element: SpiritElement) {
    if (!element) {
      return {};
    }

    const attributes = {};
    const spiritKeys = Object.keys(element.dataset).filter(
      (key) => key.startsWith('spirit') && !key.startsWith('spiritConfig'),
    );

    for (const key of spiritKeys) {
      let pureKey = key.replace(/^spirit/, '');
      pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore No index signature with a parameter of type 'string' was found on type '{}'.
      attributes[pureKey] = normalizeData(element.dataset[key]);
    }

    return attributes;
  },

  getDataAttribute(element: SpiritElement, key: string) {
    return normalizeData(element.getAttribute(`data-spirit-${normalizeDataKey(key)}`));
  },
};

export default Manipulator;
