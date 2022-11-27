import BaseComponent from '../BaseComponent';
import EventHandler from '../dom/EventHandler';
import SelectorEngine from '../dom/SelectorEngine';
import { getElement } from './index';

type DataTriggerAttribute = 'data-toggle' | 'data-dismiss';

const ATTRIBUTE_DATA_TOGGLE = `data-toggle`;
const ATTRIBUTE_DATA_DISMISS = `data-dismiss`;

const onClickHandler = (element: HTMLElement, component: typeof BaseComponent, method: string, event: Event) => {
  EventHandler.on(element, 'click', function handleClick() {
    const target = getElement(this);
    const instance = component.getOrCreateInstance(target);

    // No index signature with a parameter of type 'string' was found on type 'Document | HTMLElement | Window | BaseComponent'
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    instance[method](target, event);
  });
};

const onLoadHandler = (element: HTMLElement, component: typeof BaseComponent) => {
  component.getOrCreateInstance(element);
};

const enableDataTrigger = (
  dataTriggerAttribute: DataTriggerAttribute,
  component: typeof BaseComponent,
  eventHandler: (element: HTMLElement, component: typeof BaseComponent, method: string, event: Event) => void,
  method = 'toggle',
) => {
  const name = component.NAME;

  EventHandler.on(window, 'DOMContentLoaded', (event: Event) => {
    SelectorEngine.findAll(`[${dataTriggerAttribute}="${name}"]`).forEach((toggleEl) => {
      eventHandler(toggleEl, component, method, event);
    });
  });
};

const enableToggleTrigger = (component: typeof BaseComponent, method = 'toggle') => {
  enableDataTrigger(ATTRIBUTE_DATA_TOGGLE, component, onClickHandler, method);
};

const enableDismissTrigger = (component: typeof BaseComponent, method = 'dismiss') => {
  enableDataTrigger(ATTRIBUTE_DATA_DISMISS, component, onClickHandler, method);
};

const enableToggleAutoloader = (component: typeof BaseComponent, method = 'toggle') => {
  enableDataTrigger(ATTRIBUTE_DATA_TOGGLE, component, onLoadHandler, method);
};

const clickOutsideElement = (target: Element, event: Event) => !event.composedPath().includes(target);

export { enableToggleTrigger, enableDismissTrigger, enableToggleAutoloader, clickOutsideElement };
