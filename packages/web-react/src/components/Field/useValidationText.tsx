import React, { ElementType, ReactNode, useMemo } from 'react';
import { ValidationState, ValidationTextType } from '../../types';
import ValidationText from './ValidationText';

export interface UseValidationTextProps {
  validationElementType?: ElementType;
  validationState?: ValidationState;
  validationText?: ValidationTextType;
  validationTextClassName?: string;
}

export const useValidationText = (props: UseValidationTextProps): ReactNode => {
  const { validationElementType, validationState, validationText, validationTextClassName } = props;

  return useMemo(
    () =>
      validationState &&
      validationText && (
        <ValidationText
          className={validationTextClassName}
          elementType={validationElementType}
          validationText={validationText}
        />
      ),
    [validationElementType, validationState, validationText, validationTextClassName],
  );
};
