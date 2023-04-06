import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { textColorPropsTest } from '../../../../tests/providerTests/dictionaryPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
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
});
