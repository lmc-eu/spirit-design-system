type SpiritElement = Node | Element | HTMLElement | null;

interface TabEventMap {
  'show.tabs': MouseEvent;
  'shown.tabs': MouseEvent;
  'hide.tabs': MouseEvent;
  'hidden.tabs': MouseEvent;
}

interface SpiritHTMLElement extends HTMLElement {
  addEventListener<K extends keyof TabEventMap>(
    type: K,
    listener: (this: HTMLElement, ev: TabEventMap[K]) => void,
  ): void;
}
