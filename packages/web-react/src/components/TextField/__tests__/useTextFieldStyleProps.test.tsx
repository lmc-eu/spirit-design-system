import { renderHook } from '@testing-library/react-hooks';
import { useTextFieldStyleProps } from '../useTextFieldStyleProps';
import { SpiritTextFieldProps } from '../../../types';

describe('useTextFieldStyleProps', () => {
  it('should return defaults', () => {
    const props = {};
    const { result } = renderHook(() => useTextFieldStyleProps(props));

    expect(result.current.classProps).toEqual({
      root: 'TextField',
      input: 'TextField__input',
      label: 'TextField__label',
      message: 'TextField__message',
    });
  });

  it('should return required input', () => {
    const props: SpiritTextFieldProps = { required: true };
    const { result } = renderHook(() => useTextFieldStyleProps(props));

    expect(result.current.classProps.label).toBe('TextField__label TextField__label--required');
  });

  it('should return hidden label', () => {
    const props: SpiritTextFieldProps = { isLabelHidden: true };
    const { result } = renderHook(() => useTextFieldStyleProps(props));

    expect(result.current.classProps.label).toBe('TextField__label TextField__label--hidden');
  });

  it('should return field with error', () => {
    const props: SpiritTextFieldProps = { validationState: 'error' };
    const { result } = renderHook(() => useTextFieldStyleProps(props));

    expect(result.current.classProps.root).toBe('TextField TextField--error');
  });
});
