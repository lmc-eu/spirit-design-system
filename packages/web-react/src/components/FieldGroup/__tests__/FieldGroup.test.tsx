import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { validationStatePropsTest } from '../../../../tests/providerTests/dictionaryPropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { validationTextPropsTest } from '../../../../tests/providerTests/validationTextPropsTest';
import FieldGroup from '../FieldGroup';

describe('FieldGroup', () => {
  const itemList = (
    <>
      <div>Item</div>
      <div>Item</div>
      <div>Item</div>
    </>
  );

  classNamePrefixProviderTest(FieldGroup, 'FieldGroup');

  validationStatePropsTest(FieldGroup, 'FieldGroup--');

  validationTextPropsTest(FieldGroup, '.FieldGroup__validationText');

  stylePropsTest(
    (props) => <FieldGroup {...props} label="Label" id="field-group-example" data-testid="test-field-group" />,
    'test-field-group',
  );

  restPropsTest((props) => <FieldGroup {...props} label="Label" />, 'fieldset');

  it('should render items as children', () => {
    render(
      <FieldGroup id="example-field-group" label="Label">
        {itemList}
      </FieldGroup>,
    );

    const fieldGroup = screen.getByRole('group');

    expect(fieldGroup).toHaveClass('FieldGroup');

    const label = fieldGroup.querySelector('legend') as HTMLElement;

    expect(label).toHaveTextContent('Label');

    const labelDiv = fieldGroup.querySelector('.FieldGroup__label') as HTMLElement;

    expect(labelDiv).toHaveTextContent('Label');

    const list = fieldGroup.querySelector('.FieldGroup__fields') as HTMLElement;
    const items = list.querySelectorAll('div');

    expect(items).toHaveLength(3);
    expect(items[0]).toHaveTextContent('Item');
  });

  it('should have className isRequired', () => {
    const dom = render(
      <FieldGroup id="example-field-group" label="Label" isRequired>
        {itemList}
      </FieldGroup>,
    );

    const element = dom.container.querySelector('div') as HTMLElement;

    expect(element).toHaveClass('FieldGroup__label--required');
  });

  it('should have className isDisabled', () => {
    const dom = render(
      <FieldGroup id="example-field-group" label="Label" isDisabled>
        {itemList}
      </FieldGroup>,
    );

    const element = dom.container.querySelector('fieldset') as HTMLElement;

    expect(element).toHaveAttribute('disabled');
  });

  it('should not have visible label', () => {
    const dom = render(
      <FieldGroup id="example-field-group" label="Label" isLabelHidden>
        {itemList}
      </FieldGroup>,
    );

    const element = dom.container.querySelector('fieldset div') as HTMLElement;

    expect(element).not.toHaveClass('FieldGroup__label');
  });

  it('should have className isFluid', () => {
    const dom = render(
      <FieldGroup id="example-field-group" label="Label" isFluid>
        {itemList}
      </FieldGroup>,
    );

    const element = dom.container.querySelector('fieldset') as HTMLElement;

    expect(element).toHaveClass('FieldGroup--fluid');
  });

  it('should have helper text', () => {
    render(
      <FieldGroup id="example-field-group" label="Label" helperText="helper text">
        {itemList}
      </FieldGroup>,
    );

    const element = screen.getByText('helper text');

    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('FieldGroup__helperText');
  });

  it('should have correct id', () => {
    render(
      <FieldGroup id="example-field-group" label="Label" helperText="helper text">
        {itemList}
      </FieldGroup>,
    );

    const element = screen.getByText('helper text');

    expect(element).toHaveAttribute('id', 'example-field-group__helperText');
  });
});
