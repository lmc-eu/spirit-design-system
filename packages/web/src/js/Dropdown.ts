import { computePosition, flip, shift, offset, autoUpdate } from '@floating-ui/dom';
import BaseComponent from './BaseComponent';
import { enableToggleTrigger } from './utils/ComponentFunctions';
import EventHandler from './dom/EventHandler';
import SelectorEngine from './dom/SelectorEngine';

interface DropdownStateProps {
  open: boolean;
}

interface DropdownOptionsProps {
  placement: 'top-start' | 'top-end' | 'right-start' | 'right-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end';
  offset: number;
  padding: number;
  autoClose: boolean;
}

type autoUpdateOptionsType = {
  ancestorScroll?: boolean,
  ancestorResize?: boolean,
  elementResize?: boolean,
  animationFrame?: boolean,
}

const NAME = 'dropdown';
const DATA_KEY = `${NAME}`;
const EVENT_KEY = `.${DATA_KEY}`;
const EVENT_HIDE = `hide${EVENT_KEY}`;
const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
const EVENT_SHOW = `show${EVENT_KEY}`;
const EVENT_SHOWN = `shown${EVENT_KEY}`;

const clickOutsideElement = (target: Element, event: Event) => !event.composedPath().includes(target);

class Dropdown extends BaseComponent {
  target: HTMLElement | null | undefined;
  anchor: HTMLElement | null | undefined;
  state: DropdownStateProps;
  options: DropdownOptionsProps;
  autoUpdateOptions: autoUpdateOptionsType;

  constructor(element: SpiritElement) {
    super(element);
    this.target = this.findTargetElement();
    this.anchor = this.findAnchorElement();
    this.state = {
      open: false,
    };
    this.options = {
      placement: 'bottom-start',
      offset: 0,
      padding: 0,
      autoClose: true,
    };
    this.autoUpdateOptions = {
      ancestorScroll: true,
      ancestorResize: true,
      elementResize: true,
      animationFrame: false,
    };
  }

  static get NAME() {
    return NAME;
  }

  getOptions() {
    const options = { ...this.options };
    const dataset = this.element?.dataset;
    const placement = dataset?.placement;
    const offset = dataset?.offset;
    const padding = dataset?.padding;
    const autoClose = dataset?.autoclose;
    if (placement) options.placement = placement as DropdownOptionsProps['placement'];
    if (offset) options.offset = Number(offset);
    if (padding) options.padding = Number(padding);
    if (autoClose) options.autoClose = Boolean(!autoClose);

    return options;
  }

  findAnchorElement() {
    let anchor = this.element;
    const reference = this.element.dataset.reference;
    if ((reference && reference === 'parent') && (this.element.parentElement && this.element.parentElement.classList.contains('dropdown'))) {
      anchor = this.element.parentElement;
    }

    return anchor;
  }

  findTargetElement() {
    let target = null;
    if (this.element.dataset.target) {
      target = SelectorEngine.findOne(`#${this.element.dataset.target}`);
    }

    return target;
  }

  updateTriggerElement(open: boolean = this.state.open) {
    this.element.classList.toggle('is-expanded', open);
    this.element.setAttribute('aria-expanded', open);
  }

  updateTargetElement(open: boolean = this.state.open) {
    this.target?.classList.toggle('is-open', open);
  }

  alignTargetElement() {
    const options = this.getOptions();
    const placement = options.placement;
    const middleware = [
      offset(options.offset),
      flip(),
      shift({
        padding: options.padding,
      }),
    ];
    if (this.anchor && this.target) {
      computePosition(
        this.anchor,
        this.target,
        { placement, middleware },
      ).then(({x, y}) => {
        this.target && Object.assign(this.target.style, {
          left: `${x}px`,
          top: `${y}px`,
        });
      });
    }
  }

  cleanUp() {
    if (this.anchor && this.target) {
      autoUpdate(
        this.anchor,
        this.target,
        this.alignTargetElement.bind(this),
        this.autoUpdateOptions,
      );
    }
  }

  createAutoCloseEvent() {
    const closeHandler = (event: Event) => {
      const shouldClose = clickOutsideElement(this.target as HTMLElement, event);
      if (event.target && shouldClose) {
        this.hide();
        document.removeEventListener('click', closeHandler);
      }
    };
    document.addEventListener('click', closeHandler);
  }

  show() {
    this.state.open = true;
    EventHandler.trigger(this.target as HTMLElement, EVENT_SHOW);
    this.updateTriggerElement();
    this.updateTargetElement();
    this.cleanUp();
    setTimeout(() => {
      EventHandler.trigger(this.target as HTMLElement, EVENT_SHOWN);
      this.getOptions().autoClose && this.createAutoCloseEvent();
    }, 0);
  }

  hide() {
    this.state.open = false;
    EventHandler.trigger(this.target as HTMLElement, EVENT_HIDE);
    this.updateTriggerElement();
    this.updateTargetElement();
    setTimeout(() => EventHandler.trigger(this.target as HTMLElement, EVENT_HIDDEN), 0);
  }

  toggle() {
    if (this.state.open) {
      this.hide();
    } else {
      this.show();
    }
  }
}

enableToggleTrigger(Dropdown);

export default Dropdown;
