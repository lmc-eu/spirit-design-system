const triggerEvent = (element: HTMLElement, eventName: string, options = { bubbles: true, cancelable: false }) => {
  const event = new Event(eventName, options);
  element.dispatchEvent(event);
};

export { triggerEvent };
