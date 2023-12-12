import { useMemo } from 'react';
import classNames from 'classnames';
import { SpiritTooltipProps, TooltipProps } from '../../types';
import { useClassNamePrefix } from '../../hooks';

export interface UseTooltipStyleProps extends SpiritTooltipProps {}

export interface UseTooltipStylePropsReturn {
  classProps: {
    rootClassName: string;
    wrapperClassName: string;
    arrowClassName: string;
    closeButtonClassName: string;
  };
  props: TooltipProps;
}

export const useTooltipStyleProps = (props: UseTooltipStyleProps): UseTooltipStylePropsReturn => {
  const { isDismissible, open, ...modifiedProps } = props;

  const tooltipClass = useClassNamePrefix('Tooltip');
  const tooltipWrapperClass = `${tooltipClass}Wrapper`;
  const arrowClass = `${tooltipClass}__arrow`;
  const closeButtonClass = `${tooltipClass}__close`;
  const rootDismissibleClass = `${tooltipClass}--dismissible`;
  const rootHiddenClass = 'is-hidden';

  const isHiddenClass = useMemo(() => open === false, [open]);

  const tooltipClassName = classNames(tooltipClass, {
    [rootDismissibleClass]: isDismissible,
    [rootHiddenClass]: isHiddenClass,
  });
  const arrowClassName = arrowClass;
  const closeButtonClassName = closeButtonClass;

  return {
    classProps: {
      rootClassName: tooltipClassName,
      wrapperClassName: tooltipWrapperClass,
      arrowClassName,
      closeButtonClassName,
    },
    props: modifiedProps,
  };
};
