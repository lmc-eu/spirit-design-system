import scanner from 'react-scanner';
import { path } from 'zx';
import { runner } from '../runner';
import { RunnerConfig } from '../types';

jest.mock('../scanners/twigScanner', () => jest.fn(() => Promise.resolve({ test: 'test' })));

describe('runner', () => {
  jest.spyOn(path, 'resolve').mockImplementation((...args: string[]) => args.join('/'));

  it('should return tracked data for react type', async () => {
    const config = {
      react: {},
      twig: {},
    } as RunnerConfig;
    const source = '/path/to/source';
    const type = 'react';
    jest.spyOn(scanner, 'run').mockResolvedValue({ test: 'test' });

    const trackedData = await runner(config, source, type);

    expect(trackedData.spiritVersion).toBeDefined();
    expect(trackedData.trackedData.react).toEqual({ test: 'test' });
    expect(trackedData.trackedData.twig).toEqual({});
  });

  it('should return tracked data for twig type', async () => {
    const config = {
      react: {},
      twig: {},
    } as RunnerConfig;
    const source = '/path/to/source';
    const type = 'twig';

    const trackedData = await runner(config, source, type);

    expect(trackedData.spiritVersion).toBeDefined();
    expect(trackedData.trackedData.react).toEqual({});
    expect(trackedData.trackedData.twig).toEqual({ test: 'test' });
  });

  it('should return tracked data for both react and twig types', async () => {
    const config = {
      react: {},
      twig: {},
    } as RunnerConfig;
    const source = '/path/to/source';
    const type = null;
    jest.spyOn(scanner, 'run').mockResolvedValue({ test: 'test' });

    const trackedData = await runner(config, source, type);

    expect(trackedData.spiritVersion).toBeDefined();
    expect(trackedData.trackedData.react).toEqual({ test: 'test' });
    expect(trackedData.trackedData.twig).toEqual({ test: 'test' });
  });
});
