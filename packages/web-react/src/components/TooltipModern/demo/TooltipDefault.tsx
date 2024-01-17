import React from 'react';
import DocsBox from '../../../../docs/DocsBox';
import TooltipWrapper from '../../Tooltip/TooltipWrapper';
import Tooltip from '../../Tooltip/Tooltip';

const TooltipDefault = () => (
  <TooltipWrapper UNSAFE_style={{ maxWidth: '15rem', margin: '6rem auto' }}>
    <DocsBox>
      Tooltips
      <br />
      all day long…
    </DocsBox>

    <Tooltip placement="top">Hello there!</Tooltip>
    <Tooltip placement="right">Hello there!</Tooltip>
    <Tooltip placement="bottom">Hello there! There is slightly more text in this tooltip.</Tooltip>
    <Tooltip placement="left">Hello there!</Tooltip>
  </TooltipWrapper>
);

export default TooltipDefault;
