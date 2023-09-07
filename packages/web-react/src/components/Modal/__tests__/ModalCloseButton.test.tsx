import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import ModalCloseButton from '../ModalCloseButton';

describe('ModalCloseButton', () => {
  classNamePrefixProviderTest(ModalCloseButton, 'Button');

  stylePropsTest(ModalCloseButton);

  restPropsTest(ModalCloseButton, 'button');

  it('should have icon', () => {
    const dom = render(<ModalCloseButton label="close" id="test" isOpen onClose={() => {}} />);

    expect(dom.container.querySelector('svg')).toBeDefined();
  });

  it('should have visually hidden label', () => {
    const dom = render(<ModalCloseButton label="close" id="test" isOpen onClose={() => {}} />);

    expect(dom.container.querySelector('button > span')?.textContent).toBe('close');
    expect(dom.container.querySelector('button > span')).toHaveClass('accessibility-hidden');
  });

  it('should be square', () => {
    const dom = render(<ModalCloseButton label="close" id="test" isOpen onClose={() => {}} />);

    expect(dom.container.querySelector('button')).toHaveClass('Button--square');
  });

  it('should have tertiary color', () => {
    const dom = render(<ModalCloseButton label="close" id="test" isOpen onClose={() => {}} />);

    expect(dom.container.querySelector('button')).toHaveClass('Button--tertiary');
  });

  it('should handle on close click', () => {
    const mockedOnClose = jest.fn();
    const dom = render(<ModalCloseButton label="close" id="test" isOpen onClose={mockedOnClose} />);

    const button = dom.getByRole('button');
    fireEvent.click(button);

    expect(mockedOnClose).toHaveBeenCalled();
  });
});
