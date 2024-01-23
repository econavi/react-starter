import webpack, { DefinePlugin, type Configuration } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'

import type { BuildOptions } from './types/types'
import path from 'path'

type Plugins = Configuration['plugins']

export const buildPlugins = (options: BuildOptions): Plugins => {
  const isDev = options.mode === 'development'

  const plugins: Plugins = [
    new HtmlWebpackPlugin({ template: options.paths.html }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev.toString())
    })
  ]

  if (isDev) {
    plugins.push(new webpack.ProgressPlugin())
    plugins.push(new ForkTsCheckerWebpackPlugin({ devServer: false }))
  }

  return plugins
}
