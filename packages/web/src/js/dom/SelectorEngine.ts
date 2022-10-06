const SelectorEngine = {
  findAll(selector: string | null, element: SpiritElement = document.documentElement): HTMLElement[] {
    return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
  },

  findOne(selector: string | null | undefined, element: SpiritElement = document.documentElement): HTMLElement | null {
    return Element.prototype.querySelector.call(element, selector);
  },
};

export default SelectorEngine;
