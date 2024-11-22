<template>
  <div v-if="isLoading" class="d-flex justify-content-center">
    <div class="spinner-border text-info" role="status"></div>
  </div>
  <div v-else class="row g-3">
    <div class="col-md-4" v-for="user in users" v-bind:key="user.id">
      <UserCardComponent v-bind:user="user"></UserCardComponent>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

import UserCardComponent from '@/components/user/CardComponent.vue'

const isLoading = ref(true)
const users = ref([])

function getUsers() {
  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
      users.value = response.data
      isLoading.value = false
    })
    .catch(function (error) {
      console.log(error)
    })
}

getUsers()
</script>

<style></style>
