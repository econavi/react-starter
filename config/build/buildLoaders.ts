import ReactRefreshTypeScript from 'react-refresh-typescript'

import type { ModuleOptions } from 'webpack'
import type { BuildOptions } from './types/types'

export const buildLoaders = (options: BuildOptions): ModuleOptions['rules'] => {
  const isDev = options.mode === 'development'

  const cssLoader = {
    test: /\.css$/i,
    use: ['style-loader', 'css-loader']
  }

  const tsLoader = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          getCustomTransformers: () => ({
            before: [isDev && ReactRefreshTypeScript()].filter(Boolean)
          })
        }
      }
    ]
  }

  const assetLoader = {
    test: /\.(png|jpg|gif)$/,
    use: ['file-loader']
  }

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          icon: true,
          svgoConfig: {
            plugins: [
              {
                name: 'convertColors',
                params: {
                  currentColor: true
                }
              }
            ]
          }
        }
      }
    ]
  }

  return [svgLoader, assetLoader, cssLoader, tsLoader]
}
