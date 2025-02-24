'use client';

import React, { ElementType, useEffect } from 'react';
import { Icon } from '../Icon';
import { ValidationTextProps } from './types';
import { useValidationIcon } from './useValidationIcon';

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
    hasValidationStateIcon,
    registerAria,
    role,
    validationText,
  } = propsWithDefaults;
  const validationIconName = useValidationIcon({ hasValidationStateIcon });

  useEffect(() => {
    registerAria?.({ add: id });

    return () => {
      registerAria?.({ remove: id });
    };
  }, [id, registerAria]);

  if (!validationText) {
    return null;
  }

  const nonArrayValidationText =
    React.isValidElement(validationText) && hasValidationStateIcon ? (
      <ElementTag>{validationText}</ElementTag>
    ) : (
      validationText
    );

  return (
    <ElementTag className={className} id={id} role={role}>
      {hasValidationStateIcon && <Icon name={validationIconName} boxSize="20" />}
      {Array.isArray(validationText) ? (
        <ul>
          {validationText.map((item) => (
            <li key={`validationText_${item}`}>{item}</li>
          ))}
        </ul>
      ) : (
        nonArrayValidationText
      )}
    </ElementTag>
  );
};

export default ValidationText;
