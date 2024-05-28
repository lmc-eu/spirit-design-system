import Toast from '../../../js/Toast';

export const addDynamicToast = (event, containerId) => {
  const formElement = event.target.closest('form');
  const config = {
    containerId,
    autoCloseInterval: formElement.querySelector('#toast-auto-close-interval').value,
    color: formElement.querySelector('#toast-color').value,
    enableAutoClose: formElement.querySelector('#toast-enable-auto-close').checked,
    message: formElement.querySelector('#toast-message').value,
    linkContent: formElement.querySelector('#toast-enable-link').checked
      ? formElement.querySelector('#toast-link').value
      : null,
    linkProps: {
      href: '#',
    },
    hasIcon: formElement.querySelector('#toast-has-icon').checked,
    id: `my-dynamic-toast-${Date.now()}`,
    isDismissible: formElement.querySelector('#toast-is-dismissible').checked,
  };

  const toast = new Toast(null, config);

  toast.show();

  console.log('Created dynamic toast with config:', config);
};

export const clearQueue = (event, containerId) => {
  const container = document.getElementById(containerId);
  const children = container.querySelectorAll('.ToastBar');

  let cleared = 0;

  children.forEach((element) => {
    const instance = Toast.getOrCreateInstance(element);

    if (instance instanceof Toast && instance?.isShown) {
      instance?.hide();
      cleared += 1;
    }
  });

  if (cleared) {
    console.log('Cleared toast queue of length:', cleared);
  } else {
    console.log('No toasts to clear.');
  }
};
