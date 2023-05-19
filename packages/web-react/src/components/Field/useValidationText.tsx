import React, { ElementType, ReactNode, useMemo } from 'react';
import { ValidationState, ValidationTextType } from '../../types';
import ValidationText from './ValidationText';

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
    validationElementType,
    /** @deprecated Will be removed in the next major version. */
    requireValidationState = true,
  } = props;

  return useMemo(
    () =>
      (requireValidationState && !validationState) || !validationText ? null : (
        <ValidationText
          className={validationTextClassName}
          validationText={validationText}
          elementType={validationElementType}
        />
      ),
    [validationState, validationText, validationElementType, validationTextClassName, requireValidationState],
  );
};
