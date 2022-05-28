import request from '@/utils/request'

export function login(data) {
  return request({
    // url: '/vue-admin-template/user/login',
    url: '/admin/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    // url: '/vue-admin-template/user/info',
    url: '/admin/login/info',
    method: 'POST',
    data: { token }
  })
}

export function logout() {
  return request({
    url: '/admin/login/logout',
    method: 'post'
  })
}
