import { Configuration } from 'webpack';

import 'webpack-dev-server';

import devConfig from './config/build/webpack.config.dev';
import prodConfig from './config/build/webpack.config.prod';

const env = process.env.NODE_ENV || 'development';

let configWebpack: Configuration;

switch (env) {
  case 'production':
    configWebpack = prodConfig as Configuration;
    break;
  case 'development':
  default:
    configWebpack = devConfig as Configuration;
    break;
}

export default configWebpack;
