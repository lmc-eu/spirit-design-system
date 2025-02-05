import React, { FC, ReactNode } from 'react';
import DocsBox from '../../../../docs/DocsBox';
import { Alert } from '../../Alert';
import Flex from '../Flex';

const TestComponent: FC<{ children: ReactNode }> = ({ ...props }) => <span {...props} />;

const FlexHorizontalLayout = () => (
  <>
    <Flex
      elementType={TestComponent}
      UNSAFE_className="test"
      UNSAFE_style={{ color: 'red' }}
      spacing={{ mobile: 'space-400', tablet: 'space-800' }}
      marginBottom="space-400"
    >
      <DocsBox size="small">Item 1</DocsBox>
    </Flex>{' '}
    <Flex
      elementType={Alert}
      UNSAFE_className="test"
      UNSAFE_style={{ color: 'red' }}
      spacing={{ mobile: 'space-400', tablet: 'space-800' }}
      marginBottom="space-400"
    >
      <DocsBox size="small">Item 1</DocsBox>
    </Flex>{' '}
    <Flex
      elementType="span"
      UNSAFE_className="test"
      UNSAFE_style={{ color: 'red' }}
      spacing={{ mobile: 'space-400', tablet: 'space-800' }}
      marginBottom="space-400"
    >
      <DocsBox size="small">Item 1</DocsBox>
    </Flex>
  </>
);

export default FlexHorizontalLayout;
