/* eslint-disable no-undef */
import 'webpack-dev-server';

import { Configuration } from 'webpack';

import devConfig from './config/build/webpack.config.dev';
import prodConfig from './config/build/webpack.config.prod';
// import buildWebpack from './config/build/buildWebpack';
// import { BuildMode, BuildPath } from './config/build/types/types';

// interface EnvVariables {
//     mode: BuildMode;
//     port: number
// }

// export default (env: EnvVariables) => {
//   const paths: BuildPath = {
//     entry: path.resolve(__dirname, 'src', 'index.tsx'),
//     output: path.resolve(__dirname, 'dist'),
//     html: path.resolve(__dirname, 'public', 'index.html'),
//     src: path.resolve(__dirname, 'src'),
//   };

//   const config: webpack.Configuration = buildWebpack({
//     port: env.port ?? 9000,
//     mode: env.mode ?? 'development',
//     path: paths,
//   });

//   return config;
// };

const env = process.env.NODE_ENV || 'development';

// eslint-disable-next-line import/no-mutable-exports
let config: Configuration;

switch (env) {
  case 'production':
    config = prodConfig as Configuration;
    break;
  case 'development':
  default:
    config = devConfig as Configuration;
    break;
}

export default config;
