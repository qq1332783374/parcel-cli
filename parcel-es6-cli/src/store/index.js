/*
 * @Author: 谭上彪
 * @Date: 2020-05-25 17:05:52
 * @LastEditTime: 2020-05-26 15:59:51
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

  remove (query, callback) {
    let k

		const items = this.getLocalStorage().filter(item => {
			for (k in query) {
				if (query[k] !== item[k]) {
					return true
				}
			}
			return false
		})

		this.setLocalStorage(items)

		if (callback) callback(items)
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