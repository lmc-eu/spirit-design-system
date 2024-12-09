import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import Icon from '../Icon';

jest.mock('../../../hooks', () => {
  return {
    ...jest.requireActual('../../../hooks'),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    useIcon: (name: string) => '',
  };
});

describe('Icon', () => {
  const AddIcon = (props: Record<string, unknown>) => <Icon {...props} name="add" data-testid="test-icon" />;

  stylePropsTest(AddIcon, 'test-icon');

  restPropsTest((props: Record<string, unknown>) => <Icon {...props} name="add" />, 'svg');

  it('should have correct width and height', () => {
    const boxSize = 33;
    const dom = render(<Icon name="add" boxSize={boxSize} />);

    const element = dom.container.querySelector('svg') as SVGSVGElement;
    expect(element).toHaveAttribute('width', boxSize.toString());
    expect(element).toHaveAttribute('height', boxSize.toString());
  });
});
