<script setup lang="ts">
import Sidebar from "../components/Sidebar.vue";
</script>

<template>
  <div class="flex h-screen bg-gray-200 font-roboto">
    <Sidebar />
    <div class="flex flex-col flex-1 overflow-hidden">
      <main
        class="flex-1 bg-white overflow-x-hidden overflow-y-auto"
      >
        <div id="content-top" class="w-full">
          <NuxtPage />
        </div>
        <Footer />
      </main>
    </div>
  </div>
</template>
