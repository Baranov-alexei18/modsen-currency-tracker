import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import type { Configuration } from 'webpack';

import { BuildOptions } from './types/types';

function buildPlugins(options: BuildOptions): Configuration['plugins'] {
  const isDev = options.mode === 'development';
  const isProd = options.mode === 'production';

  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({ template: options.path.html }),
  ];

  if (isDev) {
    plugins.push(new ReactRefreshWebpackPlugin());
  }

  if (isProd) {
    plugins.push(new MiniCssExtractPlugin({ filename: 'css/[name].[contenthash:8].css' }));
  }

  return plugins;
}

export default buildPlugins;
