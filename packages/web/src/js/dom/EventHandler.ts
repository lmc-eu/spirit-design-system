/* eslint-disable @typescript-eslint/no-explicit-any */

type EventHandlerElement = HTMLElement | Window | Document;

const addHandler = (element: EventHandlerElement, eventType: string, handler: any): void => {
  if (!element) {
    return;
  }

  element.addEventListener(eventType, handler);
};

const removeHandler = (element: EventHandlerElement, eventType: string, handler: any): void =>
  element.removeEventListener(eventType, handler);

const EventHandler = {
  on(element: EventHandlerElement, event: string, handler?: any): void {
    addHandler(element, event, handler);
  },

  off(element: EventHandlerElement, event: string, handler?: any) {
    removeHandler(element, event, handler);
  },

  trigger(element: EventHandlerElement, event: string, args?: any) {
    if (typeof event !== 'string' || !element) {
      return null;
    }

    const bubbles = true;
    const nativeDispatch = true;
    const defaultPrevented = false;

    const evt = new Event(event, { bubbles, cancelable: true });

    // merge custom information in our event
    if (typeof args !== 'undefined') {
      for (const key of Object.keys(args)) {
        Object.defineProperty(evt, key, {
          get() {
            return args[key];
          },
        });
      }
    }

    if (defaultPrevented) {
      evt.preventDefault();
    }

    if (nativeDispatch) {
      element.dispatchEvent(evt);
    }

    return evt;
  },
};

export default EventHandler;
