import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { validationStatePropsTest } from '../../../../tests/providerTests/dictionaryPropsTest';
import { requiredPropsTest } from '../../../../tests/providerTests/requiredPropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import UNSTABLE_Toggle from '../UNSTABLE_Toggle';

describe('UNSTABLE_Toggle', () => {
  classNamePrefixProviderTest(UNSTABLE_Toggle, 'UNSTABLE_Toggle');

  stylePropsTest(UNSTABLE_Toggle);

  restPropsTest(UNSTABLE_Toggle, 'input');

  validationStatePropsTest(UNSTABLE_Toggle, 'UNSTABLE_Toggle--');

  requiredPropsTest(UNSTABLE_Toggle, 'checkbox', 'id', 'example-id');

  it('should have correct className', () => {
    render(<UNSTABLE_Toggle id="test-toggle" label="Toggle Label" />);

    expect(screen.getByRole('checkbox').parentElement).toHaveClass('UNSTABLE_Toggle');
  });

  it('should have label classname', () => {
    render(<UNSTABLE_Toggle id="test-toggle" label="Toggle Label" />);

    const label = screen.getByText('Toggle Label');

    expect(label).toHaveClass('UNSTABLE_Toggle__label');
    expect(label).toContainHTML('label');
  });

  it('should have label with required classname', () => {
    render(<UNSTABLE_Toggle id="test-toggle" label="Toggle Label" isRequired />);

    const label = screen.getByText('Toggle Label');

    expect(label).toHaveClass('UNSTABLE_Toggle__label');
    expect(label).toHaveClass('UNSTABLE_Toggle__label--required');
  });

  it('should have hidden classname', () => {
    render(<UNSTABLE_Toggle id="test-toggle" label="Toggle Label" isLabelHidden />);

    const label = screen.getByText('Toggle Label');

    expect(label).toHaveClass('UNSTABLE_Toggle__label');
    expect(label).toHaveClass('UNSTABLE_Toggle__label--hidden');
  });

  it('should have input classname', () => {
    render(<UNSTABLE_Toggle id="test-toggle" label="Toggle Label" />);

    expect(screen.getByRole('checkbox')).toHaveClass('UNSTABLE_Toggle__input');
  });

  it('should have helper text with correct classname', () => {
    render(<UNSTABLE_Toggle id="test-toggle" label="Toggle Label" helperText="Helper Text" />);

    const helperText = screen.getByText('Helper Text');

    expect(helperText).toBeInTheDocument();
    expect(helperText).toHaveClass('UNSTABLE_Toggle__helperText');
  });

  it('should have correct attribute when checked', () => {
    render(<UNSTABLE_Toggle id="test-toggle" label="Toggle Label" isChecked />);

    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('should have correct attribute when disabled', () => {
    render(<UNSTABLE_Toggle id="test-toggle" label="Toggle Label" isDisabled />);

    expect(screen.getByRole('checkbox')).toBeDisabled();
  });

  it('should have correct classname if fluid', () => {
    render(<UNSTABLE_Toggle id="test-toggle" label="Toggle Label" isFluid />);

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox.parentElement).toHaveClass('UNSTABLE_Toggle');
    expect(checkbox.parentElement).toHaveClass('UNSTABLE_Toggle--fluid');
  });

  it('should have indicators classname', () => {
    render(<UNSTABLE_Toggle id="test-toggle" label="Toggle Label" hasIndicators />);

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toHaveClass('UNSTABLE_Toggle__input');
    expect(checkbox).toHaveClass('UNSTABLE_Toggle__input--indicators');
  });

  it('should change the state of the checkbox when clicked', () => {
    render(<UNSTABLE_Toggle id="test-toggle" label="Toggle Label" />);

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });
});
