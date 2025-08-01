'use client';

import classNames from 'classnames';
import React, { type ElementType } from 'react';
import { EmotionColors, SizesExtended } from '../../constants';
import { useStyleProps } from '../../hooks';
import type { SpiritIconBoxProps } from '../../types';
import { Box } from '../Box';
import { Icon } from '../Icon';
import { IconBoxShapes } from './constants';
import { useIconBoxColors } from './useIconBoxColors';
import { useIconBoxStyleProps } from './useIconBoxStyleProps';

const defaultProps: Partial<SpiritIconBoxProps> = {
  shape: IconBoxShapes.ROUNDED,
  color: EmotionColors.INFORMATIVE,
  elementType: 'div',
  hasBorder: true,
  isSubtle: true,
  size: SizesExtended.MEDIUM,
};

const IconBox = <T extends ElementType = 'div'>(props: SpiritIconBoxProps<T>) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { elementType, shapes, color, iconName, isSubtle, hasBorder, size, ...restProps } = propsWithDefaults;

  const { colors } = useIconBoxColors(color, isSubtle);
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
      backgroundColor={colors.background}
      elementType={elementType}
      {...(hasBorder
        ? {
            borderWidth: '100',
            borderColor: colors.border,
          }
        : {
            padding,
          })}
      borderRadius={shapesProps}
      textColor={colors.text}
      UNSAFE_className={classNames(styleProps.className, 'd-inline-flex')}
      UNSAFE_style={{
        ...styleProps.style,
        ...iconBoxStyleProps,
      }}
    >
      <Icon aria-hidden="true" boxSize={iconSize} name={iconName} />
    </Box>
  );
};

IconBox.spiritComponent = 'IconBox';

export default IconBox;
