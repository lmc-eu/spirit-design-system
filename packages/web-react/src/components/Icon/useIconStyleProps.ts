import { CSSProperties } from 'react';
import { cssVariablePrefix } from '@lmc-eu/spirit-design-tokens/src/js';
import { IconBoxSize, IconProps } from '../../types';

const setCustomDimension = (prefix: string, size: IconBoxSize): CSSProperties => {
  const style: CSSProperties = {};

  if (typeof size === 'object') {
    Object.entries(size).forEach(([key, value]) => {
      const breakpointSuffix = key === 'mobile' ? '' : `-${key}`;

      (style as Record<string, string | undefined>)[`${prefix}${breakpointSuffix}`] = `${value?.toString()}px`;
    });
  }

  return style;
};

export const useIconStyleProps = (props: IconProps) => {
  const { boxSize, ...otherProps } = props;
  const stylePrefix: string = `--${cssVariablePrefix}icon`;

  const customizedIconStyle = {
    ...(boxSize ? setCustomDimension(`${stylePrefix}-width`, boxSize) : {}),
    ...(boxSize ? setCustomDimension(`${stylePrefix}-height`, boxSize) : {}),
  };

  return {
    iconStyleProps: customizedIconStyle,
    props: otherProps,
  };
};
