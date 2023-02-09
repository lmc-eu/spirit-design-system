import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';

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
