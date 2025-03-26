import { render } from '@testing-library/react';
import React from 'react';

const globalAttributes = [
  'accesskey',
  'class',
  'contenteditable',
  'dir',
  'draggable',
  'hidden',
  'id',
  'lang',
  'spellcheck',
  'style',
  'tabindex',
  'title',
  'translate',
  'role',
  'slot',
  'summary',
];

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

export const validHtmlAttributesTest = (Component: React.ComponentType<any>, props: object = {}) => {
  test(`should render valid HTML`, () => {
    const { container } = render(<Component {...props} />);
    validateHTMLForComponent(container);
  });
};
