import React, { forwardRef, ForwardedRef } from 'react';
import classNames from 'classnames';
import { useStyleProps, useDeprecationMessage } from '../../hooks';
import { SpiritTextFieldBaseProps, TextFieldBasePasswordToggleProps } from '../../types';
import { useTextFieldBaseStyleProps } from './useTextFieldBaseStyleProps';
import TextFieldBaseInput from './TextFieldBaseInput';
import withPasswordToggle from './withPasswordToggle';

const TextFieldBaseInputWithPasswordToggle = forwardRef(
  withPasswordToggle<TextFieldBasePasswordToggleProps>(TextFieldBaseInput),
);

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['_TextFieldBase'] }] */
const _TextFieldBase = (props: SpiritTextFieldBaseProps, ref: ForwardedRef<HTMLInputElement | HTMLTextAreaElement>) => {
  const { classProps, props: modifiedProps } = useTextFieldBaseStyleProps(props);
  const { id, label, message, helperText, ...restProps } = modifiedProps;
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  useDeprecationMessage({
    method: 'property',
    trigger: props?.validationState === 'error',
    componentName: props?.isMultiline ? 'TextArea' : 'TextField',
    propertyProps: {
      deprecatedValue: 'error',
      newValue: 'danger',
      propertyName: 'validationState',
    },
  });
  useDeprecationMessage({
    method: 'custom',
    trigger: !!(props?.message && !props?.validationState),
    componentName: props?.isMultiline ? 'TextArea' : 'TextField',
    customText:
      '`message` prop without `validationState` prop will be unsupported in the next version. Use `helperText` instead.',
  });

  return (
    <div {...styleProps} className={classNames(classProps.root, styleProps.className)}>
      <label htmlFor={id} className={classProps.label}>
        {label}
      </label>
      <TextFieldBaseInputWithPasswordToggle id={id} ref={ref} {...otherProps} />
      {helperText && <div className={classProps.helperText}>{helperText}</div>}
      {message && <div className={classProps.message}>{message}</div>}
    </div>
  );
};

export const TextFieldBase = forwardRef<HTMLInputElement | HTMLTextAreaElement, SpiritTextFieldBaseProps>(
  _TextFieldBase,
);

export default TextFieldBase;
