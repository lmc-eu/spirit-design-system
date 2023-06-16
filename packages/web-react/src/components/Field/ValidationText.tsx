import React, { ElementType } from 'react';
import { ValidationTextProp } from '../../types';

export interface ValidationTextProps extends ValidationTextProp {
  className?: string;
  elementType?: ElementType;
}

const defaultProps = {
  elementType: 'div',
  className: undefined,
};

export const ValidationText = (props: ValidationTextProps) => {
  const { className, validationText, elementType: ElementTag = 'div' } = props;

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
