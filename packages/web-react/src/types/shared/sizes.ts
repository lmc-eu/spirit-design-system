import { type buttons, type containers } from '@alma-oss/spirit-design-tokens';

export type ButtonSizesType = keyof typeof buttons;

export type ContainerSizesType = Exclude<keyof typeof containers, 'padding' | 'maxWidth'>;
