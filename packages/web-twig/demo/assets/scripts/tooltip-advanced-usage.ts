import { Tooltip } from '@lmc-eu/spirit-web/src/js/index.esm';

const checkboxFlip = document.getElementById('my-advanced-flip') as HTMLInputElement;
const checkboxFlipCrossAxis = document.getElementById('my-advanced-flip-cross-axis') as HTMLInputElement;
const checkboxShift = document.getElementById('my-advanced-shift') as HTMLInputElement;
const checkboxSize = document.getElementById('my-advanced-size') as HTMLInputElement;
const select = document.getElementById('my-advanced-select') as HTMLSelectElement;
const selectFallback = document.getElementById('my-advanced-select-fallback') as HTMLSelectElement;

const tooltip = Tooltip.getOrCreateInstance(document.getElementById('my-advanced-tooltip'));

checkboxFlip.addEventListener('change', () => tooltip.updateConfig({ enableFlipping: checkboxFlip.checked }));

checkboxFlipCrossAxis.addEventListener('change', () => {
  tooltip.updateConfig({ enableFlippingCrossAxis: checkboxFlipCrossAxis.checked });
});

checkboxShift.addEventListener('change', () => {
  tooltip.updateConfig({ enableShifting: checkboxShift.checked });
});

checkboxSize.addEventListener('change', () => {
  tooltip.updateConfig({ enableSizing: checkboxSize.checked });
});

select.addEventListener('change', () => {
  tooltip.updateConfig({ placement: select.value });
});

selectFallback.addEventListener('change', () => {
  tooltip.updateConfig({ flipFallbackPlacements: selectFallback.value });
});

function centerContentInViewport() {
  const viewport = document.getElementById('my-advanced-viewport');
  const content = document.getElementById('my-advanced-content');

  if (!viewport || !content) {
    return;
  }

  const scrollLeft = (content.offsetWidth - viewport.offsetWidth) / 2;
  const scrollTop = (content.offsetHeight - viewport.offsetHeight) / 2;

  viewport.scrollLeft = scrollLeft;
  viewport.scrollTop = scrollTop;
}

centerContentInViewport();

window.addEventListener('resize', centerContentInViewport);
