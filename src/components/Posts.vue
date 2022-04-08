<script setup lang="ts">
import type { PostsList } from '~/types'

const props = defineProps<{
  posts: PostsList
}>()

const filteredPosts = computed(() => {
  return props.posts.slice(-3)
})
</script>

<template>
  <div>
    <ul>
      <Post
        v-for="post of filteredPosts"
        :key="post.id"
        :post="post"
      />
    </ul>
  </div>
</template>
