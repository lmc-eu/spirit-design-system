import BaseComponent from '../BaseComponent';

const NAME = 'backdrop';

const CLASS_NAME_SHOW = 'is-open';

class Backdrop extends BaseComponent {
  isVisible: boolean;

  constructor(element: SpiritElement) {
    super(element);

    this.isVisible = false;
  }

  static get NAME() {
    return NAME;
  }

  show() {
    if (this.isVisible) {
      return;
    }

    this.element.classList.add(CLASS_NAME_SHOW);

  }

  hide() {
    if (!this.isVisible) {
      return;
    }

    this.element?.classList.remove(CLASS_NAME_SHOW);
  }
}

export default Backdrop;
