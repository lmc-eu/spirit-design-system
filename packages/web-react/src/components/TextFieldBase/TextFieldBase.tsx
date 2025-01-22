'use client';

import classNames from 'classnames';
import React, { ForwardedRef, forwardRef } from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritTextFieldBaseProps, TextFieldBasePasswordToggleProps } from '../../types';
import { HelperText, ValidationText, useAriaIds } from '../Field';
import { useValidationTextRole } from '../Field/useValidationTextRole';
import TextFieldBaseInput from './TextFieldBaseInput';
import { useTextFieldBaseStyleProps } from './useTextFieldBaseStyleProps';
import withPasswordToggle from './withPasswordToggle';

const TextFieldBaseInputWithPasswordToggle = forwardRef(
  withPasswordToggle<TextFieldBasePasswordToggleProps>(TextFieldBaseInput),
);

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['_TextFieldBase'] }] */
const _TextFieldBase = (props: SpiritTextFieldBaseProps, ref: ForwardedRef<HTMLInputElement | HTMLTextAreaElement>) => {
  const {
    'aria-describedby': ariaDescribedBy = '',
    helperText,
    id,
    label,
    validationState,
    validationText,
    ...restProps
  } = props;
  const { classProps, props: modifiedProps } = useTextFieldBaseStyleProps({ id, label, validationState, ...restProps });
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);
  const [ids, register] = useAriaIds(ariaDescribedBy);
  const validationTextRole = useValidationTextRole({
    validationState,
    validationText,
  });

  return (
    <div {...styleProps} className={classNames(classProps.root, styleProps.className)}>
      <label htmlFor={id} className={classProps.label}>
        {label}
      </label>
      <TextFieldBaseInputWithPasswordToggle id={id} ref={ref} aria-describedby={ids.join(' ')} {...otherProps} />
      <HelperText
        className={classProps.helperText}
        id={`${id}__helperText`}
        registerAria={register}
        helperText={helperText}
      />
      {validationState && (
        <ValidationText
          className={classProps.validationText}
          elementType="span"
          id={`${id}__validationText`}
          validationText={validationText}
          registerAria={register}
          role={validationTextRole}
        />
      )}
    </div>
  );
};

const TextFieldBase = forwardRef<HTMLInputElement | HTMLTextAreaElement, SpiritTextFieldBaseProps>(_TextFieldBase);

export default TextFieldBase;
