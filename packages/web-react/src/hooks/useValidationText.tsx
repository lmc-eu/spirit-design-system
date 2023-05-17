import React, { ElementType, ReactNode, useMemo } from 'react';
import { ValidationState, ValidationTextType } from '../types';

export interface UseValidationTextProps {
  validationTextClassName?: string;
  validationState?: ValidationState;
  validationText?: ValidationTextType;
  validationElementType?: ElementType;
  /** @deprecated Will be removed in the next major version. */
  requireValidationState?: boolean;
}

export const useValidationText = (props: UseValidationTextProps): ReactNode => {
  const {
    validationTextClassName,
    validationState,
    validationText,
    validationElementType: ElementTag = 'div',
    /** @deprecated Will be removed in the next major version. */
    requireValidationState = true,
  } = props;

  return useMemo(() => {
    if (requireValidationState && !validationState) {
      return;
    }

    if (!validationText) {
      return;
    }

    if (Array.isArray(validationText)) {
      return (
        <ul className={validationTextClassName}>
          {validationText.map((item) => (
            <li key={`validationText_${item}`}>{item}</li>
          ))}
        </ul>
      );
    }

    return <ElementTag className={validationTextClassName}>{validationText}</ElementTag>;
  }, [validationState, validationText, ElementTag, validationTextClassName, requireValidationState]);
};
