import Tooltip from '../../../js/Tooltip';

const buttonId = 'my-dismissible-button';
const tooltipId = 'my-dismissible-tooltip-with-floating-ui';
const storageName = 'show-tooltip';
const myTooltipEl = document.getElementById(tooltipId);
const myTooltip = new Tooltip(myTooltipEl);

// show tooltip if it was toggled
if (window.localStorage.getItem(storageName)) {
  myTooltip.toggle();
}

// tooltip trigger button
document.getElementById(buttonId).addEventListener('click', () => {
  const isToggled = window.localStorage.getItem(storageName);
  const isShown = myTooltip.isShown();

  if (isToggled && !isShown) {
    window.localStorage.removeItem(storageName);
  } else {
    window.localStorage.setItem(storageName, true);
  }
});

// close button inside the tooltip
document.getElementById('my-dismissible-tooltip-button').addEventListener('click', () => {
  window.localStorage.removeItem(storageName);
});
