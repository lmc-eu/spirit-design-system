import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import HeaderDialogActions from '../HeaderDialogActions';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';

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
