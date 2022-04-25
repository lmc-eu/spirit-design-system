import SelectorEngine from './dom/SelectorEngine';
import EventHandler from './dom/EventHandler';
import BaseComponent from './BaseComponent';
import { getElement } from './utils/index';

const PASSWORD_TOGGLE_SELECTOR = '[data-toggle="password"]';
const PASSWORD_ARIA_PRESSED = 'aria-pressed';
const PASSWORD_ARIA_LABEL = 'aria-label';
const PASSWORD_FIELD_ELEMENT = 'input';

class Password extends BaseComponent {
  isShown: boolean;

  constructor(element: HTMLElement) {
    super(element);

    this.isShown = false;
  }

  show(target: HTMLElement) {
    target.setAttribute(PASSWORD_ARIA_PRESSED, 'true');
    target.setAttribute(PASSWORD_ARIA_LABEL, 'Hide password');
    SelectorEngine.findOne(PASSWORD_FIELD_ELEMENT, target.parentElement as HTMLElement).setAttribute('type', 'text');

    this.isShown = true;
  }

  hide(target: HTMLElement) {
    target.setAttribute(PASSWORD_ARIA_PRESSED, 'false');
    target.setAttribute(PASSWORD_ARIA_LABEL, 'Show password');
    SelectorEngine.findOne(PASSWORD_FIELD_ELEMENT, target.parentElement as HTMLElement).setAttribute(
      'type',
      'password',
    );

    this.isShown = false;
  }

  toggle(relatedTarget: HTMLElement) {
    this.isShown ? this.hide(relatedTarget) : this.show(relatedTarget);
  }
}

function handlePasswordClick() {
  const target = getElement(this);

  if (target) {
    const password = new Password(target);
    password.toggle(target);
  }
}

EventHandler.on(window, 'DOMContentLoaded', () => {
  SelectorEngine.findAll(PASSWORD_TOGGLE_SELECTOR).forEach((toggleEl) => {
    EventHandler.on(toggleEl, 'click', handlePasswordClick);
  });
});

export default Password;
