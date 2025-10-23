import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import {
  ariaAttributesTest,
  classNamePrefixProviderTest,
  elementTypePropsTest,
  restPropsTest,
  sizePropsTest,
  stylePropsTest,
  validHtmlAttributesTest,
} from '@local/tests';
import ControlButton from '../ControlButton';

describe('ControlButton', () => {
  classNamePrefixProviderTest(ControlButton, 'ControlButton');

  sizePropsTest(ControlButton);

  stylePropsTest(ControlButton);

  restPropsTest(ControlButton, 'button');

  validHtmlAttributesTest(ControlButton);

  ariaAttributesTest(ControlButton);

  elementTypePropsTest(ControlButton);

  it('should have default classname', () => {
    const dom = render(<ControlButton />);

    const element = dom.getByRole('button');
    expect(element).toHaveClass('ControlButton');
    expect(element).toHaveClass('ControlButton--medium');
    expect(element).toHaveClass('dynamic-color-background-interactive');
    expect(element).toHaveClass('accessibility-tap-target');
  });

  it('should render text children', () => {
    const dom = render(<ControlButton>Close</ControlButton>);

    const element = dom.getByRole('button');
    expect(element.textContent).toBe('Close');
  });

  it('should have dynamic-color-border class by default (isSubtle is false)', () => {
    const dom = render(<ControlButton />);

    const element = dom.getByRole('button');
    expect(element).toHaveClass('dynamic-color-border');
  });

  it('should not have dynamic-color-border class when isSubtle is true', () => {
    const dom = render(<ControlButton isSubtle />);

    const element = dom.getByRole('button');
    expect(element).not.toHaveClass('dynamic-color-border');
  });

  it('should have dynamic-color-border class when isSubtle is false', () => {
    const dom = render(<ControlButton isSubtle={false} />);

    const element = dom.getByRole('button');
    expect(element).toHaveClass('dynamic-color-border');
  });

  it('should have symmetrical class when isSymmetrical is true', () => {
    const dom = render(<ControlButton isSymmetrical />);

    const element = dom.getByRole('button');
    expect(element).toHaveClass('ControlButton--symmetrical');
  });

  it('should have disabled class when isDisabled is true', () => {
    const dom = render(<ControlButton isDisabled />);

    const element = dom.getByRole('button');
    expect(element).toHaveClass('ControlButton--disabled');
    expect(element).toBeDisabled();
  });
});
