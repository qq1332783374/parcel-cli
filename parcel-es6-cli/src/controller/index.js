/*
 * @Author: 谭上彪
 * @Date: 2020-05-25 16:29:13
 * @LastEditTime: 2020-05-26 09:51:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \parcel-es6-cli\src\controller\index.js
 */ 
export default class Controller {
  constructor (view, store) {
    this.view = view
    this.store = store

    view.bindSetVal(this.addLocalVal.bind(this))
    view.bindRemoveItem(this.removeItem.bind(this))
  }

  removeItem (id) {
    this.store.remove({id}, () => {
      this._show()
      this.view.removeItem(id)
    })
  }

  /**
   * 添加li
   * @param {*} val 
   */
  addLocalVal (val) {
    this.store.insert({
      id: Date.now(),
      val
    }, () => {
      this.view.clearVal()
      this._show()
    })
  }

  /**
   * 初始化视图
   */
  setView () {
    this._show()
  }

  /**
   * 查找本地存储数据
   */
  _show () {
    this.store.find({}, this.view.showLocalList.bind(this.view))
  }

}