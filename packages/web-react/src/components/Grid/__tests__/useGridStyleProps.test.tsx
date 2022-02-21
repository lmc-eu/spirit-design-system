import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { useGridStyleProps } from '../useGridStyleProps';
import { GridVariant } from '../../../types';

describe('useGridStyleProps', function () {
  it('should return defaults', function () {
    let props = {};
    let { result } = renderHook(() => useGridStyleProps(props));

    expect(result.current.classProps).toBe('Grid');
  });

  it('should return narrow class', function () {
    let props = { layout: 'narrow' };
    let { result } = renderHook(() => useGridStyleProps(props));

    expect(result.current.classProps).toBe('Grid Grid--narrow');
  });

  it('should return responsive variants', function () {
    let props = { cols: 2, tablet: 4, desktop: 12 };
    let { result } = renderHook(() => useGridStyleProps(props));

    expect(result.current.classProps).toBe('Grid Grid--cols-2 Grid--tablet--cols-4 Grid--desktop--cols-12');
  });
});
