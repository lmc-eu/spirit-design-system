import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ValidationText from '../ValidationText';

describe('ValidationText', () => {
  it('should render single validation text', () => {
    const dom = render(<ValidationText className="ValidationText__message" validationText="validation message" />);

    const element = dom.container.querySelector('div') as HTMLElement;
    expect(element.textContent).toBe('validation message');
  });

  it('should render multiple validation messages', () => {
    const dom = render(
      <ValidationText
        className="ValidationText__message"
        validationText={['validation message', 'another validation message']}
      />,
    );

    const elements = dom.container.querySelectorAll('li') as NodeListOf<HTMLLIElement>;
    expect(elements[0].textContent).toBe('validation message');
    expect(elements[1].textContent).toBe('another validation message');
  });
});
