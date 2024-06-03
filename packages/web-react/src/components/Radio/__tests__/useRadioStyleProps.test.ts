import { renderHook } from '@testing-library/react-hooks';
import { ValidationStates } from '../../../constants';
import { SpiritRadioProps } from '../../../types';
import { useRadioStyleProps } from '../useRadioStyleProps';

describe('useRadioStyleProps', () => {
  it('should return defaults', () => {
    const props = { id: 'radio', label: 'text' };
    const { result } = renderHook(() => useRadioStyleProps(props));

    expect(result.current.classProps).toEqual({
      root: 'Radio',
      text: 'Radio__text',
      input: 'Radio__input',
      label: 'Radio__label',
      helperText: 'Radio__helperText',
    });
  });

  it('should return hidden label', () => {
    const props = { id: 'radio', label: 'text', isLabelHidden: true } as SpiritRadioProps;
    const { result } = renderHook(() => useRadioStyleProps(props));

    expect(result.current.classProps.label).toBe('Radio__label Radio__label--hidden');
  });

  it('should return disabled', () => {
    const props = { id: 'radio', label: 'text', isDisabled: true } as SpiritRadioProps;
    const { result } = renderHook(() => useRadioStyleProps(props));

    expect(result.current.classProps.root).toBe('Radio Radio--disabled');
  });

  it('should return field as an Item', () => {
    const props = { id: 'radio', label: 'text', isItem: true } as SpiritRadioProps;
    const { result } = renderHook(() => useRadioStyleProps(props));

    expect(result.current.classProps.root).toBe('Radio Radio--item');
  });

  it.each([Object.values(ValidationStates)])('should return field with %s', (state) => {
    const props = { validationState: state } as SpiritRadioProps;
    const { result } = renderHook(() => useRadioStyleProps(props));

    expect(result.current.classProps.root).toBe(`Radio Radio--${state}`);
  });
});
