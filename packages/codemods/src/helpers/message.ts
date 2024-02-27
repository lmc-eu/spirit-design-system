// Here we are defining function with only usage of Console
/* eslint-disable no-console */
import { chalk } from 'zx';

export const errorMessage = (message: string) => console.error(chalk.red(message));
export const infoMessage = (message: string) => console.info(chalk.magenta.bold(message));
export const logMessage = (message: string) => console.log(message);
