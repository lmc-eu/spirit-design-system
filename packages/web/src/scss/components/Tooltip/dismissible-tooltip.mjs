import Tooltip from '../../../js/Tooltip';

const myTooltipEl = document.getElementById('my-dismissible-tooltip-with-floating-ui');
const myTooltip = new Tooltip(myTooltipEl);

if (!window.localStorage.getItem('my-tooltip')) {
  myTooltip.show();
}

document.getElementById('my-dismissible-button').addEventListener('click', () => {
  myTooltip.show();
  window.localStorage.removeItem('my-tooltip');
});

document.getElementById('my-dismissible-tooltip-with-floating-ui-button').addEventListener('click', () => {
  myTooltip.hide();
  window.localStorage.setItem('my-tooltip', true);
});
