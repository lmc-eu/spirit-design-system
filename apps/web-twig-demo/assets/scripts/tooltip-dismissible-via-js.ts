import { Tooltip } from '@lmc-eu/spirit-web/src/js/index.esm';

const myTooltipEl = document.getElementById('my-dismissible-tooltip2');
const myTooltip = new Tooltip(myTooltipEl);

if (!window.localStorage.getItem('my-tooltip-twig')) {
  myTooltip.show();
}

document.getElementById('my-dismissible-button').addEventListener('click', () => {
  myTooltip.show();
  window.localStorage.removeItem('my-tooltip-twig');
});

document
  .getElementById('my-dismissible-tooltip2')
  .querySelector('button')
  .addEventListener('click', () => {
    myTooltip.hide();
    window.localStorage.setItem('my-tooltip-twig', 'true');
  });
