/*
 * @Author: 谭上彪
 * @Date: 2020-05-25 17:08:23
 * @LastEditTime: 2020-05-26 15:58:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \parcel-es6-cli\src\controller\view.js
 */ 
import { $qs, $on, $delegate } from '../utils'

const _itemId = element => parseInt(element.parentNode.dataset.id || element.parentNode.parentNode.dataset.id, 10)

export default class View {
  constructor (template) {
    this.template = template
    // 获取 Dom 节点
    this.$localInput = $qs('.local_input')
    this.$localBtn = $qs('.local_btn')
    this.$localList = $qs('.local_list')
    this.$del = $qs('.del')
  }

  removeItem (id) {
    const elem = $qs(`[data-id="${id}"]`)

    if (elem) this.$localList.removeChild(elem)
  }

  showLocalList (items) {
    this.$localList.innerHTML = this.template.itemList(items)
  }

  bindRemoveItem (handler) {
    $delegate(this.$localList, '.del', 'click', ({target}) => {
			handler(_itemId(target))
		})
  }

  bindSetVal (handler) {
    $on(this.$localBtn, 'click', () => {
      const val = this.$localInput.value.trim()
      if (val) handler(val)
    })
  }

  /**
   * 清除 input val 值
   */
  clearVal () {
    this.$localInput.value = ''
  }
}