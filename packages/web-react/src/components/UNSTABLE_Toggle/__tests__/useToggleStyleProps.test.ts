import { renderHook } from '@testing-library/react';
import { ValidationStates } from '../../../constants';
import { SpiritToggleProps } from '../../../types';
import { useToggleStyleProps } from '../useToggleStyleProps';

describe('useToggleStyleProps', () => {
  it('should return defaults', () => {
    const props = { id: 'toggle', label: 'text' };
    const { result } = renderHook(() => useToggleStyleProps(props));

    expect(result.current.classProps).toEqual({
      root: 'UNSTABLE_Toggle',
      text: 'UNSTABLE_Toggle__text',
      input: 'UNSTABLE_Toggle__input',
      label: 'UNSTABLE_Toggle__label',
      helperText: 'UNSTABLE_Toggle__helperText',
      validationText: 'UNSTABLE_Toggle__validationText',
    });
  });

  it('should return hidden label', () => {
    const props = { id: 'toggle', label: 'text', isLabelHidden: true } as SpiritToggleProps;
    const { result } = renderHook(() => useToggleStyleProps(props));

    expect(result.current.classProps.label).toBe('UNSTABLE_Toggle__label UNSTABLE_Toggle__label--hidden');
  });

  it('should return disabled', () => {
    const props = { id: 'toggle', label: 'text', isDisabled: true } as SpiritToggleProps;
    const { result } = renderHook(() => useToggleStyleProps(props));

    expect(result.current.classProps.root).toBe('UNSTABLE_Toggle UNSTABLE_Toggle--disabled');
  });

  it.each([Object.values(ValidationStates)])('should return field with %s', (state) => {
    const props = { validationState: state } as SpiritToggleProps;
    const { result } = renderHook(() => useToggleStyleProps(props));

    expect(result.current.classProps.root).toBe(`UNSTABLE_Toggle UNSTABLE_Toggle--${state}`);
  });

  it('should return fluid', () => {
    const props = { id: 'toggle', label: 'text', isFluid: true } as SpiritToggleProps;
    const { result } = renderHook(() => useToggleStyleProps(props));

    expect(result.current.classProps.root).toBe('UNSTABLE_Toggle UNSTABLE_Toggle--fluid');
  });

  it('should return required', () => {
    const props = { id: 'toggle', label: 'text', isRequired: true } as SpiritToggleProps;
    const { result } = renderHook(() => useToggleStyleProps(props));

    expect(result.current.classProps.label).toBe('UNSTABLE_Toggle__label UNSTABLE_Toggle__label--required');
  });

  it('should return input with indicators', () => {
    const props = { id: 'toggle', label: 'text', hasIndicators: true } as SpiritToggleProps;
    const { result } = renderHook(() => useToggleStyleProps(props));

    expect(result.current.classProps.input).toBe('UNSTABLE_Toggle__input UNSTABLE_Toggle__input--indicators');
  });
});
