import BaseComponent from './BaseComponent';
import {
  ATTRIBUTE_ARIA_EXPANDED,
  ATTRIBUTE_DATA_TARGET,
  CLASS_NAME_HIDDEN,
  CLASS_NAME_OPEN,
  CLASS_NAME_TRANSITIONING,
} from './constants';
import { enableDismissTrigger, enableToggleTrigger, executeAfterTransition, SpiritConfig } from './utils';
import { EventHandler, SelectorEngine } from './dom';

const NAME = 'toast';
const DATA_KEY = `${NAME}`;
const EVENT_KEY = `.${DATA_KEY}`;

const EVENT_HIDE = `hide${EVENT_KEY}`;
const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
const EVENT_SHOW = `show${EVENT_KEY}`;
const EVENT_SHOWN = `shown${EVENT_KEY}`;

class Toast extends BaseComponent {
  isShown: boolean;
  triggers: HTMLElement[];

  static get NAME() {
    return NAME;
  }

  constructor(element: SpiritElement, config?: SpiritConfig) {
    super(element, config);

    this.triggers = this.getTriggers();

    this.isShown = this.checkShownState();
  }

  checkShownState() {
    return this.element.classList.contains(CLASS_NAME_OPEN) || !this.element.classList.contains(CLASS_NAME_HIDDEN);
  }

  getTriggers() {
    const id = this.element && (this.element.getAttribute('id') as string);

    return SelectorEngine.findAll(`[${ATTRIBUTE_DATA_TARGET}="#${id}"]`);
  }

  show() {
    if (this.isShown) {
      return;
    }

    const showEvent = EventHandler.trigger(this.element, Toast.eventName(EVENT_SHOW)) as Event;
    if (showEvent.defaultPrevented) {
      return;
    }

    this.triggers.forEach((element) => {
      element?.setAttribute(ATTRIBUTE_ARIA_EXPANDED, 'true');
    });

    this.element.classList.remove(CLASS_NAME_HIDDEN);
    this.element.classList.add(CLASS_NAME_OPEN);
    this.element.classList.add(CLASS_NAME_TRANSITIONING);

    executeAfterTransition(this.element, () => {
      EventHandler.trigger(this.element, Toast.eventName(EVENT_SHOWN));
      this.element.classList.remove(CLASS_NAME_TRANSITIONING);
    });

    this.isShown = true;
  }

  hide() {
    if (!this.isShown) {
      return;
    }

    const hideEvent = EventHandler.trigger(this.element, Toast.eventName(EVENT_HIDE)) as Event;
    if (hideEvent.defaultPrevented) {
      return;
    }

    this.triggers.forEach((element) => {
      element?.setAttribute(ATTRIBUTE_ARIA_EXPANDED, 'false');
    });

    this.element.classList.remove(CLASS_NAME_OPEN);
    this.element.classList.add(CLASS_NAME_HIDDEN);
    this.element.classList.add(CLASS_NAME_TRANSITIONING);

    executeAfterTransition(this.element, () => {
      EventHandler.trigger(this.element, Toast.eventName(EVENT_HIDDEN));
      this.element.remove();
    });

    this.isShown = false;
  }
}

enableToggleTrigger(Toast, 'show', 'target');
enableDismissTrigger(Toast, 'hide', 'target');

export default Toast;
