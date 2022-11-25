import BaseComponent from './BaseComponent';
import { enableToggleAutoloader, debounce } from './utils/ComponentFunctions';
import SelectorEngine from './dom/SelectorEngine';
import EventHandler from './dom/EventHandler';
import {
  ARIA_EXPANDED_ATTRIBUTE,
  ARIA_CONTROLS_ATTRIBUTE,
  NAME_DATA_TARGET,
  CLASSNAME_OPEN,
  CLASSNAME_TRANSITION,
} from './constants';

const NAME = 'collapse';
const DATA_KEY = 'collapse';
const EVENT_KEY = `.${DATA_KEY}`;
const EVENT_HIDE = `hide${EVENT_KEY}`;
const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
const EVENT_SHOW = `show${EVENT_KEY}`;
const EVENT_SHOWN = `shown${EVENT_KEY}`;

const DEBOUNCE_TIMER = 225;

interface CollapseMeta {
  id: string | 'unknown';
  hideOnCollapse: boolean;
  parent: string | undefined;
}
interface CollapseState {
  open: boolean;
  width: number;
}

class Collapse extends BaseComponent {
  target: HTMLElement | null | undefined;
  parent: HTMLElement | null | undefined;
  meta: CollapseMeta;
  state: CollapseState;

  constructor(element: HTMLElement) {
    super(element);
    this.target = this.element.dataset.target ? SelectorEngine.findOne(`#${this.element.dataset.target}`) : null;
    this.parent = this.element && this.element.parentElement;
    this.meta = {
      id: this.element.dataset.target,
      hideOnCollapse: !!(this.element.dataset.more || this.element.dataset.more === ''),
      parent: this.target?.dataset.parent,
    };
    this.state = {
      open:
        this.element.hasAttribute(ARIA_EXPANDED_ATTRIBUTE) &&
        this.element.getAttribute(ARIA_EXPANDED_ATTRIBUTE) === 'true',
      width: window.innerWidth,
    };

    this.init();
  }

  static get NAME() {
    return NAME;
  }

  static get DATA_KEY() {
    return `${this.NAME}`;
  }

  siblingsControlHandler(trigger: HTMLElement) {
    if (this.meta.parent) {
      const parentElement = SelectorEngine.findOne(this.meta.parent);
      const children = parentElement?.children;

      if (!children) {
        return;
      }

      for (const item of children) {
        const itemTrigger = SelectorEngine.findOne(`[data-toggle="${NAME}"]`, item);
        const instance = Collapse.getInstance(itemTrigger);

        if (instance?.state?.open && itemTrigger !== trigger) {
          instance?.hide();
        }
      }
    }
  }

  onResize() {
    this.state.width = window.innerWidth;
    this.updateTriggerElementHandler();
    this.updateCollapsibleElementHandler();
  }

  appendNodeToParentHandler() {
    if (this.state.open) {
      const contentEl = this.target?.children[0];
      const innerHtml = contentEl ? contentEl?.innerHTML : this.target?.innerHTML;
      const originalHtml = this.parent?.innerHTML;
      if (this.parent) {
        this.parent.innerHTML = `${originalHtml}${innerHtml}`;
      }
      setTimeout(() => this.target?.remove(), 100);
    }
  }

  adjustCollapsibleElementHeightHandler(open: boolean = this.state.open) {
    if (this.target) {
      const content = this.target.children[0];
      const bounds = content.getBoundingClientRect();
      this.target.style.height = open ? `${bounds.height}px` : '0';
      if (this.target) {
        EventHandler.trigger(this.target, open ? EVENT_SHOWN : EVENT_HIDDEN);
      }
    }
  }

  updateTriggerElementHandler(open: boolean = this.state.open) {
    const triggers = SelectorEngine.findAll(`[${NAME_DATA_TARGET}="${this.meta.id}"]`);
    const updateElement = (element: Element | HTMLElement) => {
      element.setAttribute(ARIA_CONTROLS_ATTRIBUTE, this.meta.id);
      element.setAttribute(ARIA_EXPANDED_ATTRIBUTE, String(open));
      if (this.meta.hideOnCollapse && open) {
        element.remove();
        this.appendNodeToParentHandler();
        this.onDestroy();
      }
    };
    this.state.open = open;
    if (triggers.length === 1) {
      updateElement(this.element);
    } else {
      triggers.forEach((trigger) => updateElement(trigger));
    }
  }

  updateCollapsibleElementHandler(collapsed: boolean = this.state.open) {
    if (this.target) {
      this.target?.classList.add(CLASSNAME_TRANSITION);
      EventHandler.on(this.target, 'transitionend', () => {
        this.target?.classList.remove(CLASSNAME_TRANSITION);
        this.target?.classList.toggle(CLASSNAME_OPEN, collapsed);
      });
      this.adjustCollapsibleElementHeightHandler(collapsed);
    }
  }

  show() {
    this.siblingsControlHandler(this.element);
    EventHandler.trigger(this.target as HTMLElement, EVENT_SHOW);
    this.updateTriggerElementHandler(true);
    this.updateCollapsibleElementHandler(true);
    setTimeout(() => EventHandler.trigger(this.target as HTMLElement, EVENT_SHOWN), 0);
  }

  hide() {
    EventHandler.trigger(this.target as HTMLElement, EVENT_HIDE);
    this.updateTriggerElementHandler(false);
    this.updateCollapsibleElementHandler(false);
    setTimeout(() => EventHandler.trigger(this.target as HTMLElement, EVENT_HIDDEN), 0);
  }

  toggle() {
    if (this.state.open) {
      this.hide();
    } else {
      this.show();
    }
  }

  initEvents() {
    const triggers = SelectorEngine.findAll(`[${NAME_DATA_TARGET}="${this.meta.id}"]`);
    if (triggers.length === 1) {
      EventHandler.on(this.element, 'click', () => this.toggle());
    } else {
      triggers.forEach((trigger) => EventHandler.on(trigger as HTMLElement, 'click', () => this.toggle()));
    }
    EventHandler.on(window, 'resize', () => debounce(this.onResize, DEBOUNCE_TIMER));
  }

  destroyEvents() {
    const triggers = SelectorEngine.findAll(`[data-target="${this.meta.id}"]`);
    if (triggers.length === 1) {
      EventHandler.off(this.element, 'click', () => this.toggle());
    } else {
      triggers.forEach((trigger) => EventHandler.off(trigger as HTMLElement, 'click', () => this.toggle()));
    }
    EventHandler.off(window, 'resize', () => this.onResize());
  }

  onDestroy() {
    this.destroyEvents();
  }

  init() {
    this.updateTriggerElementHandler();
    this.updateCollapsibleElementHandler();
    this.initEvents();
  }
}

enableToggleAutoloader(Collapse);

export default Collapse;
