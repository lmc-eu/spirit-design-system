import '@testing-library/jest-dom';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import ModalComposed from '../ModalComposed';
import { ModalProps } from '../../../types';

describe('ModalComposed', () => {
  const ModalTest = (props: ModalProps) => (
    <ModalComposed {...props} id="ModalExample" isOpen={false} onClose={() => null}>
      Test
    </ModalComposed>
  );

  classNamePrefixProviderTest(ModalTest, 'Modal');

  stylePropsTest(ModalTest);

  restPropsTest(ModalTest, 'dialog');
});
