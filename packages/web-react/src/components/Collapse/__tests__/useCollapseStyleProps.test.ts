import { renderHook } from '@testing-library/react';
import { type ElementType } from 'react';
import { useCollapseStyleProps } from '../useCollapseStyleProps';

describe('useCollapseStyleProps', () => {
  it.each([
    [true, 'Collapse is-open', 'div', '100px', { height: '100px' }],
    [false, 'Collapse', 'div', '100px', { height: 0 }],
    [true, 'Collapse is-open', 'span', undefined, {}],
    [false, 'Collapse', 'span', undefined, {}],
  ])('should return defaults', (isOpen, rootClass, elementType, collapseHeight, expectedStyleProps) => {
    const { result } = renderHook(() => useCollapseStyleProps(isOpen, elementType as ElementType, collapseHeight));

    expect(result.current.classProps.root).toBe(rootClass);
    expect(result.current.classProps.content).toBe('Collapse__content');
    expect(result.current.styleProps).toEqual(expectedStyleProps);
  });
});
