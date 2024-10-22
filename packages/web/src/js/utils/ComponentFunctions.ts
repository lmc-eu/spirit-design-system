import BaseComponent from '../BaseComponent';
import EventHandler from '../dom/EventHandler';
import SelectorEngine from '../dom/SelectorEngine';
import { getElement, getTriggerOrTarget, Aim } from './Elements';

type DataTriggerAttribute = 'data-spirit-toggle' | 'data-spirit-dismiss';

const ATTRIBUTE_DATA_TOGGLE = `data-spirit-toggle`;
const ATTRIBUTE_DATA_DISMISS = `data-spirit-dismiss`;

const onClickHandler = (
  element: HTMLElement,
  component: typeof BaseComponent,
  method: string,
  event: Event,
  aim: Aim = 'target',
) => {
  EventHandler.on(element, 'click', function handleClick(this: unknown) {
    const target = getTriggerOrTarget(getElement(this), aim);
    const instance = component.getOrCreateInstance(target);

    // No index signature with a parameter of type 'string' was found on type 'Document | HTMLElement | Window | BaseComponent'
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    instance[method](target, event);
  });
};

const onLoadHandler = (
  element: HTMLElement,
  component: typeof BaseComponent,
  method: string,
  event: Event,
  aim: Aim = 'trigger',
) => {
  let instance = element;

  if (aim === 'target') {
    instance = getTriggerOrTarget(getElement(element), aim);
  }

  component.getOrCreateInstance(instance);
};

const enableDataTrigger = (
  dataTriggerAttribute: DataTriggerAttribute,
  component: typeof BaseComponent,
  eventHandler: (element: HTMLElement, component: typeof BaseComponent, method: string, event: Event, aim: Aim) => void,
  method = 'toggle',
  aim: Aim = 'target',
) => {
  const name = component.NAME;

  EventHandler.on(window, 'DOMContentLoaded', (event: Event) => {
    SelectorEngine.findAll(`[${dataTriggerAttribute}="${name}"]`).forEach((toggleEl) => {
      eventHandler(toggleEl, component, method, event, aim);
    });
  });
};

const enableToggleTrigger = (component: typeof BaseComponent, method = 'toggle', aim: Aim = 'target') => {
  enableDataTrigger(ATTRIBUTE_DATA_TOGGLE, component, onClickHandler, method, aim);
};

const enableDismissTrigger = (component: typeof BaseComponent, method = 'dismiss', aim: Aim = 'target') => {
  enableDataTrigger(ATTRIBUTE_DATA_DISMISS, component, onClickHandler, method, aim);
};

const enableToggleAutoloader = (component: typeof BaseComponent, method = 'toggle', aim: Aim = 'trigger') => {
  enableDataTrigger(ATTRIBUTE_DATA_TOGGLE, component, onLoadHandler, method, aim);
};

const clickOutsideElement = (target: Element, event: Event) => !event.composedPath().includes(target);

export { enableToggleTrigger, enableDismissTrigger, enableToggleAutoloader, clickOutsideElement };
