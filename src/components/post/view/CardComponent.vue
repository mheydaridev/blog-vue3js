<template>
  <div class="card">
    <RouterLink
      class="card-header text-info text-decoration-none"
      v-bind:to="{ name: 'PostViewLink', params: { id: post.id } }"
    >
      {{ post.title }}
    </RouterLink>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">{{ post.body }}</li>
    </ul>
    <div class="card-footer">
      <Button class="btn btn-danger me-2" v-on:click="confirmDeletePost">Delete</Button>
      <RouterLink
        class="btn btn-dark"
        v-bind:to="{ name: 'PostUpdateLink', params: { id: post.id } }"
      >
        Edit
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import Swal from 'sweetalert2'
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'

defineProps({
  post: Object,
})

function confirmDeletePost() {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
  }).then((result) => {
    if (result.isConfirmed) {
      deletePost()
    }
  })
}

const route = useRoute()
const router = useRouter()

function deletePost() {
  axios
    .delete(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
    .then(function (response) {
      if (response.status === 200) {
        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
        })

        router.push({ name: 'PostIndexLink' })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
      }
    })
    .catch(function (error) {
      console.error(error)
    })
}
</script>

<style></style>
