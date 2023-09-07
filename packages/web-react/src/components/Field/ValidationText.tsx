import React, { ElementType, useEffect } from 'react';
import { ValidationTextProp } from '../../types';
import { RegisterType } from './useAriaIds';

export interface ValidationTextProps extends ValidationTextProp {
  className?: string;
  elementType?: ElementType;
  id?: string;
  registerAria?: RegisterType;
}

const defaultProps = {
  className: undefined,
  elementType: 'div',
  id: undefined,
  registerAria: undefined,
};

export const ValidationText = (props: ValidationTextProps) => {
  const { className, validationText, elementType: ElementTag = 'div', id, registerAria } = props;

  useEffect(() => {
    registerAria?.({ add: id });

    return () => {
      registerAria?.({ remove: id });
    };
  }, [id, registerAria]);

  return Array.isArray(validationText) ? (
    <ul className={className}>
      {validationText.map((item) => (
        <li key={`validationText_${item}`}>{item}</li>
      ))}
    </ul>
  ) : (
    <ElementTag className={className}>{validationText}</ElementTag>
  );
};

ValidationText.defaultProps = defaultProps;

export default ValidationText;
