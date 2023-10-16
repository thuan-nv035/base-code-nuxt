<script setup>

definePageMeta({
isSidebar: false,
layout: 'custom'
});
import { reactive } from 'vue'
import Table from '../../../components/Table.vue'

const tableHeaders = reactive([
  '대학원명', '위치', '전화', '팩스', '입학안내',
])
const tableData = reactive([
  {
    name: '신학대학원',
    location: '다산관(D관) 526호',
    phone: '02-705-8621',
    fax: '02-705-8621',
    guide: '바로가기',
  },
  {
    name: '국제대학원',
    location: '다산관(D관) 526호',
    phone: '02-705-8621',
    fax: '02-705-8621',
    guide: '바로가기',
  },
  {
    name: '신학대학원',
    location: '다산관(D관) 526호',
    phone: '02-705-8621',
    fax: '02-705-8621',
    guide: '바로가기',
  },
  {
    name: '신학대학원',
    location: '다산관(D관) 526호',
    phone: '02-705-8621',
    fax: '02-705-8621',
    guide: '바로가기',
  },
  {
    name: '신학대학원',
    location: '다산관(D관) 526호',
    phone: '02-705-8621',
    fax: '02-705-8621',
    guide: '바로가기',
  },
])

const header = reactive(['위치', '전화', '팩스'])
const data = reactive([
  { location: '다산관(D관) 526호', phone: '02-705-8621', fax: '02-705-8621' },
])
</script>

<template>
  <div class="container mx-auto my-20">
    <h2 class="text-center text-[#000] my-[60px] text-[32px] font-[700] leading-[140%]">
      입학안내
    </h2>
    <div>
      <div class="flex gap-4">
        <div class="w-[840px] h-[216px]">
          <img
            src="@/assets/img/guide/img1.jpg"
            alt="image"
            class="w-full h-full object-cover overflow-hidden"
          >
        </div>
        <div class="flex flex-col justify-between">
          <div>
            <div class="font-bold text-[#000] text-2xl leading-[140%]">
              Irreplaceable Learning Experience at
            </div>
            <div class="flex gap-1 items-center">
              <div class="text-[#B30000] text-2xl font-bold leading-[140%]">
                Sogang
              </div>
              <div class="w-full h-[2px] bg-[#B30000]" />
            </div>
            <div class="mt-4">
              <div class="font-normal text-base text-[#000] leading-[140%]">
                융합 인재를 양성하는 자유로운 다전공제도 명성과 실력으로
              </div>
              <div class="font-normal text-base text-[#000] leading-[140%]">
                젊은 지성을 이끄는 서강학파 리더가 갖춰야 할 기본 소양을 길러주는
              </div>
              <div class="font-normal text-base text-[#000] leading-[140%]">
                인문학 교육 단 하나의 특별한 인재를 키워내는 곳.
              </div>
            </div>
          </div>
          <div class="font-normal text-base text-[#000]">
            서강대학교입니다
          </div>
        </div>
      </div>
      <div class="mt-[80px]">
        <div>
          <div class="border-b-[3px] border-[#424242] pb-5">
            <div class="flex justify-between items-center">
              <div class="text-[#000] leading-[140%] text-xl font-medium">
                대학
              </div>
              <div class="flex gap-1 items-center px-3 py-2 border cursor-pointer">
                <div class="text-[#BDBDBD] text-sm font-medium leading-[140%]">
                  홈페이지 바로가기
                </div>
                <div>
                  <img src="@/assets/img/guide/icons_link-out.svg" alt="icons_link-out">
                </div>
              </div>
            </div>
          </div>
          <Table :table-data="data" :table-headers="header" class-name="w-1/3" />
        </div>
        <div class="mt-[64px]">
          <div class="border-b-[3px] border-[#424242] pb-5">
            <div class="flex justify-between items-center">
              <div class="text-[#000] leading-[140%] text-xl font-medium">
                일반대학원
              </div>
              <div class="flex gap-3">
                <div
                  class="flex gap-1 items-center px-3 py-2 border border-[#B30000] cursor-pointer"
                >
                  <div class="text-[#B30000] text-sm font-medium leading-[140%]">
                    합격자 발표 <span class="ml-2">KOR / ENG</span>
                  </div>
                </div>
                <div class="flex gap-1 items-center px-3 py-2 border cursor-pointer">
                  <div class="text-[#BDBDBD] text-sm font-medium leading-[140%]">
                    홈페이지 바로가기
                  </div>
                  <div>
                    <img
                      src="@/assets/img/guide/icons_link-out.svg"
                      alt="icons_link-out"
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Table :table-data="data" :table-headers="header" class-name="w-1/3" />
        </div>
        <div class="mt-[64px]">
          <div class="border-b-[3px] border-[#424242] pb-5">
            <div class="flex justify-between items-center">
              <div class="text-[#000] leading-[140%] text-xl font-medium">
                전문대학원
              </div>
              <div class="flex gap-3">
                <div
                  class="flex gap-1 items-center px-3 py-2 border border-[#B30000] cursor-pointer"
                >
                  <div class="text-[#B30000] text-sm font-medium leading-[140%]">
                    합격자 발표 <span class="ml-2">KOR / ENG</span>
                  </div>
                </div>
                <div class="flex gap-1 items-center px-3 py-2 border cursor-pointer">
                  <div class="text-[#BDBDBD] text-sm font-medium leading-[140%]">
                    홈페이지 바로가기
                  </div>
                  <div>
                    <img
                      src="@/assets/img/guide/icons_link-out.svg"
                      alt="icons_link-out"
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Table :table-data="tableData" :table-headers="tableHeaders" class-name="w-1/5" />
        </div>
        <div class="mt-[64px]">
          <div class="border-b-[3px] border-[#424242] pb-5">
            <div class="flex justify-between items-center">
              <div class="text-[#000] leading-[140%] text-xl font-medium">
                특수대학원
              </div>
              <div class="flex gap-3">
                <div
                  class="flex gap-1 items-center px-3 py-2 border border-[#B30000] cursor-pointer"
                >
                  <div class="text-[#B30000] text-sm font-medium leading-[140%]">
                    합격자 발표 <span class="ml-2">KOR / ENG</span>
                  </div>
                </div>
                <div class="flex gap-1 items-center px-3 py-2 border cursor-pointer">
                  <div class="text-[#BDBDBD] text-sm font-medium leading-[140%]">
                    홈페이지 바로가기
                  </div>
                  <div>
                    <img
                      src="@/assets/img/guide/icons_link-out.svg"
                      alt="icons_link-out"
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Table :table-data="tableData" :table-headers="tableHeaders" class-name="w-1/5" />
        </div>
        <div class="mt-[64px]">
          <div class="pb-5">
            <div class="flex justify-between items-center">
              <div class="text-[#000] leading-[140%] text-xl font-medium">
                외국인입학
              </div>
              <div class="flex gap-1 items-center px-3 py-2 border cursor-pointer">
                <div class="text-[#BDBDBD] text-sm font-medium leading-[140%]">
                  홈페이지 바로가기
                </div>
                <div>
                  <img src="@/assets/img/guide/icons_link-out.svg" alt="icons_link-out">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
