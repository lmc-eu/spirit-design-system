'use client';

import React, { type ElementType } from 'react';
import { useStyleProps } from '../../hooks';
import { type SpiritHiddenProps } from '../../types';
import { mergeStyleProps } from '../../utils';

const defaultProps = {
  elementType: 'span' as const,
};

const Hidden = <T extends ElementType = 'span'>(props: SpiritHiddenProps<T>) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { elementType: ElementTag = 'span', children, on, from, ...restProps } = propsWithDefaults;

  const stylePropsWithMapping = {
    ...restProps,
    hideOn: on || restProps.hideOn,
    hideFrom: from || restProps.hideFrom,
  };

  const { styleProps, props: otherProps } = useStyleProps(stylePropsWithMapping);
  const mergedStyleProps = mergeStyleProps(ElementTag, { styleProps });

  return (
    <ElementTag {...otherProps} {...mergedStyleProps}>
      {children}
    </ElementTag>
  );
};

Hidden.spiritComponent = 'Hidden';
Hidden.spiritDefaultElement = 'span' as const;
Hidden.spiritDefaultProps = null as unknown as SpiritHiddenProps<'span'>;

export default Hidden;
