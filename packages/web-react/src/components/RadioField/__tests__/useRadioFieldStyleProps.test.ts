import { renderHook } from '@testing-library/react-hooks';
import { SpiritRadioFieldProps } from '../../../types';
import { ValidationStates } from '../../../constants';
import { useRadioFieldStyleProps } from '../useRadioFieldStyleProps';

describe('useRadioFieldStyleProps', () => {
  it('should return defaults', () => {
    const props = { id: 'radiofield', label: 'text' };
    const { result } = renderHook(() => useRadioFieldStyleProps(props));

    expect(result.current.classProps).toEqual({
      root: 'RadioField',
      text: 'RadioField__text',
      input: 'RadioField__input',
      label: 'RadioField__label',
      helperText: 'RadioField__helperText',
    });
  });

  it('should return hidden label', () => {
    const props = { id: 'radiofield', label: 'text', isLabelHidden: true } as SpiritRadioFieldProps;
    const { result } = renderHook(() => useRadioFieldStyleProps(props));

    expect(result.current.classProps.label).toBe('RadioField__label RadioField__label--hidden');
  });

  it('should return disabled', () => {
    const props = { id: 'radiofield', label: 'text', isDisabled: true } as SpiritRadioFieldProps;
    const { result } = renderHook(() => useRadioFieldStyleProps(props));

    expect(result.current.classProps.root).toBe('RadioField RadioField--disabled');
  });

  it('should return field as an Item', () => {
    const props = { id: 'radiofield', label: 'text', isItem: true } as SpiritRadioFieldProps;
    const { result } = renderHook(() => useRadioFieldStyleProps(props));

    expect(result.current.classProps.root).toBe('RadioField RadioField--item');
  });

  it.each([Object.values(ValidationStates)])('should return field with %s', (state) => {
    const props = { validationState: state } as SpiritRadioFieldProps;
    const { result } = renderHook(() => useRadioFieldStyleProps(props));

    expect(result.current.classProps.root).toBe(`RadioField RadioField--${state}`);
  });
});
