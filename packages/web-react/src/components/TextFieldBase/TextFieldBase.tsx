import classNames from 'classnames';
import React, { ForwardedRef, forwardRef } from 'react';
import { useDeprecationMessage, useStyleProps } from '../../hooks';
import { SpiritTextFieldBaseProps, TextFieldBasePasswordToggleProps } from '../../types';
import { HelperText, ValidationText, useAriaIds } from '../Field';
import TextFieldBaseInput from './TextFieldBaseInput';
import { useTextFieldBaseStyleProps } from './useTextFieldBaseStyleProps';
import withPasswordToggle from './withPasswordToggle';

const TextFieldBaseInputWithPasswordToggle = forwardRef(
  withPasswordToggle<TextFieldBasePasswordToggleProps>(TextFieldBaseInput),
);

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['_TextFieldBase'] }] */
const _TextFieldBase = (props: SpiritTextFieldBaseProps, ref: ForwardedRef<HTMLInputElement | HTMLTextAreaElement>) => {
  const { classProps, props: modifiedProps } = useTextFieldBaseStyleProps(props);
  const {
    'aria-describedby': ariaDescribedBy = '',
    helperText,
    id,
    label,
    validationState,
    validationText,
    ...restProps
  } = modifiedProps;
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  const [ids, register] = useAriaIds(ariaDescribedBy);

  useDeprecationMessage({
    method: 'custom',
    trigger: !id,
    componentName: 'TextField/TextArea',
    customText: 'The "id" property will be required instead of optional starting from the next major version.',
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
        />
      )}
    </div>
  );
};

export const TextFieldBase = forwardRef<HTMLInputElement | HTMLTextAreaElement, SpiritTextFieldBaseProps>(
  _TextFieldBase,
);

export default TextFieldBase;
