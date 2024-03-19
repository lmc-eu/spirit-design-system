import BaseComponent from './BaseComponent';
import {
  ATTRIBUTE_ARIA_EXPANDED,
  ATTRIBUTE_DATA_ELEMENT,
  ATTRIBUTE_DATA_POPULATE_FIELD,
  ATTRIBUTE_DATA_SNIPPET,
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

const TEMPLATE_ELEMENT_SELECTOR = `[${ATTRIBUTE_DATA_SNIPPET}="item"]`;
const TEMPLATE_ELEMENT_SLOT_NAME = ATTRIBUTE_DATA_POPULATE_FIELD;
const QUEUE_ELEMENT_SELECTOR = `[${ATTRIBUTE_DATA_ELEMENT}="queue"]`;

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

  create(): void {
    const snippetTemplate = document.querySelector(TEMPLATE_ELEMENT_SELECTOR) as HTMLTemplateElement;

    if (!snippetTemplate) {
      // eslint-disable-next-line no-console -- We want to throw an error if the snippet is not found.
      console.error('No toast snippet template found.');

      return;
    }

    const toastQueueElement = document.querySelector(QUEUE_ELEMENT_SELECTOR);

    if (!toastQueueElement) {
      // eslint-disable-next-line no-console -- We want to throw an error if the queue element is not found.
      console.error('No toast queue element found.');

      return;
    }

    const snippet = snippetTemplate.content.cloneNode(true) as DocumentFragment;

    if (!snippet) {
      // eslint-disable-next-line no-console -- We want to throw an error if the snippet cannot be created.
      console.error('Toast cannot be created.');

      return;
    }

    const id = `dynamic-toast-${Date.now()}`;

    const item = snippet.querySelector(`[${TEMPLATE_ELEMENT_SLOT_NAME}="item"]`);
    const itemButton = item.querySelector(`[${TEMPLATE_ELEMENT_SLOT_NAME}="button"]`);
    const itemMessage = item.querySelector(`[${TEMPLATE_ELEMENT_SLOT_NAME}="message"]`);

    item.setAttribute('id', id);
    itemButton.setAttribute('data-spirit-dismiss', 'toast');
    itemButton.setAttribute('data-spirit-target', `#${id}`);
    itemButton.setAttribute('aria-controls', id);
    itemMessage.innerHTML = `
      This is a dynamic toast.
      <a href="#" class="link-inverted link-underlined">Action</a>
    `;

    toastQueueElement?.appendChild(item);
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

enableAddTrigger(Toast, 'create', 'target');
enableToggleTrigger(Toast, 'show', 'target');
enableDismissTrigger(Toast, 'hide', 'target');

export default Toast;
