/*
 * @Author: 谭上彪
 * @Date: 2020-05-25 17:08:23
 * @LastEditTime: 2020-05-25 18:19:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \parcel-es6-cli\src\controller\view.js
 */ 
import { $qs, $on } from '../utils'
export default class View {
  constructor (template) {
    this.template = template
    // 获取 Dom 节点
    this.$localInput = $qs('.local_input')
    this.$localBtn = $qs('.local_btn')
    this.$localList = $qs('.local_list')
  }

  showLocalList (items) {
    this.$localList.innerHTML = this.template.itemList(items)
  }

  bindSetVal (handler) {
    const _that = this
    $on(this.$localBtn, 'click', () => {
      const val = _that.$localInput.value.trim()
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