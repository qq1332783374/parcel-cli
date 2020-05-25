/*
 * @Author: 谭上彪
 * @Date: 2020-05-25 16:29:13
 * @LastEditTime: 2020-05-25 16:33:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \parcel-es6-cli\src\controller\index.js
 */ 
export default class Controller {
  constructor () {
    this.hello = 'hello'
    this.world = 'world'
  }

  sayHello () {
    return new Promise(resolve => {
      resolve(`${this.hello} ${this.world}`)
    })
  }
}