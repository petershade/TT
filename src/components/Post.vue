<script setup lang="ts">
import type { Post } from '~/types'

const props = defineProps<{
  post: Post
}>()
</script>

<template>
  <li class="post">
    <h3 class="post__title">
      {{ props.post.title }}
    </h3>
    <h4 class="post__body">
      {{ props.post.body }}
    </h4>
  </li>
</template>

<style lang="scss">
.post {
  &__title {
    font-size: 24px;
    color: #384758;
    font-weight: 500;
    margin-bottom: 15px;
    margin-top: 30px;
  }
  &__body {
    font-size: 20px;
    font-weight: 400;
    color: #606F81;
    line-height: 1.4;
  }
}
</style>
