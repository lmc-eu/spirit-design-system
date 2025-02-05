'use client';

import React, { ElementType, useEffect } from 'react';
import { mergeStyleProps } from '../../utils';
import { HelperTextProps } from './types';

const defaultProps: Partial<HelperTextProps> = {
  className: undefined,
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
  const mergedStyleProps = mergeStyleProps(ElementTag, { restProps });

  useEffect(() => {
    registerAria?.({ add: id });

    return () => {
      registerAria?.({ remove: id });
    };
  }, [id, registerAria]);

  if (helperText) {
    return (
      <ElementTag {...restProps} {...mergedStyleProps} id={id}>
        {helperText}
      </ElementTag>
    );
  }

  return null;
};

HelperText.spiritComponent = 'HelperText';

export default HelperText;
