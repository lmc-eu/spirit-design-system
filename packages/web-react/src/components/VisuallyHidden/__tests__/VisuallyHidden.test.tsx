import { render } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import VisuallyHidden from '../VisuallyHidden';

describe('Visually Hidden', () => {
  classNamePrefixProviderTest(VisuallyHidden, 'accessibility-hidden');

  stylePropsTest(VisuallyHidden);

  restPropsTest(VisuallyHidden, 'span');

  it('should render `Label`', () => {
    const dom = render(<VisuallyHidden>Label</VisuallyHidden>);

    const element = dom.container.querySelector('span') as HTMLElement;
    expect(element.className).toBe('accessibility-hidden');
    expect(element.textContent).toBe('Label');
  });

  it('should render `Label` in div element', () => {
    const dom = render(<VisuallyHidden elementType="div">Label</VisuallyHidden>);

    const element = dom.container.querySelector('div') as HTMLElement;
    expect(element.className).toBe('accessibility-hidden');
    expect(element.textContent).toBe('Label');
  });
});
