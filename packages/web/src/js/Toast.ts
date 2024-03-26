import BaseComponent from './BaseComponent';
import {
  ATTRIBUTE_ARIA_EXPANDED,
  ATTRIBUTE_DATA_DISMISS,
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
import { warning } from './common/utilities';

const NAME = 'toast';
const DATA_KEY = `${NAME}`;
const EVENT_KEY = `.${DATA_KEY}`;

const EVENT_HIDE = `hide${EVENT_KEY}`;
const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
const EVENT_SHOW = `show${EVENT_KEY}`;
const EVENT_SHOWN = `shown${EVENT_KEY}`;

const COLOR_ICON_MAP = {
  danger: 'danger',
  informative: 'info',
  inverted: 'info',
  success: 'check-plain',
  warning: 'warning',
};

const QUEUE_ELEMENT_SELECTOR = `[${ATTRIBUTE_DATA_ELEMENT}="toast-queue"]`;
const TEMPLATE_ELEMENT_SELECTOR = `[${ATTRIBUTE_DATA_SNIPPET}="item"]`;

type Color = 'success' | 'informative' | 'warning' | 'danger' | 'inverted';

type Config = {
  color: Color;
  containerId: string;
  content: HTMLElement | string;
  hasIcon: boolean;
  iconName: string;
  id: string;
  isDismissible: boolean;
};

class Toast extends BaseComponent {
  container: HTMLElement | null;
  isShown: boolean;
  triggers: HTMLElement[];

  static get NAME() {
    return NAME;
  }

  constructor(element: SpiritElement, config?: SpiritConfig) {
    super(element, config);

    this.container = this.getContainer();
    this.isShown = this.checkShownState();
    this.triggers = this.getTriggers();
  }

  checkShownState(): boolean {
    if (this.element) {
      return this.element.classList.contains(CLASS_NAME_OPEN) || !this.element.classList.contains(CLASS_NAME_HIDDEN);
    }

    return false;
  }

  getContainer(): SpiritElement {
    const config = this.config as Config;

    if (!this.element && !config.containerId) {
      warning(false, `No Toast element found or no Toast container ID given.`);

      return null;
    }

    if (this.element && !config.containerId) {
      return this.element.closest(QUEUE_ELEMENT_SELECTOR);
    }

    if (config.containerId) {
      const container = SelectorEngine.findOne(`#${config.containerId}`);

      if (!container) {
        warning(false, `No Toast container found with ID "${config.containerId}".`);

        return null;
      }

      return SelectorEngine.findOne(QUEUE_ELEMENT_SELECTOR, container);
    }

    return null;
  }

  getTemplate(): SpiritElement {
    const templateElement = SelectorEngine.findOne(TEMPLATE_ELEMENT_SELECTOR, this.container) as HTMLTemplateElement;

    if (!templateElement) {
      warning(false, `No Toast template found.`);

      return null;
    }

    const snippetElement = templateElement.content.cloneNode(true) as DocumentFragment;

    if (!snippetElement) {
      warning(false, 'Could not create element from Toast template.');

      return null;
    }

    return snippetElement;
  }

  getTriggers(): SpiritElement[] {
    const id = this.element && (this.element.getAttribute('id') as string);

    return SelectorEngine.findAll(`[${ATTRIBUTE_DATA_TARGET}="#${id}"]`);
  }

  createFromTemplate(): SpiritElement {
    const template = this.getTemplate();
    if (!template) {
      return null;
    }

    const config = this.config as Config;

    // TODO: remove
    console.log('config', config);

    // TODO: use other properties for toast
    if (!config.content) {
      warning(false, `No Toast content given.`);

      return null;
    }

    const itemElement = template.querySelector(`[${ATTRIBUTE_DATA_POPULATE_FIELD}="item"]`) as HTMLElement;
    const toastBarElement = template.querySelector(`[${ATTRIBUTE_DATA_POPULATE_FIELD}="toast-bar"]`) as HTMLElement;
    const iconElement = template.querySelector(`[${ATTRIBUTE_DATA_POPULATE_FIELD}="icon"]`) as HTMLElement;
    const iconUseElement = iconElement.querySelector('use') as SVGUseElement;
    const closeButtonElement = template.querySelector(
      `[${ATTRIBUTE_DATA_POPULATE_FIELD}="close-button"]`,
    ) as HTMLElement;
    const messageElement = template.querySelector(`[${ATTRIBUTE_DATA_POPULATE_FIELD}="message"]`) as HTMLElement;

    const originalIconPath = iconUseElement!.getAttribute('xlink:href') as string;
    const iconPath = originalIconPath.substring(0, originalIconPath.indexOf('#'));

    itemElement!.setAttribute('id', config.id);

    toastBarElement!.setAttribute('data-spirit-color', config.color);

    if (config.hasIcon) {
      iconUseElement!.setAttribute('xlink:href', `${iconPath}#${config.iconName || COLOR_ICON_MAP[config.color]}`);
    } else {
      iconElement!.remove();
    }

    if (config.isDismissible) {
      closeButtonElement!.setAttribute('data-spirit-color', config.color);
      closeButtonElement!.setAttribute('data-spirit-dismiss', 'toast');
      closeButtonElement!.setAttribute('data-spirit-target', `#${config.id}`);
      closeButtonElement!.setAttribute('aria-controls', config.id);
    } else {
      closeButtonElement!.remove();
    }

    messageElement!.innerHTML = typeof config.content === 'string' ? config.content : config.content.outerHTML;

    return itemElement;
  }

  addEvents(): void {
    const dismissButtonElement = SelectorEngine.findOne(`[${ATTRIBUTE_DATA_DISMISS}="${NAME}"]`, this.element);
    if (dismissButtonElement) {
      EventHandler.on(dismissButtonElement, 'click', (event: Event) => {
        event.preventDefault();
        this.hide();
      });
    }
  }

  show(): void {
    if (this.isShown) {
      return;
    }

    this.element = this.element || this.createFromTemplate();
    if (!this.element) {
      return;
    }

    const showEvent = EventHandler.trigger(this.element, Toast.eventName(EVENT_SHOW)) as Event;
    if (showEvent.defaultPrevented) {
      return;
    }

    this.container?.appendChild(this.element);
    this.addEvents();

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

  hide(): void {
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
