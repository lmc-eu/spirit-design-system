import { useMemo } from 'react';
import classNames from 'classnames';
import { TooltipProps } from '../../types';
import { useClassNamePrefix } from '../../hooks';

type omittedProps = 'id' | 'onToggle';

export interface UseTooltipStyleProps extends TooltipProps {}

export interface UseTooltipStylePropsReturn {
  classProps: {
    rootClassName: string;
    wrapperClassName: string;
    arrowClassName: string;
    closeButtonClassName: string;
  };
  props: Omit<TooltipProps, omittedProps>;
}

export const useTooltipStyleProps = (props: Omit<UseTooltipStyleProps, omittedProps>): UseTooltipStylePropsReturn => {
  const { isDismissible, isOpen, ...modifiedProps } = props;
  const tooltipClass = useClassNamePrefix('Tooltip');
  const tooltipWrapperClass = `${tooltipClass}Wrapper`;
  const arrowClass = `${tooltipClass}__arrow`;
  const closeButtonClass = `${tooltipClass}__close`;
  const rootDismissibleClass = `${tooltipClass}--dismissible`;
  const rootHiddenClass = 'is-hidden';

  const isHiddenClass = useMemo(() => isOpen === false, [isOpen]);

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
