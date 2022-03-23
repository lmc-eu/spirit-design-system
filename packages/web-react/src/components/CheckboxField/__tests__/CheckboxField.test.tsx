import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import CheckboxField from '../CheckboxField';
import { ClassNamePrefixProvider } from '../../../context/ClassNamePrefixContext';

describe('CheckboxField', () => {
  it('should have default classname', () => {
    const dom = render(<CheckboxField />);

    const element = dom.container.querySelector('label') as HTMLElement;
    expect(element).toHaveClass('CheckboxField');
  });

  it('should have classname with lmc prefix', () => {
    const dom = render(
      <ClassNamePrefixProvider value="lmc">
        <CheckboxField />
      </ClassNamePrefixProvider>,
    );

    const element = dom.container.querySelector('label') as HTMLElement;
    expect(element).toHaveClass('lmc-CheckboxField');
  });

  it('should have text classname', () => {
    const dom = render(<CheckboxField />);

    const element = dom.container.querySelector('label > span') as HTMLElement;
    expect(element).toHaveClass('CheckboxField__text');
  });

  it('should have label classname', () => {
    const dom = render(<CheckboxField isLabelHidden />);

    const element = dom.container.querySelector('label > span > span') as HTMLElement;
    expect(element).toHaveClass('CheckboxField__label');
  });

  it('should have hidden classname', () => {
    const dom = render(<CheckboxField isLabelHidden />);

    const element = dom.container.querySelector('label > span > span') as HTMLElement;
    expect(element).toHaveClass('CheckboxField__label--hidden');
  });

  it('should have required classname', () => {
    const dom = render(<CheckboxField isRequired />);

    const element = dom.container.querySelector('label > span > span') as HTMLElement;
    expect(element).toHaveClass('CheckboxField__label--required');
  });

  it('should have input classname', () => {
    const dom = render(<CheckboxField />);

    const element = dom.container.querySelector('input') as HTMLElement;
    expect(element).toHaveClass('CheckboxField__input');
  });

  it('should have message', () => {
    const dom = render(<CheckboxField message="text" />);

    const element = dom.container.querySelector('.CheckboxField__message') as HTMLElement;
    expect(element.textContent).toBe('text');
  });

  it('should have error classname', () => {
    const dom = render(<CheckboxField validationState="error" />);

    const element = dom.container.querySelector('label') as HTMLElement;
    expect(element).toHaveClass('CheckboxField--error');
  });
});
