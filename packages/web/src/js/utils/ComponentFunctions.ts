import BaseComponent from '../BaseComponent';
import EventHandler from '../dom/EventHandler';
import SelectorEngine from '../dom/SelectorEngine';
import { getElement, getTargetOrElement } from './index';

type DataTriggerAttribute = 'data-toggle' | 'data-dismiss';

const ATTRIBUTE_DATA_TOGGLE = `data-toggle`;
const ATTRIBUTE_DATA_DISMISS = `data-dismiss`;

const enableDataTrigger = (
  dataTriggerAttribute: DataTriggerAttribute,
  component: typeof BaseComponent,
  method = 'toggle',
) => {
  const name = component.NAME;

  EventHandler.on(window, 'DOMContentLoaded', (event: Event) => {
    SelectorEngine.findAll(`[${dataTriggerAttribute}="${name}"]`).forEach((toggleEl) => {
      EventHandler.on(toggleEl, 'click', function handleClick() {
        const target = getTargetOrElement(getElement(this));
        const instance = component.getOrCreateInstance(target);

        // No index signature with a parameter of type 'string' was found on type 'Document | HTMLElement | Window | BaseComponent'
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        instance[method](target, event);
      });
    });
  });
};

const enableToggleTrigger = (component: typeof BaseComponent, method = 'toggle') => {
  enableDataTrigger(ATTRIBUTE_DATA_TOGGLE, component, method);
};

const enableDismissTrigger = (component: typeof BaseComponent, method = 'dismiss') => {
  enableDataTrigger(ATTRIBUTE_DATA_DISMISS, component, method);
};

export { enableToggleTrigger, enableDismissTrigger };
