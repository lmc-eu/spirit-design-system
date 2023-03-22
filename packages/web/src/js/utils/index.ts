/**
 * Trick to restart an element's animation
 *
 * @param element
 * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
 */
const reflow = (element: HTMLElement): void => {
  // eslint-disable-next-line no-unused-expressions
  element.offsetHeight;
};

export { reflow };
export * from './ComponentFunctions';
export * from './Deprecations';
export * from './Elements';
export { default as ScrollControl } from './ScrollControl';
export * from './Transitions';
