import { Configuration } from 'webpack'
import { BuildOptions } from './types/types'

export const buildResolvers = (options: BuildOptions): Configuration['resolve'] => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    alias: {},
  }
}
