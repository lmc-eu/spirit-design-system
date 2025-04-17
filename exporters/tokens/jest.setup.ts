import { exampleConfigurationDefault } from './tests/fixtures/exampleConfiguration';

jest.mock('../../index', () => ({
  exportConfiguration: exampleConfigurationDefault,
}));
