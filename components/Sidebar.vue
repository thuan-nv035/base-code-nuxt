<script setup lang="ts">
import { ref } from "vue";
import { useSidebar } from "../composables/useSidebar";
import { navLink } from "@/hooks/navLink.js";

const { isOpen } = useSidebar();
const activeClass = ref("bg-red-300 bg-opacity-50 text-gray-50 border-gray-100");
const inactiveClass = ref(
  "border-gray-900 text-gray-50 hover:bg-gray-50 hover:bg-opacity-25 hover:text-gray-100"
);
</script>

<template>
  <div class="flex">
    <div
      :class="isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
      class="fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform lg:translate-x-0 lg:static lg:inset-0"
      style="background: #7d0000"
    >
      <div class="flex items-center justify-center mt-12">
        <div class="flex flex-row items-center">
          <div>
            <a href="/">
              <div class="logo-img">
                <img src="../assets/img/mainKoLogo.png" alt="" />
              </div>
            </a>
          </div>
          <div>
            <button
              :class="isOpen ? 'block' : 'hidden'"
              type="button"
              class="text-gray-400 rounded-lg text-sm p-1.5"
              @click="isOpen = false"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="sr-only">Close menu</span>
            </button>
          </div>
        </div>
      </div>

      <nav class="mt-12">
        <nuxt-link
          v-for="(link, iLink) in navLink"
          :key="iLink"
          class="flex items-center px-6 py-2 mt-4 duration-200"
          :class="[$route.name === 'Dashboard' ? activeClass : inactiveClass]"
          :to="link.to"
        >
          <span class="mx-4 text-lg">{{ link.title }}</span>
        </nuxt-link>
        <div style="margin-top: 40%">
          <nuxt-link
            class="flex items-center px-6 py-2 mt-4 duration-200"
            :class="[$route.name === 'Blank' ? activeClass : inactiveClass]"
            to="/ko/blank"
          >
            <span class="mx-4">검색</span>
          </nuxt-link>
          <nuxt-link
            class="flex items-center px-6 py-2 mt-4 duration-200"
            :class="[$route.name === 'Blank' ? activeClass : inactiveClass]"
            to="/ko/blank"
          >
            <span class="mx-4">Saint</span>
          </nuxt-link>
          <nuxt-link
            class="flex items-center px-6 py-2 mt-4 duration-200"
            :class="[$route.name === 'Blank' ? activeClass : inactiveClass]"
            to="/ko/blank"
          >
            <span class="mx-4">청년광장</span>
          </nuxt-link>
          <nuxt-link
            class="flex items-center px-6 py-2 mt-4 duration-200"
            :class="[$route.name === 'Blank' ? activeClass : inactiveClass]"
            to="/ko/blank"
          >
            <span class="mx-4">사이트 맵</span>
          </nuxt-link>
          <nuxt-link
            class="flex items-center px-6 py-2 mt-4 duration-200"
            :class="[$route.name === 'Blank' ? activeClass : inactiveClass]"
            to="/ko/blank"
          >
            <span class="mx-4">ENG</span>
          </nuxt-link>
        </div>
      </nav>
    </div>
  </div>
</template>
