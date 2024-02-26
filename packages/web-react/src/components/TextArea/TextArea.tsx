import React, { ForwardedRef, RefObject, forwardRef, useRef } from 'react';
import { SpiritTextAreaProps } from '../../types';
import { TextFieldBase } from '../TextFieldBase';
import { useAdjustHeight } from './useAdjustHeight';

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['_TextArea'] }] */
const _TextArea = (props: SpiritTextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
  const { onInput, isAutoResizing, autoResizingMaxHeight = 400, ...restProps } = props;
  const elementReference = useRef(ref);
  const { adjustHeightOnAutoresize, onInput: onInputHandler } = useAdjustHeight({
    elementReference,
    onInput,
    isAutoResizing,
    maxHeight: autoResizingMaxHeight,
  });

  return (
    <TextFieldBase
      isMultiline
      ref={elementReference as RefObject<HTMLTextAreaElement>}
      onInput={onInputHandler}
      onFocus={adjustHeightOnAutoresize}
      {...restProps}
    />
  );
};

export const TextArea = forwardRef<HTMLTextAreaElement, SpiritTextAreaProps>(_TextArea);

export default TextArea;
