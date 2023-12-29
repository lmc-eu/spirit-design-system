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
      const { result } = renderHook(() => useStyleProps(input as StyleProps));

      expect(result.current.styleProps).toEqual(expected);
    });

    it('should warn when using unsupported `style` prop', () => {
      const consoleWarnMock = jest.spyOn(global.console, 'warn').mockImplementation();

      const props = { style: { 'vertical-align': 'center' } };
      renderHook(() => useStyleProps(props as StyleProps));

      expect(consoleWarnMock).toHaveBeenCalledWith(
        'Warning: The style prop is unsafe and is unsupported in Spirit Web React. Please use style props with Spirit Design Tokens, or UNSAFE_style if you absolutely must do something custom. Note that this may break in future versions due to DOM structure changes.',
      );

      consoleWarnMock.mockRestore();
    });

    it('should warn when using unsupported `className` prop', () => {
      const consoleWarnMock = jest.spyOn(global.console, 'warn').mockImplementation();

      const props = { className: 'Button' };
      renderHook(() => useStyleProps(props as StyleProps));

      expect(consoleWarnMock).toHaveBeenCalledWith(
        'Warning: The className prop is unsafe and is unsupported in Spirit Web React. Please use style props with Spirit Design Tokens, or UNSAFE_className if you absolutely must do something custom. Note that this may break in future versions due to DOM structure changes.',
      );

      consoleWarnMock.mockRestore();
    });

    it('should return correct utility class for simple spacing prop', () => {
      const { result } = renderHook(() => useStyleProps({ margin: 'space-100' }));

      expect(result.current.styleProps.className).toBe('m-100');
    });

    it('should return correct utility classes for complex spacing prop', () => {
      const { result } = renderHook(() =>
        useStyleProps({ marginX: { mobile: 'space-100', tablet: 'space-200', desktop: 'auto' } }),
      );

      expect(result.current.styleProps.className).toBe('mx-100 mx-tablet-200 mx-desktop-auto');
    });

    it.each([
      [{ margin: 'space-100' }, { className: 'm-100', style: undefined }],
      [
        { margin: { mobile: 'space-100', tablet: 'space-200', desktop: 'space-300' } },
        { className: 'm-100 m-tablet-200 m-desktop-300', style: undefined },
      ],
      [
        { marginX: { mobile: 'auto', desktop: 'space-300' } },
        { className: 'mx-auto mx-desktop-300', style: undefined },
      ],
      [
        {
          margin: 'space-100',
          marginTop: 'space-200',
          marginRight: 'space-300',
          marginBottom: 'space-400',
          marginLeft: 'space-500',
          marginX: 'space-600',
          marginY: 'space-700',
        },
        { className: 'm-100 mt-200 mr-300 mb-400 ml-500 mx-600 my-700', style: undefined },
      ],
      [
        {
          margin: 'auto',
          marginTop: 'auto',
          marginRight: 'auto',
          marginBottom: 'auto',
          marginLeft: 'auto',
          marginX: 'auto',
          marginY: 'auto',
        },
        { className: 'm-auto mt-auto mr-auto mb-auto ml-auto mx-auto my-auto', style: undefined },
      ],
      [
        { margin: 'space-100', UNSAFE_style: { position: 'absolute' } },
        { className: 'm-100', style: { position: 'absolute' } },
      ],
      [
        { margin: 'space-100', UNSAFE_className: 'm-500' },
        { className: 'm-500 m-100', style: undefined },
      ],
    ])('should return correct combination of class and style', (input, expected) => {
      const { result } = renderHook(() => useStyleProps(input as StyleProps));

      expect(result.current.styleProps).toEqual(expected);
    });
  });
});
