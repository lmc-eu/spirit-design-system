import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import {
  useIconMock,
  classNamePrefixProviderTest,
  actionButtonColorPropsTest,
  emotionColorPropsTest,
  sizePropsTest,
  loadingPropsTest,
  restPropsTest,
  stylePropsTest,
} from '@local/tests';
import Button from '../Button';

jest.mock('../../../hooks', () => useIconMock);

describe('Button', () => {
  classNamePrefixProviderTest(Button, 'Button');

  actionButtonColorPropsTest(Button, 'Button--');

  emotionColorPropsTest(Button, 'Button--');

  sizePropsTest(Button);

  loadingPropsTest(Button, 'button');

  stylePropsTest(Button);

  restPropsTest(Button, 'button');

  it('should have default classname', () => {
    const dom = render(<Button />);

    const element = dom.container.querySelector('button') as HTMLElement;
    expect(element).toHaveClass('Button--primary');
  });

  it('should render text children', () => {
    const dom = render(<Button>Hello World</Button>);

    const element = dom.container.querySelector('button') as HTMLElement;
    expect(element.textContent).toBe('Hello World');
  });
});
