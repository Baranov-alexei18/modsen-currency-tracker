import TerserPlugin from 'terser-webpack-plugin';
import type { Configuration } from 'webpack';

import buildDevServer from './buildDevServer';
import buildLoaders from './buildLoaders';
import buildPlugins from './buildPlugins';
import buildResolvers from './buildResolvers';
import { BuildOptions } from './types/types';

function buildWebpack(options: BuildOptions): Configuration {
  const isDev = options.mode === 'development';
  const isProd = options.mode === 'production';

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
      minimize: true,
      minimizer: [
        isProd && new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true,
            },
            mangle: true,
          },
        }),
      ],
    },
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
  };
}

export default buildWebpack;
