import { AlignmentX, DirectionExtended } from '../../../../constants';
import { AlignmentXDictionaryType, CardSizes } from '../../../../types';
import { toPascalCase } from '../../../../utils';
import { UseCardStyleProps, UseCardStylePropsReturn } from '../../useCardStyleProps';

type TextPropsDataProviderType = {
  props: UseCardStyleProps;
  description: string;
  expected: UseCardStylePropsReturn;
};

export const defaultExpectedClasses = {
  artwork: 'CardArtwork',
  body: 'CardBody',
  eyebrow: 'CardEyebrow',
  footer: 'CardFooter',
  link: 'CardLink',
  logo: 'CardLogo',
  media: 'CardMedia',
  mediaCanvas: 'CardMedia__canvas',
  root: 'Card',
  title: 'CardTitle',
};

// Helper function to generate classes
const generateExpectedClassProps = (overrides: Partial<typeof defaultExpectedClasses>) => ({
  ...defaultExpectedClasses,
  ...overrides,
});

// Helper for artworkAlignmentX, footerAlignmentX, and sizes
const alignmentDataProvider = (type: 'artwork' | 'footer', values: { alignment: AlignmentXDictionaryType }[]) =>
  values.map(({ alignment }) => ({
    props: { [`${type}AlignmentX`]: alignment },
    description: `return correct classProps for ${type}AlignmentX ${alignment!.toLowerCase()}`,
    expected: {
      classProps: generateExpectedClassProps({
        [type]: `${defaultExpectedClasses[type]} ${defaultExpectedClasses[type]}--alignmentX${toPascalCase(alignment!)}`,
      }),
    },
  }));

const sizeDataProvider = Object.values(CardSizes).map((size) => ({
  props: { size },
  description: `return correct classProps for media ${size.toLowerCase()}`,
  expected: {
    classProps: generateExpectedClassProps({
      media: `${defaultExpectedClasses.media} ${defaultExpectedClasses.media}--${size.toLowerCase()}`,
    }),
  },
}));

export const textPropsDataProvider: TextPropsDataProviderType[] = [
  // Direction-specific classes
  {
    props: { direction: DirectionExtended.VERTICAL },
    description: 'return correct classProps for direction vertical',
    expected: { classProps: generateExpectedClassProps({ root: 'Card Card--vertical' }) },
  },
  {
    props: { direction: DirectionExtended.HORIZONTAL },
    description: 'return correct classProps for direction horizontal',
    expected: { classProps: generateExpectedClassProps({ root: 'Card Card--horizontal' }) },
  },
  {
    props: { direction: DirectionExtended.HORIZONTAL_REVERSED },
    description: 'return correct classProps for direction horizontal reversed',
    expected: { classProps: generateExpectedClassProps({ root: 'Card Card--horizontalReversed' }) },
  },

  // Artwork alignment
  ...alignmentDataProvider('artwork', [
    { alignment: AlignmentX.LEFT },
    { alignment: AlignmentX.RIGHT },
    { alignment: AlignmentX.CENTER },
  ]),

  // Footer alignment
  ...alignmentDataProvider('footer', [
    { alignment: AlignmentX.LEFT },
    { alignment: AlignmentX.RIGHT },
    { alignment: AlignmentX.CENTER },
  ]),

  // Boxed card
  {
    props: { isBoxed: true },
    description: 'return correct classProps for boxed card',
    expected: { classProps: generateExpectedClassProps({ root: 'Card Card--boxed' }) },
  },

  // Body-specific properties
  {
    props: { isSelectable: true },
    description: 'return correct classProps for body selectable',
    expected: {
      classProps: generateExpectedClassProps({
        body: `${defaultExpectedClasses.body} ${defaultExpectedClasses.body}--selectable`,
      }),
    },
  },

  // Media-specific properties
  {
    props: { hasFilledHeight: true },
    description: 'return correct classProps for media with filled height',
    expected: {
      classProps: generateExpectedClassProps({
        media: `${defaultExpectedClasses.media} ${defaultExpectedClasses.media}--filledHeight`,
      }),
    },
  },
  {
    props: { isExpanded: true },
    description: 'return correct classProps for media expanded',
    expected: {
      classProps: generateExpectedClassProps({
        media: `${defaultExpectedClasses.media} ${defaultExpectedClasses.media}--expanded`,
      }),
    },
  },
  ...sizeDataProvider,

  // Title-specific properties
  {
    props: { isHeading: true },
    description: 'return correct classProps for title heading',
    expected: {
      classProps: generateExpectedClassProps({
        title: `${defaultExpectedClasses.title} ${defaultExpectedClasses.title}--heading`,
      }),
    },
  },

  // Complex scenario
  {
    props: {
      artworkAlignmentX: AlignmentX.LEFT,
      direction: DirectionExtended.HORIZONTAL,
      footerAlignmentX: AlignmentX.RIGHT,
      hasFilledHeight: true,
      isBoxed: true,
      isExpanded: true,
      isHeading: false,
      isSelectable: true,
      size: CardSizes.SMALL,
    },
    description: 'return correct classProps for a horizontal, boxed, expanded card with small size',
    expected: {
      classProps: generateExpectedClassProps({
        artwork: 'CardArtwork CardArtwork--alignmentXLeft',
        body: 'CardBody CardBody--selectable',
        footer: 'CardFooter CardFooter--alignmentXRight',
        media: 'CardMedia CardMedia--small CardMedia--expanded CardMedia--filledHeight',
        root: 'Card Card--horizontal Card--boxed',
      }),
    },
  },
];
