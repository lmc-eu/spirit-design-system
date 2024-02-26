import BaseComponent from './BaseComponent';
import EventHandler from './dom/EventHandler';
import SelectorEngine from './dom/SelectorEngine';
import { clickOutsideElement, enableToggleTrigger, SpiritConfig } from './utils';

interface DropdownStateProps {
  open: boolean;
}

interface DropdownOptionsProps {
  autoClose: boolean;
}

const NAME = 'dropdown';
const DATA_KEY = `${NAME}`;
const EVENT_KEY = `.${DATA_KEY}`;
const EVENT_HIDE = `hide${EVENT_KEY}`;
const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
const EVENT_SHOW = `show${EVENT_KEY}`;
const EVENT_SHOWN = `shown${EVENT_KEY}`;
const ARIA_EXPANDED_ATTRIBUTE = 'aria-expanded';
const ARIA_CONTROLS_ATTRIBUTE = 'aria-controls';
const CLASSNAME_DROPDOWN = 'DropdownWrapper';
export const CLASSNAME_EXPANDED = 'is-expanded';
export const CLASSNAME_OPEN = 'is-open';

class Dropdown extends BaseComponent {
  target: HTMLElement | null | undefined;
  reference: HTMLElement | null | undefined;
  state: DropdownStateProps;
  options: DropdownOptionsProps;

  constructor(element: SpiritElement, config?: SpiritConfig) {
    super(element, config);
    this.target = SelectorEngine.findOne(`${this.element.dataset.spiritTarget}`);
    this.reference = this.findReferenceElement();
    this.state = {
      open: false,
    };
    this.options = {
      autoClose: true,
    };
  }

  static get NAME() {
    return NAME;
  }

  getOptions() {
    const options = { ...this.options };
    const dataset = this.element?.dataset;
    const optionsAutoClose = dataset?.spiritAutoclose;

    if (optionsAutoClose) {
      options.autoClose = optionsAutoClose !== 'false';
    }

    return options;
  }

  findReferenceElement() {
    let anchor = this.element;
    const { reference } = this.element.dataset;

    if (reference) {
      if (
        reference === 'parent' &&
        this.element.parentElement &&
        this.element.parentElement.classList.contains(CLASSNAME_DROPDOWN)
      ) {
        anchor = this.element.parentElement;
      } else if (reference.match(/(#)/g)) {
        anchor = SelectorEngine.findOne(reference);
      }
    }

    return anchor;
  }

  updateTriggerElement(open: boolean = this.state.open) {
    this.element.classList.toggle(CLASSNAME_EXPANDED, open);
    this.element.setAttribute(ARIA_EXPANDED_ATTRIBUTE, open);
    this.element.setAttribute(ARIA_CONTROLS_ATTRIBUTE, this.element.dataset.spiritTarget);
  }

  updateTargetElement(open: boolean = this.state.open) {
    this.target?.classList.toggle(CLASSNAME_OPEN, open);
  }

  autoCloseHandler = (event: Event) => {
    const shouldClose = this.target && clickOutsideElement(this.target, event);

    if (event.target && shouldClose) {
      this.hide();
    }
  };

  show() {
    this.state.open = true;
    this.target && EventHandler.trigger(this.target, EVENT_SHOW);
    this.updateTriggerElement();
    this.updateTargetElement();
    setTimeout(() => {
      this.target && EventHandler.trigger(this.target, EVENT_SHOWN);
      if (this.getOptions().autoClose) {
        EventHandler.on(document, 'click', this.autoCloseHandler);
      }
    }, 0);
  }

  hide() {
    this.state.open = false;
    this.target && EventHandler.trigger(this.target, EVENT_HIDE);
    this.updateTriggerElement();
    this.updateTargetElement();
    EventHandler.off(document, 'click', this.autoCloseHandler);
    setTimeout(() => {
      this.target && EventHandler.trigger(this.target, EVENT_HIDDEN);
    }, 0);
  }

  toggle() {
    if (this.state.open) {
      this.hide();
    } else {
      this.show();
    }
  }
}

enableToggleTrigger(Dropdown, 'toggle', 'trigger');

export default Dropdown;
