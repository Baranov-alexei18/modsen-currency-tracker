import ReactRefreshTypeScript from 'react-refresh-typescript';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';

import commonConfig from './webpack.config.common';

const devConfig = merge<Configuration>(commonConfig, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{
          loader: 'ts-loader',
          options: {
            getCustomTransformers: () => ({
              before: [ReactRefreshTypeScript()].filter(Boolean),
            }),
            transpileOnly: true,
          },
        }],
        exclude: /node_modules/,
      },

      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]__[local]',
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [new ReactRefreshWebpackPlugin()],
  devServer: {
    compress: true,
    port: 9000,
    open: true,
    historyApiFallback: true,
    hot: true,
  },
});

export default devConfig;
