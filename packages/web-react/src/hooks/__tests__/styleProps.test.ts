import { renderHook } from '@testing-library/react';
import { Button } from '../../components/Button';
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
      [
        { ElementTag: Button, UNSAFE_className: 'test-class' },
        { UNSAFE_className: 'test-class', style: undefined },
      ],
    ])('should use UNSAFE_style and UNSAFE_className props', (input, expected) => {
      const { result } = renderHook(() => useStyleProps(input as StyleProps));

      expect(result.current.styleProps).toEqual(expected);
    });

    describe('unsupported `style` prop', () => {
      const props = { style: { 'vertical-align': 'center' } };

      it('should warn when using unsupported `style` prop', () => {
        const consoleWarnMock = jest.spyOn(global.console, 'warn').mockImplementation();
        renderHook(() => useStyleProps(props as StyleProps));

        expect(consoleWarnMock).toHaveBeenCalledWith(
          'Warning: The style prop is unsafe and is unsupported in Spirit Web React. Please use style props with Spirit Design Tokens, or UNSAFE_style if you absolutely must do something custom. Note that this may break in future versions due to DOM structure changes.',
        );

        consoleWarnMock.mockRestore();
      });

      it('should not pass unsupported `style` prop when using it', () => {
        const consoleWarnMock = jest.spyOn(global.console, 'warn').mockImplementation();
        const { result } = renderHook(() => useStyleProps(props as StyleProps));

        expect(result.current.props).toEqual({});

        consoleWarnMock.mockRestore();
      });
    });

    describe('unsupported `className` prop', () => {
      const props = { className: 'Button' };

      it('should warn when using unsupported `className` prop', () => {
        const consoleWarnMock = jest.spyOn(global.console, 'warn').mockImplementation();
        renderHook(() => useStyleProps(props as StyleProps));

        expect(consoleWarnMock).toHaveBeenCalledWith(
          'Warning: The className prop is unsafe and is unsupported in Spirit Web React. Please use style props with Spirit Design Tokens, or UNSAFE_className if you absolutely must do something custom. Note that this may break in future versions due to DOM structure changes.',
        );

        consoleWarnMock.mockRestore();
      });

      it('should not pass unsupported `className` prop when using it', () => {
        const consoleWarnMock = jest.spyOn(global.console, 'warn').mockImplementation();
        const { result } = renderHook(() => useStyleProps(props as StyleProps));

        expect(result.current.props).toEqual({});

        consoleWarnMock.mockRestore();
      });
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
      [
        { ElementTag: Button, margin: 'space-100', UNSAFE_className: 'm-500' },
        { UNSAFE_className: 'm-500 m-100', style: undefined },
      ],
    ])('should return correct combination of class and style', (input, expected) => {
      const { result } = renderHook(() => useStyleProps(input as StyleProps));

      expect(result.current.styleProps).toEqual(expected);
    });
  });

  it('should process style props with additional utilities', () => {
    const mockProps = {
      margin: 'space-100',
      marginX: 'space-200',
      marginY: 'space-400',
      padding: 'space-500',
      paddingX: 'space-600',
      paddingY: 'space-700',
    };
    const additionalUtilities = {
      padding: 'p',
      paddingX: 'px',
      paddingY: 'py',
    };

    const { result } = renderHook(() => useStyleProps(mockProps as StyleProps, additionalUtilities));

    expect(result.current.styleProps).toEqual({
      className: 'm-100 mx-200 my-400 p-500 px-600 py-700',
      style: undefined,
    });
  });

  it('should process style props with responsive additional utilities', () => {
    const mockProps = {
      margin: 'space-100',
      marginX: 'space-200',
      marginY: 'space-400',
      padding: { mobile: 'space-500', tablet: 'space-600', desktop: 'space-700' },
    };
    const additionalUtilities = {
      padding: 'p',
    };

    const { result } = renderHook(() => useStyleProps(mockProps as StyleProps, additionalUtilities));

    expect(result.current.styleProps).toEqual({
      className: 'm-100 mx-200 my-400 p-500 p-tablet-600 p-desktop-700',
      style: undefined,
    });
  });
});
