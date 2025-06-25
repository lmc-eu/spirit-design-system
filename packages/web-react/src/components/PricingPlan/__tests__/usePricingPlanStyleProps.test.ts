import { renderHook } from '@testing-library/react';
import { usePricingPlanStyleProps } from '../usePricingPlanStyleProps';

describe('usePricingPlanStyleProps', () => {
  it('should return default classProps and all nested class names', () => {
    const { result } = renderHook(() => usePricingPlanStyleProps({}));

    expect(result.current.classProps.root).toBe('PricingPlan');
    expect(result.current.classProps.layout).toBe('PricingPlan__layout');

    expect(result.current.classProps.header.root).toBe('PricingPlanHeader');
    expect(result.current.classProps.header.badge).toBeUndefined();
    expect(result.current.classProps.header.content).toBe('PricingPlanHeader__content');
    expect(result.current.classProps.header.title).toBeUndefined();
    expect(result.current.classProps.header.subtitle).toBeUndefined();
    expect(result.current.classProps.header.price).toBeUndefined();
    expect(result.current.classProps.header.action).toBeUndefined();
    expect(result.current.classProps.header.note).toBeUndefined();

    expect(result.current.classProps.body.root).toBe('PricingPlanBody');
    expect(result.current.classProps.body.featureList).toBe('PricingPlanBody__featureList');
    expect(result.current.classProps.body.featureItem).toBe('PricingPlanBody__featureItem');
    expect(result.current.classProps.body.featureTitle).toBe('PricingPlanBody__featureTitle');
    expect(result.current.classProps.body.featureTitleText).toBe('PricingPlanBody__featureTitleText');
    expect(result.current.classProps.body.featureDescription).toBe('PricingPlanBody__featureDescription');

    expect(result.current.classProps.footer).toBe('PricingPlanFooter');
    expect(result.current.props).toStrictEqual({});
  });

  it('should return class with --comparableFeatures when isComparable is true', () => {
    const { result } = renderHook(() => usePricingPlanStyleProps({ hasComparableFeatures: true }));

    expect(result.current.classProps.root).toContain('PricingPlan--comparableFeatures');
    expect(result.current.props).toStrictEqual({});
  });

  it('should return correct class with highlightedColor', () => {
    const { result } = renderHook(() => usePricingPlanStyleProps({ highlightedColor: '02' }));

    expect(result.current.classProps.root).toContain('PricingPlan--02');
    expect(result.current.props).toStrictEqual({});
  });

  describe.each([
    ['badge', 'PricingPlanHeader__badge'],
    ['title', 'PricingPlanHeader__title'],
    ['subtitle', 'PricingPlanHeader__subtitle'],
    ['price', 'PricingPlanHeader__price'],
    ['action', 'PricingPlanHeader__action'],
    ['note', 'PricingPlanHeader__note'],
  ])('when %s prop is present', (propName, expectedClassName) => {
    it(`should return correct class name for ${propName}`, () => {
      const props = { [propName]: 'value' };
      const { result } = renderHook(() => usePricingPlanStyleProps(props));

      expect(result.current.classProps.header[propName as keyof typeof result.current.classProps.header]).toBe(
        expectedClassName,
      );
    });

    it(`should not return ${propName} in props`, () => {
      const props = { [propName]: 'value' };
      const { result } = renderHook(() => usePricingPlanStyleProps(props));

      expect(result.current.props).toStrictEqual({});
    });
  });

  it('should return rest props untouched', () => {
    const props = { id: 'test-id', 'data-testid': 'pricing-plan' };
    const { result } = renderHook(() => usePricingPlanStyleProps(props));

    expect(result.current.props).toStrictEqual(props);
  });
});
