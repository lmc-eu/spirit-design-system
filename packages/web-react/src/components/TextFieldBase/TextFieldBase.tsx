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
  const { id, label, message, ...restProps } = modifiedProps;
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

  return (
    <div {...styleProps} className={classNames(classProps.root, styleProps.className)}>
      <label htmlFor={id} className={classProps.label}>
        {label}
      </label>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-expect-error Property missing in the type */}
      <TextFieldBaseInputWithPasswordToggle id={id} {...otherProps} />
      {message && <div className={classProps.message}>{message}</div>}
    </div>
  );
};

export default TextFieldBase;
