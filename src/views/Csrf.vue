<template>
  <div>
    <div v-if="!user">
      <input type="text" v-model="loginData.username" />
      <input type="password" v-model="loginData.password" />

      <button @click="onLogin">登录</button>
    </div>

    <div v-else>
      <div>
        <img class="avatar" :src="user.avatar" alt="" srcset="" />
        <div>用户名： {{ user.username }}</div>
        <div>个人简介： {{ user.userDesc }}</div>

        <button @click="changeUserInfo">修改用户信息</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { postLogin, postTokenChangeUser } from '@/api/csrf'
import { ref } from 'vue'

const loginData = ref({
  username: 'admin',
  password: '123456'
})

const user = ref(null)

const onLogin = async () => {
  const { data } = await postLogin(loginData.value)
  user.value = data
}

const changeUserInfo = async () => {
  await postTokenChangeUser(user.value.token, {
    ...user.value,
    username: 'admin'
  })
}
</script>

<style lang="scss" scoped>
.avatar {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
</style>
