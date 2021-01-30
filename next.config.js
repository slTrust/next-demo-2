module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.png$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[contenthash].[ext]',
            publicPath: '/_next/static',
            outputPath: 'static',
          }
        }

      ]
    })
    return config;
  }
}