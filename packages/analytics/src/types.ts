export interface Instance {
  importInfo?: {
    imported: string;
    local: string;
    moduleName: string;
    importType: string;
  };
  props: Record<string, string | number>;
  propsSpread: boolean;
  location: {
    file: string;
    start: {
      line: number;
      column: number;
    };
  };
}

export interface Component {
  instances: Instance[];
}

export interface PropValue {
  name: string;
  used: number;
}

export interface Prop {
  name: string;
  used: number;
  values: PropValue;
}

interface Source {
  url: string;
  props: Array<{ name: string | null; value: string | number | null }>;
}

interface OutputInstance {
  instances: number;
  sources: Source[];
  category: string;
  icon: boolean;
  props: Prop;
  isDeprecated: boolean;
}

export type TrackedData = Record<string, OutputInstance>;

export interface RunnerConfig {
  crawlFrom: string;
  exclude?: Array<string>;
  configFile?: string;
  outputFile?: string;
  coreComponentsPath?: string;
  config: string;
  configDir?: string;
  startTime?: string;
  method?: string;
}

export type ScannerType = 'react' | 'twig' | null;
