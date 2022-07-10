// To fully understand Floating UI and its options, please consult Floating UI docs:
// @see https://floating-ui.com

import { autoUpdate, computePosition, flip } from 'https://cdn.skypack.dev/@floating-ui/dom@0.5.4';

const button = document.getElementById('my-button');
const tooltip = document.getElementById('my-advanced-tooltip');

const cleanup = autoUpdate(button, tooltip, () => {
  computePosition(button, tooltip, {
    placement: 'top',
    middleware: [flip()],
  }).then(({ x, y, placement }) => {
    Object.assign(tooltip.style, {
      top: `${y}px`,
      left: `${x}px`,
    });
    tooltip.dataset.placement = placement;
  });
});

// Call cleanup function when tooltip is removed from DOM.
// cleanup();
