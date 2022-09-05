import { generateSimple } from './generators/simple';
import { generateTypography } from './generators/typography';

// Pulsar is global-scope object of Supernova, accesible only inside the platform
// @see: https://developers.supernova.io/building-exporters/creating-new-exporter/using-javascript
// eslint-disable-next-line no-undef
Pulsar.registerFunction('generateSimple', generateSimple);
// eslint-disable-next-line no-undef
Pulsar.registerFunction('generateTypography', generateTypography);
