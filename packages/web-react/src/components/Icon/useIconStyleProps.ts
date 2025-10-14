import { cssVariablePrefix } from '@lmc-eu/spirit-design-tokens';
import classNames from 'classnames';
import { type CSSProperties } from 'react';
import { TextColors } from '../../constants';
import { useClassNamePrefix } from '../../hooks';
import type { IconBoxSize, SpiritIconProps } from '../../types';

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
  const { boxSize, color, name, ...otherProps } = props;
  const stylePrefix: string = `--${cssVariablePrefix}icon`;
  const isDualtoneIcon = String(name).includes('-dualtone');
  const dualtoneColorWithDefault = isDualtoneIcon && !color ? TextColors.PRIMARY : color;

  const iconClass = useClassNamePrefix('Icon');
  const iconDualtoneColorClass = `${iconClass}--${dualtoneColorWithDefault}`;
  const classProps = classNames(iconClass, {
    [iconDualtoneColorClass]: color || dualtoneColorWithDefault,
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
