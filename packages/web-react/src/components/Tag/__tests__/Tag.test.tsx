import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { emotionColorPropsTest, sizeExtendedPropsTest } from '../../../../tests/providerTests/dictionaryPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import Tag from '../Tag';

describe('Tag', () => {
  classNamePrefixProviderTest(Tag, 'Tag');

  emotionColorPropsTest(Tag, 'Tag--');

  sizeExtendedPropsTest(Tag);

  stylePropsTest(Tag);

  restPropsTest(Tag, 'span');

  it('should have neutral classname', () => {
    const dom = render(<Tag />);

    const element = dom.container.querySelector('span') as HTMLElement;
    expect(element).toHaveClass('Tag--neutral');
  });

  it('should render text children', () => {
    const dom = render(<Tag>Tag</Tag>);

    const element = dom.container.querySelector('span') as HTMLElement;
    expect(element.textContent).toBe('Tag');
  });

  it.each([['neutral'], ['default']])('should render color %s', (color) => {
    const dom = render(<Tag color={color}>333</Tag>);

    const element = dom.container.querySelector('span') as HTMLElement;
    expect(element).toHaveClass(`Tag--${color}`);
  });
});
