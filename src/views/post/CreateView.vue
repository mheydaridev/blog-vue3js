<template>
  <PostFormComponent
    buttonSubmitText="Save"
    v-bind:isSending="isSending"
    v-on:submitPostDataForm="createPost"
  ></PostFormComponent>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import Swal from 'sweetalert2'

import PostFormComponent from '@/components/post/FormComponent.vue'

const isSending = ref(false)
const router = useRouter()

function createPost(postData) {
  isSending.value = true
  axios
    .post('https://jsonplaceholder.typicode.com/posts', {
      userId: 1,
      title: postData.titleValue,
      body: postData.bodyValue,
    })
    .then(function (response) {
      console.log(response)
      Swal.fire({
        title: 'Good job!',
        text: 'Post created successfully.',
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
