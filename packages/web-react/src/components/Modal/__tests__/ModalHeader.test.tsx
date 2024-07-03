import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import ModalHeader from '../ModalHeader';

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
