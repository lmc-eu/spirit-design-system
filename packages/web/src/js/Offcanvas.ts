import { warning } from '@lmc-eu/spirit-common/utilities';
import { breakpoints } from '@lmc-eu/spirit-design-tokens';
import BaseComponent from './BaseComponent';
import EventHandler from './dom/EventHandler';
import { ScrollControl, SpiritConfig, enableDismissTrigger, enableToggleTrigger } from './utils';

const NAME = 'offcanvas';
const DATA_KEY = 'offcanvas';
const EVENT_KEY = `.${DATA_KEY}`;

const EVENT_SHOW = `show${EVENT_KEY}`;
const EVENT_SHOWN = `shown${EVENT_KEY}`;
const EVENT_HIDE = `hide${EVENT_KEY}`;
const EVENT_HIDDEN = `hidden${EVENT_KEY}`;

const OFFCANVAS_BREAKPOINT = parseInt(breakpoints.desktop, 10);
const OPEN_CLASSNAME = 'is-open';

const VARIABLE_BREAKPOINT_DESKTOP = '--spirit-breakpoint-desktop';

const Default = {
  breakpointDesktop: OFFCANVAS_BREAKPOINT,
};

const DefaultType = {
  breakpointDesktop: 'number',
};

class Offcanvas extends BaseComponent {
  breakpoint: number;
  isShown: boolean;
  scrollControl: ScrollControl;

  static get Default() {
    return Default;
  }

  static get DefaultType() {
    return DefaultType;
  }

  static get NAME() {
    return NAME;
  }

  constructor(element: SpiritElement, config?: SpiritConfig) {
    const target = element;
    super(target, config);

    this.isShown = false;
    this.scrollControl = new ScrollControl(element);
    this.breakpoint = this.getBreakpoint();
  }

  getBreakpoint() {
    return (
      parseInt(getComputedStyle(document.documentElement).getPropertyValue(VARIABLE_BREAKPOINT_DESKTOP), 10) ||
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore Object is of type 'unknown'.
      this.config?.breakpointDesktop
    );
  }

  // Using `unknown` - Object is possibly 'null'.
  // Using `Element | Window` - Property 'hasAttribute' does not exist on type 'EventTarget'.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick(event: Event & { target: any }) {
    if (event.target === this.element || event.target.dataset.spiritDismiss) {
      event.preventDefault();
      event.stopPropagation();
      this.hide();
    }
  }

  onWindowResize(event: Event & { target: Window }) {
    if (event.target.innerWidth >= this.breakpoint) {
      this.hide();
    }
  }

  onDialogClose(event: KeyboardEvent) {
    // Do nothing if the event was already processed.
    if (event.defaultPrevented) {
      return;
    }

    this.hide();

    // Cancel the default action to avoid it being handled twice.
    event.preventDefault();
  }

  addEventListeners() {
    EventHandler.on(this.element, 'close', (event: KeyboardEvent) => this.onDialogClose(event));
    EventHandler.on(window, 'resize', (event: Event & { target: Window }) => this.onWindowResize(event));
    EventHandler.on(window, 'click', (event: Event & { target: Window }) => this.onClick(event));
  }

  removeEventListeners() {
    EventHandler.off(this.element, 'close', (event: KeyboardEvent) => this.onDialogClose(event));
    EventHandler.off(window, 'resize', (event: Event & { target: Window }) => this.onWindowResize(event));
    EventHandler.off(window, 'click', (event: Event & { target: Window }) => this.onClick(event));
  }

  show(relatedTarget: HTMLElement) {
    if (this.isShown) {
      return;
    }

    const showEvent = EventHandler.trigger(this.element, EVENT_SHOW, { relatedTarget });

    if (showEvent?.defaultPrevented) {
      return;
    }

    this.element.classList.add(OPEN_CLASSNAME);
    this.element.showModal();
    relatedTarget.setAttribute('aria-expanded', 'true');
    this.element.setAttribute('aria-modal', 'true');
    this.element.setAttribute('role', 'dialog');

    this.addEventListeners();
    this.isShown = true;

    EventHandler.trigger(this.element, EVENT_SHOWN, { relatedTarget });

    this.scrollControl.disableScroll();
  }

  hide() {
    if (!this.isShown) {
      return;
    }

    const hideEvent = EventHandler.trigger(this.element, EVENT_HIDE);

    if (hideEvent?.defaultPrevented) {
      return;
    }

    this.element.classList.remove(OPEN_CLASSNAME);
    this.element.close();
    this.element.removeAttribute('aria-modal');
    this.element.removeAttribute('role');

    this.removeEventListeners();
    this.isShown = false;

    EventHandler.trigger(this.element, EVENT_HIDDEN);

    this.scrollControl.enableScroll();
  }

  toggle(targetElement: HTMLElement | null) {
    if (!targetElement) {
      warning(
        false,
        '👻 Boo…! Target dialog does not exist. Maybe you forgot to prefix the "data-spirit-target" selector with "#"? ',
      );

      return;
    }

    this.isShown ? this.hide() : this.show(targetElement);
  }
}

enableToggleTrigger(Offcanvas);
enableDismissTrigger(Offcanvas, 'hide');

export default Offcanvas;
