import { renderHook } from '@testing-library/react-hooks';
import { useTextFieldStyleProps } from '../useTextFieldStyleProps';
import { SpiritTextFieldProps } from '../../../types';

describe('useTextFieldStyleProps', () => {
  it.each([
    // type, expectedClassPrefix
    ['text', 'Text'],
    ['password', 'Password'],
  ])('should return defaults for %s type', (type, expectedClassPrefix) => {
    const props = { type } as SpiritTextFieldProps;
    const { result } = renderHook(() => useTextFieldStyleProps(props));

    expect(result.current.classProps).toEqual({
      root: `${expectedClassPrefix}Field`,
      input: `${expectedClassPrefix}Field__input`,
      label: `${expectedClassPrefix}Field__label`,
      message: `${expectedClassPrefix}Field__message`,
    });
  });

  describe.each([
    ['text', 'Text'],
    ['password', 'Password'],
  ])('input type %s', (type, expectedClassPrefix) => {
    it('should return required input', () => {
      const props = { required: true, type } as SpiritTextFieldProps;
      const { result } = renderHook(() => useTextFieldStyleProps(props));

      expect(result.current.classProps.label).toBe(
        `${expectedClassPrefix}Field__label ${expectedClassPrefix}Field__label--required`,
      );
    });

    it('should return hidden label', () => {
      const props = { isLabelHidden: true, type } as SpiritTextFieldProps;
      const { result } = renderHook(() => useTextFieldStyleProps(props));

      expect(result.current.classProps.label).toBe(
        `${expectedClassPrefix}Field__label ${expectedClassPrefix}Field__label--hidden`,
      );
    });

    it.each([['success'], ['warning'], ['error']])('should return field with %s', (validationState) => {
      const props = { validationState, type } as SpiritTextFieldProps;
      const { result } = renderHook(() => useTextFieldStyleProps(props));

      expect(result.current.classProps.root).toBe(
        `${expectedClassPrefix}Field ${expectedClassPrefix}Field--${validationState}`,
      );
    });
  });
});
