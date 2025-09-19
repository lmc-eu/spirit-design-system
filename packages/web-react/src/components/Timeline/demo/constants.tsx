import { type ReactNode } from 'react';
import type { TimelineMarkerProps } from '../../../types';

export interface TimelineDemoStep {
  marker?: Pick<TimelineMarkerProps, 'backgroundColor' | 'borderColor' | 'textColor'> & {
    content?: string | ReactNode;
    iconName?: string;
    iconColor?: string;
  };
  heading?: {
    text: string;
    isLink?: boolean;
  };
  content?: {
    text: string;
    hasButton?: boolean;
  };
}

const LOREM_IPSUM =
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.';

export const DEFAULT_STEPS: TimelineDemoStep[] = [
  {
    marker: { content: '1' },
    heading: { text: 'Title' },
    content: { text: LOREM_IPSUM },
  },
  {
    marker: { content: '2' },
    content: { text: LOREM_IPSUM },
  },
  {
    marker: { content: '3' },
    heading: { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', isLink: true },
    content: { text: LOREM_IPSUM, hasButton: true },
  },
  {
    marker: { content: '99' },
    heading: { text: 'Lorem ipsum dolor sit amet elit.' },
  },
];

export const COLORED_NUMBER_STEPS: TimelineDemoStep[] = [
  {
    marker: {
      content: '1',
      backgroundColor: 'accent-01-subtle',
      borderColor: 'accent-01-basic',
      textColor: 'accent-01-basic',
    },
    heading: { text: 'Title' },
    content: { text: LOREM_IPSUM },
  },
  {
    marker: {
      content: '2',
      backgroundColor: 'accent-01-subtle',
      borderColor: 'accent-01-basic',
      textColor: 'accent-01-basic',
    },
    heading: { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    content: { text: LOREM_IPSUM },
  },
];

export const DOT_STEPS: TimelineDemoStep[] = [
  {
    marker: {
      backgroundColor: 'accent-01-subtle',
      borderColor: 'accent-01-basic',
      textColor: 'accent-01-basic',
    },
    heading: { text: 'Title' },
    content: { text: LOREM_IPSUM },
  },
  {
    heading: { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    content: { text: LOREM_IPSUM },
  },
];

export const ICON_STEPS: TimelineDemoStep[] = [
  {
    marker: { iconName: 'search', iconColor: '01' },
    heading: { text: 'Title' },
    content: { text: LOREM_IPSUM },
  },
  {
    marker: { iconName: 'file', iconColor: 'secondary' },
    heading: { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    content: { text: LOREM_IPSUM },
  },
];
