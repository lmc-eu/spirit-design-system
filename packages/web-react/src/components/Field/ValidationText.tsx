'use client';

import React, { ElementType, useEffect } from 'react';
import { ValidationTextProps } from './types';

const defaultProps: Partial<ValidationTextProps> = {
  className: undefined,
  elementType: 'div',
  id: undefined,
  registerAria: undefined,
  role: undefined,
};

const ValidationText = <T extends ElementType = 'div'>(props: ValidationTextProps<T>) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const {
    className,
    elementType: ElementTag = defaultProps.elementType as ElementType,
    id,
    registerAria,
    role,
    validationText,
  } = propsWithDefaults;

  useEffect(() => {
    registerAria?.({ add: id });

    return () => {
      registerAria?.({ remove: id });
    };
  }, [id, registerAria]);

  if (validationText) {
    return Array.isArray(validationText) ? (
      <ElementTag className={className} id={id} role={role}>
        <ul>
          {validationText.map((item) => (
            <li key={`validationText_${item}`}>{item}</li>
          ))}
        </ul>
      </ElementTag>
    ) : (
      <ElementTag className={className} id={id} role={role}>
        {validationText}
      </ElementTag>
    );
  }

  return null;
};

export default ValidationText;
