const webpack = require('webpack');
const { resolve } = require('path');

module.exports = {
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './index.js',
  ],
  devServer: {
    host: 'localhost',
    port: 3000,
    open: true,
    historyApiFallback: true,
    hot: true,
    stats: 'errors-only',
  },
  resolve: {
		extensions: ['.js', '.jsx', '.json'],
		alias: {
			views: resolve('./src/views/index.js'),
      components: resolve('./src/components/index.js'),
      _graphql: resolve('./src/graphql/index.js'),
		},
	},
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
				test: /\.css$/,
				loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&camelCase!postcss-loader',
			},
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};
