<script setup>
import { ref } from 'vue'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules'

const modules = ref([Navigation, Pagination, Scrollbar, Autoplay])
</script>

<template>
  <section class="py-20 max-w-[1296px] mx-auto grid grid-cols-4 gap-x-6">
    <div>
      <div class="flex justify-between w-full">
        <h4 class="text-[32px] font-bold uppercase">
          서강 Instagram
        </h4>
      </div>
      <Swiper
        class="h-[240px] w-full overflow-hidden mt-10"
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
    </div>
    <div>
      <div class="flex justify-between w-full">
        <h4 class="text-[32px] font-bold uppercase">
          서강 Blog
        </h4>
      </div>
      <Swiper
        class="h-[240px] w-full overflow-hidden mt-10"
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
    </div>
    <div>
      <div class="flex justify-between w-full">
        <h4 class="text-[32px] font-bold uppercase">
          서강 Youtube
        </h4>
      </div>
      <Swiper
        class="h-[240px] w-full overflow-hidden mt-10"
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
    </div>
    <div>
      <div class="flex justify-between w-full">
        <h4 class="text-[32px] font-bold">
          캠퍼스 투어
        </h4>
      </div>
      <figure class="overflow-hidden h-[240px] mt-10">
        <img src="https://images.pexels.com/photos/18512394/pexels-photo-18512394.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="">
      </figure>
    </div>
  </section>
</template>

<style scoped>

</style>
