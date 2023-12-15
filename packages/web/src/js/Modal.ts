import { warning } from '@lmc-eu/spirit-common/utilities';
import BaseComponent from './BaseComponent';
import EventHandler from './dom/EventHandler';
import SelectorEngine from './dom/SelectorEngine';
import { enableToggleTrigger, ScrollControl, SpiritConfig } from './utils';

const NAME = 'modal';

const MODAL_TOGGLE_SELECTOR = '[data-spirit-toggle="modal"]';

class Modal extends BaseComponent {
  isShown: boolean;
  isTouchDevice: boolean;
  scrollControl: ScrollControl;

  static get NAME() {
    return NAME;
  }

  constructor(element: SpiritElement, config?: SpiritConfig) {
    super(element, config);

    this.isShown = false;
    this.isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    this.scrollControl = new ScrollControl(element as HTMLElement);
  }

  // Using `unknown` - Object is possibly 'null'.
  // Using `Element | Window` - Property 'hasAttribute' does not exist on type 'EventTarget'.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick(event: Event & { target: any }) {
    if (event.target === this.element || event.target.dataset.spiritDismiss) {
      event.preventDefault();
      event.stopPropagation();
      if (
        !event.target.dataset.spiritCloseOnBackdropClick ||
        event.target.dataset.spiritCloseOnBackdropClick === 'true'
      ) {
        this.hide(event);
      }
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
    if (this.isTouchDevice) {
      EventHandler.on(window, 'touchstart', (event: Event & { target: Window }) => this.onClick(event));
    } else {
      EventHandler.on(window, 'click', (event: Event & { target: Window }) => this.onClick(event));
    }
  }

  removeEventListeners() {
    EventHandler.off(this.element, 'close', (event: KeyboardEvent) => this.onDialogClose(event));
    if (this.isTouchDevice) {
      EventHandler.off(window, 'touchstart', (event: Event & { target: Window }) => this.onClick(event));
    } else {
      EventHandler.off(window, 'click', (event: Event & { target: Window }) => this.onClick(event));
    }
  }

  show() {
    if (this.isShown) {
      return;
    }

    const toggleEl = SelectorEngine.findOne(MODAL_TOGGLE_SELECTOR, this.element);
    toggleEl?.setAttribute('aria-expanded', 'true');
    this.element?.showModal();

    this.addEventListeners();
    this.isShown = true;

    this.scrollControl.disableScroll();
  }

  // Using `unknown` - Object is possibly 'null'.
  // Using `Element | Window` - Property 'hasAttribute' does not exist on type 'EventTarget'.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  hide(event: Event & { target: any }) {
    let target;
    // hiding by resizing
    if (!event?.target?.dataset) {
      target = this.element;
      // hiding by clicking
    } else if (event.target.dataset.spiritTarget) {
      target = SelectorEngine.findOne(event.target.dataset.spiritTarget);
      // hiding by keyboard
    } else {
      target = event.target;
    }

    const toggleEl = SelectorEngine.findOne(MODAL_TOGGLE_SELECTOR, this.element);

    if (typeof target.close === 'function') {
      target.close();
    }
    toggleEl?.setAttribute('aria-expanded', 'false');

    this.removeEventListeners();
    this.isShown = false;

    this.scrollControl.enableScroll();
  }

  toggle(
    relatedTarget: HTMLElement | null,
    event: Event & { target: HTMLOrSVGElement; currentTarget: HTMLOrSVGElement },
  ) {
    if (!relatedTarget) {
      warning(
        false,
        '👻 Boo…! Target modal pane does not exist. Maybe you forgot to prefix the "data-spirit-target" selector with "#"? ',
      );

      return;
    }

    this.isShown ? this.hide(event) : this.show();
  }
}

enableToggleTrigger(Modal);

export default Modal;
