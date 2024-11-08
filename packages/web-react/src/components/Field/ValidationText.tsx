'use client';

import React, { ElementType, useEffect } from 'react';
import { ValidationTextProps } from './types';

const defaultProps: Partial<ValidationTextProps> = {
  className: undefined,
  elementType: 'div',
  id: undefined,
  registerAria: undefined,
};

const ValidationText = <T extends ElementType = 'div'>(props: ValidationTextProps<T>) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const {
    className,
    validationText,
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

  if (validationText) {
    return Array.isArray(validationText) ? (
      <ul className={className} id={id}>
        {validationText.map((item) => (
          <li key={`validationText_${item}`}>{item}</li>
        ))}
      </ul>
    ) : (
      <ElementTag className={className} id={id}>
        {validationText}
      </ElementTag>
    );
  }

  return null;
};

export default ValidationText;
