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
  </div>
</template>

<script setup>
defineProps({
  post: Object,
})
</script>

<style></style>
