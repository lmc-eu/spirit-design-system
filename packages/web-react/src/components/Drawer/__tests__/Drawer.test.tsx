import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { SpiritDrawerProps } from '../../../types';
import Drawer from '../Drawer';

describe('Drawer', () => {
  const DrawerTest = (props: SpiritDrawerProps) => (
    <Drawer {...props} id="drawer-example" isOpen={false} onClose={() => null}>
      <div>Test</div>
    </Drawer>
  );

  classNamePrefixProviderTest(DrawerTest, 'Drawer');

  stylePropsTest(DrawerTest);

  restPropsTest(DrawerTest, 'dialog');

  it('should not close drawer dialog', () => {
    const mockedOnClose = jest.fn();
    render(
      <Drawer id="test" isOpen onClose={mockedOnClose} closeOnBackdropClick={false}>
        <div>Test</div>
      </Drawer>,
    );

    const dialog = screen.getByRole('dialog');
    fireEvent.click(dialog);

    expect(mockedOnClose).not.toHaveBeenCalled();
  });

  it('should close drawer dialog', () => {
    const mockedOnClose = jest.fn();
    render(
      <Drawer id="test" isOpen onClose={mockedOnClose} closeOnBackdropClick>
        <div>Test</div>
      </Drawer>,
    );

    const dialog = screen.getByRole('dialog');
    fireEvent.click(dialog);

    expect(mockedOnClose).toHaveBeenCalled();
  });
});
