import { ModuleOptions } from 'webpack'

export const buildLoaders = (): ModuleOptions['rules'] => {
  const cssLoader = {
    test: /\.css$/i,
    use: ['style-loader', 'css-loader']
  }

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
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
