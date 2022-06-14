import SelectorEngine from './dom/SelectorEngine';
import BaseComponent from './BaseComponent';
import { enableToggleTrigger } from './utils/ComponentFunctions';

const NAME = 'password';
const PASSWORD_ARIA_PRESSED = 'aria-pressed';
const PASSWORD_ARIA_LABEL = 'aria-label';
const PASSWORD_FIELD_ELEMENT = 'input';

class Password extends BaseComponent {
  isShown: boolean;

  static get NAME() {
    return NAME;
  }

  constructor(element: HTMLElement) {
    super(element);

    this.isShown = false;
  }

  show(target: HTMLElement) {
    target.setAttribute(PASSWORD_ARIA_PRESSED, 'true');
    target.setAttribute(PASSWORD_ARIA_LABEL, 'Hide password');
    SelectorEngine.findOne(PASSWORD_FIELD_ELEMENT, target.parentElement)?.setAttribute('type', 'text');

    this.isShown = true;
  }

  hide(target: HTMLElement) {
    target.setAttribute(PASSWORD_ARIA_PRESSED, 'false');
    target.setAttribute(PASSWORD_ARIA_LABEL, 'Show password');
    SelectorEngine.findOne(PASSWORD_FIELD_ELEMENT, target.parentElement)?.setAttribute('type', 'password');

    this.isShown = false;
  }

  toggle(relatedTarget: HTMLElement) {
    this.isShown ? this.hide(relatedTarget) : this.show(relatedTarget);
  }
}

enableToggleTrigger(Password);

export default Password;
