<script setup>
import { navLink } from "@/hooks/navLink.js";
</script>

<template>
  <header class="bg-[#7D0000]">
    <div class="container mx-auto">
      <div class="flex justify-between py-[15px]">
        <ul class="flex justify-start gap-x-4 text-base font-medium text-[#ffffffb3]">
          <li class="text-red-500">Saint</li>
          <li>청년광장</li>
          <li>사이트 맵</li>
        </ul>
        <div class="flex justify-start gap-x-10">
          <button class="text-[#ffffff] flex justify-start items-center gap-x-6">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.4375 14.375C11.7167 14.375 14.375 11.7167 14.375 8.4375C14.375 5.15831 11.7167 2.5 8.4375 2.5C5.15831 2.5 2.5 5.15831 2.5 8.4375C2.5 11.7167 5.15831 14.375 8.4375 14.375Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.125 13.125L17.5 17.5"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>검색 </span>
          </button>
          <div class="flex gap-x-5">
            <button class="text-sm font-bold text-white">KOR</button>
            <button class="text-sm font-bold text-[#ffffff66]">ENG</button>
          </div>
        </div>
      </div>
      <nav class="flex items-center py-6 gap-x-[101px]">
        <figure class="w-[160px] h-[35px] overflow-hidden">
          <img class="w-full h-full" src="../assets/img/mainKoLogo.png" alt="" />
        </figure>
        <div class="flex justify-start gap-x-10">
          <nuxt-link
            v-for="(link, iLink) in navLink"
            :key="iLink"
            class="text-white"
            :to="link.to"
          >
            <span>{{ link.title }}</span>
          </nuxt-link>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped></style>
