import { type ElementType } from 'react';

/**
 * Type for components that have the standard Spirit static properties
 */
type ComponentWithStaticProps = {
  spiritComponent?: string;
  spiritDefaultElement?: ElementType;
  spiritDefaultProps?: unknown;
};

/**
 * Tests that a component has the expected static properties for polymorphic type checking.
 * This is useful for components that use `spiritDefaultElement` and `spiritDefaultProps`
 * to enable strict type checking when used as `elementType` in other polymorphic components.
 *
 * @param Component - The component to test
 * @param expectedComponentName - The expected value for `spiritComponent`
 * @param expectedDefaultElement - The expected value for `spiritDefaultElement` (optional)
 */
export const staticPropsTest = (
  Component: ComponentWithStaticProps,
  expectedComponentName: string,
  expectedDefaultElement?: ElementType,
) => {
  describe('static properties', () => {
    it('should have spiritComponent property', () => {
      expect(Component.spiritComponent).toBe(expectedComponentName);
    });

    if (expectedDefaultElement !== undefined) {
      it('should have spiritDefaultElement property', () => {
        expect(Component.spiritDefaultElement).toBe(expectedDefaultElement);
      });

      it('should have spiritDefaultProps property', () => {
        expect(Component.spiritDefaultProps).toBeDefined();
        // spiritDefaultProps is used for type inference, so we just verify it exists
        // It's typically set to null with a type assertion
        expect(Component.spiritDefaultProps).toBeNull();
      });
    }
  });
};
