/*
 * @Author: navalercon
 * @Date: 2023-01-09 15:21:32
 * @LastEditors: navalercon
 * @LastEditTime: 2023-02-09 14:04:49
 * @Description:
 */
import { visualizer } from 'rollup-plugin-visualizer';
import type { PluginOption } from 'vite';

export const visualizerPlugin = () => {
  return visualizer({
    filename: './node_modules/.cache/visualizer/stats.html',
    open: true,
    gzipSize: true,
    brotliSize: true,
  }) as PluginOption;
};
