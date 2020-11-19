import Vue from 'vue'
import Vuex from 'vuex'

//挂载Vuex
Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
  state:{
    //存放的键值对就是所要管理的状态
    msg: '欢迎使用Yeoman搭建适合vue使用的脚手架工具'
  }
})

export default store