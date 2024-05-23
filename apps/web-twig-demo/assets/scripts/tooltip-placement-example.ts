import { Tooltip } from '@lmc-eu/spirit-web/src/js/index.esm';
import { Placement } from '@floating-ui/dom';

const radios = document.querySelectorAll('input[type="radio"]');

const tooltip = document.getElementById('tooltip-placements-example');
const tooltipText = document.getElementById('tooltip-placements-example-text');
const myTooltip = new Tooltip(tooltip);

myTooltip.show();

radios.forEach((radio) => {
  radio.addEventListener('change', () => {
    const placement = (radio as HTMLInputElement).value;

    myTooltip.updateConfig({ placement: placement as Placement });
    myTooltip.show();

    tooltipText.textContent = placement;
  });
});
