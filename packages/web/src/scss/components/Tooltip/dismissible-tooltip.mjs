import Tooltip from '../../../js/Tooltip';

const buttonId = 'my-dismissible-button-with-local-storage';
const tooltipId = 'my-dismissible-tooltip-with-local-storage';
const closeButtonId = 'my-dismissible-tooltip-with-local-storage-close';
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

  if (!isToggled && !isShown) {
    window.localStorage.setItem(storageName, 'true');
    myTooltip.show();
  } else {
    window.localStorage.removeItem(storageName);
    myTooltip.hide();
  }
});

// close button inside the tooltip
document.getElementById(closeButtonId).addEventListener('click', () => {
  window.localStorage.removeItem(storageName);
  myTooltip.hide();
});
