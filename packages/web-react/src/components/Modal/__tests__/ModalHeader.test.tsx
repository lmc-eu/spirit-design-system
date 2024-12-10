import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { useIconMock, classNamePrefixProviderTest, restPropsTest, stylePropsTest } from '@local/tests';
import ModalHeader from '../ModalHeader';

jest.mock('../../../hooks', () => useIconMock);

describe('ModalHeader', () => {
  classNamePrefixProviderTest(ModalHeader, 'ModalHeader');

  stylePropsTest(ModalHeader);

  restPropsTest(ModalHeader, 'header');

  it('should have close button', () => {
    render(<ModalHeader>Modal Title</ModalHeader>);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should not have close button', () => {
    render(<ModalHeader hasCloseButton={false}>Modal Title</ModalHeader>);

    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});
