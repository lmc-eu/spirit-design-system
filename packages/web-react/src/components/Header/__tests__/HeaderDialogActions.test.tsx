import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import HeaderDialogActions from '../HeaderDialogActions';

describe('HeaderDialogActions', () => {
  classNamePrefixProviderTest(HeaderDialogActions, 'HeaderDialogActions');

  stylePropsTest(
    (props) => <HeaderDialogActions {...props} data-testid="header-dialog-actions-test" />,
    'header-dialog-actions-test',
  );

  restPropsTest((props) => <HeaderDialogActions {...props} />, 'nav');

  it('should render text children', () => {
    const dom = render(<HeaderDialogActions id="test">Hello World</HeaderDialogActions>);

    const element = dom.container.querySelector('nav') as HTMLElement;
    expect(element.textContent).toBe('Hello World');
  });
});
