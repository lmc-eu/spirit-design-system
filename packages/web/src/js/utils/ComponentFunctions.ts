import BaseComponent from '../BaseComponent';
import EventHandler from '../dom/EventHandler';
import SelectorEngine from '../dom/SelectorEngine';
import { getElement, getTriggerOrTarget, Aim } from './index';

type DataTriggerAttribute = 'data-toggle' | 'data-dismiss';

const ATTRIBUTE_DATA_TOGGLE = `data-toggle`;
const ATTRIBUTE_DATA_DISMISS = `data-dismiss`;

const enableDataTrigger = (
  dataTriggerAttribute: DataTriggerAttribute,
  component: typeof BaseComponent,
  method = 'toggle',
  aim: Aim = 'target',
) => {
  const name = component.NAME;

  EventHandler.on(window, 'DOMContentLoaded', (event: Event) => {
    SelectorEngine.findAll(`[${dataTriggerAttribute}="${name}"]`).forEach((toggleEl) => {
      EventHandler.on(toggleEl, 'click', function handleClick() {
        const target = getTriggerOrTarget(getElement(this), aim);
        const instance = component.getOrCreateInstance(target);

        // No index signature with a parameter of type 'string' was found on type 'Document | HTMLElement | Window | BaseComponent'
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        instance[method](target, event);
      });
    });
  });
};

const enableToggleTrigger = (component: typeof BaseComponent, method = 'toggle', aim: Aim = 'target') => {
  enableDataTrigger(ATTRIBUTE_DATA_TOGGLE, component, method, aim);
};

const enableDismissTrigger = (component: typeof BaseComponent, method = 'dismiss', aim: Aim = 'target') => {
  enableDataTrigger(ATTRIBUTE_DATA_DISMISS, component, method, aim);
};

export { enableToggleTrigger, enableDismissTrigger };
