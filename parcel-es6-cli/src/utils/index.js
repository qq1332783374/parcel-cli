/*
 * @Author: 谭上彪
 * @Date: 2020-05-25 16:21:17
 * @LastEditTime: 2020-05-25 16:40:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \parcel-es6-cli\src\utils\index.js
 */ 

/**
 * 获取本地存储
 * @param {string} key 本地存储key name
 */ 
export const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key) || '[]')

/**
 * 存储 本地存储
 * @param {string} key 
 * @param {*} val 
 */
export const setLocalStorage = (key, val) => localStorage.setItem(key, JSON.stringify(val))
