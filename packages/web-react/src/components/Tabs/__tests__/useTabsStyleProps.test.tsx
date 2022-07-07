import { renderHook } from '@testing-library/react-hooks';
import { useTabsStyleProps } from '../useTabsStyleProps';

describe('useTabsStyleProps', () => {
  it('should return defaults', () => {
    const props = {};
    const { result } = renderHook(() => useTabsStyleProps(props));

    expect(result.current.classProps.root).toBe('Tabs');
    expect(result.current.classProps.content).toBe('Tabs-content');
    expect(result.current.classProps.item).toBe('Tabs__item');
    expect(result.current.classProps.link).toBe('Tabs__link');
    expect(result.current.classProps.pane).toBe('Tabs-pane');
  });

  it('should return selected pane', () => {
    const props = { selectedTabId: 'test', tabId: 'test' };
    const { result } = renderHook(() => useTabsStyleProps(props));

    expect(result.current.classProps.pane).toBe('Tabs-pane is-selected');
  });

  it('should return selected link', () => {
    const props = { selectedTabId: 'test', forTab: 'test' };
    const { result } = renderHook(() => useTabsStyleProps(props));

    expect(result.current.classProps.link).toBe('Tabs__link is-selected');
  });

  it('should return unselected link', () => {
    const props = { selectedTabId: '', forTab: '', tabId: '' };
    const { result } = renderHook(() => useTabsStyleProps(props));

    expect(result.current.classProps.link).toBe('Tabs__link');
  });
});
