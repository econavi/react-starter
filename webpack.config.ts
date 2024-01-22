import webpack from 'webpack'
import path from 'path'

import { buildWebpack } from './config/build/buildWebpack'

import type { BuildMode, BuildPaths } from './config/build/types/types'

interface EnvVariables {
  mode: BuildMode
  port: number
}

export default (env: EnvVariables) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')
  }

  const options = {
    paths,
    mode: env.mode,
    port: env.port ?? 4242
  }

  const config: webpack.Configuration = buildWebpack(options)

  return config
}
