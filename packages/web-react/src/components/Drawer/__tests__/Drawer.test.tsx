import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest, restPropsTest, stylePropsTest } from '@local/tests';
import { SpiritDrawerProps } from '../../../types';
import Drawer from '../Drawer';

const mockedOnClose = jest.fn();

describe('Drawer', () => {
  const DrawerTest = (props: SpiritDrawerProps) => (
    <Drawer {...props} id="drawer-example" isOpen={false} onClose={() => null}>
      <div>Test</div>
    </Drawer>
  );

  classNamePrefixProviderTest(DrawerTest, 'Drawer');

  stylePropsTest(DrawerTest);

  restPropsTest(DrawerTest, 'dialog');

  it('should not close drawer', () => {
    render(
      <Drawer id="test" isOpen onClose={mockedOnClose} closeOnBackdropClick={false}>
        <div>Test</div>
      </Drawer>,
    );

    const dialog = screen.getByRole('dialog');
    fireEvent.click(dialog);

    expect(mockedOnClose).not.toHaveBeenCalled();
  });

  it('should close drawer', () => {
    render(
      <Drawer id="test" isOpen onClose={mockedOnClose} closeOnBackdropClick>
        <div>Test</div>
      </Drawer>,
    );

    const dialog = screen.getByRole('dialog');
    fireEvent.click(dialog);

    expect(mockedOnClose).toHaveBeenCalled();
  });

  it('should render drawer content', () => {
    render(
      <Drawer id="test" isOpen onClose={mockedOnClose}>
        <div>Test</div>
      </Drawer>,
    );

    expect(screen.getByRole('dialog')).toHaveTextContent('Test');
  });

  it('should render drawer with correct alignment class', () => {
    render(
      <Drawer id="test" isOpen onClose={mockedOnClose} alignmentX="left">
        <div>Test</div>
      </Drawer>,
    );

    expect(screen.getByRole('dialog')).toHaveClass('Drawer--left');
  });
});
