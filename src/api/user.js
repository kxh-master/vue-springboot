import request from '@/utils/request'

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
