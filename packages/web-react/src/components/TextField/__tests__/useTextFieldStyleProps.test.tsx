import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { useTextFieldStyleProps } from '../useTextFieldStyleProps';

describe('useTextFieldStyleProps', function () {
  it('should return defaults', function () {
    let props = {};
    let { result } = renderHook(() => useTextFieldStyleProps(props));

    expect(result.current.classProps).toEqual({
      root: 'TextField',
      input: 'TextField__input',
      label: 'TextField__label',
      message: 'TextField__message',
    });
  });

  it('should return required input', function () {
    let props = { required: true };
    let { result } = renderHook(() => useTextFieldStyleProps(props));

    expect(result.current.classProps.label).toBe('TextField__label TextField__label--required');
  });
  it('should return hidden label', function () {
    let props = { isLabelHidden: true };
    let { result } = renderHook(() => useTextFieldStyleProps(props));

    expect(result.current.classProps.label).toBe('TextField__label TextField__label--hidden');
  });

  it('should return field with error', function () {
    let props = { validationState: 'error' };
    let { result } = renderHook(() => useTextFieldStyleProps(props));

    expect(result.current.classProps.root).toBe('TextField TextField--error');
  });
});
