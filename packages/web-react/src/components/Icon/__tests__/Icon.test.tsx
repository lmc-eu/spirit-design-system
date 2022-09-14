import React from 'react';
import '@testing-library/jest-dom';
import Icon from '../Icon';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';

describe('Icon', () => {
  const AddIcon = (props: Record<string, unknown>) => <Icon {...props} name="add" data-testid="test-icon" />;

  stylePropsTest(AddIcon, 'test-icon');

  restPropsTest((props: Record<string, unknown>) => <Icon {...props} name="add" />, 'svg');
});
