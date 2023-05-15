export interface Language {
  [key: string]: string;
}

export interface Languages {
  [key: string]: Language;
}

export type Params = Record<string, string[] | string> | never[];

export type ValidatorCallback = (...args: string[]) => boolean | number;

export type Validator = {
  fn: ValidatorCallback;
  priority?: number;
  halt?: boolean;
  msg?: string | ((message: string, params: Params) => string);
};

export type NamedValidator = Validator & {
  name: string;
};

export type FormValidationsFieldElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

export type ValidationTextElement = HTMLElement & {
  formValidationsDisplay: string;
};

export type Field = {
  errorElements?: ValidationTextElement[] | HTMLElement[] | null[] | undefined[];
  errors?: string[];
  input: FormValidationsFieldElement;
  messages: Languages;
  params: Params;
  validators: NamedValidator[];
  self: {
    form: HTMLElement;
  };
};

export type FormValidationsElement = FormValidationsFieldElement & {
  formValidations: Field;
};
