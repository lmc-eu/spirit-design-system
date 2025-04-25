import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import {
  ariaAttributesTest,
  classNamePrefixProviderTest,
  elementTypePropsTest,
  restPropsTest,
  stylePropsTest,
  validHtmlAttributesTest,
} from '@local/tests';
import { SpiritItemProps } from '../../../types';
import Item from '../Item';

jest.mock('../../../hooks/useIcon');

describe('Item', () => {
  classNamePrefixProviderTest(Item, 'Item');

  stylePropsTest(Item);

  restPropsTest((props: SpiritItemProps) => <Item {...props} />, 'button');

  validHtmlAttributesTest(Item);

  ariaAttributesTest(Item);

  elementTypePropsTest(Item);

  it('should render label', () => {
    const label = 'Item label';
    const dom = render(<Item label={label} />);

    const element = dom.container.querySelector('.Item > .Item__label') as HTMLElement;
    expect(element).toHaveTextContent(label);
  });

  it('should render helperText', () => {
    const helperText = 'Helper text';
    const dom = render(<Item label="Item label" helperText={helperText} />);

    const element = dom.container.querySelector('.Item > .Item__helperText') as HTMLElement;
    expect(element).toHaveTextContent(helperText);
  });

  it('should render icon', () => {
    const iconName = 'search';
    const dom = render(<Item label="Item label" iconName={iconName} />);

    const element = dom.container.querySelector('.Item > .Item__icon') as HTMLElement;
    expect(element).toHaveClass('Item__icon--start');
  });

  it('should be selected and render end icon', () => {
    const dom = render(<Item label="Item label" isSelected />);

    const element = dom.container.querySelector('.Item') as HTMLElement;
    const iconElement = dom.container.querySelector('.Item > .Item__icon') as HTMLElement;
    expect(element).toHaveClass('Item--selected');
    expect(iconElement).toHaveClass('Item__icon--end');
  });

  it('should be disabled', () => {
    const dom = render(<Item label="Item label" isDisabled />);

    const element = dom.container.querySelector('.Item') as HTMLElement;
    expect(element).toHaveClass('Item--disabled');
  });
});
