//index.js
//获取应用实例
import { IMyApp } from '../../app'

const app = getApp<IMyApp>()

Page({
  data: {
  },
  onLoad() {
    console.log(app)
  },
})
