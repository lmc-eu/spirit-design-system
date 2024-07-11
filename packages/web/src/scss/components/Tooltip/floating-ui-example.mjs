import Tooltip from '../../../js/Tooltip';

const checkboxFlip = document.getElementById('my-advanced-flip');
const checkboxFlipCrossAxis = document.getElementById('my-advanced-flip-cross-axis');
const checkboxShift = document.getElementById('my-advanced-shift');
const checkboxSize = document.getElementById('my-advanced-size');
const select = document.getElementById('my-advanced-select');
const selectFallback = document.getElementById('my-advanced-select-fallback');
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
