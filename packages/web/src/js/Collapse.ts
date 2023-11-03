import BaseComponent from './BaseComponent';
import {
  ARIA_CONTROLS_ATTRIBUTE,
  ARIA_EXPANDED_ATTRIBUTE,
  CLASSNAME_OPEN,
  CLASSNAME_TRANSITION,
  NAME_DATA_TARGET,
  NAME_DATA_TOGGLE,
} from './constants';
import EventHandler from './dom/EventHandler';
import SelectorEngine from './dom/SelectorEngine';
import { SpiritConfig, enableToggleAutoloader, executeAfterTransition } from './utils';

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
  parent: string | undefined;
  triggerParent: HTMLElement | null | undefined;
}
interface CollapseState {
  open: boolean;
  init: boolean;
}

class Collapse extends BaseComponent {
  target: HTMLElement | null | undefined;
  meta: CollapseMeta;
  state: CollapseState;

  constructor(element: SpiritElement, config?: SpiritConfig) {
    super(element, config);
    this.target = this.element.dataset.spiritTarget
      ? SelectorEngine.findOne(`#${this.element.dataset.spiritTarget}`)
      : null;
    this.meta = {
      id: this.element.dataset.spiritTarget,
      hideOnCollapse: !!(this.element.dataset.spiritMore || this.element.dataset.spiritMore === ''),
      parent: this.target?.dataset.spiritParent,
      triggerParent: this.element && this.element.parentElement,
    };
    this.state = {
      open:
        this.element.hasAttribute(ARIA_EXPANDED_ATTRIBUTE) &&
        this.element.getAttribute(ARIA_EXPANDED_ATTRIBUTE) === 'true',
      init: false,
    };

    this.init();
  }

  static get NAME() {
    return NAME;
  }

  static get DATA_KEY() {
    return `${this.NAME}`;
  }

  hideParentSiblings(trigger: HTMLElement) {
    if (this.meta.parent) {
      const parentElement = SelectorEngine.findOne(this.meta.parent);
      const children = parentElement?.children;

      if (!children) {
        return;
      }

      for (const item of children) {
        const itemTrigger = SelectorEngine.findOne(`[${NAME_DATA_TOGGLE}="${NAME}"]`, item);
        const instance = Collapse.getInstance(itemTrigger);

        if (instance?.state?.open && itemTrigger !== trigger) {
          instance?.hide();
        }
      }
    }
  }

  appendNodeToParent() {
    if (this.state.open) {
      const contentEl = this.target?.children[0];
      const innerHtml = contentEl ? contentEl?.innerHTML : this.target?.innerHTML;
      const originalHtml = this.meta.triggerParent?.innerHTML;
      if (this.meta.triggerParent) {
        this.meta.triggerParent.innerHTML = `${originalHtml}${innerHtml}`;
      }

      this.target?.remove();
    }
  }

  adjustCollapsibleChildrenHeight(zeroHeight?: boolean) {
    if (this.target) {
      const content = this.target.children[0];
      const bounds = content.getBoundingClientRect();
      this.target.style.height = `${zeroHeight ? '0' : bounds.height}px`;
    }
  }

  adjustCollapsibleElementHeight(open: boolean = this.state.open) {
    this.adjustCollapsibleChildrenHeight(!open);
    if (this.target) {
      EventHandler.trigger(this.target, open ? EVENT_SHOWN : EVENT_HIDDEN);
    }
  }

  updateTriggerElement(open: boolean = this.state.open) {
    const triggers = SelectorEngine.findAll(`[${NAME_DATA_TARGET}="${this.meta.id}"]`);
    const updateElement = (element: Element | HTMLElement) => {
      element.setAttribute(ARIA_CONTROLS_ATTRIBUTE, this.meta.id);
      element.setAttribute(ARIA_EXPANDED_ATTRIBUTE, String(open));
      if (this.meta.hideOnCollapse && open) {
        element.remove();
        this.appendNodeToParent();
        this.onDestroy();
      }
    };

    this.state.open = open;

    if (triggers.length === 1) {
      updateElement(this.element);
    } else {
      triggers.map((trigger) => updateElement(trigger));
    }
  }

  updateCollapsibleElement(open: boolean = this.state.open) {
    if (this.target) {
      if (!open) {
        this.adjustCollapsibleChildrenHeight();
      }
      this.adjustCollapsibleElementHeight(open);
      if (this.state.init) {
        this.target?.classList.add(CLASSNAME_TRANSITION);
      }
      executeAfterTransition(this.target, () => {
        this.target?.classList.remove(CLASSNAME_TRANSITION);
        this.target?.classList.toggle(CLASSNAME_OPEN, open);
        if (open) {
          this.target?.setAttribute('style', 'height: 100%');
        } else {
          this.target?.style.removeProperty('height');
        }
      });
    }
  }

  show() {
    this.hideParentSiblings(this.element);
    EventHandler.trigger(this.target as HTMLElement, EVENT_SHOW);
    this.updateTriggerElement(true);
    this.updateCollapsibleElement(true);

    if (this.target) {
      executeAfterTransition(this.target, () => {
        EventHandler.trigger(this.target as HTMLElement, EVENT_SHOWN);
      });
    }
  }

  hide() {
    EventHandler.trigger(this.target as HTMLElement, EVENT_HIDE);
    this.updateTriggerElement(false);
    this.updateCollapsibleElement(false);

    if (this.target) {
      executeAfterTransition(this.target, () => {
        EventHandler.trigger(this.target as HTMLElement, EVENT_HIDDEN);
      });
    }
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
      triggers.forEach((trigger) => EventHandler.on(trigger, 'click', () => this.toggle()));
    }
  }

  destroyEvents() {
    const triggers = SelectorEngine.findAll(`[${NAME_DATA_TARGET}="${this.meta.id}"]`);
    if (triggers.length === 1) {
      EventHandler.off(this.element, 'click', () => this.toggle());
    } else {
      triggers.forEach((trigger) => EventHandler.off(trigger, 'click', () => this.toggle()));
    }
  }

  onDestroy() {
    this.destroyEvents();
  }

  init() {
    this.updateTriggerElement();
    this.updateCollapsibleElement();
    this.initEvents();
    this.state.init = true;
  }
}

enableToggleAutoloader(Collapse);

export default Collapse;
