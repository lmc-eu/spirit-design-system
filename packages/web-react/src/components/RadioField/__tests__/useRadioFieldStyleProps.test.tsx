import { renderHook } from '@testing-library/react-hooks';
import { SpiritRadioFieldProps } from '../../../types';
import { useRadioFieldStyleProps } from '../useRadioFieldStyleProps';

describe('useRadioFieldStyleProps', () => {
  it('should return defaults', () => {
    const props = { label: 'text' };
    const { result } = renderHook(() => useRadioFieldStyleProps(props));

    expect(result.current.classProps).toEqual({
      root: 'RadioField',
      input: 'RadioField__input',
      label: 'RadioField__label',
    });
  });

  it('should return hidden label', () => {
    const props = { label: 'text', isLabelHidden: true } as SpiritRadioFieldProps;
    const { result } = renderHook(() => useRadioFieldStyleProps(props));

    expect(result.current.classProps.label).toBe('RadioField__label RadioField__label--hidden');
  });

  it('should return disabled', () => {
    const props = { label: 'text', isDisabled: true } as SpiritRadioFieldProps;
    const { result } = renderHook(() => useRadioFieldStyleProps(props));

    expect(result.current.classProps.root).toBe('RadioField RadioField--disabled');
  });
});
