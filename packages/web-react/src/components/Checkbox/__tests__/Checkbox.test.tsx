import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import {
  classNamePrefixProviderTest,
  validationStatePropsTest,
  itemPropsTest,
  requiredPropsTest,
  restPropsTest,
  stylePropsTest,
  validationTextPropsTest,
} from '@local/tests';
import Checkbox from '../Checkbox';

describe('Checkbox', () => {
  classNamePrefixProviderTest(Checkbox, 'Checkbox');

  itemPropsTest(Checkbox);

  stylePropsTest(Checkbox);

  restPropsTest(Checkbox, 'input');

  validationStatePropsTest(Checkbox, 'Checkbox--');

  validationTextPropsTest(Checkbox, '.Checkbox__validationText');

  requiredPropsTest(Checkbox, 'checkbox', 'id', 'test-checkbox');

  it('should have text classname', () => {
    render(<Checkbox id="checkbox" label="Label" />);

    expect(screen.getByRole('checkbox').nextElementSibling).toHaveClass('Checkbox__text');
  });

  it('should have label classname', () => {
    render(<Checkbox id="checkbox" label="Label" />);

    expect(screen.getByRole('checkbox').nextElementSibling?.firstChild).toHaveClass('Checkbox__label');
  });

  it('should have hidden classname', () => {
    render(<Checkbox id="checkbox" label="Label" isLabelHidden />);

    expect(screen.getByRole('checkbox').nextElementSibling?.firstChild).toHaveClass('Checkbox__label--hidden');
  });

  it('should have required classname', () => {
    render(<Checkbox id="checkbox" label="Label" isRequired />);

    expect(screen.getByRole('checkbox').nextElementSibling?.firstChild).toHaveClass('Checkbox__label--required');
  });

  it('should have input classname', () => {
    render(<Checkbox id="checkbox" label="Label" />);

    expect(screen.getByRole('checkbox')).toHaveClass('Checkbox__input');
  });

  it('should have helper text', () => {
    render(<Checkbox id="checkbox" label="Label" helperText="text" />);

    const element = screen.getByText('text');

    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('Checkbox__helperText');
  });

  it('should render label with html tags', () => {
    render(
      <Checkbox
        id="checkbox"
        label={
          <>
            Label <b>Text</b>
          </>
        }
      />,
    );

    const element = screen.getByRole('checkbox').nextElementSibling?.firstChild as HTMLElement;

    expect(element).toHaveTextContent('Label Text');
    expect(element.innerHTML).toBe('Label <b>Text</b>');
  });
});
