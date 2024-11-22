<template>
  <div v-if="isLoading" class="d-flex justify-content-center">
    <div class="spinner-border text-info" role="status"></div>
  </div>
  <div v-else class="row">
    <div class="col-md-6">
      <UserCardComponent v-bind:user="user"></UserCardComponent>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import axios from 'axios'

import UserCardComponent from '@/components/user/CardComponent.vue'

const route = useRoute()
const isLoading = ref(true)
const user = ref({})

function getUser() {
  axios
    .get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
    .then(function (response) {
      user.value = response.data
      isLoading.value = false
    })
    .catch(function (error) {
      console.log(error)
    })
}

getUser()
</script>

<style></style>
