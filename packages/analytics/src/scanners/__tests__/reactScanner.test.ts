import scanner from 'react-scanner';
import reactScanner from '../reactScanner';

describe('reactScanner', () => {
  it('should return the output of the scanner', async () => {
    const mockedScannerRun = jest.spyOn(scanner, 'run');
    mockedScannerRun.mockResolvedValue('scanner output');

    const config = {
      crawlFrom: 'path/to/crawl/from',
      config: 'path/to/config',
    };

    const output = await reactScanner(config);

    expect(output).toBe('scanner output');
    expect(mockedScannerRun).toHaveBeenCalledWith(config);
  });
});
