<template>
  <div class="login">Login</div>
  <button @click="loginClick">登录</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    const loginClick = () => {
      store.dispatch('login/clickLogin', {
        name: 'thornsh',
        password: '1234'
      })
    }
    return {
      loginClick
    }
  }
})
</script>

<style scoped></style>
