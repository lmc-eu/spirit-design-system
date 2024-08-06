export const actionInvertedActive = '#d4d4d4';
export const actionInvertedDefault = '#e9e9e9';
export const actionInvertedDisabled = '#c4c4c4';
export const actionInvertedHover = '#dbdbdb';
export const actionInverted = {
  active: actionInvertedActive,
  default: actionInvertedDefault,
  disabled: actionInvertedDisabled,
  hover: actionInvertedHover,
};

export const actionLinkInvertedActive = '#d4d4d4';
export const actionLinkInvertedDefault = '#e9e9e9';
export const actionLinkInvertedDisabled = '#c4c4c4';
export const actionLinkInvertedHover = '#dbdbdb';
export const actionLinkInvertedVisited = '#a7bcc2';
export const actionLinkInverted = {
  active: actionLinkInvertedActive,
  default: actionLinkInvertedDefault,
  disabled: actionLinkInvertedDisabled,
  hover: actionLinkInvertedHover,
  visited: actionLinkInvertedVisited,
};

export const actionLinkPrimaryActive = '#0b3a46';
export const actionLinkPrimaryDefault = '#29616f';
export const actionLinkPrimaryDisabled = '#979797';
export const actionLinkPrimaryHover = '#1b5260';
export const actionLinkPrimaryVisited = '#835ea1';
export const actionLinkPrimary = {
  active: actionLinkPrimaryActive,
  default: actionLinkPrimaryDefault,
  disabled: actionLinkPrimaryDisabled,
  hover: actionLinkPrimaryHover,
  visited: actionLinkPrimaryVisited,
};

export const actionLinkSecondaryActive = '#454b4e';
export const actionLinkSecondaryDefault = '#758185';
export const actionLinkSecondaryDisabled = '#979797';
export const actionLinkSecondaryHover = '#5b6568';
export const actionLinkSecondaryVisited = '#835ea1';
export const actionLinkSecondary = {
  active: actionLinkSecondaryActive,
  default: actionLinkSecondaryDefault,
  disabled: actionLinkSecondaryDisabled,
  hover: actionLinkSecondaryHover,
  visited: actionLinkSecondaryVisited,
};

export const actionLink = {
  primary: actionLinkPrimary,
  secondary: actionLinkSecondary,
  inverted: actionLinkInverted,
};

export const actionPrimaryActive = '#0b3a46';
export const actionPrimaryDefault = '#29616f';
export const actionPrimaryDisabled = '#f5f5f5';
export const actionPrimaryHover = '#1b5260';
export const actionPrimary = {
  active: actionPrimaryActive,
  default: actionPrimaryDefault,
  disabled: actionPrimaryDisabled,
  hover: actionPrimaryHover,
};

export const actionSecondaryActive = '#c4c4c4';
export const actionSecondaryDefault = '#a0a0a0';
export const actionSecondaryDisabled = '#f5f5f5';
export const actionSecondaryHover = '#737373';
export const actionSecondary = {
  active: actionSecondaryActive,
  default: actionSecondaryDefault,
  disabled: actionSecondaryDisabled,
  hover: actionSecondaryHover,
};

export const actionSelectedActive = '#0b3a46';
export const actionSelectedDefault = '#29616f';
export const actionSelectedDisabled = '#a6a6a6';
export const actionSelectedHover = '#1b5260';
export const actionSelected = {
  active: actionSelectedActive,
  default: actionSelectedDefault,
  disabled: actionSelectedDisabled,
  hover: actionSelectedHover,
};

export const actionTertiaryActive = '#d4d4d4';
export const actionTertiaryDefault = '#e9e9e9';
export const actionTertiaryDisabled = '#f5f5f5';
export const actionTertiaryHover = '#dbdbdb';
export const actionTertiary = {
  active: actionTertiaryActive,
  default: actionTertiaryDefault,
  disabled: actionTertiaryDisabled,
  hover: actionTertiaryHover,
};

export const actionUnselectedActive = '#091417';
export const actionUnselectedDefault = '#132930';
export const actionUnselectedDisabled = '#a6a6a6';
export const actionUnselectedHover = '#0b1c21';
export const actionUnselected = {
  active: actionUnselectedActive,
  default: actionUnselectedDefault,
  disabled: actionUnselectedDisabled,
  hover: actionUnselectedHover,
};

export const action = {
  inverted: actionInverted,
  link: {
    inverted: actionLinkInverted,
    primary: actionLinkPrimary,
    secondary: actionLinkSecondary,
  },
  primary: actionPrimary,
  secondary: actionSecondary,
  selected: actionSelected,
  tertiary: actionTertiary,
  unselected: actionUnselected,
};

export const backgroundColorBackdrop = '#0b1c2199';
export const backgroundColorBasic = '#fff';
export const backgroundColorCover = '#f0f0f0';
export const backgroundColor = {
  backdrop: backgroundColorBackdrop,
  basic: backgroundColorBasic,
  cover: backgroundColorCover,
};

export const backgroundInteractiveActive = '#a4a4a44d';
export const backgroundInteractiveDefault = '#fff0';
export const backgroundInteractiveHover = '#b0b0b033';
export const backgroundInteractive = {
  active: backgroundInteractiveActive,
  default: backgroundInteractiveDefault,
  hover: backgroundInteractiveHover,
};

export const backgroundInteractiveInvertedActive = '#9f9f9fcc';
export const backgroundInteractiveInvertedDefault = '#fff0';
export const backgroundInteractiveInvertedHover = '#bbb6';
export const backgroundInteractiveInverted = {
  active: backgroundInteractiveInvertedActive,
  default: backgroundInteractiveInvertedDefault,
  hover: backgroundInteractiveInvertedHover,
};

export const backgroundInverted = '#132930';

export const background = {
  ...backgroundColor,
  interactive: {
    ...backgroundInteractive,
    inverted: backgroundInteractiveInverted,
  },
  inverted: backgroundInverted,
};

export const borderPrimaryActive = '#b1b1b1';
export const borderPrimaryDefault = '#d8d8d8';
export const borderPrimaryDisabled = '#dfdfe0';
export const borderPrimaryHover = '#c5c5c5';
export const borderPrimarySelected = '#29616f';
export const borderPrimary = {
  active: borderPrimaryActive,
  default: borderPrimaryDefault,
  disabled: borderPrimaryDisabled,
  hover: borderPrimaryHover,
  selected: borderPrimarySelected,
};

export const borderSecondaryDefault = '#e9e9e9';

export const border = {
  primary: borderPrimary,
  secondary: {
    default: borderSecondaryDefault,
  },
};

export const brandPrimary = '#0b1c21';
export const brandSecondary = '#30588c';
export const brand = {
  primary: brandPrimary,
  secondary: brandSecondary,
};

export const emotionDangerActive = '#6f2535';
export const emotionDangerBackground = '#fbeef1';
export const emotionDangerDefault = '#ba3e5a';
export const emotionDangerDisabled = '#f5f5f5';
export const emotionDangerHover = '#953248';
export const emotionDanger = {
  active: emotionDangerActive,
  background: emotionDangerBackground,
  default: emotionDangerDefault,
  disabled: emotionDangerDisabled,
  hover: emotionDangerHover,
};

export const emotionInformativeActive = '#26456e';
export const emotionInformativeBackground = '#e8eff7';
export const emotionInformativeDefault = '#3b6bab';
export const emotionInformativeDisabled = '#f5f5f5';
export const emotionInformativeHover = '#30588c';
export const emotionInformative = {
  active: emotionInformativeActive,
  background: emotionInformativeBackground,
  default: emotionInformativeDefault,
  disabled: emotionInformativeDisabled,
  hover: emotionInformativeHover,
};

export const emotionSuccessActive = '#33420a';
export const emotionSuccessBackground = '#f6fbe9';
export const emotionSuccessDefault = '#607c13';
export const emotionSuccessDisabled = '#f5f5f5';
export const emotionSuccessHover = '#485d0e';
export const emotionSuccess = {
  active: emotionSuccessActive,
  background: emotionSuccessBackground,
  default: emotionSuccessDefault,
  disabled: emotionSuccessDisabled,
  hover: emotionSuccessHover,
};

export const emotionWarningActive = '#423400';
export const emotionWarningBackground = '#f8f2e4';
export const emotionWarningDefault = '#a98300';
export const emotionWarningDisabled = '#f5f5f5';
export const emotionWarningHover = '#755b00';
export const emotionWarning = {
  active: emotionWarningActive,
  background: emotionWarningBackground,
  default: emotionWarningDefault,
  disabled: emotionWarningDisabled,
  hover: emotionWarningHover,
};

export const emotion = {
  danger: emotionDanger,
  informative: emotionInformative,
  success: emotionSuccess,
  warning: emotionWarning,
};

export const focusDefault = '#4666ae';

export const textPrimaryDefault = '#132930';
export const textPrimaryDisabled = '#a6a6a6';
export const textPrimary = {
  default: textPrimaryDefault,
  disabled: textPrimaryDisabled,
};

export const textPrimaryInvertedDefault = '#fff';
export const textPrimaryInvertedDisabled = '#a6a6a6';
export const textPrimaryInverted = {
  default: textPrimaryInvertedDefault,
  disabled: textPrimaryInvertedDisabled,
};

export const textSecondaryDefault = '#5c747b';
export const textSecondaryDisabled = '#a6a6a6';
export const textSecondary = {
  default: textSecondaryDefault,
  disabled: textSecondaryDisabled,
};

export const textSecondaryInvertedDefault = '#e9e9e9';
export const textSecondaryInvertedDisabled = '#737373';
export const textSecondaryInverted = {
  default: textSecondaryInvertedDefault,
  disabled: textSecondaryInvertedDisabled,
};

export const text = {
  primary: textPrimary,
  secondary: textSecondary,
  inverted: {
    primary: textPrimaryInverted,
    secondary: textSecondaryInverted,
  },
};

export const colors = {
  action,
  background,
  border,
  brand,
  emotion,
  focus: {
    default: focusDefault,
  },
  text,
};
