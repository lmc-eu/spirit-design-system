export type DefaultWeightsType = typeof defaultWeights;

const defaultWeights = {
  thin: 100,
  extralight: 200,
  light: 300,
  normal: 400,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
  extrablack: 950,
};

export type NormalizedWeightsType = {
  default: DefaultWeightsType;
  ebony: DefaultWeightsType;
};

export const normalizedWeights: NormalizedWeightsType = {
  default: defaultWeights,
  // Font Ebony has a different font weight mapping, so we remap these values directly
  ebony: {
    ...defaultWeights,
    regular: 300,
    semibold: 400,
  },
};
