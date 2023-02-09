/*
 * @Author: navalercon
 * @Date: 2023-02-09 11:41:32
 * @LastEditors: navalercon
 * @LastEditTime: 2023-02-09 11:41:36
 * @Description: 
 */
import { type PluginOption } from 'vite';
import ViteRestart from 'vite-plugin-restart';

export const restartPlugin = () => {
  return ViteRestart({
    restart: ['*.config.[jt]s', '**/config/*.[jt]s'],
  }) as PluginOption;
};