'use client';

import React, { ElementType, useEffect } from 'react';
import { useStyleProps } from '../../hooks';
import { mergeStyleProps } from '../../utils';
import { HelperTextProps } from './types';

const defaultProps: Partial<HelperTextProps> = {
  elementType: 'div',
  id: undefined,
  registerAria: undefined,
};

const HelperText = <T extends ElementType = 'div'>(props: HelperTextProps<T>) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const {
    helperText,
    elementType: ElementTag = defaultProps.elementType as ElementType,
    id,
    registerAria,
    ...restProps
  } = propsWithDefaults;
  const { styleProps, props: transferProps } = useStyleProps(restProps);
  const mergedStyleProps = mergeStyleProps(ElementTag, { styleProps, transferProps });

  useEffect(() => {
    registerAria?.({ add: id });

    return () => {
      registerAria?.({ remove: id });
    };
  }, [id, registerAria]);

  if (helperText) {
    return (
      <ElementTag {...transferProps} {...mergedStyleProps} id={id}>
        {helperText}
      </ElementTag>
    );
  }

  return null;
};

HelperText.spiritComponent = 'HelperText';

export default HelperText;
