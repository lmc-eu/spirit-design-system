import React from 'react';
import classNames from 'classnames';
import { useFieldGroupStyleProps } from './useFieldGroupStyleProps';
import { SpiritFieldGroupProps } from '../../types';
import { useStyleProps } from '../../hooks';
import { useValidationText } from '../Field/useValidationText';

const FieldGroup = (props: SpiritFieldGroupProps) => {
  const {
    label,
    isRequired,
    isDisabled,
    isFluid,
    isLabelHidden,
    helperText,
    validationState,
    validationText,
    children,
    ...rest
  } = props;

  const { classProps } = useFieldGroupStyleProps({ isFluid, isRequired, validationState });
  const { styleProps, props: transferProps } = useStyleProps(rest);

  const renderValidationText = useValidationText({
    validationTextClassName: classProps.validationText,
    validationState,
    validationText,
  });

  return (
    <fieldset
      {...transferProps}
      {...styleProps}
      className={classNames(classProps.root, styleProps.className)}
      disabled={isDisabled}
    >
      <legend className="accessibility-hidden">{label}</legend>
      {!isLabelHidden && (
        <div className={classProps.label} aria-hidden="true">
          {label}
        </div>
      )}
      <div className={classProps.fields}>{children}</div>
      {helperText && <div className={classProps.helperText}>{helperText}</div>}
      {renderValidationText}
    </fieldset>
  );
};

export default FieldGroup;
