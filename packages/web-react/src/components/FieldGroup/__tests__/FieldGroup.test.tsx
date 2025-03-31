import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import {
  classNamePrefixProviderTest,
  validationStatePropsTest,
  restPropsTest,
  stylePropsTest,
  validationTextPropsTest,
  validHtmlAttributesTest,
} from '@local/tests';
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

  validHtmlAttributesTest(FieldGroup);

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
    render(
      <FieldGroup id="example-field-group" label="Label" isRequired>
        {itemList}
      </FieldGroup>,
    );

    expect(screen.getAllByText('Label')[1]).toHaveClass('FieldGroup__label--required');
  });

  it('should have className isDisabled', () => {
    render(
      <FieldGroup id="example-field-group" label="Label" isDisabled>
        {itemList}
      </FieldGroup>,
    );

    expect(screen.getByRole('group')).toHaveAttribute('disabled');
  });

  it('should not have visible label', () => {
    render(
      <FieldGroup id="example-field-group" label="Label" isLabelHidden>
        {itemList}
      </FieldGroup>,
    );

    expect(screen.getAllByText('Label')[1]).toBeUndefined();
  });

  it('should have className isFluid', () => {
    render(
      <FieldGroup id="example-field-group" label="Label" isFluid>
        {itemList}
      </FieldGroup>,
    );

    expect(screen.getByRole('group')).toHaveClass('FieldGroup--fluid');
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

    expect(screen.getByText('helper text')).toHaveAttribute('id', 'example-field-group__helperText');
  });

  it('should render with html tags', () => {
    render(
      <FieldGroup
        id="test"
        label={
          <>
            Label <b>Text</b>
          </>
        }
      >
        {itemList}
      </FieldGroup>,
    );

    const element = screen.getAllByText('Label')[1];

    expect(element).toHaveTextContent('Label Text');
    expect(element.innerHTML).toBe('Label <b>Text</b>');
  });
});
