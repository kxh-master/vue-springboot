import {list,add} from '@/api/user' //引入登录 api 接口
import { getToken, setToken, removeToken } from '@/utils/auth'
import router from '@/router'

const state = {
  token: getToken(),
  name: '',
  avatar: '',
  introduction: '',
  roles: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions ={
  list({commit}) {
    return new Promise((resolve, reject) => {
      list().then(response => {
        const { data } = response

        if (!data) {
          reject('Verification failed, please Login again.')
        }
        commit('SET_TOKEN', data.token)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  add({commit},User) {
    const { username, password } = User
    return new Promise((resolve, reject) => {
      add(username,password).then(response => {
        const { data } = response

        if (!data) {
          reject('Verification failed, please Login again.')
        }
        commit('SET_TOKEN', data.token)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}