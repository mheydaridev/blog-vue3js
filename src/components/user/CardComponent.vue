<template>
  <div class="card">
    <RouterLink
      class="card-header text-info text-decoration-none"
      v-bind:to="{ name: 'UserViewLink', params: { id: user.id } }"
    >
      {{ user.name }}
    </RouterLink>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        Username:
        {{ user.username }}
      </li>
      <li class="list-group-item">
        Email:
        {{ user.email }}
      </li>
      <li class="list-group-item">
        Phone:
        {{ user.phone }}
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  user: Object,
})
</script>

<style scoped></style>
