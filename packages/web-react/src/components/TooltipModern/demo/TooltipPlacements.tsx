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
      <Grid cols={3} marginX="auto" UNSAFE_style={{ alignItems: 'center', justifyItems: 'center', maxWidth: '30rem' }}>
        <GridItem columnStart={2} rowStart={1}>
          <Radio
            name="placement"
            isChecked={placement === 'top-start'}
            isLabelHidden
            onChange={handlePlacementChange}
            id="placement_top_start"
            label="top-start"
            value="top-start"
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
            isChecked={placement === 'top-end'}
            isLabelHidden
            onChange={handlePlacementChange}
            id="placement_top_end"
            label="top-end"
            value="top-end"
          />
        </GridItem>
        <GridItem columnStart={2} rowStart={3}>
          <Radio
            name="placement"
            isChecked={placement === 'bottom-start'}
            isLabelHidden
            onChange={handlePlacementChange}
            id="placement_bottom_start"
            label="bottom-start"
            value="bottom-start"
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
            isChecked={placement === 'bottom-end'}
            isLabelHidden
            onChange={handlePlacementChange}
            id="placement_bottom_end"
            label="bottom-end"
            value="bottom-end"
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
            id="placement_start_top"
            label="left-top"
            value="left-top"
          />
          <Radio
            name="placement"
            isChecked={placement === 'left'}
            isLabelHidden
            onChange={handlePlacementChange}
            id="placement_start"
            label="left"
            value="left"
          />
          <Radio
            name="placement"
            isChecked={placement === 'left-bottom'}
            isLabelHidden
            onChange={handlePlacementChange}
            id="placement_start_bottom"
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
            id="placement_end_top"
            label="right-top"
            value="right-top"
          />
          <Radio
            name="placement"
            isChecked={placement === 'right'}
            isLabelHidden
            onChange={handlePlacementChange}
            id="placement_end"
            label="right"
            value="right"
          />
          <Radio
            name="placement"
            isChecked={placement === 'right-bottom'}
            isLabelHidden
            onChange={handlePlacementChange}
            id="placement_end_bottom"
            label="right-bottom"
            value="right-bottom"
          />
        </GridItem>
        <GridItem columnStart={2} rowStart={2}>
          <TooltipWrapper marginX="auto" marginY="space-1200">
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
