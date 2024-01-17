import React, { ChangeEvent, useState } from 'react';
import DocsBox from '../../../../docs/DocsBox';
import { PlacementDictionaryType } from '../../../types';
import { Grid, GridItem } from '../../Grid';
import { Radio } from '../../Radio';
import Tooltip from '../../Tooltip/Tooltip';
import TooltipWrapper from '../../Tooltip/TooltipWrapper';

const TooltipPlacements = () => {
  const [placement, setPlacement] = useState<PlacementDictionaryType>('bottom');

  const handlePlacementChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPlacement(event.target.value as PlacementDictionaryType);
  };

  return (
    <form autoComplete="off">
      <Grid
        cols={3}
        UNSAFE_className="mx-auto"
        UNSAFE_style={{ alignItems: 'center', justifyItems: 'center', maxWidth: '30rem' }}
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
          <TooltipWrapper UNSAFE_style={{ margin: '5rem auto' }}>
            <DocsBox UNSAFE_className="px-900 py-900">
              Click
              <br /> the dots!
            </DocsBox>
            <Tooltip placement={placement as PlacementDictionaryType}>{placement}</Tooltip>
          </TooltipWrapper>
        </GridItem>
      </Grid>
    </form>
  );
};

export default TooltipPlacements;
