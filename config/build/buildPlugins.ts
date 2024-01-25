import webpack, { DefinePlugin, type Configuration } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'

import type { BuildOptions } from './types/types'
import path from 'path'

type Plugins = Configuration['plugins']

export const buildPlugins = (options: BuildOptions): Plugins => {
  const isDev = options.mode === 'development'
  const isProd = options.mode === 'production'

  const plugins: Plugins = [
    new HtmlWebpackPlugin({
      template: options.paths.html,
      favicon: path.resolve(options.paths.public, 'favicon.ico')
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev.toString())
    })
  ]

  if (isDev) {
    plugins.push(new webpack.ProgressPlugin())
    plugins.push(new ForkTsCheckerWebpackPlugin({ devServer: false }))
    plugins.push(new ReactRefreshWebpackPlugin())
  }

  if (isProd) {
    plugins.push(
      new CopyPlugin({
        patterns: [{ from: path.resolve(options.paths.public, 'robots.txt'), to: options.paths.output }]
      })
    )
  }

  return plugins
}
