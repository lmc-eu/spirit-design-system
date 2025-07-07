import { cssVariablePrefix } from '@lmc-eu/spirit-design-tokens';
import classNames from 'classnames';
import { CSSProperties } from 'react';
import { IconDualtoneColors } from '../../constants';
import { useClassNamePrefix } from '../../hooks';
import { IconBoxSize, SpiritIconProps } from '../../types';

const setCustomDimension = (prefix: string, size: IconBoxSize): CSSProperties => {
  const style: CSSProperties = {};

  if (typeof size === 'object') {
    Object.entries(size).forEach(([breakpoint, breakpointSize]) => {
      const breakpointSuffix = breakpoint === 'mobile' ? '' : `-${breakpoint}`;

      (style as Record<string, string | undefined>)[`${prefix}${breakpointSuffix}`] = `${breakpointSize?.toString()}px`;
    });
  }

  return style;
};

export const useIconStyleProps = (props: SpiritIconProps) => {
  const { boxSize, dualtoneColor, name, ...otherProps } = props;
  const stylePrefix: string = `--${cssVariablePrefix}icon`;
  const isDualtoneIcon = String(name).includes('-dualtone');
  const dualtoneColorWithDefault = isDualtoneIcon && !dualtoneColor ? IconDualtoneColors.PRIMARY : dualtoneColor;

  const iconClass = useClassNamePrefix('Icon');
  const iconDualtoneColorClass = `${iconClass}--dualtone-${dualtoneColorWithDefault}`;
  const classProps = classNames(iconClass, {
    [iconDualtoneColorClass]: isDualtoneIcon,
  });

  const customizedIconStyle = {
    ...(boxSize ? setCustomDimension(`${stylePrefix}-size`, boxSize) : {}),
  };

  return {
    classProps,
    iconStyleProps: customizedIconStyle,
    props: otherProps,
  };
};
