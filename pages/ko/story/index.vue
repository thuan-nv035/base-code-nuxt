<script setup>
definePageMeta({
isSidebar: false,
layout: 'custom'
});
import { ref } from 'vue'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules'

const elActive = ref(1)
const tabs = ref([
  { id: 1, label: '일반공지', content: '[Notice] 2023 Fall Semester New', time: '2023.12.31' },
  { id: 2, label: '학사공지', content: 'Nội dung tab 2', time: '2023.12.31' },
  { id: 3, label: '장학공지', content: 'Nội dung tab 3', time: '2023.12.31' },
  { id: 4, label: '행사특강', content: 'Nội dung tab 4', time: '2023.12.31' },
])

const modules = ref([Navigation, Pagination, Scrollbar, Autoplay])

function activeTab(tab) {
  elActive.value = tab
}

function onSwiper(swiper) {
  console.log(swiper)
}

function onSlideChange() {
  console.log('slide change')
}
</script>

<template>
  <div class="container ">
    <h2 class="text-center text-[#000] my-[60px] text-[32px] font-[700] leading-[140%]">
      서강 소식
    </h2>

    <div>
      <div class="text-[#000] flex justify-between items-center font-[700] leading-[40px] text-[32px]">
        <div>
          서강 NEWS
        </div>
        <div class="cursor-pointer">
          <img src="@/assets/img/story/icon-plus.svg" alt="" class="object-cover w-full h-full">
        </div>
      </div>
      <div class="grid md:grid-cols-12 mt-[40px] gap-x-[24px] mb-[140px]">
        <div class="col-span-7">
          <div class="relative w-full h-full overflow-hidden">
            <img src="@/assets/img/story/img-new-main.svg" alt="" class="object-cover w-full h-full">

            <div class="absolute bottom-0 left-0 right-0 px-[28px]">
              <div class="text-[#FFF] font-[700] text-[24px]  leading-[140%]  pb-[32px]">
                뉴스 타이틀뉴스 타이틀뉴스 타이틀뉴스 타뉴스 타이틀뉴스 타이틀뉴스...
              </div>
              <div class="text-[#FFF] font-[400] text-[16px] leading-[140%] pb-[52px]">
                서강 가젯 간련 상세 내용 노출란입니다 서강 가젯 간련 상세 내용 노출란입니다서강 가젯 간련 상세 내용 노출란입니다서강 가젯 간련 상세 내용 노출란입니다서강 가젯 간련 상세 내용
                노출란입니다젯 간련 상세 내용 노...
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-5 space-y-[25px] ">
          <div v-for="(item, index) in 4" :key="index">
            <div class="flex justify-between  items-center gap-x-[20px]   pb-[25px] border-b border-b-[#EFEFEF]">
              <div>
                <div class="text-[#000] font-[700] text-[16px] leading-[140%]  ">
                  뉴스 타이틀뉴스 타이틀뉴스스 타이틀뉴스 타이틀뉴스 타이틀뉴..
                </div>
                <div class="text-[#000] font-[400] mt-[12px] text-[14px] leading-[140%]">
                  뉴스 내용 노출 최대 2줄 뉴스 내용 노 최대 뉴스 내용 노출 최대 2줄 2줄...
                </div>
              </div>
              <div class="w-[97px] h-[63px]  ">
                <img
                  src="https://images.pexels.com/photos/3951353/pexels-photo-3951353.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="" class="object-cover w-full h-full "
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid md:grid-cols-12 mb-[140px]">
        <div class="col-span-3 ">
          <div class="text-[#000] flex justify-between items-center mb-[40px] font-[700] leading-[40px] text-[32px]">
            <div>
              서강 People
            </div>
            <div class="relative cursor-pointer">
              <img src="@/assets/img/story/icon-plus.svg" alt="" class="object-cover w-full h-full">
            </div>
          </div>

          <div>
            <Swiper
              class=" h-[520px]  overflow-hidden relative"
              :options="swiperOptions"
              :modules="modules"
              :pagination="{ clickable: true }"
              :autoplay="true"
              @swiper="onSwiper"
              @slideChange="onSlideChange"
            >
              <SwiperSlide>
                <img
                  src="https://images.pexels.com/photos/18078282/pexels-photo-18078282/free-photo-of-dan-ong-ng-i-phong-chan-dung.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                  alt="" class="object-cover w-full h-full"
                >
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://images.pexels.com/photos/18550231/pexels-photo-18550231.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                  alt="" class="object-cover w-full h-full"
                >
              </SwiperSlide>

              <div class="absolute text-[#fff] bottom-0 pl-[24px] z-[999]  left-0 pb-[24px]">
                <div class="font-[700] text-[28px] leading-[140%]">
                  <div>
                    최주영 동문
                  </div>
                  <div class="my-[8px]">
                    (생명과학과 13)
                  </div>
                </div>
                <div class="flex justify-start items-center font-[400] text-[20px] leading-[140%]">
                  자세히 보기 <img src="@/assets/img/story/icon-next.svg" alt="" class="pl-[8px] cursor-pointer">
                </div>
              </div>
            </Swiper>
          </div>

          <div>
            <div class="text-[#353535] font-[500] mt-[20px] mb-[4px] text-[16px] leading-[140%]">
              학부생 단독 연구로 국제저명학술지 <br>
              iScience에 논문 게재
            </div>
            <div class="text-[#BDBDBD] font-[400] leading-[140%]">
              2023.08
            </div>
          </div>
        </div>
        <div class="col-span-9 pl-[123px]">
          <div class="text-[#000] flex justify-between items-center mb-[40px] font-[700] leading-[40px] text-[32px]">
            <div>
              연구 성과
            </div>
            <div class="cursor-pointer">
              <img src="@/assets/img/story/icon-plus.svg" alt="" class="object-cover w-full h-full">
            </div>
          </div>

          <div class="grid grid-cols-2 gap-[24px]   ">
            <div v-for="(item, index) in 4" :key="index" class="col-span-1">
              <div class="h-[188px] w-full overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/10464798/pexels-photo-10464798.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="" class="object-cover w-full h-full"
                >
              </div>
              <div class="mt-[20px] mb-[12px] text-[#000] font-[700] text-[20px] leading-[140%]">
                뉴스 타이틀뉴스 타이틀뉴스 타이틀뉴스 타
              </div>
              <div class="text-[#353535] font-[400] text-[16px] leading-[140%]">
                뉴스 내용 노출 최대 2줄 뉴스 내용 노출 최대 2줄뉴스 내용 노출 최대 2줄 2줄뉴스 내용 노출 최대 2줄대 2줄 2...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-[140px]">
      <div class="text-[#000] mb-[40px] flex justify-between items-center font-[700] leading-[40px] text-[32px]">
        <div>
          서강 GAZETTE
        </div>
        <div class="cursor-pointer">
          <img src="@/assets/img/story/icon-plus.svg" alt="" class="object-cover w-full h-full">
        </div>
      </div>

      <div class="md:grid-cols-2 grid gap-[24px]">
        <div class="col-span-1">
          <div class="w-full h-[309px] overflow-hidden">
            <img
              src="https://images.pexels.com/photos/4308164/pexels-photo-4308164.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="" class="object-cover w-full h-full"
            >
          </div>
          <div class="text-[#000] font-[700] text-[20px] leading-[140%] mt-[10px] mb-[12px]">
            뉴스 타이틀뉴스 타이틀뉴스 타이틀뉴스 타
          </div>
          <div class="text-[#353535] font-[400] text-[16px] leading-[140%]">
            뉴스 내용 노출 최대 2줄 뉴스 내용 노출 최대 2줄뉴스 내용 노출 최대 2줄 2줄뉴스 내용 노출 최대 2줄대 2줄 2줄뉴스 내용 노출 최대 2줄
          </div>
        </div>

        <div class="col-span-1">
          <div class="w-full h-[309px] overflow-hidden">
            <img
              src="https://images.pexels.com/photos/4308164/pexels-photo-4308164.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="" class="object-cover w-full h-full"
            >
          </div>
          <div class="text-[#000] font-[700] text-[20px] leading-[140%] mt-[10px] mb-[12px]">
            뉴스 타이틀뉴스 타이틀뉴스 타이틀뉴스 타
          </div>
          <div class="text-[#353535] font-[400] text-[16px] leading-[140%]">
            뉴스 내용 노출 최대 2줄 뉴스 내용 노출 최대 2줄뉴스 내용 노출 최대 2줄 2줄뉴스 내용 노출 최대 2줄대 2줄 2줄뉴스 내용 노출 최대 2줄
          </div>
        </div>
      </div>
    </div>

    <div class="mb-[140px]">
      <div class="text-[#000] mb-[40px] flex justify-between items-center font-[700] leading-[40px] text-[32px]">
        홍보 책자
      </div>

      <div class="md:grid-cols-4 grid gap-x-[24px]">
        <div v-for="(item, index) in 4" :key="index" class="col-span-1 ">
          <div class="h-[564px] bg-[#FFF] custom-sd">
            <div class="w-full h-[404px]  relative">
              <img
                src="https://images.pexels.com/photos/4959341/pexels-photo-4959341.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                alt="" class="object-cover w-full h-full"
              >
              <div class="absolute bottom-0 left-0 translate-y-1/2">
                <div class="w-[80px] h-[80px] custom-sd-red bg-[#7D0000]">
                  <div
                    class="flex text-[#FFF] font-[700] text-[16px] leading-[140%]  justify-center h-full items-center flex-col"
                  >
                    <div class="mb-[10px]">
                      Sep
                    </div>
                    <div>
                      9월
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="pl-[20px]">
              <div class="pt-[68px] pb-[20px]  text-[#7D0000] text-[16px] font-[700] leading-[140%]">
                2020 Sogang Anthology No. 3
              </div>
              <div class="font-[700] text-[16px]  leading-[140%] text-[#000]">
                서강 홍보 브로슈어
              </div>
            </div>
          </div>

          <div class="text-[#000] font-[700] leading-[40px] text-[24px] my-[20px]">
            홍보 브로슈어
          </div>

          <div>
            <button
              class="w-[160px]  text-[#000] font-[700] text-[16px] leading-[140%] flex justify-center items-center h-[64px] bg-[#fff] border border-[#D7D7D7]"
            >
              바로가기 <img src="@/assets/img/story/icon-button.svg" alt="" class="ml-[8px]">
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="grid md:grid-cols-3 gap-x-[24px] mb-[140px]">
      <div class="col-span-1">
        <div class="text-[#000] mb-[40px] flex justify-between items-center font-[700] leading-[40px] text-[32px]">
          <div>
            서강 Instagram
          </div>
          <div class="cursor-pointer">
            <img src="@/assets/img/story/icon-plus.svg" alt="" class="object-cover w-full h-full">
          </div>
        </div>

        <Swiper
          class="h-[240px] w-full overflow-hidden"
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
        <div class="text-[#000] mt-[20px] mb-[12px] font-[700] text-[20px] leading-[140%]">
          News Title
        </div>

        <div class="font-[400] text-[16px] leading-[140%] text-[16px] text-[#353535]">
          Revealing news details Revealing news detailsRevealing news detailsRevealing news detailsRevealing news
          detailsRevealing news details
        </div>
      </div>
      <div class="col-span-1">
        <div class="text-[#000] mb-[40px] flex justify-between items-center font-[700] leading-[40px] text-[32px]">
          <div>
            서강 Blog
          </div>
          <div class="cursor-pointer">
            <img src="@/assets/img/story/icon-plus.svg" alt="" class="object-cover w-full h-full">
          </div>
        </div>

        <Swiper
          class="h-[240px] w-full overflow-hidden"
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
        <div class="text-[#000] mt-[20px] mb-[12px] font-[700] text-[20px] leading-[140%]">
          News Title
        </div>

        <div class="font-[400] text-[16px] leading-[140%] text-[16px] text-[#353535]">
          Revealing news details Revealing news detailsRevealing news detailsRevealing news detailsRevealing news
          detailsRevealing news details
        </div>
      </div>
      <div class="col-span-1">
        <div class="text-[#000] mb-[40px] flex justify-between items-center font-[700] leading-[40px] text-[32px]">
          <div>
            서강 Youtube
          </div>
          <div class="cursor-pointer">
            <img src="@/assets/img/story/icon-plus.svg" alt="" class="object-cover w-full h-full">
          </div>
        </div>

        <Swiper
          class="h-[240px] w-full overflow-hidden"
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
        <div class="text-[#000] mt-[20px] mb-[12px] font-[700] text-[20px] leading-[140%]">
          News Title
        </div>

        <div class="font-[400] text-[16px] leading-[140%] text-[16px] text-[#353535]">
          Revealing news details Revealing news detailsRevealing news detailsRevealing news detailsRevealing news
          detailsRevealing news details
        </div>
      </div>
    </div>

    <div class="grid md:grid-cols-2 gap-x-[137px] mb-[107px]">
      <div class="col-span-1">
        <div class="bg-[#B30000] h-[150px] relative">
          <div class="flex  pl-[32px] justify-start items-center h-full">
            <div>
              <p class="mb-[8px] text-[#fff] text-[28px] font-[700] ">
                보도자료
              </p> <img src="@/assets/img/story/icon-arrow-right.svg" alt="">
            </div>
          </div>

          <div class="absolute bottom-0 right-0">
            <img src="@/assets/img/story/vector-deco.svg" alt="">
          </div>
        </div>

        <div class="bg-[#7D0000] my-[24px] h-[150px] relative">
          <div class="flex  pl-[32px] justify-start items-center h-full">
            <div>
              <p class="mb-[8px] text-[#fff] text-[28px] font-[700] ">
                언론이 본 서강
              </p> <img src="@/assets/img/story/icon-arrow-right.svg" alt="">
            </div>
          </div>

          <div class="absolute bottom-0 right-0">
            <img src="@/assets/img/story/vector-deco.svg" alt="">
          </div>
        </div>

        <div class="bg-[#B30000] h-[150px] relative">
          <div class="flex  pl-[32px] justify-start items-center h-full">
            <div>
              <p class="mb-[8px] text-[#fff] text-[28px] font-[700] ">
                홍보제안
              </p> <img src="@/assets/img/story/icon-arrow-right.svg" alt="">
            </div>
          </div>

          <div class="absolute bottom-0 right-0">
            <img src="@/assets/img/story/vector-deco.svg" alt="">
          </div>
        </div>
      </div>

      <div class="col-span-1">
        <div
          class="text-[#000]  mb-[40px] flex justify-between items-center font-[700] leading-[40px] text-[32px]"
        >
          <div>
            공지사항
          </div>
          <div class="cursor-pointer">
            <img src="@/assets/img/story/icon-plus.svg" alt="" class="object-cover w-full h-full">
          </div>
        </div>

        <div class="grid grid-cols-4 ">
          <div
            v-for="(itemTab, indexTab) in tabs" :key="indexTab"
            :class="elActive === itemTab.id ? 'border-b-[3px] border-[#424242]' : 'border-b-[1px]' "
            class="  text-[#424242] font-[500] text-[24px] pb-[19px]  flex cursor-pointer justify-center items-center  w-full"
            @click="activeTab(itemTab.id)"
          >
            {{ itemTab.label }}
          </div>
        </div>

        <div v-for="tab in tabs" :key="tab.id" class="mt-[20px]">
          <div v-if="elActive === tab.id" class="flex items-center justify-between">
            <div class="text-[#212121] font-[500] text-[20px] leading-[140%]">
              {{ tab.content }}
            </div>
            <div class="text-[#757575] font-[500] text-[16px]">
              {{ tab.time }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-sd {
  box-shadow: 0px 2px 24px 0px rgba(0, 0, 0, 0.10);
}

.custom-sd-red {
  box-shadow: 0px 2px 24px 0px rgba(0, 0, 0, 0.10);
}

::v-deep .swiper-pagination {
  position: absolute;
  top: 1% !important;
  left: -41% !important;
}

::v-deep .swiper-pagination-bullet {
  background-color: #989898 !important;
  opacity: 1 !important;
  width: 12px !important;
  height: 12px !important;
}

::v-deep .swiper-pagination-bullet-active {
  background-color: #000000 !important;
}
</style>
