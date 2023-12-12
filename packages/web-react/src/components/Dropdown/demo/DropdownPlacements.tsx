import React, { ChangeEvent, Ref, useState } from 'react';
import { DropdownRenderProps, PlacementDictionaryType } from '../../../types';
import { Button } from '../../Button';
import { Grid, GridItem } from '../../Grid';
import { Item } from '../../Item';
import { Radio } from '../../Radio';
import { Dropdown } from '..';

const DropdownPlacements = () => {
  const [placement, setPlacement] = useState<PlacementDictionaryType>('bottom-left');

  const handlePlacementChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPlacement(e.target.value as PlacementDictionaryType);
  };

  const dropdownTrigger = ({ trigger: { className, ref, ...restOf } }: DropdownRenderProps) => (
    <Button UNSAFE_className={className} ref={ref as Ref<HTMLButtonElement>} {...restOf}>
      <span style={{ whiteSpace: 'nowrap' }}>{placement}</span>
    </Button>
  );

  return (
    <form autoComplete="off">
      <Grid
        cols={3}
        UNSAFE_className="mx-auto"
        UNSAFE_style={{ alignItems: 'center', justifyItems: 'center', maxWidth: '40rem' }}
      >
        <GridItem columnStart={2} rowStart={1}>
          <Radio
            name="placement"
            isChecked={placement === 'top-left'}
            isLabelHidden
            onChange={handlePlacementChange}
            id="placement_top_left"
            label="top-left"
            value="top-left"
          />{' '}
          <Radio
            name="placement"
            isChecked={placement === 'top'}
            isLabelHidden
            onChange={handlePlacementChange}
            id="placement_top"
            label="top"
            value="top"
          />{' '}
          <Radio
            name="placement"
            isChecked={placement === 'top-right'}
            isLabelHidden
            onChange={handlePlacementChange}
            id="placement_top_right"
            label="top-right"
            value="top-right"
          />
        </GridItem>
        <GridItem columnStart={2} rowStart={3}>
          <Radio
            name="placement"
            isChecked={placement === 'bottom-left'}
            isLabelHidden
            onChange={handlePlacementChange}
            id="placement_bottom_left"
            label="bottom-left"
            value="bottom-left"
          />{' '}
          <Radio
            name="placement"
            isChecked={placement === 'bottom'}
            isLabelHidden
            onChange={handlePlacementChange}
            id="placement_bottom"
            label="bottom"
            value="bottom"
          />{' '}
          <Radio
            name="placement"
            isChecked={placement === 'bottom-right'}
            isLabelHidden
            onChange={handlePlacementChange}
            id="placement_bottom_right"
            label="bottom-right"
            value="bottom-right"
          />
        </GridItem>
        <GridItem
          columnStart={1}
          rowStart={2}
          UNSAFE_style={{ display: 'flex', flexDirection: 'column', justifySelf: 'start' }}
        >
          <Radio
            name="placement"
            isChecked={placement === 'left-top'}
            isLabelHidden
            onChange={handlePlacementChange}
            id="placement_left_top"
            label="left-top"
            value="left-top"
          />
          <Radio
            name="placement"
            isChecked={placement === 'left'}
            isLabelHidden
            onChange={handlePlacementChange}
            id="placement_left"
            label="left"
            value="left"
          />
          <Radio
            name="placement"
            isChecked={placement === 'left-bottom'}
            isLabelHidden
            onChange={handlePlacementChange}
            id="placement_left_bottom"
            label="left-bottom"
            value="left-bottom"
          />
        </GridItem>
        <GridItem
          columnStart={3}
          rowStart={2}
          UNSAFE_style={{ display: 'flex', flexDirection: 'column', justifySelf: 'end' }}
        >
          <Radio
            name="placement"
            isChecked={placement === 'right-top'}
            isLabelHidden
            onChange={handlePlacementChange}
            id="placement_right_top"
            label="right-top"
            value="right-top"
          />
          <Radio
            name="placement"
            isChecked={placement === 'right'}
            isLabelHidden
            onChange={handlePlacementChange}
            id="placement_right"
            label="right"
            value="right"
          />
          <Radio
            name="placement"
            isChecked={placement === 'right-bottom'}
            isLabelHidden
            onChange={handlePlacementChange}
            id="placement_right_bottom"
            label="right-bottom"
            value="right-bottom"
          />
        </GridItem>
        <GridItem columnStart={2} rowStart={2}>
          <div style={{ margin: '8rem auto' }}>
            <Dropdown
              enableAutoClose={false}
              placement={placement as PlacementDictionaryType}
              renderTrigger={dropdownTrigger}
            >
              <Item elementType="a" href="#" label="Action" />
              <Item elementType="a" href="#" label="Another action" />
              <Item elementType="a" href="#" label="Something else here" />
            </Dropdown>
          </div>
        </GridItem>
      </Grid>
    </form>
  );
};

export default DropdownPlacements;
