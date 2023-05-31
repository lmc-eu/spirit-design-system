declare module 'react-scanner' {
  export function run({
    config,
    configDir,
    crawlFrom,
    startTime,
    method,
  }: {
    config: string;
    configDir: string;
    crawlFrom: string;
    startTime: string;
    method: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }): any;
}
