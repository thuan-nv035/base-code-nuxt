<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

const currentRoute = useRoute();
const isSidebar = computed(() => currentRoute.meta.isSidebar ?? false);
const classContainer = ref("container mx-auto");
</script>

<template>
  <footer :class="!isSidebar && classContainer" style="background: #353535">
    <div class="w-full max-w-screen-xl p-4 py-6 mx-auto lg:py-16">
      <div class="flex justify-between text-xs text-gray-50">
        <ul class="flex flex-wrap items-center text-sm font-bold text-gray-50 sm:mb-0">
          <li>
            <a href="#" class="mr-4 hover:underline">대학기구</a>
            <span>|</span>
          </li>

          <li>
            <a href="#" class="mx-4 hover:underline">대학 정보 공개</a>
            <span>|</span>
          </li>
          <li>
            <a href="#" class="mx-4 hover:underline">공익신고</a>
            <span>|</span>
          </li>
          <li>
            <a href="#" class="mx-4 hover:underline">개인정보처리방침</a>
            <span>|</span>
          </li>
          <li>
            <a href="#" class="mx-4 hover:underline">청탁금지법 통합검색</a>
            <span>|</span>
          </li>
          <li>
            <a href="#" class="mx-4 hover:underline">이용불편신고</a>
            <span>|</span>
          </li>
          <li>
            <a href="#" class="mx-4 hover:underline">원격 지원</a>
            <span>|</span>
          </li>
          <li>
            <a href="#" class="mx-4 hover:underline">발전기금</a>
            <span>|</span>
          </li>
          <li>
            <a href="#" class="ml-4 hover:underline">로그인</a>
          </li>
        </ul>
      </div>
      <hr class="mt-[51px] mb-5 border-[#ffffff80] sm:mx-auto dark:border-[#ffffff80]" />

      <div class="flex-row justify-between">
        <div class="flex-row">
          <div class="flex mb-5 space-x-5 sm:justify-end sm:mt-0">
            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <img src="@/assets/img/fotterImg/Facebook.png" />
            </a>
            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <img src="@/assets/img/fotterImg/Blog.png" />
            </a>
            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <img src="@/assets/img/fotterImg/Instagram.png" />
            </a>
            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <img src="@/assets/img/fotterImg/YouTube.png" />
            </a>
          </div>
          <!--          <div class="flex text-xs sm:justify-end text-gray-50"> -->
          <!--            <a href="/" class="flex ml-1 mr-1"> -->
          <!--              개인정보처리방침 -->
          <!--            </a> -->
          <!--            | -->
          <!--            <a href="/" class="flex ml-1 mr-1"> -->
          <!--              청탁금지법 통합검색 -->
          <!--            </a> -->
          <!--            | -->
          <!--            <a href="/" class="flex ml-1 mr-1"> -->
          <!--              이용불편신고 -->
          <!--            </a> -->
          <!--            | -->
          <!--            <a href="/" class="flex ml-1 mr-1"> -->
          <!--              원격지원 -->
          <!--            </a> -->
          <!--          </div> -->
        </div>
        <div class="flex justify-start gap-x-[34px]">
          <a href="/" class="flex items-center">
            <div class="logo-img">
              <img src="../../../assets/img/mainKoLogo.png" alt="" />
            </div>
          </a>
          <span class="text-xs text-gray-500 sm:text-left dark:text-gray-50">
            04107 서울특별시 마포구 백범로 35 (신수동) 서강대학교 | 02-705-8114
            <br />
            COPYRIGHT© SOGANG UNIVERSITY. ALL RIGHTS RESERVED.
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>
