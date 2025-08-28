import { buttons, containers } from '@lmc-eu/spirit-design-tokens';

export type ButtonSizesType = keyof typeof buttons;

export type ContainerSizesType = Exclude<keyof typeof containers, 'padding' | 'maxWidth'>;
