import { CSSProperties } from 'react';
import BaseComponent from './BaseComponent';
import {
  ATTRIBUTE_ARIA_EXPANDED,
  ATTRIBUTE_DATA_DISMISS,
  ATTRIBUTE_DATA_ELEMENT,
  ATTRIBUTE_DATA_POPULATE_FIELD,
  ATTRIBUTE_DATA_SNIPPET,
  ATTRIBUTE_DATA_TARGET,
  CLASS_NAME_HIDDEN,
  CLASS_NAME_TRANSITIONING,
  CLASS_NAME_VISIBLE,
  DEFAULT_TOAST_AUTO_CLOSE_INTERVAL,
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

const SELECTOR_QUEUE_ELEMENT = `[${ATTRIBUTE_DATA_ELEMENT}="toast-queue"]`;
const SELECTOR_TEMPLATE_ELEMENT = `[${ATTRIBUTE_DATA_SNIPPET}="item"]`;
const SELECTOR_ITEM_ELEMENT = `[${ATTRIBUTE_DATA_POPULATE_FIELD}="item"]`;
const SELECTOR_ICON_ELEMENT = `[${ATTRIBUTE_DATA_POPULATE_FIELD}="icon"]`;
const SELECTOR_CLOSE_BUTTON_ELEMENT = `[${ATTRIBUTE_DATA_POPULATE_FIELD}="close-button"]`;
const SELECTOR_DISMISS_TRIGGER_ELEMENT = `[${ATTRIBUTE_DATA_DISMISS}="${NAME}"]`;
const SELECTOR_MESSAGE_ELEMENT = `[${ATTRIBUTE_DATA_POPULATE_FIELD}="message"]`;
const SELECTOR_LINK_ELEMENT = `[${ATTRIBUTE_DATA_POPULATE_FIELD}="link"]`;

// Keep in sync with transitions in `scss/Toast/_theme.scss`.
export const PROPERTY_NAME_SLOWEST_TRANSITION = {
  css: 'max-height',
  js: 'maxHeight',
};
const PROPERTY_NAME_FALLBACK_TRANSITION = 'opacity';

type Color = keyof typeof COLOR_ICON_MAP;

type Config = {
  autoCloseInterval: number;
  color: Color;
  containerId: string;
  enableAutoClose: boolean;
  message: HTMLElement | string;
  link: HTMLElement | string;
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
    return this.element
      ? this.element.classList.contains(CLASS_NAME_VISIBLE) || !this.element.classList.contains(CLASS_NAME_HIDDEN)
      : false;
  }

  getAwaitedTransitionPropertyName(): CSSProperties {
    // @ts-expect-error -- TS7015: Element implicitly has an any type because index expression is not of type number.
    return parseInt(getComputedStyle(this.element)[PROPERTY_NAME_SLOWEST_TRANSITION.js], 10) > 0
      ? PROPERTY_NAME_SLOWEST_TRANSITION.css
      : PROPERTY_NAME_FALLBACK_TRANSITION;
  }

  getContainer(): SpiritElement {
    const config = this.config as Config;

    if (!this.element && !config.containerId) {
      warning(false, `No Toast element found or no Toast container ID given.`);

      return null;
    }

    if (this.element && !config.containerId) {
      return this.element.closest(SELECTOR_QUEUE_ELEMENT);
    }

    if (config.containerId) {
      const container = SelectorEngine.findOne(`#${config.containerId}`);

      if (!container) {
        warning(false, `No Toast container found with ID "${config.containerId}".`);

        return null;
      }

      return SelectorEngine.findOne(SELECTOR_QUEUE_ELEMENT, container);
    }

    return null;
  }

  getTemplate(): SpiritElement {
    const templateElement = SelectorEngine.findOne(SELECTOR_TEMPLATE_ELEMENT, this.container) as HTMLTemplateElement;

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

  updateOrRemoveCloseButton(closeButtonElement: HTMLElement) {
    const { color, id, isDismissible } = this.config as Config;

    if (isDismissible) {
      closeButtonElement!.setAttribute('data-spirit-color', color);
      closeButtonElement!.setAttribute('data-spirit-dismiss', 'toast');
      closeButtonElement!.setAttribute('data-spirit-target', `#${id}`);
      closeButtonElement!.setAttribute('aria-controls', id);
    } else {
      closeButtonElement!.remove();
    }
  }

  updateOrRemoveIcon(iconElement: HTMLElement) {
    const { hasIcon, iconName, color } = this.config as Config;

    const iconUseElement = iconElement.querySelector('use') as SVGUseElement;
    const originalIconPath = iconUseElement!.getAttribute('xlink:href') as string;
    const iconPath = originalIconPath.substring(0, originalIconPath.indexOf('#'));

    if (hasIcon) {
      iconUseElement!.setAttribute('xlink:href', `${iconPath}#${iconName || COLOR_ICON_MAP[color]}`);
    } else {
      iconElement!.remove();
    }
  }

  createFromTemplate(): SpiritElement {
    const template = this.getTemplate();
    if (!template) {
      return null;
    }

    const config = this.config as Config;
    if (!config.message) {
      warning(false, 'Toast message is required, nothing given.');

      return null;
    }

    const itemElement = template.querySelector(SELECTOR_ITEM_ELEMENT) as HTMLElement;
    const iconElement = template.querySelector(SELECTOR_ICON_ELEMENT) as HTMLElement;
    const closeButtonElement = template.querySelector(SELECTOR_CLOSE_BUTTON_ELEMENT) as HTMLElement;
    const messageElement = template.querySelector(SELECTOR_MESSAGE_ELEMENT) as HTMLElement;
    const linkElement = template.querySelector(SELECTOR_LINK_ELEMENT) as HTMLElement;

    itemElement!.setAttribute('id', config.id);
    itemElement!.setAttribute('data-spirit-color', config.color);

    this.updateOrRemoveIcon(iconElement);
    this.updateOrRemoveCloseButton(closeButtonElement);

    messageElement!.innerHTML = typeof config.message === 'string' ? config.message : config.message.outerHTML;

    linkElement!.setAttribute('href', '#');
    linkElement!.innerHTML = typeof config.link === 'string' ? config.link : config.link.outerHTML;

    return itemElement;
  }

  addEvents(): void {
    const dismissButtonElement = SelectorEngine.findOne(SELECTOR_DISMISS_TRIGGER_ELEMENT, this.element);
    if (dismissButtonElement) {
      EventHandler.on(dismissButtonElement, 'click', (event: Event) => {
        event.preventDefault();
        this.hide();
      });
    }
  }

  show(): void {
    const config = this.config as Config;

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

    if (config.isDismissible) {
      this.addEvents();
    }

    this.triggers.forEach((element) => {
      element?.setAttribute(ATTRIBUTE_ARIA_EXPANDED, 'true');
    });

    // Use setTimeout to force starting the transition
    setTimeout(() => {
      this.element.classList.remove(CLASS_NAME_HIDDEN);
      this.element.classList.add(CLASS_NAME_VISIBLE);
      this.element.classList.add(CLASS_NAME_TRANSITIONING);
    }, 0);

    executeAfterTransition(
      this.element,
      () => {
        EventHandler.trigger(this.element, Toast.eventName(EVENT_SHOWN));
        this.element.classList.remove(CLASS_NAME_TRANSITIONING);
      },
      true,
      this.getAwaitedTransitionPropertyName(),
    );

    this.isShown = true;

    if (config.enableAutoClose) {
      const timeoutId = setTimeout(() => {
        this.hide();
        clearInterval(timeoutId);
      }, config.autoCloseInterval || DEFAULT_TOAST_AUTO_CLOSE_INTERVAL);
    }
  }

  finishHiding = (): void => {
    EventHandler.trigger(this.element, Toast.eventName(EVENT_HIDDEN));
    this.element.remove();
  };

  hide(): void {
    if (!this.isShown || !this.element) {
      return;
    }

    const hideEvent = EventHandler.trigger(this.element, Toast.eventName(EVENT_HIDE)) as Event;
    if (hideEvent.defaultPrevented) {
      return;
    }

    this.triggers.forEach((element) => {
      element?.setAttribute(ATTRIBUTE_ARIA_EXPANDED, 'false');
    });

    // Use the visibility style to check if the toast is already visually hidden
    const { visibility } = getComputedStyle(this.element);

    if (visibility === 'hidden') {
      this.finishHiding();
    } else {
      this.element.classList.remove(CLASS_NAME_VISIBLE);
      this.element.classList.add(CLASS_NAME_HIDDEN);
      this.element.classList.add(CLASS_NAME_TRANSITIONING);

      executeAfterTransition(this.element, this.finishHiding, true, this.getAwaitedTransitionPropertyName());
    }
  }
}

enableToggleTrigger(Toast, 'show', 'target');
enableDismissTrigger(Toast, 'hide', 'target');

export default Toast;
