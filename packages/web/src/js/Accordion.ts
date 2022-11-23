import BaseComponent from './BaseComponent';
import { enableToggleAutoloader } from './utils/ComponentFunctions';
import Collapse from './Collapse';

const NAME = 'accordion';

const COLLAPSE_SELECTOR = '[data-toggle="collapse"]';

class Accordion extends BaseComponent {
  children: HTMLAllCollection;
  state: {
    alwaysOpen: boolean;
  };

  constructor(element: HTMLElement) {
    super(element);
    this.children = this.element.children;
    this.state = {
      alwaysOpen: true,
    };

    this.initBehaviorHandler();
  }

  static get NAME() {
    return NAME;
  }

  static get DATA_KEY() {
    return `${this.NAME}`;
  }

  collapseHandler(trigger: HTMLElement) {
    for (const item of this.children) {
      const itemTrigger = item.querySelector(COLLAPSE_SELECTOR) as HTMLElement;
      const instance = Collapse.getInstance(itemTrigger);

      if (itemTrigger !== trigger) instance.hide();
    }
  }

  initBehaviorHandler() {
    if (this.element.id) {
      let childNode;
      for (const item of this.children) {
        childNode = item.querySelector(`[data-parent="${this.element.id}"]`);
      }

      if (childNode) {
        this.state.alwaysOpen = false;
        for (const item of this.children) {
          const trigger = item.querySelector(COLLAPSE_SELECTOR);
          trigger?.addEventListener('click', () => this.collapseHandler(trigger as HTMLElement));
        }
      }
    }
  }
}

enableToggleAutoloader(Accordion);

export default Accordion;
