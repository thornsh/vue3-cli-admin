<template>
  <div>test</div>
  <input type="text" @input="inputFn" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  // props: {
  //   testValue: {
  //     type: String
  //   }
  // },
  props: ['moduleValue'],
  emits: ['update:modelValue'],
  setup(_props, context) {
    const inputFn = (e: any) => {
      context.emit('update:modelValue', e.target.value)
    }
    return {
      inputFn
    }
  }
})
</script>

<style scoped></style>
