import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import HelperText from '../HelperText';

describe('HelperText', () => {
  const helperText = 'Helper Text';

  it('should render helper text', () => {
    render(<HelperText className="HelperText__helperText" helperText={helperText} />);

    const element = screen.getByText(helperText);

    expect(element.textContent).toBe(helperText);
  });

  it('should render with custom element type', () => {
    render(<HelperText elementType="span" helperText={helperText} />);

    const element = screen.getByText(helperText);

    expect(element.tagName).toBe('SPAN');
  });

  it('should render with className and id', () => {
    const helperTextId = 'test-helper-text-id';
    const helperTextClass = 'test__helperText';

    render(<HelperText className={helperTextClass} id={helperTextId} helperText={helperText} data-testid="test" />);

    const element = screen.getByText(helperText);

    expect(element.getAttribute('id')).toBe(helperTextId);
    expect(element).toHaveClass(helperTextClass);
  });

  it('should render with html tags', () => {
    render(
      <HelperText
        id="test"
        helperText={
          <>
            Helper <b>Text</b>
          </>
        }
      />,
    );

    const element = document.querySelector('#test') as HTMLElement;

    expect(element).toHaveTextContent('Helper Text');
    expect(element.innerHTML).toBe('Helper <b>Text</b>');
  });
});
