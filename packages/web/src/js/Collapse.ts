import BaseComponent from './BaseComponent';
import { instanceAutoloader } from './utils/ComponentFunctions';
import selectorEngine from './dom/SelectorEngine';
import EventHandler from './dom/EventHandler';

const NAME = 'collapse';
const NAME_ARIA_EXPANDED = 'aria-expanded';
const NAME_ARIA_CONTROLS = 'aria-controls';
const NAME_DATA_TARGET = 'data-target';
const CLASSNAME_EXPANDED = 'is-expanded';
const CLASSNAME_COLLAPSED = 'is-collapsed';

enum breakpointKeys {
  default = 'default',
  mobile = 'mobile',
  tablet = 'tablet',
  desktop = 'desktop',
}
type breakpointType = keyof typeof breakpointKeys;

interface CollapseMeta {
  id: string | 'unknown';
  hideOnCollapse: boolean;
  breakpoint: breakpointType;
}
interface CollapseState {
  collapsed: boolean;
  width: number;
  triggered: boolean;
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
      breakpoint: (this.target?.dataset?.breakpoint as breakpointType) || breakpointKeys.default,
    };
    this.state = {
      collapsed: !!(
        this.element.getAttribute(NAME_ARIA_EXPANDED) || this.element.classList.contains(CLASSNAME_EXPANDED)
      ),
      width: window.innerWidth,
      triggered: false,
    };

    this.onInit();
  }

  static get NAME() {
    return NAME;
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

  setShow() {
    this.updateTriggerElementHandler(true);
    this.updateCollapsibleElementHandler(true);
  }

  setHide() {
    this.updateTriggerElementHandler(false);
    this.updateCollapsibleElementHandler(false);
  }

  onToggle() {
    if (this.state.collapsed) {
      this.setHide();
    } else {
      this.setShow();
    }
    this.state.triggered = true;
  }

  initEvents() {
    const triggers = selectorEngine.findAll(`[${NAME_DATA_TARGET}="${this.meta.id}"]`);
    if (triggers.length === 1) {
      EventHandler.on(this.element, 'click', () => this.onToggle());
    } else {
      triggers.forEach((trigger) => EventHandler.on(trigger as HTMLElement, 'click', () => this.onToggle()));
    }
    EventHandler.on(window, 'resize', () => this.onResize());
  }

  destroyEvents() {
    const triggers = selectorEngine.findAll(`[data-target="${this.meta.id}"]`);
    if (triggers.length === 1) {
      EventHandler.off(this.element, 'click', () => this.onToggle());
    } else {
      triggers.forEach((trigger) => EventHandler.off(trigger as HTMLElement, 'click', () => this.onToggle()));
    }
    EventHandler.off(window, 'resize', () => this.onResize());
  }

  onDestroy() {
    this.destroyEvents();
  }

  onInit() {
    this.updateTriggerElementHandler();
    this.updateCollapsibleElementHandler();
    this.initEvents();
  }
}

instanceAutoloader('toggle', Collapse);

export default Collapse;
