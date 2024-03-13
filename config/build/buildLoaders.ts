import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshTypeScript from 'react-refresh-typescript';
import { ModuleOptions } from 'webpack';

import { BuildOptions } from './types/types';

function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
  const isDev = options.mode === 'development';

  const tsLoader = {
    test: /\.tsx?$/,
    use: [{
      loader: 'ts-loader',
      options: {
        getCustomTransformers: () => ({
          before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
        }),
        transpileOnly: true,
      },
    }],
    exclude: /node_modules/,
  };

  const scssLoaderWithModules = {
    loader: 'css-loader',
    options: {
      modules: {
        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
      },
    },
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      scssLoaderWithModules,
      'sass-loader',
    ],
  };

  return [
    scssLoader, tsLoader,
  ];
}

export default buildLoaders;
