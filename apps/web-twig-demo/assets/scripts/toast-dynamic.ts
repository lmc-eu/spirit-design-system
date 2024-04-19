import { Toast } from '@lmc-eu/spirit-web/src/js/index.esm';

const addDynamicToast = (event, containerId) => {
  const formElement = event.target.closest('form');
  const config = {
    color: formElement.querySelector('#toast-color').value,
    containerId,
    content: formElement.querySelector('#toast-content').value,
    hasIcon: formElement.querySelector('#toast-has-icon').checked,
    id: `my-dynamic-toast-${Date.now()}`,
    isDismissible: formElement.querySelector('#toast-is-dismissible').checked,
  };

  const toast = new Toast(null, config);
  toast.show();
  console.log('Created dynamic toast with config:', config);
};

// Make it available in the global scope
window.addDynamicToast = addDynamicToast;

export default addDynamicToast;
