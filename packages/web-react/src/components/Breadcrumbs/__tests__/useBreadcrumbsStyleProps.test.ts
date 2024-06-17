import { renderHook } from '@testing-library/react';
import { useBreadcrumbsStyleProps } from '../useBreadcrumbsStyleProps';

describe('useBreadcrumbsStyleProps', () => {
  it('should return defaults', () => {
    const props = {};
    const { result } = renderHook(() => useBreadcrumbsStyleProps(props));

    expect(result.current.classProps.root).toBe('Breadcrumbs');
    expect(result.current.classProps.item).toBe('d-none d-tablet-flex');
  });

  it('should return style props for go back only', () => {
    const props = { isGoBackOnly: true };
    const { result } = renderHook(() => useBreadcrumbsStyleProps(props));

    expect(result.current.classProps.root).toBe('Breadcrumbs');
    expect(result.current.classProps.item).toBe('d-tablet-none');
  });
});
