import type { Configuration } from 'webpack';

import buildDevServer from './buildDevServer';
import buildLoaders from './buildLoaders';
import buildPlugins from './buildPlugins';
import buildResolvers from './buildResolvers';
import { BuildOptions } from './types/types';

export function buildWebpack(options: BuildOptions): Configuration {
  const isDev = options.mode === 'development';

  return {
    mode: options.mode ?? 'production',
    entry: options.path.entry,
    output: {
      path: options.path.output,
      filename: '[name].[contenthash].js',
      clean: true,
    },
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    plugins: buildPlugins(options),
    devtool: isDev && 'inline-source-map',
    devServer: isDev && buildDevServer(options),
    optimization: {
      runtimeChunk: 'single',
    },
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
  };
}
