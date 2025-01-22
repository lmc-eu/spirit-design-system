import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import {
  classNamePrefixProviderTest,
  validationStatePropsTest,
  requiredPropsTest,
  restPropsTest,
  stylePropsTest,
  validationTextPropsTest,
} from '@local/tests';
import TextArea from '../TextArea';

describe('TextArea', () => {
  classNamePrefixProviderTest(TextArea, 'TextArea');

  stylePropsTest(TextArea);

  restPropsTest(TextArea, 'textarea');

  validationStatePropsTest(TextArea, 'TextArea--');

  validationTextPropsTest(TextArea, '.TextArea__validationText');

  requiredPropsTest(TextArea, 'textbox', 'id', 'example-id');

  it('should have label classname', () => {
    render(<TextArea id="textarea" label="Label" />);

    expect(screen.getByText('Label')).toHaveClass('TextArea__label');
  });

  it('should have hidden classname', () => {
    render(<TextArea id="textarea" label="Label" isLabelHidden />);

    expect(screen.getByText('Label')).toHaveClass('TextArea__label--hidden');
  });

  it('should have required classname', () => {
    render(<TextArea id="textarea" label="Label" isRequired />);

    expect(screen.getByText('Label')).toHaveClass('TextArea__label--required');
  });

  it('should have input classname', () => {
    render(<TextArea id="textarea" label="Label" />);

    expect(screen.getByRole('textbox')).toHaveClass('TextArea__input');
  });

  it('should have helper text', () => {
    render(<TextArea id="textarea" label="Label" helperText="helper text" />);

    expect(screen.getByRole('textbox').nextElementSibling).toHaveTextContent('helper text');
  });

  it('should have fluid classname', () => {
    render(<TextArea id="textarea" label="Label" isFluid />);

    expect(screen.getByRole('textbox').parentElement).toHaveClass('TextArea--fluid');
  });

  describe('autoresizing', () => {
    it('should adjust height when mounted and autoresizing is enabled', () => {
      render(<TextArea id="textarea" label="Label" isFluid isAutoResizing />);

      expect(screen.getByRole('textbox').style.height).toBe('2px');
    });

    it('should not adjust height when mounted and autoresizing is not used', () => {
      render(<TextArea id="textarea" label="Label" isFluid />);

      expect(screen.getByRole('textbox').style.height).toBe('');
    });
  });

  it('should render label with html tags', () => {
    render(
      <TextArea
        id="textarea"
        label={
          <>
            TextArea <b>Label</b>
          </>
        }
      />,
    );

    const element = screen.getByRole('textbox').parentElement?.firstChild as HTMLElement;

    expect(element).toHaveTextContent('TextArea Label');
    expect(element.innerHTML).toBe('TextArea <b>Label</b>');
  });
});
