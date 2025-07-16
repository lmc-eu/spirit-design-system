import { getAccentColorNames, getEmotionColorNames, getTextColorNames } from '../../utils';

export const textColors = getTextColorNames();
export const accentColors = getAccentColorNames();
export const emotionColors = getEmotionColorNames();
export const iconColors = [...textColors, ...accentColors, ...emotionColors];
