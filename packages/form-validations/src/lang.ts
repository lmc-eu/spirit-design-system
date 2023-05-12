export interface Language {
  [key: string]: string;
}

export interface Languages {
  [key: string]: Language;
}

export const lang: Languages = {
  en: {
    required: 'This field is required',
    default: 'Please enter a correct value',
  },
};
