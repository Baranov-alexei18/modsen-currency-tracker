import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';

import commonConfig from './webpack.config.common';

const prodConfig = merge<Configuration>(commonConfig, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [{
          loader: 'babel-loader',
        }],
        exclude: /node_modules/,
      },

      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[hash:base64:8]',
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin({ filename: 'css/[name].[contenthash:8].css' })],

  optimization: {
    runtimeChunk: 'single',
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
          mangle: true,
        },
      }),
    ],
  },
});

export default prodConfig;
