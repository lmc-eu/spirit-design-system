import BaseComponent from './BaseComponent';
import EventHandler from './dom/EventHandler';
import SelectorEngine from './dom/SelectorEngine';
import { getElementFromSelector, reflow } from './utils';

const MODAL_TOGGLE_SELECTOR = '[data-toggle="modal"]';
const MODAL_DISMISS_ATTRIBUTE = 'data-dismiss';
const BACKDROP_TAG_NAME = 'div';
const BACKDROP_CLASSNAME = 'Modal__backdrop';

class Modal extends BaseComponent {
  isShown: boolean;
  backdrop: HTMLElement;

  constructor(element: HTMLElement) {
    super(element);

    this.isShown = false;
    this.backdrop = Modal.initBackdrop(element);
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
    if (event.target.hasAttribute(MODAL_DISMISS_ATTRIBUTE) || event.target.classList.contains(BACKDROP_CLASSNAME)) {
      event.preventDefault();
      event.stopPropagation();
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
    EventHandler.on(window, 'click', (event: Event & { target: Window }) => this.onClick(event));
  }

  removeEventListeners() {
    EventHandler.off(document, 'keydown', (event: KeyboardEvent) => this.onKeyPress(event));
    EventHandler.off(window, 'click', (event: Event & { target: Window }) => this.onClick(event));
  }

  show(event: Event & { target: HTMLOrSVGElement; currentTarget: HTMLOrSVGElement }) {
    if (this.isShown) {
      return;
    }

    const target = SelectorEngine.findOne(event.currentTarget.dataset.target as string);
    const modalEl = target.parentElement.parentElement;
    const toggleEl = SelectorEngine.findOne(MODAL_TOGGLE_SELECTOR, modalEl);
    target.showModal();
    toggleEl.setAttribute('aria-expanded', 'true');

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

    const modalEl = target.parentElement.parentElement;
    const toggleEl = SelectorEngine.findOne(MODAL_TOGGLE_SELECTOR, modalEl);
    target.close();
    toggleEl.setAttribute('aria-expanded', 'false');

    this.removeEventListeners();
    this.isShown = false;
  }

  toggle(
    relatedTarget: HTMLElement | null,
    event: Event & { target: HTMLOrSVGElement; currentTarget: HTMLOrSVGElement },
  ) {
    if (!relatedTarget) {
      // eslint-disable-next-line no-console
      console.warn(
        '👻 Boo…! Target modal pane does not exist. Maybe you forgot to prefix the "data-target" selector with "#"? ',
      );

      return;
    }

    this.isShown ? this.hide(event) : this.show(event);
  }
}

function handleModalClick(event: Event) {
  const target = getElementFromSelector(this);
  if (target) {
    const modal = new Modal(target);
    modal.toggle(target, event as Event & { target: HTMLOrSVGElement; currentTarget: HTMLOrSVGElement });
  }
}

EventHandler.on(window, 'DOMContentLoaded', () => {
  SelectorEngine.findAll(MODAL_TOGGLE_SELECTOR).forEach((toggleEl) => {
    EventHandler.on(toggleEl, 'click', handleModalClick);
  });
});

export default Modal;
