import { render } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import HelperText from '../HelperText';

describe('HelperText', () => {
  it('should render helper text', () => {
    const dom = render(<HelperText className="HelperText__helperText" helperText="Helper Text" />);

    const element = dom.container.querySelector('div') as HTMLElement;
    expect(element).not.toBeNull();
    expect(element.textContent).toBe('Helper Text');
  });

  it('should render with custom element type', () => {
    const { container } = render(<HelperText elementType="span" helperText="Helper Text" />);

    const element = container.querySelector('span') as HTMLElement;
    expect(element).not.toBeNull();
    expect(element.textContent).toBe('Helper Text');
  });

  it('should render with className and id', () => {
    const { container } = render(
      <HelperText className="test__helperText" id="test-helper-text-id" helperText="Helper Text" />,
    );

    const element = container.querySelector('.test__helperText') as HTMLElement;
    expect(element).not.toBeNull();
    expect(element.getAttribute('id')).toBe('test-helper-text-id');
    expect(element.textContent).toBe('Helper Text');
  });
});
