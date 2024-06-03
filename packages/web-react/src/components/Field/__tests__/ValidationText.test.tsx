import { render } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import ValidationText from '../ValidationText';

describe('ValidationText', () => {
  it('should render single validation text', () => {
    const dom = render(<ValidationText className="ValidationText__validationText" validationText="validation text" />);

    const element = dom.container.querySelector('div') as HTMLElement;
    expect(element.textContent).toBe('validation text');
  });

  it('should render multiple validation texts', () => {
    const dom = render(
      <ValidationText
        className="ValidationText__validationText"
        validationText={['validation text', 'another validation text']}
      />,
    );

    const elements = dom.container.querySelectorAll('li') as NodeListOf<HTMLLIElement>;
    expect(elements[0].textContent).toBe('validation text');
    expect(elements[1].textContent).toBe('another validation text');
  });
});
