'use client';

import React, { ElementType, useEffect } from 'react';
import { useStyleProps } from '../../hooks';
import { mergeStyleProps } from '../../utils';
import { Icon } from '../Icon';
import { ValidationTextProps } from './types';
import { useValidationIcon } from './useValidationIcon';

const defaultProps: Partial<ValidationTextProps> = {
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
    hasValidationStateIcon,
    registerAria,
    role,
    validationText,
    ...restProps
  } = propsWithDefaults;
  const validationIconName = useValidationIcon({ hasValidationStateIcon });
  const { styleProps, props: transferProps } = useStyleProps(restProps);
  const mergedStyleProps = mergeStyleProps(ElementTag, { styleProps, transferProps });

  useEffect(() => {
    registerAria?.({ add: id });

    return () => {
      registerAria?.({ remove: id });
    };
  }, [id, registerAria]);

  if (!validationText) {
    return null;
  }

  const nonArrayValidationText = hasValidationStateIcon ? <div>{validationText}</div> : validationText;

  return (
    <ElementTag {...transferProps} {...mergedStyleProps} id={id} role={role}>
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

ValidationText.spiritComponent = 'ValidationText';

export default ValidationText;
