/*
 * @Author: navalercon
 * @Date: 2023-01-09 11:39:48
 * @LastEditors: navalercon
 * @LastEditTime: 2023-01-09 14:13:12
 * @Description:
 */

import { resolve } from 'path';
import { UserConfig } from 'vite';

// path.resolve () 方法用于将一系列路径段解析为绝对路径。它通过处理从右到左的路径序列来工作，在每个路径之前添加，直到创建绝对路径。
function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

const resolves: UserConfig['resolve'] = {
  alias: [
    // 国际化
    // {
    //   find: 'vue-i18n',
    //   replacement: 'vue-i18n/dist/vue-i18n.cjs.js',
    // },
    // /@/xxxx => src/xxxx
    {
      find: /\@\//,
      replacement: pathResolve('src') + '/',
    },
    // #/xxxx => types/xxxx
    {
      find: /\#\//,
      replacement: pathResolve('types') + '/',
    },
  ],
  // dedupe: ['vue'],
};

export default resolves;
