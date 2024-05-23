import Tooltip from '../../../js/Tooltip';

const radios = document.querySelectorAll('input[type="radio"]');

const tooltip = document.getElementById('tooltip-placements-example');
const tooltipText = document.getElementById('tooltip-placements-example-text');
const myTooltip = new Tooltip(tooltip);

myTooltip.show();

radios.forEach((radio) => {
  radio.addEventListener('change', () => {
    const placement = radio.value;

    myTooltip.updateConfig({ placement });
    myTooltip.show();

    tooltipText.textContent = placement;
  });
});
