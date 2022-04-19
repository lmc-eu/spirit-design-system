type Element = HTMLElement | Window | Document;

const SelectorEngine = {
  findAll(selector: string | null, element: Element = document.documentElement) {
    return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
  },

  findOne(selector: string | null, element: Element = document.documentElement) {
    return Element.prototype.querySelector.call(element, selector);
  },
};

export default SelectorEngine;
