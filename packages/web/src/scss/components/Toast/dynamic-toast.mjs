import Toast from '../../../js/Toast';

export const addDynamicToast = () => {
  const toast = new Toast(null, {
    color: 'success',
    containerId: 'toast-example',
    content: 'Dynamic toast added!',
    hasIcon: false,
    id: `my-dynamic-toast-${Date.now()}`,
  });

  toast.show();
};
