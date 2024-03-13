import { Configuration } from 'webpack';

import { BuildOptions } from './types/types';

function buildResolvers(options: BuildOptions):Configuration['resolve'] {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': options.path.src,
    },
  };
}

export default buildResolvers;
