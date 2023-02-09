/*
 * @Author: navalercon
 * @Date: 2023-02-09 11:33:52
 * @LastEditors: navalercon
 * @LastEditTime: 2023-02-09 11:34:07
 * @Description: 
 */
import type { ProxyOptions } from 'vite';
type ProxyTargetList = Record<string, ProxyOptions>;

const proxy: ProxyTargetList = {
  // '/upload': {
  //   target: 'http://localhost:8001/upload',
  //   changeOrigin: true,
  //   ws: true,
  //   rewrite: (path) => path.replace(new RegExp(/^\/upload/), ''),
  // },
};

export default proxy;
