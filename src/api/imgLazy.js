import request from '@/utils/request'

export const imgLazy = () => {
  return request({
    url: '/img-lazy'
  })
}
