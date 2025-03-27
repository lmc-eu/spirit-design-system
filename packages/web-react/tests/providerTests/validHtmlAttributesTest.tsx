import { render } from '@testing-library/react';
import { htmlElementAttributes } from 'html-element-attributes';
import React from 'react';

const globalAttributes = htmlElementAttributes['*'];

// Custom attributes for specific tags which are not present in html-element-attributes library
const customTagAttributes: Record<string, string[]> = {
  svg: ['viewBox', 'fill', 'xmlns', 'xmlns:xlink', 'width', 'height'],
};

// Custom attributes for specific components and tags
const componentSpecificAttributes: Record<string, Record<string, string[]>> = {
  ButtonLink: {
    a: ['role'],
  },
  PaginationButtonLink: {
    a: ['role'],
  },
  PaginationLinkNext: {
    a: ['role'],
  },
  PaginationLinkPrevious: {
    a: ['role'],
  },
  TabItem: {
    li: ['role'],
    button: ['role'],
  },
  TabLink: {
    a: ['role'],
  },
  TabList: {
    ul: ['role'],
  },
  Toast: {
    div: ['role'],
  },
  UncontrolledToast: {
    div: ['role'],
  },
};

const validateHTMLAttributes = (element: HTMLElement, componentName?: string) => {
  const tagName = element.tagName.toLowerCase();

  const tagAttributes = htmlElementAttributes[tagName] || [];
  const validAttributes = [...globalAttributes, ...tagAttributes, ...(customTagAttributes[tagName] || [])];

  if (componentName && componentSpecificAttributes[componentName]?.[tagName]) {
    validAttributes.push(...componentSpecificAttributes[componentName][tagName]);
  }

  Array.from(element.attributes).forEach((attr) => {
    if (!validAttributes.includes(attr.name) && !attr.name.startsWith('data-') && !attr.name.startsWith('aria-')) {
      throw new Error(`Invalid attribute '${attr.name}' on <${tagName}> element`);
    }
  });
};

const validateHTMLForComponent = (container: HTMLElement, componentName?: string) => {
  const elements = container.querySelectorAll('*') as NodeListOf<HTMLElement>;

  elements.forEach((element) => validateHTMLAttributes(element, componentName));
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const validHtmlAttributesTest = (Component: React.ComponentType<any>, props: object = {}) => {
  const componentName = Component.displayName || Component.name || Component.spiritComponent || 'UnknownComponent';

  test(`should render valid HTML for ${componentName}`, () => {
    const { container } = render(<Component {...props} />);
    validateHTMLForComponent(container, componentName);
  });
};
