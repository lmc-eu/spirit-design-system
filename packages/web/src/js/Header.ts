import BaseComponent from './BaseComponent';
import EventHandler from './dom/EventHandler';
import SelectorEngine from './dom/SelectorEngine';
import { reflow } from './utils';
import { enableToggleTrigger } from './utils/ComponentFunctions';

const NAME = 'header';
const HEADER_TOGGLE_SELECTOR = '[data-toggle="header"]';
const HEADER_DISMISS_ATTRIBUTE = 'data-dismiss';
const HEADER_BREAKPOINT = 1280;
const OPEN_CLASSNAME = 'is-open';
const BACKDROP_TAG_NAME = 'div';
const BACKDROP_CLASSNAME = 'Header__backdrop';

class Header extends BaseComponent {
  isShown: boolean;
  backdrop: HTMLElement;

  static get NAME() {
    return NAME;
  }

  constructor(element: HTMLElement) {
    super(element);

    this.isShown = false;
    this.backdrop = Header.initBackdrop(element);
  }

  static initBackdrop(target: HTMLElement) {
    const backdropEl = document.createElement(BACKDROP_TAG_NAME);
    backdropEl.classList.add(BACKDROP_CLASSNAME);

    if (!SelectorEngine.findAll(`[class*="${BACKDROP_CLASSNAME}"]`, target).length) {
      target.appendChild(backdropEl);
      reflow(backdropEl);
    }

    return backdropEl;
  }

  // Using `unknown` - Object is possibly 'null'.
  // Using `Element | Window` - Property 'hasAttribute' does not exist on type 'EventTarget'.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick(event: Event & { target: any }) {
    if (event.target.hasAttribute(HEADER_DISMISS_ATTRIBUTE) || event.target.classList.contains(BACKDROP_CLASSNAME)) {
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

  onKeyPress(event: KeyboardEvent) {
    // Do nothing if the event was already processed.
    if (event.defaultPrevented) {
      return;
    }

    if (event.key === 'Esc' || event.key === 'Escape') {
      this.hide(event);

      // Cancel the default action to avoid it being handled twice.
      event.preventDefault();
    }

    // @TODO: retain focus when using tab
    // @see: https://github.com/lmc-eu/spirit-design-system/issues/278
  }

  addEventListeners() {
    EventHandler.on(document, 'keydown', (event: KeyboardEvent) => this.onKeyPress(event));
    EventHandler.on(window, 'resize', (event: Event & { target: Window }) => this.onWindowResize(event));
    EventHandler.on(window, 'click', (event: Event & { target: Window }) => this.onClick(event));
  }

  removeEventListeners() {
    EventHandler.off(document, 'keydown', (event: KeyboardEvent) => this.onKeyPress(event));
    EventHandler.off(window, 'resize', (event: Event & { target: Window }) => this.onWindowResize(event));
    EventHandler.off(window, 'click', (event: Event & { target: Window }) => this.onClick(event));
  }

  show(relatedTarget: HTMLElement) {
    if (this.isShown) {
      return;
    }

    this.element.classList.add(OPEN_CLASSNAME);
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
    if (!event.target.dataset) {
      target = this.element;
      // hiding by clicking
    } else if (event.target.dataset.target) {
      target = SelectorEngine.findOne(event.target.dataset.target);
      // hiding by keyboard
    } else {
      target = event.target.parentNode;
    }

    const navEl = this.element || target;
    const headerEl = navEl.parentElement;
    const toggleEl = SelectorEngine.findOne(HEADER_TOGGLE_SELECTOR, headerEl);
    target.classList.remove(OPEN_CLASSNAME);
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
