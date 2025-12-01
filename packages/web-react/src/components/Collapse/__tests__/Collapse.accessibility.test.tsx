import React from 'react';
import { accessibilityOpenTest, accessibilityTest } from '@local/tests';
import { type SpiritCollapseProps } from '../../../types';
import { Button } from '../../Button';
import Collapse from '../Collapse';

const CollapseTest = ({ isOpen = false, ...props }: SpiritCollapseProps & { isOpen?: boolean }) => (
  <>
    <Button type="button" aria-expanded={isOpen} aria-controls="collapse-example" onClick={() => {}}>
      Toggle Collapse
    </Button>
    <Collapse {...props} id="collapse-example" isOpen={isOpen}>
      Collapse content
    </Collapse>
  </>
);

describe('Collapse accessibility', () => {
  accessibilityTest(CollapseTest, '#collapse-example');

  accessibilityOpenTest(CollapseTest, '#collapse-example');
});
