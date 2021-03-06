// updated for webpack v2
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// const isProd = () => process.env.NODE_ENV === 'production';

const config = {
  entry: {
    entry: './src/entry.jsx',
  },

  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader', // shortcut to Rule.use: [{ loader }], https://webpack.js.org/configuration/module/#rule-loader
        options: { // https://babeljs.io/docs/usage/api/#options
          presets: [
            'react',
            ['es2015', { modules: false }],
          ],
        },
      },
      // css
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: { loader: 'style-loader' },
          use: {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        }),
      },
      // fileloader
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: '/assets/',
            },
          },
        ],
      },
    ],
  },

  resolve: { // changes how modules are resolved
    extensions: ['.js', '.jsx'], // https://webpack.js.org/configuration/resolve/#resolve-extensions
  },

  plugins: [
    new webpack.SourceMapDevToolPlugin({ // no need devtool: sourcemap with this plugin
      exclude: /^vendor.*.\.js$/,
      filename: '[file].map',
    }),
    new ExtractTextPlugin('css/[name].css'),
  ],
  watchOptions:
    {
      // one second grace period to add minor updates that will get aggregated into the same compile
      aggregateTimeout: 1000,
    },
};
module.exports = config;
