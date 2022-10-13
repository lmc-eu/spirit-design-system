import BaseComponent from './BaseComponent';
import { enableToggleAutoloader } from './utils/ComponentFunctions';
import selectorEngine from './dom/SelectorEngine';
import EventHandler from './dom/EventHandler';
import {
  NAME_ARIA_EXPANDED,
  NAME_ARIA_CONTROLS,
  NAME_DATA_TARGET,
  CLASSNAME_EXPANDED,
  CLASSNAME_COLLAPSED,
} from './constants';

const NAME = 'collapse';
const DATA_KEY = 'collapse';
const EVENT_KEY = `.${DATA_KEY}`;
const EVENT_HIDE = `hide${EVENT_KEY}`;
const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
const EVENT_SHOW = `show${EVENT_KEY}`;
const EVENT_SHOWN = `shown${EVENT_KEY}`;

interface CollapseMeta {
  id: string | 'unknown';
  hideOnCollapse: boolean;
}
interface CollapseState {
  collapsed: boolean;
  width: number;
}

class Collapse extends BaseComponent {
  target: HTMLElement | null | undefined;
  parent: HTMLElement | null | undefined;
  meta: CollapseMeta;
  state: CollapseState;

  constructor(element: HTMLElement) {
    super(element);
    this.target = this.element.dataset.target ? selectorEngine.findOne(`#${this.element.dataset.target}`) : null;
    this.parent = this.element && this.element.parentElement;
    this.meta = {
      id: this.element.dataset.target,
      hideOnCollapse: !!(this.element.dataset.more || this.element.dataset.more === ''),
    };
    this.state = {
      collapsed: !!(
        this.element.getAttribute(NAME_ARIA_EXPANDED) || this.element.classList.contains(CLASSNAME_EXPANDED)
      ),
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

  onResize() {
    this.state.width = window.innerWidth;
    this.updateTriggerElementHandler();
    this.updateCollapsibleElementHandler();
  }

  appendNodeToParentHandler() {
    if (this.state.collapsed) {
      const contentEl = this.target?.children[0];
      const innerHtml = contentEl ? contentEl?.innerHTML : this.target?.innerHTML;
      const originalHtml = this.parent?.innerHTML;
      if (this.parent) {
        this.parent.innerHTML = `${originalHtml}${innerHtml}`;
      }
      setTimeout(() => this.target?.remove(), 100);
    }
  }

  adjustCollapsibleElementHeightHandler(collapsed: boolean = this.state.collapsed) {
    if (this.target) {
      const content = this.target.children[0];
      const bounds = content.getBoundingClientRect();
      this.target.style.height = collapsed ? `${bounds.height}px` : '0';
      if (this.target) EventHandler.trigger(this.target, collapsed ? EVENT_SHOWN : EVENT_HIDDEN);
    }
  }

  updateTriggerElementHandler(collapsed: boolean = this.state.collapsed) {
    const triggers = selectorEngine.findAll(`[${NAME_DATA_TARGET}="${this.meta.id}"]`);
    const updateElement = (element: Element | HTMLElement) => {
      element.setAttribute(NAME_ARIA_CONTROLS, this.meta.id);
      element.setAttribute(NAME_ARIA_EXPANDED, String(collapsed));
      element.classList.toggle(CLASSNAME_EXPANDED, collapsed);
      if (this.meta.hideOnCollapse && collapsed) {
        element.remove();
        this.appendNodeToParentHandler();
        this.onDestroy();
      }
    };
    this.state.collapsed = collapsed;
    if (triggers.length === 1) {
      updateElement(this.element);
    } else {
      triggers.forEach((trigger) => updateElement(trigger));
    }
  }

  updateCollapsibleElementHandler(collapsed: boolean = this.state.collapsed) {
    if (this.target) {
      this.target.classList.toggle(CLASSNAME_COLLAPSED, collapsed);
      this.adjustCollapsibleElementHeightHandler(collapsed);
    }
  }

  show() {
    EventHandler.trigger(this.target as HTMLElement, EVENT_SHOW);
    this.updateTriggerElementHandler(true);
    this.updateCollapsibleElementHandler(true);
    EventHandler.trigger(this.target as HTMLElement, EVENT_SHOWN);
  }

  hide() {
    EventHandler.trigger(this.target as HTMLElement, EVENT_HIDE);
    this.updateTriggerElementHandler(false);
    this.updateCollapsibleElementHandler(false);
    EventHandler.trigger(this.target as HTMLElement, EVENT_HIDDEN);
  }

  toggle() {
    if (this.state.collapsed) {
      this.hide();
    } else {
      this.show();
    }
  }

  initEvents() {
    const triggers = selectorEngine.findAll(`[${NAME_DATA_TARGET}="${this.meta.id}"]`);
    if (triggers.length === 1) {
      EventHandler.on(this.element, 'click', () => this.toggle());
    } else {
      triggers.forEach((trigger) => EventHandler.on(trigger as HTMLElement, 'click', () => this.toggle()));
    }
    EventHandler.on(window, 'resize', () => this.onResize());
  }

  destroyEvents() {
    const triggers = selectorEngine.findAll(`[data-target="${this.meta.id}"]`);
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
