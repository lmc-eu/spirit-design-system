/**
 * Wait for transitionend if there's a transition running.
 * Otherwise resolve immediately.
 *
 * @param element - The HTML element to wait for transition end
 * @returns {Promise<void>} Promise that resolves when the transition ends or immediately if no transition
 */
export function waitForTransitionEnd(element: HTMLElement): Promise<void> {
  return new Promise((resolve) => {
    const computedStyle = window.getComputedStyle(element);
    const duration = parseFloat(computedStyle.transitionDuration || '0');
    const delay = parseFloat(computedStyle.transitionDelay || '0');
    const total = (duration + delay) * 1000;

    if (total === 0) {
      resolve(); // No transition

      return;
    }

    const onEnd = () => {
      element.removeEventListener('transitionend', onEnd);
      resolve();
    };

    element.addEventListener('transitionend', onEnd);

    // Fallback in case transitionend never fires
    setTimeout(() => {
      element.removeEventListener('transitionend', onEnd);
      resolve();
    }, total + 50);
  });
}
