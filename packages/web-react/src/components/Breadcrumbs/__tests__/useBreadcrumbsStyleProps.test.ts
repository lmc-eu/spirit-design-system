import { renderHook } from '@testing-library/react-hooks';
import { useBreadcrumbsStyleProps } from '../useBreadcrumbsStyleProps';

describe('useBreadcrumbsStyleProps', () => {
  it('should return defaults', () => {
    const props = {};
    const { result } = renderHook(() => useBreadcrumbsStyleProps(props));

    expect(result.current.classProps).toBe('Breadcrumbs');
  });
});
