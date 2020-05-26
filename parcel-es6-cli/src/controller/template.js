/*
 * @Author: 谭上彪
 * @Date: 2020-05-25 17:50:02
 * @LastEditTime: 2020-05-26 09:22:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \parcel-es6-cli\src\controller\template.js
 */ 
export default class Template {
  itemList (items) {
    return items.reduce((a, item) => a + `
      <li data-id="${item.id}">
        <span>${item.val}</span>
        <span class="del">x</span>
      </li>
    `, '')
  }
}
