const addHandler = (element, eventType, handler) => element.addEventListener(eventType, handler);

const removeHandler = (element, eventType, handler) => element.removeEventListener(eventType, handler);

const EventHandler = {
  on(element, event, handler) {
    addHandler(element, event, handler);
  },

  off(element, event, handler) {
    removeHandler(element, event, handler);
  },
};

export default EventHandler;
