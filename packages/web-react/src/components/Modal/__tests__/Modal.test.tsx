import '@testing-library/jest-dom';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import Modal from '../Modal';
import { SpiritModalProps } from '../../../types';

describe('Modal', () => {
  const ModalTest = (props: SpiritModalProps) => (
    <Modal {...props} id="ModalExample" isOpen={false} onClose={() => null}>
      <div>Test</div>
    </Modal>
  );

  classNamePrefixProviderTest(ModalTest, 'Modal');

  stylePropsTest(ModalTest);

  restPropsTest(ModalTest, 'dialog');
});
