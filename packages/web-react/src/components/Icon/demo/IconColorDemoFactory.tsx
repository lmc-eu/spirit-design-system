import React from 'react';
import DocsStack from '../../../../docs/DocsStack';
import { IconColorType } from '../../../types';
import { Flex } from '../../Flex';
import { GridItem } from '../../Grid';
import Icon from '../Icon';

type IconColorDemoFactoryProps = {
  label: string;
  iconName: string;
  colorList: IconColorType[];
};

const IconColorDemoFactory = ({ label, iconName, colorList }: IconColorDemoFactoryProps) => (
  <GridItem>
    <DocsStack stackAlignment="start">
      <h3>{label}</h3>
      {colorList.map((color) => (
        <Flex key={`${label.toLowerCase().replace(' ', '-')}-${color}`}>
          <Icon name={iconName} color={color} /> {color}
        </Flex>
      ))}
    </DocsStack>
  </GridItem>
);

export default IconColorDemoFactory;
