import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritFieldGroupProps } from '../../types';
import { useValidationText } from '../Field/useValidationText';
import { VisuallyHidden } from '../VisuallyHidden';
import { useFieldGroupStyleProps } from './useFieldGroupStyleProps';

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
      <VisuallyHidden elementType="legend">{label}</VisuallyHidden>
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
