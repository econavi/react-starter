import webpack, { type Configuration } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import type { BuildOptions } from './types/types'
import path from 'path'

type Plugins = Configuration['plugins']

export const buildPlugins = (options: BuildOptions): Plugins => {
  const isDev = options.mode === 'development'

  const plugins: Plugins = [new HtmlWebpackPlugin({ template: options.paths.html })]

  if (isDev) {
    plugins.push(new webpack.ProgressPlugin())
  }

  return plugins
}
