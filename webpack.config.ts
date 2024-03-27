import 'webpack-dev-server';

import { Configuration } from 'webpack';

import devConfig from './config/build/webpack.config.dev';
import prodConfig from './config/build/webpack.config.prod';

const env = process.env.NODE_ENV || 'development';

// eslint-disable-next-line import/no-mutable-exports
let configWebpack: Configuration;

switch (env) {
  case 'production':
    configWebpack = prodConfig;
    break;
  case 'development':
  default:
    configWebpack = devConfig;
    break;
}

export default configWebpack;
