/*
 * @Author: navalercon
 * @Date: 2023-01-09 15:19:03
 * @LastEditors: navalercon
 * @LastEditTime: 2023-01-09 15:26:08
 * @Description:
 */
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';
import { type PluginOption } from 'vite';

export const svgDev = () => {
  return createSvgIconsPlugin({
    // 指定需要缓存的图标文件夹
    iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
    // 是否压缩
    // svgoOptions: isBuild,
    svgoOptions: true,
    // 指定symbolId格式
    symbolId: 'icon-[dir]-[name]',
  }) as PluginOption;
};
