import { renderHook } from '@testing-library/react';
import { useTabsStyleProps } from '../useTabsStyleProps';

describe('useTabsStyleProps', () => {
  it('should return defaults', () => {
    const props = {};
    const { result } = renderHook(() => useTabsStyleProps(props));

    expect(result.current.classProps.root).toBe('Tabs');
    expect(result.current.classProps.item).toBe('Tabs__item');
    expect(result.current.classProps.link).toBe('Tabs__link');
    expect(result.current.classProps.pane).toBe('TabsPane');
  });

  it('should return selected pane', () => {
    const props = { selectedId: 'test', id: 'test' };
    const { result } = renderHook(() => useTabsStyleProps(props));

    expect(result.current.classProps.pane).toBe('TabsPane is-selected');
  });

  it('should return selected link', () => {
    const props = { selectedId: 'test', forTabPane: 'test' };
    const { result } = renderHook(() => useTabsStyleProps(props));

    expect(result.current.classProps.link).toBe('Tabs__link is-selected');
  });

  it('should return unselected link', () => {
    const props = { selectedId: '', forTabPane: '', id: '' };
    const { result } = renderHook(() => useTabsStyleProps(props));

    expect(result.current.classProps.link).toBe('Tabs__link');
  });
});
