import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks';
import { ToastBarProps } from '../../types';

export const useToastBarStyleProps = (props: ToastBarProps) => {
  const { color, isDismissible, ...restProps } = props;

  const toastBarClass = useClassNamePrefix('ToastBar');
  const toastBarBoxClass = `${toastBarClass}__box`;
  const toastBarContainerClass = `${toastBarClass}__container`;
  const toastBarContentClass = `${toastBarClass}__content`;
  const toastBarLinkClass = `${toastBarClass}__link`;
  const colorClass = `${toastBarClass}--${color || 'inverted'}`;
  const dismissibleClass = `${toastBarClass}--dismissible`;
  const rootClass = classNames(toastBarClass, colorClass, isDismissible && dismissibleClass);

  return {
    classProps: {
      root: rootClass,
      box: toastBarBoxClass,
      container: toastBarContainerClass,
      content: toastBarContentClass,
      link: toastBarLinkClass,
    },
    props: restProps,
  };
};
