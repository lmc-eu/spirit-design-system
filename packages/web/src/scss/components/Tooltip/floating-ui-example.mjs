// To fully understand Floating UI and its options, please consult Floating UI docs:
// @see https://floating-ui.com

import {
  arrow,
  autoUpdate,
  computePosition,
  flip,
  offset,
  limitShift,
  shift,
  size,
} from 'https://cdn.skypack.dev/@floating-ui/dom@1.5.3';

const button = document.getElementById('my-button');
const tooltip = document.getElementById('my-advanced-tooltip');
const select = document.getElementById('my-advanced-select');
const viewport = document.getElementById('my-advanced-viewport');
const content = document.getElementById('my-advanced-content');
const arrowEl = tooltip.querySelector('[data-spirit-element="arrow"]');

const tooltipComputedStyle = window.getComputedStyle(tooltip);
const tooltipMaxWidth = parseInt(tooltipComputedStyle.maxWidth, 10);
const tooltipOffset = parseInt(tooltipComputedStyle.getPropertyValue('--tooltip-offset'), 10);
const arrowCornerOffset = parseInt(
  window.getComputedStyle(arrowEl).getPropertyValue('--tooltip-arrow-corner-offset'),
  10,
);

function updateTooltipPosition() {
  computePosition(button, tooltip, {
    placement: tooltip.dataset.spiritPlacement,
    middleware: [
      offset(tooltipOffset),
      flip({
        crossAxis: false,
      }),
      shift({
        limiter: limitShift({
          offset: ({ rects }) => ({
            mainAxis: rects.reference.height,
          }),
        }),
      }),
      size({
        apply({ availableWidth }) {
          Object.assign(tooltip.style, {
            maxWidth: `${tooltipMaxWidth < availableWidth ? tooltipMaxWidth : availableWidth}px`,
          });
        },
      }),
      arrow({ element: arrowEl, padding: arrowCornerOffset }), // arrow() should be placed at the end
    ],
  }).then(({ x, y, middlewareData, placement }) => {
    Object.assign(tooltip.style, {
      top: `${y}px`,
      left: `${x}px`,
    });

    const side = placement.split('-')[0];

    const staticSide = {
      top: 'bottom',
      right: 'left',
      bottom: 'top',
      left: 'right',
    }[side];

    if (middlewareData.arrow) {
      const offset =
        staticSide === 'top' || staticSide === 'bottom'
          ? arrowEl.offsetHeight
          : (arrowEl.offsetHeight + arrowEl.offsetWidth) / 2;
      const { x, y } = middlewareData.arrow;
      Object.assign(arrowEl.style, {
        left: x != null ? `${x}px` : '',
        top: y != null ? `${y}px` : '',
        bottom: '',
        right: '',
        [staticSide]: `-${offset}px`,
      });
    }

    tooltip.dataset.spiritPlacement = placement;
  });
}

window.onload = () => {
  viewport.scrollLeft = (content.offsetWidth - viewport.offsetWidth) / 2;
};

const cleanup = autoUpdate(button, tooltip, updateTooltipPosition);

select.addEventListener('change', () => {
  tooltip.dataset.spiritPlacement = select.value;
  updateTooltipPosition();
});

// Call cleanup function when tooltip is removed from DOM.
// cleanup();
