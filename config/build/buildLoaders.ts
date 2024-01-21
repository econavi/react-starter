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

  return [cssLoader, tsLoader]
}
