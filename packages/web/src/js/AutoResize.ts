import BaseComponent from './BaseComponent';
import { EventHandler, SelectorEngine } from './dom';
import { enableToggleAutoloader } from './utils';

const NAME = 'autoResize';
const RESIZE_EVENT = 'resize';
const MAX_HEIGHT = 400;

class AutoResize extends BaseComponent {
  input: HTMLTextAreaElement;

  static get NAME() {
    return NAME;
  }

  static get DATA_KEY() {
    return `${this.NAME}`;
  }

  constructor(element: HTMLElement) {
    super(element);
    this.input = SelectorEngine.findOne('textarea', this.element) as HTMLTextAreaElement;

    this.init();
  }

  addEventListeners() {
    EventHandler.on(this.input, 'input', this.adjustHeight);
    EventHandler.on(window, RESIZE_EVENT, this.adjustHeight);
  }

  adjustHeight = () => {
    const borderTopWidth = parseFloat(getComputedStyle(this.input).getPropertyValue('border-top-width')) || 0;
    const borderBottomWidth = parseFloat(getComputedStyle(this.input).getPropertyValue('border-bottom-width')) || 0;
    const totalBorderWidth = borderTopWidth + borderBottomWidth;

    this.input.style.height = 'auto';
    this.input.style.overflow = 'auto';

    const totalHeight = this.input.scrollHeight + totalBorderWidth;

    this.input.style.height = `${totalHeight < MAX_HEIGHT ? totalHeight : MAX_HEIGHT}px`;
    this.input.style.overflow = totalHeight < MAX_HEIGHT ? 'hidden' : 'auto';
  };

  init() {
    this.addEventListeners();
    this.adjustHeight();
  }
}

enableToggleAutoloader(AutoResize);

export default AutoResize;
