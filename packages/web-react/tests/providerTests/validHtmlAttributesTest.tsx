import { render } from '@testing-library/react';
import { htmlElementAttributes } from 'html-element-attributes';
import React from 'react';

const globalAttributes = [...htmlElementAttributes['*'], 'role'];

// Custom attributes for specific tags which are not present in html-element-attributes library
const customTagAttributes: Record<string, string[]> = {
  svg: ['viewBox', 'fill', 'xmlns', 'xmlns:xlink', 'width', 'height'],
};

const validateHTMLAttributes = (element: HTMLElement) => {
  const tagName = element.tagName.toLowerCase();

  const tagAttributes = htmlElementAttributes[tagName] || [];
  const validAttributes = [...globalAttributes, ...tagAttributes, ...(customTagAttributes[tagName] || [])];

  Array.from(element.attributes).forEach((attr) => {
    if (!validAttributes.includes(attr.name) && !attr.name.startsWith('data-') && !attr.name.startsWith('aria-')) {
      throw new Error(`Invalid attribute '${attr.name}' on <${tagName}> element`);
    }
  });
};

const validateHTMLForComponent = (container: HTMLElement) => {
  const elements = container.querySelectorAll('*') as NodeListOf<HTMLElement>;

  elements.forEach((element) => validateHTMLAttributes(element));
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const validHtmlAttributesTest = (Component: React.ComponentType<any>, props: object = {}) => {
  const componentName = Component.displayName || Component.name || Component.spiritComponent || 'UnknownComponent';

  test(`should render valid HTML for ${componentName}`, () => {
    const { container } = render(<Component {...props} />);
    validateHTMLForComponent(container);
  });
};
