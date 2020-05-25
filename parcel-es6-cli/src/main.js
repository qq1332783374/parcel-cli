/*
 * @Author: 谭上彪
 * @Date: 2020-05-25 16:13:02
 * @LastEditTime: 2020-05-25 18:14:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \parcel-es6-cli\src\main.js
 */ 
import 'babel-polyfill' // 好东西，勿删
// 本地模块引入测试
import Controller from './controller'
import View from './controller/view'
import Template from './controller/template'
import Store from './store'
import { $on } from './utils'
import { DEFAULT_LOCAL_NAME } from './const'
import './assets/styles/main.css'

const template = new Template()

const view = new View(template)
const store = new Store(DEFAULT_LOCAL_NAME)

const controller = new Controller(view, store)

const setView = () => controller.setView()

$on(window, 'load', setView)
