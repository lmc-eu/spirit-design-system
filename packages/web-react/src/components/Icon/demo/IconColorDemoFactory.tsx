import React from 'react';
import DocsStack from '../../../../docs/DocsStack';
import { IconColorType } from '../../../types';
import { Flex } from '../../Flex';
import Icon from '../Icon';

type IconColorDemoFactoryProps = {
  colorList: IconColorType[];
  iconName: string;
  label: string;
};

const IconColorDemoFactory = ({ label, iconName, colorList }: IconColorDemoFactoryProps) => (
  <DocsStack stackAlignment="start">
    <h3>{label}</h3>
    {colorList.map((color) => (
      <Flex key={`${label.toLowerCase().replace(' ', '-')}-${color}`}>
        <Icon name={iconName} color={color} /> {color}
      </Flex>
    ))}
  </DocsStack>
);

export default IconColorDemoFactory;
