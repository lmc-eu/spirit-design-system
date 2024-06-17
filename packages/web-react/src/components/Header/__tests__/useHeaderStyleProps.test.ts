import { renderHook } from '@testing-library/react';
import { HEADER_ACTIONS_COLOR_DEFAULT, HEADER_COLOR_DEFAULT } from '../constants';
import { useHeaderStyleProps } from '../useHeaderStyleProps';

describe('useHeaderStyleProps', () => {
  it('should return defaults', () => {
    const { result } = renderHook(() => useHeaderStyleProps({}));

    expect(result.current.classProps).toBeDefined();
    expect(result.current.classProps.root).toBe(`Header Header--${HEADER_COLOR_DEFAULT}`);
    expect(result.current.classProps.headerButton).toBe('HeaderLink');
    expect(result.current.classProps.headerDesktopActions).toBe('HeaderDesktopActions');
    expect(result.current.classProps.headerDialog).toBeDefined();
    expect(result.current.classProps.headerDialog.root).toBe('HeaderDialog');
    expect(result.current.classProps.headerDialog.panel).toBe('HeaderDialog__panel');
    expect(result.current.classProps.headerDialog.content).toBe('HeaderDialog__content');
    expect(result.current.classProps.headerDialogActions).toBe(
      `HeaderDialogActions HeaderDialogActions--${HEADER_ACTIONS_COLOR_DEFAULT}`,
    );
    expect(result.current.classProps.headerDialogButton).toBe('HeaderDialogLink');
    expect(result.current.classProps.headerDialogCloseButton).toBe('HeaderDialogCloseButton');
    expect(result.current.classProps.headerDialogLink).toBe('HeaderDialogLink');
    expect(result.current.classProps.headerDialogNav).toBe('HeaderDialogNav');
    expect(result.current.classProps.headerDialogNavItem).toBe('HeaderDialogNavItem');
    expect(result.current.classProps.headerDialogText).toBe('HeaderDialogText');
    expect(result.current.classProps.headerLink).toBe('HeaderLink');
    expect(result.current.classProps.headerMobileActions).toBe('HeaderMobileActions');
    expect(result.current.classProps.headerNav).toBe('HeaderNav');
    expect(result.current.classProps.headerNavItem).toBe('HeaderNavItem');
  });
});
