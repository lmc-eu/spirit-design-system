import React from 'react';
import DocsStack from '../../../../docs/DocsStack';
import type { AccentColorNamesType, EmotionColorNamesType } from '../../../types';
import { Flex } from '../../Flex';
import IconBox from '../IconBox';

type IconBoxColorDemoFactoryProps = {
  label: string;
  colorList: (AccentColorNamesType | EmotionColorNamesType)[];
  isSubtle?: boolean;
};

const IconBoxColorDemoFactory = ({ label, colorList, isSubtle }: IconBoxColorDemoFactoryProps) => (
  <div>
    <DocsStack stackAlignment="start">
      <h3>{label}</h3>
      {colorList.map((color) => {
        if (!color) {
          return null;
        }

        return (
          <Flex alignmentY="center" key={color} gap="space-200">
            <IconBox iconName="search" color={color} isSubtle={isSubtle} />
            <div>{color}</div>
          </Flex>
        );
      })}
    </DocsStack>
  </div>
);

export default IconBoxColorDemoFactory;
