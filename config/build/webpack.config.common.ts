import dotenv from 'dotenv';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { type Configuration, DefinePlugin } from 'webpack';

const rootDir = path.resolve(__dirname, '..', '..');
const env = dotenv.config().parsed;
const envKeys = Object.keys(env).reduce((prev:{[prev: string]:string}, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

const config: Configuration = {
  entry: path.resolve(rootDir, 'src', 'index.tsx'),
  output: {
    path: path.resolve(rootDir, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'images',
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.scss'],
    alias: {
      '@': path.resolve(rootDir, 'src'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(rootDir, 'public', 'index.html') }),
    new DefinePlugin(envKeys),
  ],
  devServer: {
    hot: true,
  },
  optimization: {
    runtimeChunk: 'single',
    minimize: true,
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};

export default config;
