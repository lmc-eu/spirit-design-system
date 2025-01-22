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
import Select from '../Select';

jest.mock('../../../hooks/useIcon');

describe('Select', () => {
  classNamePrefixProviderTest(Select, 'Select');

  stylePropsTest(Select);

  restPropsTest(Select, 'select');

  validationStatePropsTest(Select, 'Select--');

  validationTextPropsTest(Select, '.Select__validationText');

  requiredPropsTest(Select, 'combobox', 'id', 'test-select');

  it('should have label classname', () => {
    render(
      <Select id="test-select" label="Label">
        <option value="1">Option 1</option>
      </Select>,
    );

    expect(screen.getByText('Label')).toHaveClass('Select__label');
  });

  it('should have hidden classname', () => {
    render(
      <Select id="test-select" label="Label" isLabelHidden>
        <option value="1">Option 1</option>
      </Select>,
    );

    expect(screen.getByText('Label')).toHaveClass('Select__label--hidden');
  });

  it('should have required classname', () => {
    render(
      <Select id="test-select" label="Label" isRequired>
        <option value="1">Option 1</option>
      </Select>,
    );

    expect(screen.getByText('Label')).toHaveClass('Select__label--required');
  });

  it('should have input classname', () => {
    render(
      <Select id="test-select" label="Label">
        <option value="1">Option 1</option>
      </Select>,
    );

    expect(screen.getByLabelText('Label')).toHaveClass('Select__input');
  });

  it('should have helper text', () => {
    render(
      <Select id="test-select" label="Label" helperText="helper text">
        <option value="1">Option 1</option>
      </Select>,
    );

    expect(screen.getByText('Label').parentElement?.lastChild).toHaveTextContent('helper text');
  });

  it('should have fluid classname', () => {
    render(
      <Select id="test-select" label="Label" isFluid>
        <option value="1">Option 1</option>
      </Select>,
    );

    expect(screen.getByText('Label').parentElement).toHaveClass('Select--fluid');
  });

  it('should render label with html tags', () => {
    render(
      <Select
        id="test-select"
        label={
          <>
            Select <b>Label</b>
          </>
        }
      >
        <option value="1">Option 1</option>
      </Select>,
    );

    const element = screen.getByText('Label').parentElement as HTMLElement;

    expect(element).toHaveTextContent('Select Label');
    expect(element.innerHTML).toBe('Select <b>Label</b>');
  });
});
