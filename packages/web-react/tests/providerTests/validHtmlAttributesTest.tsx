import { render } from '@testing-library/react';
import { htmlElementAttributes } from 'html-element-attributes';
import React from 'react';

const globalAttributes = htmlElementAttributes['*'];

const validateHTMLAttributes = (element: HTMLElement) => {
  const tagName = element.tagName.toLowerCase();

  const validAttributes = [...Object.keys(document.createElement(tagName)), ...globalAttributes];

  Array.from(element.attributes).forEach((attr) => {
    if (!validAttributes.includes(attr.name) && !attr.name.startsWith('data-') && !attr.name.startsWith('aria-')) {
      throw new Error(`Invalid attribute '${attr.name}' on <${tagName}> element`);
    }
  });
};

const validateHTMLForComponent = (container: HTMLElement) => {
  const elements = container.querySelectorAll('*') as NodeListOf<HTMLElement>;

  elements.forEach(validateHTMLAttributes);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const validHtmlAttributesTest = (Component: React.ComponentType<any>, props: object = {}) => {
  test(`should render valid HTML`, () => {
    const { container } = render(<Component {...props} />);
    validateHTMLForComponent(container);
  });
};
