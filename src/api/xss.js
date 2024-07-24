import request from '@/utils/request'

/**
 * 获取评论列表
 */
export const getCommentList = () => {
  return request({
    url: '/xss/comment/list'
  })
}

/**
 * 提交评论
 */
export const pushComment = (content) => {
  return request({
    url: 'xss/comment',
    method: 'post',
    data: {
      content
    }
  })
}
