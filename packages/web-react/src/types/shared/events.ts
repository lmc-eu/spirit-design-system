import { SyntheticEvent, MouseEvent as ReactMouseEvent } from 'react';

export type BaseEvent<T extends SyntheticEvent> = T & unknown;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ClickEvent extends BaseEvent<ReactMouseEvent<any>> {
  /** The target element of the press event. */
  target: HTMLElement;
}

export interface ClickEvents {
  /** Handler that is called when the click is released over the target. */
  onClick?: (event: ClickEvent) => void;
}
