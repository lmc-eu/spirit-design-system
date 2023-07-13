import BaseComponent from './BaseComponent';
import EventHandler from './dom/EventHandler';
import SelectorEngine from './dom/SelectorEngine';
import { enableToggleTrigger, enableDismissTrigger } from './utils/ComponentFunctions';

const NAME = 'tooltip';
const DATA_KEY = 'tooltip';
const EVENT_KEY = `.${DATA_KEY}`;

const EVENT_HIDE = `hide${EVENT_KEY}`;
const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
const EVENT_SHOW = `show${EVENT_KEY}`;
const EVENT_SHOWN = `shown${EVENT_KEY}`;

const CLASS_NAME_VISIBLE = 'is-visible';
const CLASS_NAME_HIDDEN = 'is-hidden';

class Tooltip extends BaseComponent {
  tip: HTMLElement;

  constructor(element: SpiritElement) {
    super(element);

    this.tip = this.getTipElement();
  }

  static get NAME() {
    return NAME;
  }

  toggle() {
    if (this.isShown()) {
      this.hide();
    } else {
      this.show();
    }
  }

  show() {
    if (this.element?.style?.display === 'none') {
      throw new Error('Please use show on elements without `display: none`');
    }

    const showEvent = EventHandler.trigger(this.element, Tooltip.eventName(EVENT_SHOW)) as Event;

    if (showEvent.defaultPrevented) {
      return;
    }

    this.element.setAttribute('aria-describedby', this.tip.getAttribute('id'));

    this.tip.classList.remove(CLASS_NAME_HIDDEN);

    // If this is a touch-enabled device we add extra
    // empty mouseover listeners to the body's immediate children;
    // only needed because of broken event delegation on iOS
    // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
    if ('ontouchstart' in document.documentElement) {
      // Overload 1 of 2, '(...items: ConcatArray<never>[]): never[]', gave the following error.
      // Argument of type 'Element' is not assignable to parameter of type 'ConcatArray<never>'.
      // @ts-expect-error No overload matches this call.
      for (const element of [].concat(...document.body.children)) {
        EventHandler.on(element, 'mouseover', null);
      }
    }

    EventHandler.trigger(this.element, Tooltip.eventName(EVENT_SHOWN));
  }

  hide() {
    if (!this.isShown()) {
      return;
    }

    const hideEvent = EventHandler.trigger(this.element, Tooltip.eventName(EVENT_HIDE)) as Event;
    if (hideEvent.defaultPrevented) {
      return;
    }

    this.tip.classList.add(CLASS_NAME_HIDDEN);
    // If this is a touch-enabled device we remove the extra
    // empty mouseover listeners we added for iOS support
    if ('ontouchstart' in document.documentElement) {
      // Overload 1 of 2, '(...items: ConcatArray<never>[]): never[]', gave the following error.
      // Argument of type 'Element' is not assignable to parameter of type 'ConcatArray<never>'.
      // @ts-expect-error No overload matches this call.
      for (const element of [].concat(...document.body.children)) {
        EventHandler.off(element, 'mouseover', null);
      }
    }

    this.element.removeAttribute('aria-describedby');
    EventHandler.trigger(this.element, Tooltip.eventName(EVENT_HIDDEN));
  }

  isShown() {
    return (
      this.tip && (this.tip.classList?.contains(CLASS_NAME_VISIBLE) || !this.tip.classList?.contains(CLASS_NAME_HIDDEN))
    );
  }

  getTipElement() {
    if (!this.tip) {
      this.tip =
        (SelectorEngine.findOne(this.element?.dataset?.spiritTarget) as HTMLElement) ||
        this.element ||
        this.element?.parentElement;
    }

    return this.tip;
  }
}

enableToggleTrigger(Tooltip, 'toggle');
enableDismissTrigger(Tooltip, 'hide');

export default Tooltip;
