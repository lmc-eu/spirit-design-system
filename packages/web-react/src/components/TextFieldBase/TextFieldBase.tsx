import React from 'react';
import classNames from 'classnames';
import { useStyleProps, useDeprecationMessage } from '../../hooks';
import { SpiritTextFieldBaseProps, TextFieldBasePasswordToggleProps } from '../../types';
import { useTextFieldBaseStyleProps } from './useTextFieldBaseStyleProps';
import TextFieldBaseInput from './TextFieldBaseInput';
import withPasswordToggle from './withPasswordToggle';

const TextFieldBaseInputWithPasswordToggle = withPasswordToggle<TextFieldBasePasswordToggleProps>(TextFieldBaseInput);

export const TextFieldBase = (props: SpiritTextFieldBaseProps) => {
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
      <TextFieldBaseInputWithPasswordToggle id={id} {...otherProps} />
      {helperText && <div className={classProps.helperText}>{helperText}</div>}
      {message && Array.isArray(message) ? (
        <ul className={classProps.message}>
          {message.map((item) => (
            <li key={`message_${item}`}>{item}</li>
          ))}
        </ul>
      ) : (
        <div className={classProps.message}>{message}</div>
      )}
    </div>
  );
};

export default TextFieldBase;
