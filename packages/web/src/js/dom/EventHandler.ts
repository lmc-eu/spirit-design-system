/* eslint-disable @typescript-eslint/no-explicit-any */

type EventHandlerElement = HTMLElement | Window | Document;

const addHandler = (element: EventHandlerElement, eventType: string, handler: any): void =>
  element.addEventListener(eventType, handler);

const removeHandler = (element: EventHandlerElement, eventType: string, handler: any): void =>
  element.removeEventListener(eventType, handler);

const EventHandler = {
  on(element: EventHandlerElement, event: string, handler: any): void {
    addHandler(element, event, handler);
  },

  off(element: EventHandlerElement, event: string, handler: any) {
    removeHandler(element, event, handler);
  },
};

export default EventHandler;
