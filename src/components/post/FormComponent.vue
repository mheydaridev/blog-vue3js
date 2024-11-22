<template>
  <div class="row">
    <div class="col-md-6">
      <form>
        <div class="mb-3">
          <label for="post-title" class="form-label">Title</label>
          <input
            type="text"
            class="form-control"
            id="post-title"
            v-model.lazy.trim="postForm.data.titleValue"
          />
          <div class="form-text text-danger">{{ postForm.error.titleError }}</div>
        </div>
        <div class="mb-3">
          <label for="post-body" class="form-label">Body</label>
          <textarea
            id="post-body"
            class="form-control"
            rows="10"
            v-model.lazy.trim="postForm.data.bodyValue"
          ></textarea>
          <div class="form-text text-danger">{{ postForm.error.bodyError }}</div>
        </div>
        <button
          type="submit"
          class="btn btn-success"
          v-bind:disabled="isSending"
          v-on:click.prevent="validatePostDataForm()"
        >
          <div
            v-if="isSending"
            class="spinner-border spinner-border-sm text-ligth me-1"
            role="status"
          ></div>
          {{ buttonSubmitText }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const props = defineProps({
  buttonSubmitText: String,
  isSending: Object,
  post: Object,
})

const postForm = reactive({
  data: {
    titleValue: '',
    bodyValue: '',
  },
  error: {
    titleError: '',
    bodyError: '',
  },
})

function loadFormData() {
  if (props.post !== undefined) {
    postForm.data.titleValue = props.post.title
    postForm.data.bodyValue = props.post.body
  }
}

loadFormData()

const emits = defineEmits('submitPostDataForm')

function validatePostDataForm() {
  if (postForm.data.titleValue === '') {
    postForm.error.titleError = 'Title is required!'
  } else {
    postForm.error.titleError = ''
  }

  if (postForm.data.bodyValue === '') {
    postForm.error.bodyError = 'Body is required!'
  } else {
    postForm.error.bodyError = ''
  }

  if (postForm.data.titleValue !== '' && postForm.data.bodyValue !== '') {
    emits('submitPostDataForm', postForm.data)
  }
}
</script>

<style></style>
