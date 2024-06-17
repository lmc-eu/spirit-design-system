import { renderHook } from '@testing-library/react';
import { useAccordionStyleProps } from '../useAccordionStyleProps';

describe('useAccordionStyleProps', () => {
  it('should return defaults', () => {
    const { result } = renderHook(() => useAccordionStyleProps());

    expect(result.current.classProps).toBeDefined();
    expect(result.current.classProps.root).toBe('Accordion');
    expect(result.current.classProps.item).toBe('Accordion__item');
    expect(result.current.classProps.header).toBe('Accordion__itemHeader');
    expect(result.current.classProps.toggle).toBe('Accordion__itemToggle');
    expect(result.current.classProps.side).toBe('Accordion__itemSide');
    expect(result.current.classProps.slot).toBe('Accordion__itemSlot');
    expect(result.current.classProps.icon).toBe('Accordion__itemIcon');
    expect(result.current.classProps.content).toBe('Accordion__content');
  });
});
