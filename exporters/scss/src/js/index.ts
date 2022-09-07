import { generateSimple } from './generators/simple';
import { generateTypography } from './generators/typography';

export interface Origin {
  source: string;
  id: string;
  name: string;
}

export interface Token {
  id: string;
  name: string;
  description: string;
  tokenType: string;
  origin?: Origin;
  value: Record<string, Record<string, string | number> | string | number>;
}

// Pulsar is global-scope object of Supernova, accesible only inside the platform
// @see: https://developers.supernova.io/building-exporters/creating-new-exporter/using-javascript
// eslint-disable-next-line no-undef
Pulsar.registerFunction('generateSimple', generateSimple);
// eslint-disable-next-line no-undef
Pulsar.registerFunction('generateTypography', generateTypography);
