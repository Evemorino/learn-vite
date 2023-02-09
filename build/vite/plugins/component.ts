/*
 * @Author: navalercon
 * @Date: 2023-02-09 11:46:51
 * @LastEditors: navalercon
 * @LastEditTime: 2023-02-09 11:47:09
 * @Description: 
 */
import Components from 'unplugin-vue-components/vite';
import {
  ElementPlusResolver,
  VantResolver,
  VueUseComponentsResolver,
  AntDesignVueResolver,
} from 'unplugin-vue-components/resolvers';
import { type PluginOption } from 'vite';

//按需加载，自动引入组件
export const AutoRegistryComponents = () => {
  return Components({
    dirs: ['src/components'],
    extensions: ['vue', 'tsx'],
    deep: true,
    dts: 'types/components.d.ts',
    directoryAsNamespace: false,
    globalNamespaces: [],
    directives: true,
    importPathTransform: (v) => v,
    allowOverrides: false,
    include: [/\.vue$/, /\.vue\?vue/],
    exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
    resolvers: [
      ElementPlusResolver(),
      VueUseComponentsResolver(),
      VantResolver(),
      AntDesignVueResolver(),
    ],
    // version: 2,
  }) as PluginOption;
};