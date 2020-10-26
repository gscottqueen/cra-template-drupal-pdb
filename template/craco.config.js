require('dotenv').config() // we use dotenv because we can't access react's from here on build

module.exports = {
  webpack: {
    configure: {
      output: {
        filename: 'static/js/'+ process.env.REACT_APP_NAME + '.min.js'
      },
      optimization: {
        runtimeChunk: false,
        splitChunks: {
          chunks(chunk) {
            return false
          },
        },
      },
    },
  },
  plugins: [
    {
      plugin: {
        overrideWebpackConfig: ({ webpackConfig }) => {
          // we overide the filename for our output files
          webpackConfig.plugins[5].options.filename = 'static/css/'+ process.env.REACT_APP_NAME + '.min.css';
          return webpackConfig;
        },
      },
      options: {}
    }
  ],
}
