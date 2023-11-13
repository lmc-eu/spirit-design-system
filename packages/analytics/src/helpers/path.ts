import filedirname from 'filedirname';
import { path } from 'zx';
import { OUTPUT_DIR, OUTPUT_FILENAME_PREFIX } from '../constants';

export const [_filename, _dirname] = filedirname();

export const getOutputPath = (outputPath: string, name: string) => {
  const outputFilename = `${OUTPUT_FILENAME_PREFIX}-${name}.json`;

  return outputPath
    ? path.resolve(outputPath, outputFilename)
    : path.resolve(process.cwd(), `${OUTPUT_DIR}/${outputFilename}`);
};
