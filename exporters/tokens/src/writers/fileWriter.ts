import { FileHelper } from '@supernovaio/export-helpers';
import { type OutputTextFile } from '@supernovaio/sdk-exporters';

export const writeToTextFile = (relativePath: string, fileName: string, content: string): OutputTextFile => {
  return FileHelper.createTextFile({
    relativePath,
    fileName,
    content,
  });
};

export type OutputFile = { path: string; fileName: string; content: string };

export const textFileWriter = (files: Array<OutputFile>) => {
  return files.map((file) => {
    const { path, fileName, content } = file;

    return writeToTextFile(path, fileName, content);
  });
};
