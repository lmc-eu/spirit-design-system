import React, { useState } from 'react';
import { Button } from '../..';
import { AlignmentX } from '../../../constants';
import { AlignmentXDictionaryType } from '../../../types';
import Drawer from '../Drawer';
import DrawerCloseButton from '../DrawerCloseButton';
import DrawerDialog from '../DrawerDialog';

const DrawerDefault = () => {
  const [isDrawerBasicOpen, setDrawerBasicOpen] = useState(false);
  const [drawerAlign, setDrawerAlign] = useState<AlignmentXDictionaryType>(AlignmentX.RIGHT);
  const toggleDrawerBasic = () => setDrawerBasicOpen(!isDrawerBasicOpen);

  const handleDrawerBasicClose = () => setDrawerBasicOpen(false);

  return (
    <>
      <Button onClick={toggleDrawerBasic} data-test-id="drawer-basic">
        Open Drawer
      </Button>

      <Drawer alignment={drawerAlign} id="example-basic" isOpen={isDrawerBasicOpen} onClose={handleDrawerBasicClose}>
        <DrawerDialog>
          <DrawerCloseButton label="test" />
          <div>Drawer content</div>
        </DrawerDialog>
      </Drawer>
    </>
  );
};

export default DrawerDefault;
