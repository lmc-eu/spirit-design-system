import BaseComponent from './BaseComponent';
import EventHandler from './dom/EventHandler';
import { enableToggleTrigger, enableDismissTrigger } from './utils/ComponentFunctions';

const NAME = 'offcanvas';
const DATA_KEY = 'offcanvas';
const EVENT_KEY = `.${DATA_KEY}`;

const EVENT_SHOW = `show${EVENT_KEY}`;
const EVENT_SHOWN = `shown${EVENT_KEY}`;
const EVENT_HIDE = `hide${EVENT_KEY}`;
const EVENT_HIDDEN = `hidden${EVENT_KEY}`;

const HEADER_BREAKPOINT = 1280;
const OPEN_CLASSNAME = 'is-open';

class Offcanvas extends BaseComponent {
  isShown: boolean;

  static get NAME() {
    return NAME;
  }

  constructor(element: HTMLElement) {
    const target = element;
    super(target);

    this.isShown = false;
  }

  // Using `unknown` - Object is possibly 'null'.
  // Using `Element | Window` - Property 'hasAttribute' does not exist on type 'EventTarget'.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick(event: Event & { target: any }) {
    if (event.target === this.element || event.target.dataset.dismiss) {
      event.preventDefault();
      event.stopPropagation();
      this.hide();
    }
  }

  onWindowResize(event: Event & { target: Window }) {
    if (event.target.innerWidth >= HEADER_BREAKPOINT) {
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
  }

  hide() {
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
  }

  toggle(targetElement: HTMLElement | null) {
    if (!targetElement) {
      // eslint-disable-next-line no-console
      console.warn(
        '👻 Boo…! Target header pane does not exist. Maybe you forgot to prefix the "data-target" selector with "#"? ',
      );

      return;
    }

    this.isShown ? this.hide() : this.show(targetElement);
  }
}

enableToggleTrigger(Offcanvas);
enableDismissTrigger(Offcanvas, 'hide');

export default Offcanvas;
