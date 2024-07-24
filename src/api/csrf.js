import request from '@/utils/request'

/**
 * 登录
 */
export const postLogin = (data) => {
  return request({
    url: '/csrf/login',
    method: 'POST',
    data
  })
}

/**
 * 修改用户信息
 */
export const postChangeUser = (data) => {
  return request({
    url: '/csrf/csrf_change',
    method: 'POST',
    data
  })
}
/**
 * 安全修改用户信息
 */
export const postTokenChangeUser = (token, data) => {
  return request({
    url: '/csrf/change',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`
    },
    data
  })
}
