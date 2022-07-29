import { renderHook } from '@testing-library/react-hooks';
import { SpiritCheckboxFieldProps } from '../../../types';
import { useRadioFieldStyleProps } from '../useRadioFieldStyleProps';

describe('useCheckboxFieldStyleProps', () => {
  it('should return defaults', () => {
    const props = {};
    const { result } = renderHook(() => useRadioFieldStyleProps(props));

    expect(result.current.classProps).toEqual({
      root: 'RadioField',
      input: 'RadioField__input',
      label: 'RadioField__label',
    });
  });

  it('should return hidden label', () => {
    const props = { isLabelHidden: true } as SpiritCheckboxFieldProps;
    const { result } = renderHook(() => useRadioFieldStyleProps(props));

    expect(result.current.classProps.label).toBe('RadioField__label RadioField__label--hidden');
  });

  it('should return disabled', () => {
    const props = { isDisabled: true } as SpiritCheckboxFieldProps;
    const { result } = renderHook(() => useRadioFieldStyleProps(props));

    expect(result.current.classProps.root).toBe('RadioField RadioField--disabled');
  });
});
