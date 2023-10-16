<script setup>
defineProps({
  message: String,
})
</script>

<template>
  <div class="py-4 text-center text-danger">
    {{ message }}
  </div>
</template>