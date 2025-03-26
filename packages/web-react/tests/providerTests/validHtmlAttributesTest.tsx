import { render } from '@testing-library/react';
import React from 'react';

const validateHTMLAttributes = (element: HTMLElement) => {
  const tagName = element.tagName.toLowerCase();

  const validAttributes = Object.keys(element).filter(
    (key) => key !== 'style' && key !== 'class' && key in document.createElement(tagName),
  );

  validAttributes.push('class', 'style');

  Array.from(element.attributes).forEach((attr) => {
    if (!validAttributes.includes(attr.name)) {
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
