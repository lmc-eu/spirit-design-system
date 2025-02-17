'use client';

import React, { ElementType, useEffect } from 'react';
import { mergeStyleProps } from '../../utils';
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
    elementType: ElementTag = defaultProps.elementType as ElementType,
    id,
    hasValidationStateIcon,
    registerAria,
    role,
    validationText,
    ...restProps
  } = propsWithDefaults;
  const mergedStyleProps = mergeStyleProps(ElementTag, { restProps });
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

  const ValidationTextWrapper = ElementTag === 'div' ? 'div' : 'span';

  const nonArrayValidationText = hasValidationStateIcon ? (
    <ValidationTextWrapper>{validationText}</ValidationTextWrapper>
  ) : (
    validationText
  );

  return (
    <ElementTag {...restProps} {...mergedStyleProps} id={id} role={role}>
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
