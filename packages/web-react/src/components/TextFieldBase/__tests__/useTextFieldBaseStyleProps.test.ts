import { renderHook } from '@testing-library/react';
import { SpiritTextFieldBaseProps } from '../../../types';
import { useTextFieldBaseStyleProps } from '../useTextFieldBaseStyleProps';

describe('useTagStyleProps', () => {
  it('should return defaults', () => {
    const props = {} as SpiritTextFieldBaseProps;
    const { result } = renderHook(() => useTextFieldBaseStyleProps(props));

    expect(result.current.classProps).toStrictEqual({
      helperText: 'TextField__helperText',
      input: 'TextField__input',
      label: 'TextField__label',
      passwordToggle: 'TextField__passwordToggle',
      passwordToggleButton: 'TextField__passwordToggle__button',
      passwordToggleIcon: 'TextField__passwordToggle__icon',
      root: 'TextField',
      validationText: 'TextField__validationText',
    });
  });

  it('should return TextField root class', () => {
    const props = {
      isMultiline: false,
    } as SpiritTextFieldBaseProps;
    const { result } = renderHook(() => useTextFieldBaseStyleProps(props));

    expect(result.current.classProps.root).toBe('TextField');
  });

  it('should return TextArea root class', () => {
    const props = {
      isMultiline: true,
    } as SpiritTextFieldBaseProps;
    const { result } = renderHook(() => useTextFieldBaseStyleProps(props));

    expect(result.current.classProps.root).toBe('TextArea');
  });

  it('should return required disabled warning TextField class', () => {
    const props = {
      isMultiline: false,
      isRequired: true,
      isDisabled: true,
      validationState: 'warning',
    } as SpiritTextFieldBaseProps;
    const { result } = renderHook(() => useTextFieldBaseStyleProps(props));

    expect(result.current.classProps.root).toBe('TextField TextField--disabled TextField--warning');
  });

  it('should return required hidden TextField label', () => {
    const props = {
      isRequired: true,
      isLabelHidden: true,
    } as SpiritTextFieldBaseProps;
    const { result } = renderHook(() => useTextFieldBaseStyleProps(props));

    expect(result.current.classProps.label).toBe(
      'TextField__label TextField__label--required TextField__label--hidden',
    );
  });
});
