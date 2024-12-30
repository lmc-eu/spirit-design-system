import React, { ChangeEvent, useState } from 'react';
import { Button, Radio } from '../..';
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

  const handleDrawerAlignChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDrawerAlign(event.target.value as AlignmentXDictionaryType);
  };

  return (
    <>
      <Button onClick={toggleDrawerBasic} data-test-id="drawer-basic">
        Open Drawer
      </Button>

      <Drawer alignment={drawerAlign} id="example-basic" isOpen={isDrawerBasicOpen} onClose={handleDrawerBasicClose}>
        <DrawerDialog>
          <DrawerCloseButton label="test" />
          <div>
            <form className="mb-600">
              <div>Drawer alignment:</div>
              <Radio
                id="drawer-alignment-top"
                marginRight="space-600"
                label="Left"
                value="left"
                name="modal-alignment"
                autoComplete="off"
                isChecked={drawerAlign === AlignmentX.LEFT}
                onChange={handleDrawerAlignChange}
              />
              <Radio
                id="drawer-alignment-center"
                marginRight="space-600"
                label="Center"
                value="center"
                name="modal-alignment"
                autoComplete="off"
                isChecked={drawerAlign === AlignmentX.CENTER}
                onChange={handleDrawerAlignChange}
              />
              <Radio
                id="drawer-alignment-bottom"
                marginRight="space-600"
                label="Right"
                value="right"
                name="modal-alignment"
                autoComplete="off"
                isChecked={drawerAlign === AlignmentX.RIGHT}
                onChange={handleDrawerAlignChange}
              />
            </form>
          </div>
        </DrawerDialog>
      </Drawer>
    </>
  );
};

export default DrawerDefault;
