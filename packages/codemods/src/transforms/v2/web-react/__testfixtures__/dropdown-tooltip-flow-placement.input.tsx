import React from 'react';
// @ts-ignore: No declaration -- The library is not installed; we don't need to install it for fixtures.
import { Dropdown, Tooltip } from '@lmc-eu/spirit-web-react';

export const MyComponent = () => (
  <>
    <Dropdown placement="top-left">Dropdown</Dropdown>
    <Dropdown placement="top-right">Dropdown</Dropdown>
    <Dropdown placement="right-top">Dropdown</Dropdown>
    <Dropdown placement="right-bottom">Dropdown</Dropdown>
    <Dropdown placement="bottom-left">Dropdown</Dropdown>
    <Dropdown placement="bottom-right">Dropdown</Dropdown>
    <Dropdown placement="left-top">Dropdown</Dropdown>
    <Dropdown placement="left-bottom">Dropdown</Dropdown>
    <Tooltip placement="top-left">Tooltip</Tooltip>
    <Tooltip placement="top-right">Tooltip</Tooltip>
    <Tooltip placement="right-top">Tooltip</Tooltip>
    <Tooltip placement="right-bottom">Tooltip</Tooltip>
    <Tooltip placement="bottom-left">Tooltip</Tooltip>
    <Tooltip placement="bottom-right">Tooltip</Tooltip>
    <Tooltip placement="left-top">Tooltip</Tooltip>
    <Tooltip placement="left-bottom">Tooltip</Tooltip>
  </>
);
