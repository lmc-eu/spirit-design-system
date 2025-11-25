import { exportConfiguration } from '../../config';

export const makeRelativeUnit = (value: string | number) => {
  const { rootFontSize } = exportConfiguration;

  if (rootFontSize) {
    return `${Number(value) / Number(rootFontSize)}rem`;
  }

  return value;
};

export const replacePxWithRemUnits = (value: string) => {
  return value.replace(/(\d+(?:\.\d+)?)px/g, (_, number: string) => makeRelativeUnit(number) as string);
};
