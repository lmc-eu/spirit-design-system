import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks/styleProps';
import { SpiritTextFieldBaseProps } from '../../types';
import { useTextFieldBaseStyleProps } from './useTextFieldBaseStyleProps';

export const TextFieldBase = (props: SpiritTextFieldBaseProps): JSX.Element => {
  const { classProps, props: modifiedProps } = useTextFieldBaseStyleProps(props);
  const { id, isDisabled, isMultiline, isRequired, label, message, ...restProps } = modifiedProps;
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  const ElementType: React.ElementType = isMultiline ? 'textarea' : 'input';

  return (
    <div {...styleProps} className={classNames(classProps.root, styleProps.className)}>
      <label htmlFor={id} className={classProps.label}>
        {label}
      </label>
      <ElementType {...otherProps} id={id} className={classProps.input} disabled={isDisabled} required={isRequired} />
      {message && <div className={classProps.message}>{message}</div>}
    </div>
  );
};

export default TextFieldBase;
