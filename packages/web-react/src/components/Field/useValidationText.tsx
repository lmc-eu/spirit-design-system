import React, { ElementType, ReactNode, useMemo } from 'react';
import { ValidationState, ValidationTextType } from '../../types';
import ValidationText from './ValidationText';

export interface UseValidationTextProps {
  validationTextClassName?: string;
  validationState?: ValidationState;
  validationText?: ValidationTextType;
  validationElementType?: ElementType;
}

export const useValidationText = (props: UseValidationTextProps): ReactNode => {
  const { validationTextClassName, validationState, validationText, validationElementType } = props;

  return useMemo(
    () =>
      validationState &&
      validationText && (
        <ValidationText
          className={validationTextClassName}
          validationText={validationText}
          elementType={validationElementType}
        />
      ),
    [validationState, validationText, validationElementType, validationTextClassName],
  );
};
