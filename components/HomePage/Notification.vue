<script setup>
import { ref } from 'vue'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import HorizontalMenu from '../HorizontalMenu.vue'

const modules = ref([Navigation, Pagination, Scrollbar, Autoplay])
const selectedIndexMenu = ref(0)
</script>

<template>
  <section class="bg-[#FAFAFA]">
    <article class="py-20 max-w-[1296px] mx-auto grid grid-cols-2">
      <div class="h-full mr-[134px] space-y-10">
        <div class="flex justify-between w-full">
          <h4 class="text-[32px] font-bold">
            서강 GAZETTE
          </h4>
        </div>
        <div class="mt-10">
          <Swiper
            class="h-[309px] w-full overflow-hidden"
            :options="swiperOptions"
            :modules="modules"
            :pagination="{ clickable: true }"
            :autoplay="true"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
          >
            <SwiperSlide>
              <img
                src="https://images.pexels.com/photos/17102321/pexels-photo-17102321/free-photo-of-n-ng-k-ngh-nh-ng-ng-i-dan-ba.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                alt="" class="object-cover w-full h-full"
              >
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="https://images.pexels.com/photos/18512394/pexels-photo-18512394.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                alt="" class="object-cover w-full h-full"
              >
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://images.pexels.com/photos/18512394/pexels-photo-18512394.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                alt="" class="object-cover w-full h-full"
              >
            </SwiperSlide>
          </Swiper>
          <div class="mt-5">
            <strong class="text-xl">뉴스 타이틀뉴스 타이틀뉴스 타이틀뉴스 타</strong>
            <p class="mt-3 text-base font-normal">
              뉴스 내용 노출 최대 2줄 뉴스 내용 노출 최대 2줄뉴스 내용 노출 최대 2줄 2줄뉴스 내용 노출 최대 2줄대 2줄 2줄뉴스 내용 노출 최대 2줄
            </p>
          </div>
        </div>
      </div>
      <div class="space-y-10 ">
        <div class="flex justify-between w-full">
          <h4 class="text-[32px] font-bold">
            공지사항
          </h4>
        </div>
        <div>
          <HorizontalMenu v-model="selectedIndexMenu" :init-data="['Item 1', 'Item 2', 'Item 3', 'Item 4']" />
          <div class="mt-5 space-y-8">
            <div v-for="item in 6" :key="item" class="flex justify-between">
              <p class="text-xl font-medium text-[#212121]">
                [정보통신원]  크롬 브라우저 Saint 포털 이용안내(추가)
              </p>
              <time class="text-base font-medium text-[#757575]">2023.12.31</time>
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<style scoped>

</style>
