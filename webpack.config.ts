/* eslint-disable no-undef */
import 'webpack-dev-server';

import path from 'path';
import webpack from 'webpack';

import { buildWebpack } from './config/build/buildWebpack';
import { BuildMode, BuildPath } from './config/build/types/types';

interface EnvVariables {
    mode: BuildMode;
    port: number
}

export default (env: EnvVariables) => {
  const paths: BuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 9000,
    mode: env.mode ?? 'development',
    path: paths,
  });

  return config;
};
