import { path } from 'zx';
import filedirname from 'filedirname';
import { OUTPUT_DIR } from '../constants';

export const [__filename, __dirname] = filedirname();

export const getOutputPath = (outputPath: string, name: string) =>
  outputPath
    ? path.resolve(outputPath, `spirit-analytics-${name}.json`)
    : path.resolve(process.cwd(), `${OUTPUT_DIR}/spirit-analytics-${name}.json`);
