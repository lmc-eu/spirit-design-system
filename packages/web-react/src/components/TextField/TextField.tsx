import React from 'react';
import { SpiritTextFieldProps } from '../../types';
import { TextFieldBase } from '../TextFieldBase';

const defaultProps = {
  type: 'text',
};

export const TextField = (props: SpiritTextFieldProps): JSX.Element => {
  return <TextFieldBase {...props} />;
};

TextField.defaultProps = defaultProps;

export default TextField;
