'use client';

import classNames from 'classnames';
import React, { type ElementType } from 'react';
import { BorderWidths, EmotionColors, SizesExtended } from '../../constants';
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
  const { elementType, shape, color, iconName, isSubtle, hasBorder, size, ...restProps } = propsWithDefaults;

  const { colors } = useIconBoxColors(color, isSubtle);
  const {
    iconBoxStyles: iconBoxStyleProps,
    props: modifiedProps,
    shapesProps,
    sizeProps: { padding, iconSize },
  } = useIconBoxStyleProps({
    size,
    shape,
    ...restProps,
  });
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  return (
    <Box
      {...otherProps}
      backgroundColor={colors.background}
      elementType={elementType}
      borderColor={hasBorder ? colors.border : undefined}
      borderRadius={shapesProps}
      borderWidth={hasBorder ? BorderWidths['100'] : undefined}
      padding={padding}
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
