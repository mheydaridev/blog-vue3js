<template>
  <div v-if="isLoading" class="d-flex justify-content-center">
    <div class="spinner-border text-info" role="status"></div>
  </div>
  <div v-else>
    <RouterLink class="btn btn-dark mb-3" v-bind:to="{ name: 'PostCreateLink' }">
      Create Post
    </RouterLink>
    <div class="row g-3">
      <div class="col-md-6" v-for="post in posts" v-bind:key="post.id">
        <PostCardComponent v-bind:post="post"></PostCardComponent>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

import PostCardComponent from '@/components/post/index/CardComponent.vue'

const isLoading = ref(true)
const posts = ref([])

function getPosts() {
  axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(function (response) {
      posts.value = response.data
      isLoading.value = false
    })
    .catch(function (error) {
      console.log(error)
    })
}

getPosts()
</script>

<style></style>
