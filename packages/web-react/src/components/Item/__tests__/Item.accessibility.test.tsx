import React from 'react';
import { accessibilityDisabledTest, accessibilityTest } from '@local/tests';
import { type SpiritItemProps } from '../../../types';
import Item from '../Item';

jest.mock('../../../hooks/useIcon');

describe('Item accessibility', () => {
  const ItemTest = (props: SpiritItemProps) => <Item {...props} label="Item label" />;

  accessibilityTest(ItemTest, 'button');

  accessibilityDisabledTest(ItemTest, 'button');
});
