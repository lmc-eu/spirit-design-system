const path = require('path');
// eslint-disable-next-line import/no-unresolved
const Encore = require('@symfony/webpack-encore');
// eslint-disable-next-line import/no-extraneous-dependencies
const sass = require('sass');

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    // directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // public path used by the web server to access the output path
    .setPublicPath('/build')
    // only needed for CDN's or subdirectory deploy
    // .setManifestKeyPrefix('build/')

    /*
     * ENTRY CONFIG
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if your JavaScript imports CSS.
     */
    .addEntry('app', './assets/app.ts')
    .addEntry('fileUploaderImagePreview', './assets/scripts/file-uploader-image-preview.ts')
    .addEntry('fileUploaderMetaData', './assets/scripts/file-uploader-meta-data.ts')
    .addEntry('formValidations', './assets/scripts/form-validations.ts')
    .addEntry('tooltipDismissibleViaJS', './assets/scripts/tooltip-dismissible-via-js.ts')
    .addEntry('tooltipAdvancedUsage', './assets/scripts/tooltip-advanced-usage.ts')

    // enables the Symfony UX Stimulus bridge (used in assets/bootstrap.js)
    // .enableStimulusBridge('./assets/controllers.json')

    // When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
    .splitEntryChunks()

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    .enableSingleRuntimeChunk()

    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    // configure Babel
    // .configureBabel((config) => {
    //     config.plugins.push('@babel/a-babel-plugin');
    // })

    // enables and configure @babel/preset-env polyfills
    // .configureBabelPresetEnv((config) => {
    //     config.useBuiltIns = 'usage';
    //     config.corejs = '3.23';
    // })

    // enables Sass/SCSS support
    .enableSassLoader(
      (options) => {
          // eslint-disable-next-line no-param-reassign
          options.implementation = sass;
          // eslint-disable-next-line no-param-reassign
          options.sassOptions = {
              includePaths: [
                // used in docker image
                './node_modules',
                './node_modules/@lmc-eu/spirit-design-tokens/scss',
                // used on local machine
                '../../node_modules',
                '../../node_modules/@lmc-eu/spirit-design-tokens/src/scss',
              ],
          };
      },
      {
          resolveUrlLoader: false,
      },
  )

    // uncomment if you use TypeScript
    .enableTypeScriptLoader()

    // uncomment to get integrity="..." attributes on your script & link tags
    // requires WebpackEncoreBundle 1.4 or higher
    // .enableIntegrityHashes(Encore.isProduction())
;

const config = Encore.getWebpackConfig();

config.resolve.alias = {
    '@floating-ui/dom': path.resolve(__dirname, 'node_modules/@floating-ui/dom'),
};

module.exports = config;
