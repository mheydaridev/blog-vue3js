<template>
  <div class="d-flex justify-content-center align-items-center vh-100">
    <div class="text-center">
      <h1 class="display-1 fw-bold">404</h1>
      <p class="fs-3"><span class="text-danger">Opps!</span> Page not found.</p>
      <p class="lead">The page you’re looking for doesn’t exist.</p>
      <RouterLink class="btn btn-dark" v-bind:to="{ name: 'HomeLink' }">Go To Home</RouterLink>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
