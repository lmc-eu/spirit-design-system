import scanner from 'react-scanner';
import { RunnerConfig } from '../types';

export default async function reactScanner(config: RunnerConfig) {
  const output = await scanner.run({ ...config });

  return output;
}
