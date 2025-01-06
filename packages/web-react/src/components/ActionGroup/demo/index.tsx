import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import ColumnLayout from './ColumnLayout';
import ColumnReverseLayout from './ColumnReverseLayout';
import CustomHorizontalSpacing from './CustomHorizontalSpacing';
import CustomVerticalSpacing from './CustomVerticalLayout';
import HorizontalAlignment from './HorizontalAlignment';
import ResponsiveCustomHorizontalSpacing from './ResponsiveCustomHorizontalSpacing';
import ResponsiveCustomVerticalSpacing from './ResponsiveCustomVerticalSpacing';
import ResponsiveHorizontalAlignment from './ResponsiveHorizontalAlignment';
import ResponsiveLayout from './ResponsiveLayout';
import ResponsiveRowReverseLayout from './ResponsiveRowReverseLayout';
import RowLayout from './RowLayout';
import RowReverseLayout from './RowReverseLayout';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsSection title="Row Layout" stackAlignment="stretch">
      <RowLayout />
    </DocsSection>
    <DocsSection title="Row Reverse Layout" stackAlignment="stretch">
      <RowReverseLayout />
    </DocsSection>
    <DocsSection title="Column Layout" stackAlignment="stretch">
      <ColumnLayout />
    </DocsSection>
    <DocsSection title="Column Reversed Layout" stackAlignment="stretch">
      <ColumnReverseLayout />
    </DocsSection>
    <DocsSection title="Responsive Row Reversed Layout" stackAlignment="stretch">
      <ResponsiveRowReverseLayout />
    </DocsSection>
    <DocsSection title="Responsive Row → Column Layout" stackAlignment="stretch">
      <ResponsiveLayout />
    </DocsSection>
    <DocsSection title="Horizontal Alignment" stackAlignment="stretch">
      <HorizontalAlignment />
    </DocsSection>
    <DocsSection title="Responsive Horizontal Alignment" stackAlignment="stretch">
      <ResponsiveHorizontalAlignment />
    </DocsSection>
    <DocsSection title="Custom Horizontal Spacing" stackAlignment="stretch">
      <CustomHorizontalSpacing />
    </DocsSection>
    <DocsSection title="Custom Vertical Spacing" stackAlignment="stretch">
      <CustomVerticalSpacing />
    </DocsSection>
    <DocsSection title="Responsive Custom Horizontal Spacing" stackAlignment="stretch">
      <ResponsiveCustomHorizontalSpacing />
    </DocsSection>
    <DocsSection title="Responsive Custom Vertical Spacing" stackAlignment="stretch">
      <ResponsiveCustomVerticalSpacing />
    </DocsSection>
  </React.StrictMode>,
);
