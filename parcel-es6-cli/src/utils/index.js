/*
 * @Author: 谭上彪
 * @Date: 2020-05-25 16:21:17
 * @LastEditTime: 2020-05-25 17:16:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \parcel-es6-cli\src\utils\index.js
 */ 

/**
 * 获取dom元素
 * @param {*} selector 
 */
export const $qs = (selector) => document.querySelector(selector)

/**
 * 事件绑定
 * @param {*} target dom目标
 * @param {*} type 事件类型
 * @param {*} callback 回调行数
 * @param {Boolean} capture 表示 listener 会在该类型的事件捕获阶段传播到该EventTarget 时触发
 */
export const $on = (target, type, callback, capture) => target.addEventListener(type, callback, capture)
