import React, { CSSProperties } from 'react';
import Grid from './Grid';
import { SpiritGridProps } from '../../types';

export default {
  title: 'Components/Grid',
  component: Grid,
  argTypes: {
    children: {
      control: 'text',
    },
    cols: 12,
    tablet: 12,
    desktop: 12,
    layout: 'narrow',
  },
};

const exampleGridStyle: CSSProperties = {
  height: '2rem',
  boxSizing: 'border-box',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  color: '#fff',
  background: '#0b1c21',
};

const Template = (args: SpiritGridProps) => <Grid {...args} />;

export const EqualColumns = Template.bind({});
EqualColumns.args = {
  children: (
    <>
      <div style={exampleGridStyle}></div>
      <div style={exampleGridStyle}></div>
      <div style={exampleGridStyle}></div>
      <div style={exampleGridStyle}></div>
      <div style={exampleGridStyle}></div>
      <div style={exampleGridStyle}></div>
      <div style={exampleGridStyle}></div>
      <div style={exampleGridStyle}></div>
      <div style={exampleGridStyle}></div>
      <div style={exampleGridStyle}></div>
      <div style={exampleGridStyle}></div>
      <div style={exampleGridStyle}></div>
    </>
  ),
  cols: 12,
  tablet: 12,
  desktop: 12,
};

export const SixColumns = Template.bind({});
SixColumns.args = {
  children: (
    <>
      <div style={exampleGridStyle}></div>
      <div style={exampleGridStyle}></div>
      <div style={exampleGridStyle}></div>
      <div style={exampleGridStyle}></div>
      <div style={exampleGridStyle}></div>
      <div style={exampleGridStyle}></div>
    </>
  ),
  cols: 6,
};

export const FourColumns = Template.bind({});
FourColumns.args = {
  children: (
    <>
      <div style={exampleGridStyle}></div>
      <div style={exampleGridStyle}></div>
      <div style={exampleGridStyle}></div>
      <div style={exampleGridStyle}></div>
    </>
  ),
  cols: 4,
};

export const ThreeColumns = Template.bind({});
ThreeColumns.args = {
  children: (
    <>
      <div style={exampleGridStyle}></div>
      <div style={exampleGridStyle}></div>
      <div style={exampleGridStyle}></div>
    </>
  ),
  cols: 3,
};

export const TwoColumns = Template.bind({});
TwoColumns.args = {
  children: (
    <>
      <div style={exampleGridStyle}></div>
      <div style={exampleGridStyle}></div>
    </>
  ),
  cols: 2,
};

export const ResponsiveColumns = Template.bind({});
ResponsiveColumns.args = {
  children: (
    <>
      <div style={exampleGridStyle}></div>
      <div style={exampleGridStyle}></div>
      <div style={exampleGridStyle}></div>
      <div style={exampleGridStyle}></div>
    </>
  ),
  desktop: 4,
  tablet: 3,
  cols: 2,
};

export const NarrowColumnLayout = Template.bind({});
NarrowColumnLayout.args = {
  children: (
    <>
      <div style={exampleGridStyle}></div>
    </>
  ),
  layout: 'narrow',
};
