import { renderHook } from '@testing-library/react';
import { SpiritNavigationActionProps } from '../../../types';
import { useNavigationActionProps } from '../useNavigationActionProps';

describe('useNavigationActionProps', () => {
  it('should return defaults props', () => {
    const props: SpiritNavigationActionProps = {
      href: '/',
      target: '_blank',
      isSelected: false,
      isDisabled: false,
    };
    const { result } = renderHook(() => useNavigationActionProps(props));

    expect(result.current).toStrictEqual({
      navigationActionProps: {
        href: '/',
        rel: undefined,
        target: '_blank',
      },
    });
  });

  it('should return defaults if element is different from anchor', () => {
    const props: SpiritNavigationActionProps<'span'> = {
      elementType: 'span',
      href: '/',
      target: '_blank',
      isSelected: false,
      isDisabled: false,
    };
    const { result } = renderHook(() => useNavigationActionProps(props as SpiritNavigationActionProps));

    expect(result.current).toStrictEqual({
      navigationActionProps: {
        href: undefined,
        rel: undefined,
        target: undefined,
      },
    });
  });

  it('should return for isDisabled', () => {
    const props: SpiritNavigationActionProps = {
      href: '/',
      target: '_blank',
      isSelected: false,
      isDisabled: true,
    };
    const { result } = renderHook(() => useNavigationActionProps(props));

    expect(result.current).toStrictEqual({
      navigationActionProps: {
        href: undefined,
        rel: undefined,
        target: undefined,
      },
    });
  });

  it('should return for isSelected', () => {
    const props: SpiritNavigationActionProps = {
      href: '/',
      target: '_blank',
      isSelected: true,
      isDisabled: false,
    };
    const { result } = renderHook(() => useNavigationActionProps(props));

    expect(result.current).toStrictEqual({
      navigationActionProps: {
        href: '/',
        rel: undefined,
        target: '_blank',
      },
    });
  });

  it('should return for elementType', () => {
    const props: SpiritNavigationActionProps<'div'> = {
      elementType: 'div',
      href: '/',
      target: '_blank',
      isSelected: false,
      isDisabled: false,
    };
    const { result } = renderHook(() => useNavigationActionProps(props as SpiritNavigationActionProps));

    expect(result.current).toStrictEqual({
      navigationActionProps: {
        href: undefined,
        rel: undefined,
        target: undefined,
      },
    });
  });
});
