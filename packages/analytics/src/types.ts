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

export type TrackedData = {
  react: Record<string, OutputInstance>;
  twig: Record<string, OutputInstance>;
};

export interface ReactScannerConfig {
  config: string;
  configDir?: string;
  crawlFrom: string;
  startTime?: string;
  method?: string;
  exclude?: Array<string>;
}

export interface RunnerConfig {
  crawlFrom: string;
  react: ReactScannerConfig;
  twig: {
    configFile?: string;
    outputFile?: string;
    coreComponentsPath?: string;
  };
}

export type ScannerType = 'react' | 'twig' | null;
