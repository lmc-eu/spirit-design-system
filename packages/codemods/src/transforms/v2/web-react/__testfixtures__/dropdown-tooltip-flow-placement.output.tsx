import React from 'react';
// @ts-ignore: No declaration -- The library is not installed; we don't need to install it for fixtures.
import { Dropdown, Tooltip } from '@lmc-eu/spirit-web-react';

export const MyComponent = () => (
  <>
    <Dropdown placement="top-start">Dropdown</Dropdown>
    <Dropdown placement="top-end">Dropdown</Dropdown>
    <Dropdown placement="right-start">Dropdown</Dropdown>
    <Dropdown placement="right-end">Dropdown</Dropdown>
    <Dropdown placement="bottom-start">Dropdown</Dropdown>
    <Dropdown placement="bottom-end">Dropdown</Dropdown>
    <Dropdown placement="left-start">Dropdown</Dropdown>
    <Dropdown placement="left-end">Dropdown</Dropdown>
    <Tooltip placement="top-start">Tooltip</Tooltip>
    <Tooltip placement="top-end">Tooltip</Tooltip>
    <Tooltip placement="right-start">Tooltip</Tooltip>
    <Tooltip placement="right-end">Tooltip</Tooltip>
    <Tooltip placement="bottom-start">Tooltip</Tooltip>
    <Tooltip placement="bottom-end">Tooltip</Tooltip>
    <Tooltip placement="left-start">Tooltip</Tooltip>
    <Tooltip placement="left-end">Tooltip</Tooltip>
  </>
);
