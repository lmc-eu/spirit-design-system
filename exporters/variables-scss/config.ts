/**
 * Main configuration of the exporter - type interface.
 * Default values for it can be set through `config.json`
 * Users can override the behavior when creating the pipelines
 * or by creating `config.local.json` file specifying actual values.
 */
export type ExporterConfiguration = {
  /**
   * When enabled, generate a disclaimer showing the fact
   * that the file was generated automatically
   * and should not be changed manually will appear in all files
   */
  generateDisclaimer: boolean;
};
