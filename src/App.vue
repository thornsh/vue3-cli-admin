<template>
  <div class="app">
    {{ testValue }}
    <test-page v-model="testValue"></test-page>
    <router-link to="/login">登录</router-link>
    <router-link to="main">首页</router-link>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import testPage from './views/test-page/test-page.vue'

export default defineComponent({
  name: 'App',
  components: {
    testPage
  },
  setup() {
    const testValue = ref('testValue')

    return {
      testValue
    }
  }
})
</script>

<style lang="less"></style>
