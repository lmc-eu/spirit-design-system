import { renderHook } from '@testing-library/react';
import { SpiritNavigationLinkProps } from '../../../types';
import { useNavigationLinkProps } from '../useNavigationLinkProps';

describe('useNavigationLinkProps', () => {
  it('should return defaults props', () => {
    const props: SpiritNavigationLinkProps = {
      href: '/',
      target: '_blank',
      isSelected: false,
      isDisabled: false,
    };
    const { result } = renderHook(() => useNavigationLinkProps(props));

    expect(result.current).toStrictEqual({
      navigationLinkProps: {
        href: '/',
        rel: undefined,
        target: '_blank',
      },
    });
  });

  it('should return defaults if element is different from anchor', () => {
    const props: SpiritNavigationLinkProps<'span'> = {
      elementType: 'span',
      href: '/',
      target: '_blank',
      isSelected: false,
      isDisabled: false,
    };
    const { result } = renderHook(() => useNavigationLinkProps(props as SpiritNavigationLinkProps));

    expect(result.current).toStrictEqual({
      navigationLinkProps: {
        href: undefined,
        rel: undefined,
        target: undefined,
      },
    });
  });

  it('should return for isDisabled', () => {
    const props: SpiritNavigationLinkProps = {
      href: '/',
      target: '_blank',
      isSelected: false,
      isDisabled: true,
    };
    const { result } = renderHook(() => useNavigationLinkProps(props));

    expect(result.current).toStrictEqual({
      navigationLinkProps: {
        href: undefined,
        rel: undefined,
        target: undefined,
      },
    });
  });

  it('should return for isSelected', () => {
    const props: SpiritNavigationLinkProps = {
      href: '/',
      target: '_blank',
      isSelected: true,
      isDisabled: false,
    };
    const { result } = renderHook(() => useNavigationLinkProps(props));

    expect(result.current).toStrictEqual({
      navigationLinkProps: {
        href: '/',
        rel: undefined,
        target: '_blank',
      },
    });
  });

  it('should return for elementType', () => {
    const props: SpiritNavigationLinkProps<'div'> = {
      elementType: 'div',
      href: '/',
      target: '_blank',
      isSelected: false,
      isDisabled: false,
    };
    const { result } = renderHook(() => useNavigationLinkProps(props as SpiritNavigationLinkProps));

    expect(result.current).toStrictEqual({
      navigationLinkProps: {
        href: undefined,
        rel: undefined,
        target: undefined,
      },
    });
  });
});
