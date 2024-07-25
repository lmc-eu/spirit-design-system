'use client';

import classNames from 'classnames';
import React, { ElementType } from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritItemProps } from '../../types';
import { HelperText } from '../Field';
import { Icon } from '../Icon';
import { useItemStyleProps } from './useItemStyleProps';

const Item = <T extends ElementType = 'button'>(props: SpiritItemProps<T>): JSX.Element => {
  const {
    label,
    elementType: ElementTag = 'button',
    iconName,
    helperText,
    isSelected,
    isDisabled,
    ...restProps
  } = props;
  const { classProps, props: modifiedProps } = useItemStyleProps({ isSelected, isDisabled, ...restProps });
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  return (
    <ElementTag
      {...otherProps}
      {...styleProps}
      aria-selected={!!isSelected}
      className={classNames(classProps.root, styleProps.className)}
      disabled={!!isDisabled && ElementTag === 'button'}
    >
      {iconName && (
        <span className={classNames(classProps.icon.root, classProps.icon.start)}>
          <Icon name={iconName} />
        </span>
      )}
      <span className={classProps.label}>{label}</span>
      <HelperText className={classProps.helperText} elementType="span" helperText={helperText} />
      {isSelected && (
        <span className={classNames(classProps.icon.root, classProps.icon.end)}>
          <Icon name="check-plain" />
        </span>
      )}
    </ElementTag>
  );
};

export default Item;
