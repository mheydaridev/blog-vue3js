<template>
  <div v-if="isLoading" class="d-flex justify-content-center">
    <div class="spinner-border text-info" role="status"></div>
  </div>
  <div v-else>
    <PostFormComponent
      buttonSubmitText="Update"
      v-bind:isSending="isSending"
      v-bind:post="post"
      v-on:submitPostDataForm="createPost"
    ></PostFormComponent>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import axios from 'axios'
import Swal from 'sweetalert2'

import PostFormComponent from '@/components/post/FormComponent.vue'

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

const isSending = ref(false)
const router = useRouter()

function createPost(postData) {
  isSending.value = true
  axios
    .put(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`, {
      userId: 1,
      title: postData.titleValue,
      body: postData.bodyValue,
    })
    .then(function (response) {
      console.log(response)
      Swal.fire({
        title: 'Good job!',
        text: 'Post updated successfully.',
        icon: 'success',
        confirmButtonText: 'ok',
      })

      router.push({ name: 'PostIndexLink' })
    })
    .catch(function (error) {
      console.log(error)
    })
  isSending.value = false
}
</script>

<style></style>
