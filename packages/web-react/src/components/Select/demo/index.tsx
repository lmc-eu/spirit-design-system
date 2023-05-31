// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment, import/extensions, import/no-unresolved
// @ts-ignore: No declaration file
import icons from '@lmc-eu/spirit-icons/dist/icons';
import { IconsProvider } from '../../../context';
import DocsSection from '../../../../docs/DocsSections';
import Select from '../stories/Select';
import SelectDisabled from '../stories/SelectDisabled';
import SelectFluid from '../stories/SelectFluid';
import SelectHelperText from '../stories/SelectHelperText';
import SelectLabelHidden from '../stories/SelectLabelHidden';
import SelectValidationState from '../stories/SelectValidationState';
import ChildrenNode from '../stories/ChildrenNode';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IconsProvider value={icons}>
      <DocsSection title="Select Default">
        <Select id="select-default" name="select-default" label="Input label">
          <ChildrenNode />
        </Select>
      </DocsSection>
      <DocsSection title="Select Disabled">
        <SelectDisabled id="select-default" name="select-default" label="Input Disabled label" isDisabled>
          <ChildrenNode />
        </SelectDisabled>
      </DocsSection>
      <DocsSection title="Select Fluid">
        <SelectFluid id="select-default" name="select-default" label="Input Fluid label" isFluid>
          <ChildrenNode />
        </SelectFluid>
      </DocsSection>
      <DocsSection title="Select Helper Text">
        <SelectHelperText
          id="select-default"
          name="select-default"
          label="Input label with Helper Text"
          helperText="Helper text"
        >
          <ChildrenNode />
        </SelectHelperText>
      </DocsSection>
      <DocsSection title="Select Label Hidden">
        <SelectLabelHidden id="select-default" name="select-default" label="Input with Hidden Label" isLabelHidden>
          <ChildrenNode />
        </SelectLabelHidden>
      </DocsSection>
      <DocsSection title="Select Validation State">
        <SelectValidationState id="select-default" name="select-default" label="Input label with Validation State">
          <ChildrenNode />
        </SelectValidationState>
      </DocsSection>
    </IconsProvider>
  </React.StrictMode>,
);
