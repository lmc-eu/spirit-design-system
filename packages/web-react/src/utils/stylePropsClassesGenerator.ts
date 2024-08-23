import { toPascalCase } from './toPascalCase';

type Breakpoints = 'mobile' | 'tablet' | 'desktop';
type ResponsiveProp = {
  [key in Breakpoints]: string;
};
type StaticProp = string;

export function generateStaticStylePropsClasses(componentClass: string, property: StaticProp, type?: string): string {
  return `${componentClass}--${type || ''}${type ? toPascalCase(property) : property}`;
}

export function generateResponsiveStylePropsClasses(
  componentClass: string,
  property: ResponsiveProp,
  type?: string,
): string {
  return Object.keys(property)
    .map((key) => {
      const infix = key === 'mobile' ? '' : `--${key}`;
      const responsiveProperty = property[key as Breakpoints];

      return `${componentClass}${infix}--${type || ''}${type ? toPascalCase(responsiveProperty) : responsiveProperty}`;
    })
    .join(' ');
}

function isResponsiveProperty<P>(property: P) {
  return property && typeof property === 'object';
}

export function generateStylePropsClassNames<P>(componentClass: string, property: P, type?: string): string {
  const generate = isResponsiveProperty<P>(property)
    ? generateResponsiveStylePropsClasses
    : generateStaticStylePropsClasses;

  return generate(componentClass, property as unknown as ResponsiveProp & StaticProp, type);
}
