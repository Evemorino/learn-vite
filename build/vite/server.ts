/*
 * @Author: navalercon
 * @Date: 2023-02-09 11:34:16
 * @LastEditors: navalercon
 * @LastEditTime: 2023-02-09 17:01:25
 * @Description: 
 */
import { type UserConfig } from 'vite';
import proxy from './proxy';

const createServer = (port: string) => {
  return {
    // 服务配置
    // IP配置，支持从IP启动
    // host: true,
    host: '0.0.0.0',
    // 类型： number 指定服务器端口;
    port: parseInt(port),
    // port: VITE_PORT,
    // 禁用或配置 HMR 连接 设置 server.hmr.overlay 为 false 可以禁用服务器错误遮罩层
    // hmr: { overlay: false },
    // 类型： boolean | string在服务器启动时自动在浏览器中打开应用程序；
    open: false,
    // 类型： boolean | CorsOptions 为开发服务器配置 CORS。默认启用并允许任何源
    cors: false,

    proxy: proxy,
  } as  UserConfig['server']
  
};

export default createServer;