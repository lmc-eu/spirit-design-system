import BaseComponent from './BaseComponent';
import { instanceAutoloader } from './utils/ComponentFunctions';
import $ from './dom/SelectorEngine';
import EventHandler from './dom/EventHandler';

const NAME = 'collapse';
const NAME_ARIA_EXPANDED = 'aria-expanded';
const NAME_ARIA_CONTROLS = 'aria-controls';
const NAME_DATA_TARGET = 'data-target';
const CLASSNAME_EXPANDED = 'is-expanded';
const CLASSNAME_COLLAPSED = 'is-collapsed';
const CLASSNAME_HIDDEN = 'is-hidden';
const BREAKPOINT_MOBILE = 0;
const BREAKPOINT_TABLET = 768;
const BREAKPOINT_DESKTOP = 1280;

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
  meta: CollapseMeta;
  state: CollapseState;

  constructor(element: HTMLElement) {
    super(element);
    this.target = this.element.dataset.target ? $.findOne(`#${this.element.dataset.target}`) : null;
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

  isResponsive() {
    const w = this.state.width;
    const mobile = w >= BREAKPOINT_MOBILE && this.meta.breakpoint === breakpointKeys.mobile;
    const tablet = w >= BREAKPOINT_TABLET && this.meta.breakpoint === breakpointKeys.tablet;
    const desktop = w >= BREAKPOINT_DESKTOP && this.meta.breakpoint === breakpointKeys.desktop;

    return {
      mobile,
      tablet,
      desktop,
      anyOf: mobile || tablet || desktop,
    };
  }

  onResize() {
    this.state.width = window.innerWidth;
    this.adjustTriggerElementHandler();
    this.adjustCollapsibleElementHandler();
  }

  adjustCollapsibleElementHeightHandler(collapsed: boolean = this.state.collapsed) {
    if (this.target) {
      const content = this.target.children[0];
      const bounds = content.getBoundingClientRect();
      this.target.style.height = collapsed ? `${bounds.height}px` : '0';
    }
  }

  adjustTriggerElementHandler() {
    if (this.meta.breakpoint !== breakpointKeys.default) {
      if (this.isResponsive().anyOf) {
        this.updateTriggerElementHandler(true);
      } else {
        this.updateTriggerElementHandler(false);
      }
    } else {
      this.updateTriggerElementHandler();
    }
  }

  adjustCollapsibleElementHandler() {
    if (this.meta.breakpoint !== breakpointKeys.default) {
      if (this.isResponsive().anyOf) {
        this.updateCollapsibleElementHandler(true);
      } else {
        this.updateCollapsibleElementHandler(false);
      }
    } else {
      this.updateCollapsibleElementHandler();
    }
  }

  updateTriggerElementHandler(collapsed: boolean = this.state.collapsed) {
    const triggers = $.findAll(`[${NAME_DATA_TARGET}="${this.meta.id}"]`);
    const updateElement = (element: Element | HTMLElement) => {
      element.setAttribute(NAME_ARIA_CONTROLS, this.meta.id);
      element.setAttribute(NAME_ARIA_EXPANDED, String(collapsed));
      element.classList.toggle(CLASSNAME_EXPANDED, collapsed);
      if (this.meta.breakpoint !== breakpointKeys.default) {
        element.classList.toggle(CLASSNAME_HIDDEN, collapsed && this.isResponsive()[this.meta.breakpoint]);
      }
      if (this.meta.hideOnCollapse && collapsed) {
        element.remove();
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
    const triggers = $.findAll(`[${NAME_DATA_TARGET}="${this.meta.id}"]`);
    if (triggers.length === 1) {
      EventHandler.on(this.element, 'click', () => this.onToggle());
    } else {
      triggers.forEach((trigger) => EventHandler.on(trigger as HTMLElement, 'click', () => this.onToggle()));
    }
    EventHandler.on(window, 'resize', () => this.onResize());
  }

  destroyEvents() {
    const triggers = $.findAll(`[data-target="${this.meta.id}"]`);
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
    this.adjustTriggerElementHandler();
    this.adjustCollapsibleElementHandler();
    this.initEvents();
  }
}

instanceAutoloader('toggle', Collapse);

export default Collapse;
