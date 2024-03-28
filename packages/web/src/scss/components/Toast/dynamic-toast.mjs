import Toast from '../../../js/Toast';

export const addDynamicToast = (event, containerId) => {
  const formElement = event.target.closest('form');
  const config = {
    color: formElement.querySelector('#toast-color').value,
    containerId: containerId,
    content: formElement.querySelector('#toast-content').value,
    hasIcon: formElement.querySelector('#toast-has-icon').checked,
    id: `my-dynamic-toast-${Date.now()}`,
    isDismissible: formElement.querySelector('#toast-is-dismissible').checked,
  };

  const toast = new Toast(null, config);

  toast.show();

  console.log('Created dynamic toast with config:', config);
};
