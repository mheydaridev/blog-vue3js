<template>
  <div v-if="isLoading" class="d-flex justify-content-center">
    <div class="spinner-border text-info" role="status"></div>
  </div>
  <div v-else class="row">
    <div class="col-md-6">
      <PostViewCardComponent v-bind:post="post"></PostViewCardComponent>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

import PostViewCardComponent from '@/components/post/view/CardComponent.vue'

const isLoading = ref(true)
const post = ref()
const route = useRoute()

function getPost() {
  axios
    .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
    .then(function (response) {
      post.value = response.data
      isLoading.value = false
    })
    .catch(function (error) {
      console.log(error)
    })
}

getPost()
</script>

<style></style>
