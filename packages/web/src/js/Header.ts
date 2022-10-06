import BaseComponent from './BaseComponent';
import EventHandler from './dom/EventHandler';
import SelectorEngine from './dom/SelectorEngine';
import { enableToggleTrigger } from './utils/ComponentFunctions';

const NAME = 'header';
const HEADER_TOGGLE_SELECTOR = '[data-toggle="header"]';
const HEADER_BREAKPOINT = 1280;
const OPEN_CLASSNAME = 'is-open';

class Header extends BaseComponent {
  isShown: boolean;

  static get NAME() {
    return NAME;
  }

  constructor(element: HTMLElement) {
    super(element);

    this.isShown = false;
  }

  // Using `unknown` - Object is possibly 'null'.
  // Using `Element | Window` - Property 'hasAttribute' does not exist on type 'EventTarget'.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick(event: Event & { target: any }) {
    if (event.target === this.element || event.target.dataset.dismiss) {
      event.preventDefault();
      event.stopPropagation();
      this.hide(event);
    }
  }

  onWindowResize(event: Event & { target: Window }) {
    if (event.target.innerWidth >= HEADER_BREAKPOINT) {
      this.hide(event);
    }
  }

  onDialogClose(event: KeyboardEvent) {
    // Do nothing if the event was already processed.
    if (event.defaultPrevented) {
      return;
    }

    this.hide(event);

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

    this.element.classList.add(OPEN_CLASSNAME);
    this.element.showModal();
    relatedTarget.setAttribute('aria-expanded', 'true');

    this.addEventListeners();
    this.isShown = true;
  }

  // Using `unknown` - Object is possibly 'null'.
  // Using `Element | Window` - Property 'hasAttribute' does not exist on type 'EventTarget'.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  hide(event: Event & { target: any }) {
    let target;
    // hiding by resizing
    if (Object.keys(event.target.dataset).length === 0) {
      target = this.element;
      // hiding by clicking
    } else if (event.target.dataset.target) {
      target = SelectorEngine.findOne(event.target.dataset.target);
      // hiding by dialog close
    } else {
      target = this.element;
    }

    const navEl = this.element || target;
    const headerEl = navEl.parentElement;
    const toggleEl = SelectorEngine.findOne(HEADER_TOGGLE_SELECTOR, headerEl);
    target.classList.remove(OPEN_CLASSNAME);
    target.close();
    toggleEl?.setAttribute('aria-expanded', 'false');

    this.removeEventListeners();
    this.isShown = false;
  }

  toggle(targetElement: HTMLElement | null, event: Event & { target: HTMLElement }) {
    if (!targetElement) {
      // eslint-disable-next-line no-console
      console.warn(
        '👻 Boo…! Target header pane does not exist. Maybe you forgot to prefix the "data-target" selector with "#"? ',
      );

      return;
    }

    this.isShown ? this.hide(event) : this.show(targetElement);
  }
}

enableToggleTrigger(Header);

export default Header;
