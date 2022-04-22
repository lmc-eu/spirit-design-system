(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global["spirit-web"] = factory());
})(this, (function () { 'use strict';

    const SelectorEngine = {
        findAll(selector, element = document.documentElement) {
            return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
        },
        findOne(selector, element = document.documentElement) {
            return Element.prototype.querySelector.call(element, selector);
        },
    };

    /* eslint-disable @typescript-eslint/no-explicit-any */
    const addHandler = (element, eventType, handler) => element.addEventListener(eventType, handler);
    const removeHandler = (element, eventType, handler) => element.removeEventListener(eventType, handler);
    const EventHandler = {
        on(element, event, handler) {
            addHandler(element, event, handler);
        },
        off(element, event, handler) {
            removeHandler(element, event, handler);
        },
        trigger(element, event, args) {
            if (typeof event !== 'string' || !element) {
                return null;
            }
            const bubbles = true;
            const evt = new Event(event, { bubbles, cancelable: true });
            // merge custom information in our event
            if (typeof args !== 'undefined') {
                for (const key of Object.keys(args)) {
                    Object.defineProperty(evt, key, {
                        get() {
                            return args[key];
                        },
                    });
                }
            }
            {
                element.dispatchEvent(evt);
            }
            return evt;
        },
    };

    /* eslint-disable @typescript-eslint/no-explicit-any */
    const isElement = (object) => {
        if (!object || typeof object !== 'object') {
            return false;
        }
        return typeof object.nodeType !== 'undefined';
    };
    const getElement = (object) => {
        // it's a node element
        if (isElement(object)) {
            return object;
        }
        if (typeof object === 'string' && object.length > 0) {
            return document.querySelector(object);
        }
        return null;
    };
    const getSelector = (element) => element.getAttribute('data-target');
    const getElementFromSelector = (element) => {
        const selector = getSelector(element);
        return selector ? document.querySelector(selector) : null;
    };

    class BaseComponent {
        constructor(element) {
            this.element = getElement(element);
        }
        static createInstance(element) {
            return new this(element);
        }
    }

    const HEADER_TOGGLE_SELECTOR = '[data-toggle="header"]';
    const HEADER_DISMISS_ATTRIBUTE = 'data-dismiss';
    const HEADER_BREAKPOINT = 1280;
    const OPEN_CLASSNAME = 'is-open';
    const BACKDROP_TAG_NAME = 'div';
    const BACKDROP_CLASSNAME = 'Header__backdrop';
    class Header extends BaseComponent {
        constructor(element) {
            super(element);
            this.isShown = false;
            this.backdrop = Header.initBackdrop(element);
        }
        static initBackdrop(target) {
            const backdropEl = document.createElement(BACKDROP_TAG_NAME);
            backdropEl.classList.add(BACKDROP_CLASSNAME);
            if (!SelectorEngine.findAll(`[class*="${BACKDROP_CLASSNAME}"]`, target).length) {
                target.appendChild(backdropEl);
            }
            return backdropEl;
        }
        // Using `unknown` - Object is possibly 'null'.
        // Using `Element | Window` - Property 'hasAttribute' does not exist on type 'EventTarget'.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onClick(event) {
            if (event.target.hasAttribute(HEADER_DISMISS_ATTRIBUTE) || event.target.classList.contains(BACKDROP_CLASSNAME)) {
                event.preventDefault();
                event.stopPropagation();
                this.hide(event);
            }
        }
        onWindowResize(event) {
            if (event.target.innerWidth >= HEADER_BREAKPOINT) {
                this.hide(event);
            }
        }
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
        }
        addEventListeners() {
            EventHandler.on(document, 'keydown', (event) => this.onKeyPress(event));
            EventHandler.on(window, 'resize', (event) => this.onWindowResize(event));
            EventHandler.on(window, 'click', (event) => this.onClick(event));
        }
        removeEventListeners() {
            EventHandler.off(document, 'keydown', (event) => this.onKeyPress(event));
            EventHandler.off(window, 'resize', (event) => this.onWindowResize(event));
            EventHandler.off(window, 'click', (event) => this.onClick(event));
        }
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
        }
        // Using `unknown` - Object is possibly 'null'.
        // Using `Element | Window` - Property 'hasAttribute' does not exist on type 'EventTarget'.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        hide(event) {
            let target;
            // hiding by resizing
            if (!event.target.dataset) {
                target = this.element;
                // hiding by clicking
            }
            else if (event.target.dataset.target) {
                target = SelectorEngine.findOne(event.target.dataset.target);
                // hiding by keyboard
            }
            else {
                target = event.target.parentNode;
            }
            const headerEl = target.parentElement;
            const toggleEl = SelectorEngine.findOne(HEADER_TOGGLE_SELECTOR, headerEl);
            target.classList.remove(OPEN_CLASSNAME);
            toggleEl.setAttribute('aria-expanded', 'false');
            this.removeEventListeners();
            this.isShown = false;
        }
        toggle(relatedTarget, event) {
            if (!relatedTarget) {
                // eslint-disable-next-line no-console
                console.warn('👻 Boo…! Target header pane does not exist. Maybe you forgot to prefix the "data-target" selector with "#"? ');
                return;
            }
            this.isShown ? this.hide(event) : this.show(event);
        }
    }
    function handleHeaderClick(event) {
        const target = getElementFromSelector(this);
        // with Header instance
        if (target) {
            const header = new Header(target);
            header.toggle(target, event);
        }
    }
    // When document content is loaded
    EventHandler.on(window, 'DOMContentLoaded', () => {
        // Find all toggle elements and for each toggle
        SelectorEngine.findAll(HEADER_TOGGLE_SELECTOR).forEach((toggleEl) => {
            // add click handler
            EventHandler.on(toggleEl, 'click', handleHeaderClick);
        });
    });

    const index_umd = { Header };

    return index_umd;

}));
//# sourceMappingURL=spirit-web.js.map
