import { SelectorEngine } from '../dom';
import { executeAfterTransition } from './Transitions';

const DIALOG_OPEN_SELECTOR = 'dialog[open]';
const SCROLLING_DISABLED_CLASSNAME = 'is-scrolling-disabled';

class ScrollControl {
  target: HTMLElement;
  element: HTMLElement;
  selector: string;
  offsetY: number;

  constructor(target: HTMLElement, element?: HTMLElement, selector?: string) {
    this.target = target;
    this.element = element || document.body;
    this.selector = selector || DIALOG_OPEN_SELECTOR;
    this.offsetY = 0;
  }

  disableScroll() {
    // Prevent re-setting values when stacked dialog is opened
    if (this.element.classList.contains(SCROLLING_DISABLED_CLASSNAME)) {
      return;
    }

    // Selects the current value for calculation
    const clientOffset = this.element.tagName === 'BODY' ? window.innerWidth : this.element.offsetWidth;
    // Browser scrollbar width, may be 0 on some devices, but solves offset when is not 0.
    const scrollBarWidth = clientOffset - this.element.clientWidth;
    // Save Y offset for later purpose
    this.offsetY = window.scrollY;
    // Fixing page offset causing scrollbar on some devices
    this.element.style.paddingRight = `${scrollBarWidth}px`;
    // Fixing position
    this.element.style.top = `-${this.offsetY}px`;
    // Add body class
    this.element.classList.add(SCROLLING_DISABLED_CLASSNAME);
  }

  enableScroll() {
    const dialogs = SelectorEngine.findAll(this.selector);

    if (this.target && dialogs.length === 0) {
      executeAfterTransition(this.target, () => {
        // Reset style values
        this.element.style.paddingRight = '';
        this.element.style.top = '';
        // Remove body class
        this.element.classList.remove(SCROLLING_DISABLED_CLASSNAME);
        // Scroll after close to saved Y offset position
        window.scrollTo(0, this.offsetY);
      });
    }
  }
}

export default ScrollControl;
