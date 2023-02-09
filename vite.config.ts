import { ConfigEnv, UserConfig, loadEnv } from 'vite';
import resolves from './build/vite/resolve';
import css from './build/vite/css';
import createServer from './build/vite/server';
import { createVitePlugins } from './build/vite/plugins';
import pkg from './package.json'

export default ({ command, mode }: ConfigEnv): UserConfig => {
  const base = '/';

  const root = process.cwd();

  const env = loadEnv(mode, root)

  const { VITE_PORT } = env
  
  const isBuild = command === 'build'
  
  // console.log(env)

  const plugins = createVitePlugins();

  return {
    base: base,

    root: root,

    resolve: resolves,

    plugins: plugins,

    css: css,

    server: createServer(VITE_PORT),
  };
};

