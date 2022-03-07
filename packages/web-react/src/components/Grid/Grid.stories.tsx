import React from 'react';
import Grid from './Grid';
import { SpiritGridProps } from '../../types';

const ExampleBox = () => <div className="example-box"></div>;

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

const Template = (args: SpiritGridProps) => <Grid {...args} />;

export const EqualColumns = Template.bind({});
EqualColumns.args = {
  children: (
    <>
      <ExampleBox />
      <ExampleBox />
      <ExampleBox />
      <ExampleBox />
      <ExampleBox />
      <ExampleBox />
      <ExampleBox />
      <ExampleBox />
      <ExampleBox />
      <ExampleBox />
      <ExampleBox />
      <ExampleBox />
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
      <ExampleBox />
      <ExampleBox />
      <ExampleBox />
      <ExampleBox />
      <ExampleBox />
      <ExampleBox />
    </>
  ),
  cols: 6,
};

export const FourColumns = Template.bind({});
FourColumns.args = {
  children: (
    <>
      <ExampleBox />
      <ExampleBox />
      <ExampleBox />
      <ExampleBox />
    </>
  ),
  cols: 4,
};

export const ThreeColumns = Template.bind({});
ThreeColumns.args = {
  children: (
    <>
      <ExampleBox />
      <ExampleBox />
      <ExampleBox />
    </>
  ),
  cols: 3,
};

export const TwoColumns = Template.bind({});
TwoColumns.args = {
  children: (
    <>
      <ExampleBox />
      <ExampleBox />
    </>
  ),
  cols: 2,
};

export const ResponsiveColumns = Template.bind({});
ResponsiveColumns.args = {
  children: (
    <>
      <ExampleBox />
      <ExampleBox />
      <ExampleBox />
      <ExampleBox />
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
      <ExampleBox />
    </>
  ),
  layout: 'narrow',
};
