import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks';
import { SpiritToastBarProps } from '../../types';

export const useToastBarStyleProps = (props: Omit<SpiritToastBarProps, 'onClose'>) => {
  const { color, isDismissible, ...restProps } = props;

  const toastBarClass = useClassNamePrefix('ToastBar');
  const toastBarBoxClass = `${toastBarClass}__box`;
  const toastBarContentClass = `${toastBarClass}__content`;
  const toastBarMessageClass = `${toastBarClass}__message`;
  const colorClass = `${toastBarClass}--${color || 'inverted'}`;
  const dismissibleClass = `${toastBarClass}--dismissible`;
  const rootClass = classNames(toastBarClass, colorClass, isDismissible && dismissibleClass);

  return {
    classProps: {
      root: rootClass,
      box: toastBarBoxClass,
      content: toastBarContentClass,
      message: toastBarMessageClass,
    },
    props: restProps,
  };
};
