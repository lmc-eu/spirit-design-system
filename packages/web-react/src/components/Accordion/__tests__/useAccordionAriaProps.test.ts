import { renderHook } from '@testing-library/react';
import { useAccordionAriaProps } from '../useAccordionAriaProps';

describe('useAccordionAriaProps', () => {
  it('should return defaults', () => {
    const props = {
      id: 'test-accordion-id',
      isOpen: true,
    };
    const { result } = renderHook(() => useAccordionAriaProps(props));

    expect(result.current.headerProps).toBeDefined();
    expect(result.current.headerProps.id).toBeDefined();
    expect(result.current.headerProps.id).toBe('test-accordion-id_Header');

    expect(result.current.triggerProps).toBeDefined();
    expect(result.current.triggerProps['aria-controls']).toBeDefined();
    expect(result.current.triggerProps['aria-expanded']).toBeDefined();
    expect(result.current.triggerProps['aria-expanded']).toBe(true);

    expect(result.current.contentProps).toBeDefined();
    expect(result.current.contentProps['aria-labelledby']).toBeDefined();
    expect(result.current.contentProps.id).toBeDefined();
    expect(result.current.contentProps.id).toBe('test-accordion-id_Content');
  });
});
