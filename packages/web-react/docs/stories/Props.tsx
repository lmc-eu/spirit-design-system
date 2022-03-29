/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ComponentType } from 'react';
import { nanoid } from 'nanoid';
import { ArgsTable } from '@storybook/addon-docs';

interface InfoProps {
  component: ComponentType<any>;
}

const Info = ({ component }: InfoProps) => (
  <div>
    <h5>{component.name}</h5>
    <ArgsTable of={component} />
  </div>
);

interface PropsProps {
  component: ComponentType<any>;
  components?: ComponentType<any>[];
}

const Props = ({ component, components = [] }: PropsProps) => (
  <div>
    {component ? <Info component={component} /> : undefined}
    {components.map((componentItem) => (
      <Info key={nanoid()} component={componentItem} />
    ))}
  </div>
);

Props.defaultProps = {
  components: [],
};

export default Props;
