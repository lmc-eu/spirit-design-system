import { renderHook } from '@testing-library/react';
import { ValidationStates } from '../../../constants';
import { SpiritToggleProps } from '../../../types';
import { useToggleStyleProps } from '../useToggleStyleProps';

describe('useToggleStyleProps', () => {
  it('should return defaults', () => {
    const props = { id: 'toggle', label: 'text' };
    const { result } = renderHook(() => useToggleStyleProps(props));

    expect(result.current.classProps).toEqual({
      root: 'Toggle',
      text: 'Toggle__text',
      input: 'Toggle__input',
      label: 'Toggle__label',
      helperText: 'Toggle__helperText',
      validationText: 'Toggle__validationText',
    });
  });

  it('should return hidden label', () => {
    const props = { id: 'toggle', label: 'text', isLabelHidden: true } as SpiritToggleProps;
    const { result } = renderHook(() => useToggleStyleProps(props));

    expect(result.current.classProps.label).toBe('Toggle__label Toggle__label--hidden');
  });

  it('should return disabled', () => {
    const props = { id: 'toggle', label: 'text', isDisabled: true } as SpiritToggleProps;
    const { result } = renderHook(() => useToggleStyleProps(props));

    expect(result.current.classProps.root).toBe('Toggle Toggle--disabled');
  });

  it.each([Object.values(ValidationStates)])('should return field with %s', (state) => {
    const props = { validationState: state } as SpiritToggleProps;
    const { result } = renderHook(() => useToggleStyleProps(props));

    expect(result.current.classProps.root).toBe(`Toggle Toggle--${state}`);
  });

  it('should return fluid', () => {
    const props = { id: 'toggle', label: 'text', isFluid: true } as SpiritToggleProps;
    const { result } = renderHook(() => useToggleStyleProps(props));

    expect(result.current.classProps.root).toBe('Toggle Toggle--fluid');
  });

  it('should return required', () => {
    const props = { id: 'toggle', label: 'text', isRequired: true } as SpiritToggleProps;
    const { result } = renderHook(() => useToggleStyleProps(props));

    expect(result.current.classProps.label).toBe('Toggle__label Toggle__label--required');
  });

  it('should return input with indicators', () => {
    const props = { id: 'toggle', label: 'text', hasIndicators: true } as SpiritToggleProps;
    const { result } = renderHook(() => useToggleStyleProps(props));

    expect(result.current.classProps.input).toBe('Toggle__input Toggle__input--indicators');
  });
});
