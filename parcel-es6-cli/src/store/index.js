/*
 * @Author: 谭上彪
 * @Date: 2020-05-25 17:05:52
 * @LastEditTime: 2020-05-25 18:18:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \parcel-es6-cli\src\store\index.js
 */ 
export default class Store {
  constructor (name, callback) {
    const localStorage = window.localStorage

    /**
     * 获取本地存储
     */
    this.getLocalStorage = () => JSON.parse(localStorage.getItem(name) || '[]')

    /**
     * 设置本地存储
     */
    this.setLocalStorage = (val) => localStorage.setItem(name, JSON.stringify(val))

    /**
     * 回调行数
     */
    if (callback) callback()
  }

  find (query, callback) {
    // TODO
    /** ------- */
    callback(this.getLocalStorage())
  }

  /**
   * 设置数据
   * @param {*} item 
   */
  insert (item, callback) {
    const items = this.getLocalStorage()
    items.push(item)
    this.setLocalStorage(items)

    if (callback) callback()
  }
}