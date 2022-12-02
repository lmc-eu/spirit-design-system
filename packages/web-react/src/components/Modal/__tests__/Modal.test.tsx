import '@testing-library/jest-dom';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import Modal from '../Modal';
import { ModalProps } from '../../../types';

describe('Modal', () => {
  const ModalTest = (props: ModalProps) => (
    <Modal {...props} isOpen={false} onClose={() => null}>
      Test
    </Modal>
  );

  classNamePrefixProviderTest(ModalTest, 'Modal');

  stylePropsTest(ModalTest);

  restPropsTest(ModalTest, 'dialog');
});
