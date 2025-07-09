'use client';

import React, { ElementType } from 'react';
import { BackgroundColors, SizesExtended } from '../../constants';
import { useStyleProps } from '../../hooks';
import { SpiritIconBoxProps } from '../../types';
import { Box } from '../Box';
import { Icon } from '../Icon';
import { useIconBoxColors } from './useIconBoxColors';
import { useIconBoxStyleProps } from './useIconBoxStyleProps';

const defaultProps: Partial<SpiritIconBoxProps> = {
  borderRadius: 'rounded',
  color: BackgroundColors.PRIMARY,
  elementType: 'div',
  hasBorder: true,
  size: SizesExtended.MEDIUM,
};

const IconBox = <T extends ElementType = 'div'>(props: SpiritIconBoxProps<T>) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { elementType, borderRadius, color, iconName, hasBorder, size, ...restProps } = propsWithDefaults;

  const { colors } = useIconBoxColors(color);
  const { backgroundColor, borderColor, textColor } = colors;
  const {
    props: modifiedProps,
    iconBoxStyles: iconBoxStyleProps,
    borderRadiusProps,
    sizeProps: { padding, iconSize },
  } = useIconBoxStyleProps({
    size,
    hasBorder,
    borderRadius,
    ...restProps,
  });
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  return (
    <Box
      {...otherProps}
      backgroundColor={backgroundColor}
      elementType={elementType}
      {...(hasBorder && {
        borderWidth: '100',
        borderColor,
        padding,
      })}
      borderRadius={borderRadiusProps}
      textColor={textColor}
      UNSAFE_className={styleProps.className}
      UNSAFE_style={{
        ...styleProps.style,
        ...iconBoxStyleProps,
      }}
    >
      <Icon aria-hidden="true" boxSize={iconSize} name={iconName} UNSAFE_className="d-block" />
    </Box>
  );
};

IconBox.spiritComponent = 'IconBox';

export default IconBox;
