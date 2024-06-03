import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { textColorPropsTest } from '../../../../tests/providerTests/dictionaryPropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import Spinner from '../Spinner';

describe('Spinner', () => {
  classNamePrefixProviderTest(Spinner, 'animation-spin-clockwise');

  stylePropsTest(Spinner);

  textColorPropsTest(Spinner, 'text-');

  restPropsTest(Spinner, 'svg');

  it('should have correct classes', () => {
    const dom = render(<Spinner />);

    expect(dom.container.querySelector('svg') as SVGSVGElement).toHaveClass('animation-spin-clockwise');
  });

  it('should have correct width and height', () => {
    const boxSize = 33;
    const dom = render(<Spinner name="add" boxSize={boxSize} />);

    const element = dom.container.querySelector('svg') as SVGSVGElement;
    expect(element).toHaveAttribute('width', boxSize.toString());
    expect(element).toHaveAttribute('height', boxSize.toString());
  });
});
