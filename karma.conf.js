/* eslint-env node */

// configures browsers to run test against
// any of [ 'ChromeHeadless', 'Chrome', 'Firefox', 'Safari' ]
var browsers = (process.env.TEST_BROWSERS || 'ChromeHeadless').split(',');

// use puppeteer provided Chrome for testing
process.env.CHROME_BIN = require('puppeteer').executablePath();


module.exports = function(karma) {
  karma.set({

    frameworks: [
      'mocha',
      'chai',
      'webpack'
    ],

    files: [
      'test/spec/**/*Spec.js'
    ],

    preprocessors: {
      'test/spec/**/*Spec.js': [ 'webpack' ]
    },

    reporters: [ 'progress' ],

    browsers,

    browserNoActivityTimeout: 30000,

    singleRun: true,
    autoWatch: false,

    webpack: {
      mode: 'development',
      module: {
        rules: [
          {
            test: require.resolve('./test/TestHelper.js'),
            sideEffects: true
          },
          {
            test: /\.css|\.bpmn$/,
            type: 'asset/source'
          }
        ]
      },
      resolve: {
        mainFields: [
          'dev:module',
          'module',
          'main'
        ]
      },
      devtool: 'eval-source-map'
    }
  });
};
