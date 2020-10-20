const appName = process.env.REACT_APP_NAME

module.exports = {
  webpack: {
    configure: {
      output: {
        filename: 'static/js/'+ appName + '.min.js'
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
          webpackConfig.plugins[5].options.filename = 'static/css/'+ appName + '.min.css';
          webpackConfig.module.rules[2].oneOf[0].options.name = 'static/media/[name].[ext]'
          webpackConfig.module.rules[2].oneOf[7].options.name = 'static/media/[name].[ext]'
          return webpackConfig;
        },
      },
      options: {}
    }
  ],
}
