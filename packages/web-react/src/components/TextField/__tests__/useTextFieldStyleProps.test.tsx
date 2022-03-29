import { renderHook } from '@testing-library/react-hooks';
import { useTextFieldStyleProps } from '../useTextFieldStyleProps';
import { SpiritTextFieldProps } from '../../../types';

describe('useTextFieldStyleProps', () => {
  describe.each(['text', 'password', 'email'])('input type %s', (type) => {
    it('should return required input', () => {
      const props = { isRequired: true, type } as SpiritTextFieldProps;
      const { result } = renderHook(() => useTextFieldStyleProps(props));

      expect(result.current.classProps.label).toBe('TextField__label TextField__label--required');
    });

    it('should return hidden label', () => {
      const props = { isLabelHidden: true, type } as SpiritTextFieldProps;
      const { result } = renderHook(() => useTextFieldStyleProps(props));

      expect(result.current.classProps.label).toBe('TextField__label TextField__label--hidden');
    });

    it('should return fluid class', () => {
      const props = { isFluid: true, type } as SpiritTextFieldProps;
      const { result } = renderHook(() => useTextFieldStyleProps(props));

      expect(result.current.classProps.root).toBe('TextField TextField--fluid');
    });

    it.each([['success'], ['warning'], ['error']])('should return field with %s', (validationState) => {
      const props = { validationState, type } as SpiritTextFieldProps;
      const { result } = renderHook(() => useTextFieldStyleProps(props));

      expect(result.current.classProps.root).toBe(`TextField TextField--${validationState}`);
    });
  });
});
