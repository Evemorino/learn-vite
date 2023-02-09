/*
 * @Author: navalercon
 * @Date: 2023-02-09 11:46:06
 * @LastEditors: navalercon
 * @LastEditTime: 2023-02-09 11:46:11
 * @Description: 
 */
import AutoImport from 'unplugin-auto-import/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { type PluginOption } from 'vite';

//按需加载，自动引入
export const AutoImportDeps = () => {
  return AutoImport({
    dts: 'types/auto-imports.d.ts',
    imports: [
      'vue',
      'pinia',
      'vue-router',
      '@vueuse/core',
      // '@vueuse/head',
      // ''
      // {
      //   '@vueuse/core': [],
      // },
    ],
    resolvers: [ElementPlusResolver()],
  }) as PluginOption;
};