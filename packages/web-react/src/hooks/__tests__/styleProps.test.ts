import { renderHook } from '@testing-library/react-hooks';
import { StyleProps } from '../../types';
import { useStyleProps } from '../styleProps';

describe('styleProps', () => {
  describe('#useStyleProps', () => {
    it.each([
      [
        { UNSAFE_style: { 'vertical-align': 'center' }, UNSAFE_className: 'Button' },
        { className: 'Button', style: { 'vertical-align': 'center' } },
      ],
      [{ role: 'button' }, { UNSAFE_className: undefined, style: undefined }],
      [
        { role: 'button', UNSAFE_style: { 'vertical-align': 'center' } },
        { className: undefined, style: { 'vertical-align': 'center' } },
      ],
      [{ role: 'button' }, { className: undefined, style: undefined }],
    ])('should use UNSAFE_style and UNSAFE_className props', (input, expected) => {
      expect(useStyleProps(input as StyleProps).styleProps).toEqual(expected);
    });

    it('should warn when using unsupported `style` prop', () => {
      const consoleWarnMock = jest.spyOn(global.console, 'warn').mockImplementation();

      const props = { style: { 'vertical-align': 'center' } };
      renderHook(() => useStyleProps(props as StyleProps));

      expect(consoleWarnMock).toHaveBeenCalledWith(
        'The style prop is unsafe and is unsupported in Spirit Web React. Please use style props with Spirit Design Tokens, or UNSAFE_style if you absolutely must do something custom. Note that this may break in future versions due to DOM structure changes.',
      );

      consoleWarnMock.mockRestore();
    });

    it('should warn when using unsupported `className` prop', () => {
      const consoleWarnMock = jest.spyOn(global.console, 'warn').mockImplementation();

      const props = { className: 'Button' };
      renderHook(() => useStyleProps(props as StyleProps));

      expect(consoleWarnMock).toHaveBeenCalledWith(
        'The className prop is unsafe and is unsupported in Spirit Web React. Please use style props with Spirit Design Tokens, or UNSAFE_className if you absolutely must do something custom. Note that this may break in future versions due to DOM structure changes.',
      );

      consoleWarnMock.mockRestore();
    });
  });
});
