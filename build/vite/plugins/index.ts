/*
 * @Author: navalercon
 * @Date: 2023-02-09 11:35:21
 * @LastEditors: navalercon
 * @LastEditTime: 2023-02-09 14:13:28
 * @Description: 
 */
import vueSetupExtend from 'vite-plugin-vue-setup-extend';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vue from '@vitejs/plugin-vue'
import { type PluginOption } from 'vite';

import { AutoImportDeps } from './autoImport';
import { AutoRegistryComponents } from './component';
import { svgDev } from './svg';
import { restartPlugin } from './restart';
import { visualizerPlugin } from './visualize';
import { compressPlugin } from './compress';

export function createVitePlugins(): (PluginOption | PluginOption[])[] {
  const plugins: Array<PluginOption | Array<PluginOption>> = [
    // vue支持
    vue(),
    // JSX支持
    vueJsx(),
    // setup语法糖组件名支持
    vueSetupExtend(),
  ];

  // 自动按需引入依赖
  plugins.push(AutoImportDeps());

  // 自动按需引入组件
  plugins.push(AutoRegistryComponents());

  // 监听配置
  plugins.push(restartPlugin());

  // 自动生成svg雪碧图组件
  plugins.push(svgDev());

  // visualize
  plugins.push(visualizerPlugin());

  // 压缩
  plugins.push(compressPlugin());


  return plugins
}