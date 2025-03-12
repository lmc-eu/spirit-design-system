import { renderHook } from '@testing-library/react';
import { SpiritNavigationActionProps } from '../../../types';
import { useNavigationActionProps } from '../useNavigationActionProps';

describe('useNavigationActionProps', () => {
  it('should return attributes for falsy isDisabled', () => {
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

  it('should return attributes for truthy isDisabled', () => {
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
});
