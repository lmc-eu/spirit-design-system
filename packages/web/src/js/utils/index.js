const isElement = object => {
  if (!object || typeof object !== 'object') {
    return false
  }

  return typeof object.nodeType !== 'undefined'
}

const getElement = (object) => {
  // it's a node element
  if (isElement(object)) {
    return object;
  }

  if (typeof object === 'string' && object.length > 0) {
    return document.querySelector(object)
  }

  return null
};

const getSelector = (element) => element.getAttribute('data-target');

const getElementFromSelector = element => {
  const selector = getSelector(element)

  return selector ? document.querySelector(selector) : null
}

export {
  isElement,
  getElement,
  getSelector,
  getElementFromSelector,
}
