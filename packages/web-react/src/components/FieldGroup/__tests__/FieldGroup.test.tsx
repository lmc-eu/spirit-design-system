import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { validationTextPropsTest } from '../../../../tests/providerTests/validationTextPropsTest';
import { validationStatePropsTest } from '../../../../tests/providerTests/dictionaryPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
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
    (props) => <FieldGroup {...props} label="Label" id="FieldGroupExample" data-testid="test-FieldGroup" />,
    'test-FieldGroup',
  );

  restPropsTest((props) => <FieldGroup {...props} label="Label" />, 'fieldset');

  it('should render items as children', () => {
    const dom = render(<FieldGroup label="Label">{itemList}</FieldGroup>);

    const fieldGroup = dom.container.querySelector('fieldset') as HTMLElement;

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
      <FieldGroup label="Label" isRequired>
        {itemList}
      </FieldGroup>,
    );

    const element = dom.container.querySelector('div') as HTMLElement;

    expect(element).toHaveClass('FieldGroup__label--required');
  });

  it('should have className isDisabled', () => {
    const dom = render(
      <FieldGroup label="Label" isDisabled>
        {itemList}
      </FieldGroup>,
    );

    const element = dom.container.querySelector('fieldset') as HTMLElement;

    expect(element).toHaveAttribute('disabled');
  });

  it('should not have visible label', () => {
    const dom = render(
      <FieldGroup label="Label" isLabelHidden>
        {itemList}
      </FieldGroup>,
    );

    const element = dom.container.querySelector('fieldset div') as HTMLElement;

    expect(element).not.toHaveClass('FieldGroup__label');
  });

  it('should have className isFluid', () => {
    const dom = render(
      <FieldGroup label="Label" isFluid>
        {itemList}
      </FieldGroup>,
    );

    const element = dom.container.querySelector('fieldset') as HTMLElement;

    expect(element).toHaveClass('FieldGroup--fluid');
  });

  it('should have helper text', () => {
    const dom = render(
      <FieldGroup label="Label" helperText="helper text">
        {itemList}
      </FieldGroup>,
    );

    const element = dom.container.querySelector('.FieldGroup__helperText') as HTMLElement;

    expect(element.textContent).toBe('helper text');
  });
});
