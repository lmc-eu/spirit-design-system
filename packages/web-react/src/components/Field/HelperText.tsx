'use client';

import React, { ElementType, useEffect } from 'react';
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
    className,
    elementType: ElementTag = defaultProps.elementType as ElementType,
    id,
    registerAria,
  } = propsWithDefaults;

  useEffect(() => {
    registerAria?.({ add: id });

    return () => {
      registerAria?.({ remove: id });
    };
  }, [id, registerAria]);

  if (helperText) {
    return (
      <ElementTag className={className} id={id}>
        {helperText}
      </ElementTag>
    );
  }

  return null;
};

export default HelperText;
