<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" v-bind:to="{ name: 'HomeLink' }"> VidaVerse </RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link active" v-bind:to="{ name: 'HomeLink' }"> Home </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link active" v-bind:to="{ name: 'UserIndexLink' }">
              Users
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link active" v-bind:to="{ name: 'PostIndexLink' }">
              Posts
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup></script>

<style>
.router-link-active {
  border-bottom: 2px solid rgba(0, 0, 0, 0.9);
}
</style>
