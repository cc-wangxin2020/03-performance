<template>
  <div class="container">
    <div class="title">提交评论</div>
    <div class="comment-box">
      <textarea
        class="comment"
        cols="30"
        rows="10"
        v-model="content"
      ></textarea>
      <button class="btn-comment" @click="toComment">提交</button>
    </div>

    <div class="title">评论列表</div>
    <div class="item" v-for="item in commentList" :key="item.id">
      <div class="author">{{ item.author }}</div>
      <div
        class="content"
        v-html="
          DOMPurify.sanitize(item.content, {
            // 禁止 style 标签
            FORBID_TAGS: ['style'],
            // 禁止 style 属性
            FORBID_ATTR: ['style']
          })
        "
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getCommentList, pushComment } from '@/api/xss'
import DOMPurify from 'dompurify'

// 数据获取
const commentList = ref([])
const loadCommentList = async () => {
  const { list } = await getCommentList()
  commentList.value = list
}
loadCommentList()

// 评论提交
const content = ref('')
const toComment = async () => {
  const { data } = await pushComment(content.value)
  commentList.value.unshift(data)
}
</script>

<style lang="scss" scoped>
.container {
  width: 50%;
  border-right: 1px solid #eee;
  padding: 20px 38px;
  .title {
    font-weight: bold;
    font-size: 28px;
    margin: 12px 0;
  }

  .item {
    padding: 20px 0px;
    border-bottom: 1px solid #eee;
    .author {
      font-size: 16px;
      color: #da4f4f;
      margin-bottom: 12px;
    }

    .content {
      font-size: 14px;
      line-height: 32px;
      color: #4c4c4c;
    }
  }

  .comment-box {
    .comment {
      font-size: 16px;
    }
    .btn-comment {
      display: block;
      margin-bottom: 60px;
      width: 200px;
      height: 48px;
      font-size: 14px;
    }
  }
}
</style>
