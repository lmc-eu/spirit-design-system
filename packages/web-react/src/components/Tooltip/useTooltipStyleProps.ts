import { useMemo } from 'react';
import classNames from 'classnames';
import { SpiritTooltipProps, TooltipProps } from '../../types';
import { useClassNamePrefix, useDeprecationMessage } from '../../hooks';
import { kebabCaseToCamelCase } from '../../utils';

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
  const { placement = 'bottom', isDismissible, open, ...modifiedProps } = props;

  useDeprecationMessage({
    method: 'custom',
    trigger: placement === 'off',
    componentName: 'Tooltip',
    customText:
      'The "off" value of property "placement" is deprecated and will be removed in the next major version. Use TooltipModern component instead.',
  });

  const tooltipClass = useClassNamePrefix('Tooltip');
  const tooltipWrapperClass = `${tooltipClass}Wrapper`;
  const arrowClass = `${tooltipClass}__arrow`;
  const closeButtonClass = `${tooltipClass}__close`;
  const rootDismissibleClass = `${tooltipClass}--dismissible`;
  const rootPlacementClass = placement !== 'off' ? `${tooltipClass}--${kebabCaseToCamelCase(placement)}` : null;
  const rootHiddenClass = 'is-hidden';

  const isHiddenClass = useMemo(() => open === false, [open]);

  const tooltipClassName = classNames(tooltipClass, rootPlacementClass, {
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
