import { cssVariablePrefix } from '@lmc-eu/spirit-design-tokens';
import { CSSProperties } from 'react';
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
  const { boxSize, ...otherProps } = props;
  const stylePrefix: string = `--${cssVariablePrefix}icon`;

  const iconClass = useClassNamePrefix('Icon');

  const customizedIconStyle = {
    ...(boxSize ? setCustomDimension(`${stylePrefix}-size`, boxSize) : {}),
  };

  return {
    classProps: iconClass,
    iconStyleProps: customizedIconStyle,
    props: otherProps,
  };
};
