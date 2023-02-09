/*
 * @Author: navalercon
 * @Date: 2023-01-09 15:07:00
 * @LastEditors: navalercon
 * @LastEditTime: 2023-01-09 15:39:55
 * @Description:
 */
import { type PluginOption } from 'vite';
import viteCompression from 'vite-plugin-compression';

// 开启.gz压缩
export const compressPlugin = () => {
  return viteCompression({
    verbose: true, // 默认即可
    disable: false, //开启压缩(不禁用)，默认即可
    deleteOriginFile: false, //删除源文件
    threshold: 10240, //压缩前最小文件大小
    algorithm: 'gzip', //压缩算法
    ext: '.gz', //文件类型
  }) as PluginOption;
};
