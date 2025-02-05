'use client';

import React, { ElementType, useEffect } from 'react';
import { mergeStyleProps } from '../../utils';
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
    elementType: ElementTag = defaultProps.elementType as ElementType,
    id,
    registerAria,
    role,
    validationText,
    ...restProps
  } = propsWithDefaults;
  const mergedStyleProps = mergeStyleProps(ElementTag, { restProps });

  useEffect(() => {
    registerAria?.({ add: id });

    return () => {
      registerAria?.({ remove: id });
    };
  }, [id, registerAria]);

  if (validationText) {
    return Array.isArray(validationText) ? (
      <ElementTag {...restProps} {...mergedStyleProps} id={id} role={role}>
        <ul>
          {validationText.map((item) => (
            <li key={`validationText_${item}`}>{item}</li>
          ))}
        </ul>
      </ElementTag>
    ) : (
      <ElementTag {...restProps} {...mergedStyleProps} id={id} role={role}>
        {validationText}
      </ElementTag>
    );
  }

  return null;
};

ValidationText.spiritComponent = 'ValidationText';

export default ValidationText;
