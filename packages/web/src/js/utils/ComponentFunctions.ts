import BaseComponent from '../BaseComponent';
import EventHandler from '../dom/EventHandler';
import SelectorEngine from '../dom/SelectorEngine';
import { getElement } from './index';

const enableToggleTrigger = (component: typeof BaseComponent, method = 'toggle') => {
  const name = component.NAME;

  EventHandler.on(window, 'DOMContentLoaded', (event: Event) => {
    SelectorEngine.findAll(`[data-toggle="${name}"]`).forEach((toggleEl) => {
      EventHandler.on(toggleEl, 'click', function handleClick() {
        const target = getElement(this);
        const instance = component.getOrCreateInstance(target);

        // No index signature with a parameter of type 'string' was found on type 'Document | HTMLElement | Window | BaseComponent'
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        instance[method](target, event);
      });
    });
  });
};

export { enableToggleTrigger };
