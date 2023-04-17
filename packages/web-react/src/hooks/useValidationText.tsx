import React, { ReactNode, useMemo } from 'react';
import { ValidationState, ValidationTextType } from '../types';

export interface UseValidationTextProps {
  validationTextClassName?: string;
  validationState?: ValidationState;
  validationText?: ValidationTextType;
}

export const useValidationText = (props: UseValidationTextProps): ReactNode => {
  const { validationTextClassName, validationState, validationText } = props;

  return useMemo(() => {
    if (!(validationState && validationText)) {
      return;
    }

    const getMessage = (message: string, index?: number) => (
      <div className={validationTextClassName} key={`validationText__${index}`}>
        {message}
      </div>
    );

    if (typeof validationText === 'string') {
      return getMessage(validationText);
    }

    return <>{validationText.map((text, index) => getMessage(text, index))}</>;
  }, [validationTextClassName, validationState, validationText]);
};
