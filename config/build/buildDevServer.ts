import type { Configuration } from 'webpack-dev-server';

import { BuildOptions } from './types/types';

function buildDevServer(options: BuildOptions):Configuration {
  return {
    compress: true,
    port: options.port ?? 9000,
    open: true,
    historyApiFallback: true,
    hot: true,
  };
}
export default buildDevServer;
