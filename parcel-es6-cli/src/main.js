/*
 * @Author: 谭上彪
 * @Date: 2020-05-25 16:13:02
 * @LastEditTime: 2020-05-25 16:42:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \parcel-es6-cli\src\main.js
 */ 
import 'babel-polyfill' // 好东西，勿删
// 本地模块引入测试
import Controller from './controller'
import { getLocalStorage, setLocalStorage } from './utils'
import { DEFAULT_LOCAL_NAME } from './const'
import './assets/styles/main.css'

const controller = new Controller()

async function utilsTest () {
  const res = await controller.sayHello()
  // 存储结果
  setLocalStorage(DEFAULT_LOCAL_NAME, res)
  // 获取
  const localVal = getLocalStorage(DEFAULT_LOCAL_NAME)

  console.log('localVal', localVal)
}
utilsTest()
