<template>
  <div>
    <Header />
    <main   class="flex-1 bg-white overflow-x-hidden overflow-y-auto">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
</script>
