import { renderHook } from '@testing-library/react';
import React from 'react';
import { BreakpointToken, ChildrenProps, SpaceToken } from '../../../types';
import { TabsProvider } from '../TabContext';
import { useTabsStyleProps } from '../useTabsStyleProps';

const dataProvider: {
  spacing: SpaceToken | Partial<Record<BreakpointToken, SpaceToken>> | undefined;
  expectedStyle: Record<string, string | undefined>;
}[] = [
  { spacing: undefined, expectedStyle: {} },
  {
    spacing: 'space-100',
    expectedStyle: { '--tabs-spacing': 'var(--spirit-space-100)' },
  },
  {
    spacing: { tablet: 'space-100' },
    expectedStyle: { '--tabs-spacing-tablet': 'var(--spirit-space-100)' },
  },
  {
    spacing: { mobile: 'space-100', tablet: 'space-200', desktop: 'space-300' },
    expectedStyle: {
      '--tabs-spacing': 'var(--spirit-space-100)',
      '--tabs-spacing-tablet': 'var(--spirit-space-200)',
      '--tabs-spacing-desktop': 'var(--spirit-space-300)',
    },
  },
];

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

  it.each(dataProvider)('should return style for $spacing', ({ spacing, expectedStyle }) => {
    const wrapper = ({ children }: ChildrenProps) => (
      <TabsProvider value={{ selectTab: () => {}, selectedId: 'test', spacing }}>{children}</TabsProvider>
    );
    const { result } = renderHook(() => useTabsStyleProps(), { wrapper });

    expect(result.current.styleProps).toEqual(expectedStyle);
  });
});
