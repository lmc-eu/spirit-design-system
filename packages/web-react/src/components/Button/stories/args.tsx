import React from 'react';
import { ActionColors, EmotionColors, Sizes } from '../../../constants';
import { Icon } from '../../Icon';

export const argTypes = {
  children: {
    control: 'text',
    description: `This is the place for the content of the button. In the real code you
      can pass in any JSX. In this demo you can set any text you want, or use one
      of the predefined texts: \`<Icon />\` (to see how it looks with an Icon) or
      \`<Icon /> Text\` (to see how it looks with an Icon and text).  Please note the
      predefined texts in this demo are not customizable and have to be written exactly
      as shown.`,
    mapping: {
      '<Icon />': <Icon name="profile" />,
      '<Icon /> Text': (
        <>
          <Icon name="profile" UNSAFE_className="mr-400" /> Text
        </>
      ),
    },
  },
  color: {
    control: 'select',
    options: [...Object.values(ActionColors), ...Object.values(EmotionColors)],
    table: {
      defaultValue: { summary: ActionColors.PRIMARY },
    },
  },
  isBlock: {
    control: 'boolean',
  },
  isDisabled: {
    control: 'boolean',
  },
  isLoading: {
    control: 'boolean',
  },
  isSquare: {
    control: 'boolean',
  },
  size: {
    control: 'select',
    options: [...Object.values(Sizes)],
  },
};

export const args = {
  children: 'Click me',
  color: ActionColors.PRIMARY,
  isBlock: false,
  isDisabled: false,
  isLoading: false,
  isSquare: false,
  size: Sizes.MEDIUM,
};
