import request from '@/utils/request'

export function login(userName, passWord) { //登录接口
  return request({ //使用封装好的 axios 进行网络请求
    url: '/login',
    method: 'post',
    data: { //提交的数据
      userName,
      passWord
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/logout',
    method: 'post'
  })
}

export function list() {
  return request({
    url: '/user/list',
    method: 'post',
    params: {  }
  })
}

export function add(userName,passWord) {
  return request({
    url: '/user/add',
    method: 'post',
    params: { 
      userName,
      passWord
     }
  })
}
