import Vue from 'vue' //引入 Vue
import Vuex from 'vuex' //引入 Vuex
import login from './modules/login' //引入 user module

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    login //使用 login.js 中的 action
  }
})

export default store