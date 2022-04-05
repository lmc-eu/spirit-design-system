import SelectorEngine from './dom/selector-engine';
import EventHandler from './dom/event-handler';
import BaseComponent from './base-component';
import { getElementFromSelector } from './utils/index';

const HEADER_TOGGLE_SELECTOR = '[data-toggle="header"]';
const HEADER_DISMISS_ATTRIBUTE = 'data-dismiss';
const HEADER_BREAKPOINT = 1280;
const OPEN_CLASSNAME = 'is-open';
const BACKDROP_TAG_NAME = 'div';
const BACKDROP_CLASSNAME = 'Header__backdrop';

class Header extends BaseComponent {
  constructor(selector) {
    super(selector);

    this.isShown = false;
    this.backdrop = Header.initBackdrop(selector);
  }

  static initBackdrop (target) {
    const backdropEl = document.createElement(BACKDROP_TAG_NAME);
    backdropEl.classList.add(BACKDROP_CLASSNAME);

    if (!SelectorEngine.findAll(`[class*="${BACKDROP_CLASSNAME}"]`).length) {
      target.appendChild(backdropEl);
    }

    return backdropEl;
  }

  onClick(event) {
    if (
      event.target.hasAttribute(HEADER_DISMISS_ATTRIBUTE) || event.target.classList.contains(BACKDROP_CLASSNAME)
    ) {
      event.preventDefault()
      event.stopPropagation()
      this.hide(event)
    }
  }

  onWindowResize(event) {
    if (event.target.innerWidth >= HEADER_BREAKPOINT) {
      this.hide(event);
    }
  };

  onKeyPress(event) {
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
  };

  addEventListeners() {
    EventHandler.on(document, 'keydown', (event) => this.onKeyPress(event));
    EventHandler.on(window, 'resize', (event) => this.onWindowResize(event));
    EventHandler.on(window, 'click', (event) => this.onClick(event));
  };

  removeEventListeners() {
    EventHandler.off(document, 'keydown', (event) => this.onKeyPress(event));
    EventHandler.off(window, 'resize', (event) => this.onWindowResize(event));
    EventHandler.off(window, 'click', (event) => this.onClick(event));
  };

  show(event) {
    if (this.isShown) {
      return;
    }

    const target = SelectorEngine.findOne(event.currentTarget.dataset.target);
    const headerEl = target.parentElement;
    const toggleEl = SelectorEngine.findOne(HEADER_TOGGLE_SELECTOR, headerEl);
    target.classList.add(OPEN_CLASSNAME);
    toggleEl.setAttribute('aria-expanded', 'true');

    this.addEventListeners();
    this.isShown = true;
  };

  hide(event) {
    let target;
    // hiding by resizing
    if(!event.target.dataset) {
      target = this.element;
    // hiding by clicking
    } else if(event.target.dataset.target) {
      target = SelectorEngine.findOne(event.target.dataset.target);
    // hiding by keyboard
    } else {
      target = event.target.parentNode;
    }

    const headerEl = target.parentElement;
    const toggleEl = SelectorEngine.findOne(HEADER_TOGGLE_SELECTOR, headerEl);
    target.classList.remove(OPEN_CLASSNAME);
    toggleEl.setAttribute('aria-expanded', 'false');

    this.removeEventListeners();
    this.isShow = false;
  };

  toggle(relatedTarget, event) {
    if (!relatedTarget) {
      // eslint-disable-next-line no-console
      console.warn('👻 Boo…! Target header pane does not exist. Maybe you forgot to prefix the "data-target" selector with "#"? ');

      return;
    }

    this.isShown ? this.hide(event) : this.show(relatedTarget);
  };
};

/**
 * @param event Event
 */
function handleHeaderClick (event) {
  const target = getElementFromSelector(this)
  // with Header instance
  const header = new Header(target);

  header.toggle(event);
}

// When document content is loaded
EventHandler.on(window, 'DOMContentLoaded', () => {
  // Find all toggle elements and for each toggle
  SelectorEngine.findAll(HEADER_TOGGLE_SELECTOR).forEach((toggleEl) => {
    // add click handler
    EventHandler.on(toggleEl, 'click', handleHeaderClick);
  });
});

export default Header;
