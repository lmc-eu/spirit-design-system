import React from 'react';
import { SpiritTextAreaProps } from '../../types';
import { TextFieldBase } from '../TextFieldBase';

export const TextArea = (props: SpiritTextAreaProps): JSX.Element => {
  return <TextFieldBase isMultiline {...props} />;
};

export default TextArea;
