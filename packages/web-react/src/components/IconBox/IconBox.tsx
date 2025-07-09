'use client';

import React, { ElementType } from 'react';
import { BackgroundColors, SizesExtended } from '../../constants';
import { useStyleProps } from '../../hooks';
import type { SpiritIconBoxProps } from '../../types';
import { Box } from '../Box';
import { Icon } from '../Icon';
import { IconBoxShapes } from './constants';
import { useIconBoxColors } from './useIconBoxColors';
import { useIconBoxStyleProps } from './useIconBoxStyleProps';

const defaultProps: Partial<SpiritIconBoxProps> = {
  shape: IconBoxShapes.ROUNDED,
  color: BackgroundColors.PRIMARY,
  elementType: 'div',
  hasBorder: true,
  size: SizesExtended.MEDIUM,
};

const IconBox = <T extends ElementType = 'div'>(props: SpiritIconBoxProps<T>) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { elementType, shapes, color, iconName, hasBorder, size, ...restProps } = propsWithDefaults;

  const { colors } = useIconBoxColors(color);
  const { backgroundColor, borderColor, textColor } = colors;
  const {
    props: modifiedProps,
    iconBoxStyles: iconBoxStyleProps,
    shapesProps,
    sizeProps: { padding, iconSize },
  } = useIconBoxStyleProps({
    size,
    hasBorder,
    shapes,
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
      borderRadius={shapesProps}
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
