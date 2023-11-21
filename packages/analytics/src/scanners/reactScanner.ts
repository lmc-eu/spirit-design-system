import scanner from 'react-scanner';
import { ReactScannerConfig } from '../types';

export default async function reactScanner(config: ReactScannerConfig) {
  const output = await scanner.run({ ...config });

  return output;
}
