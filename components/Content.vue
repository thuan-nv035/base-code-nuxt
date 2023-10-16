<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import Footer from './Footer.vue'

const currentRoute = useRoute()
const isSidebar = computed(() => currentRoute.meta.isSidebar ?? false)
</script>

<template>
  <main class="flex-1 bg-white" :class="isSidebar ? 'overflow-x-hidden overflow-y-auto' : ''">
    <div id="content-top" class="w-full">
      <NuxtPage />
    </div>
    <Footer />
  </main>
</template>
