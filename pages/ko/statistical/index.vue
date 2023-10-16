<script setup>
definePageMeta({
isSidebar: false,
layout: 'custom'
});


import { reactive } from 'vue'
import Table from '../../../components/Table.vue'

const header = reactive(['학부생', '대학원생', '총계'])
const data = reactive([
  { location: '4,048', phone: '4,048', fax: '4,048' },
])
</script>

<template>
  <div class="container my-20">
    <div class="text-[#000] font-[700] text-[32px] leading-[140%] text-center mt-[60px] mb-[28px]">
      학교 현황
    </div>
    <div class="text-[#000] font-[500] leading-[140%] text-[18px] text-center mb-[80px]">
      한눈에 보는 서강 (2023 공시자료 기준)
    </div>
    <div>
      <div class="border-b-[3px] border-[#424242] pb-5">
        <div class="flex justify-between items-center">
          <div class="flex justify-between w-full items-center">
            <div class="text-[#000] leading-[140%] font-[700] text-[16px] leading-[140%]">
              재학생 현황
            </div>
            <div class="text-[#979797] text-[16px] font-[400]">
              단위(명)
            </div>
          </div>
        </div>
      </div>
      <Table :table-data="data" :table-headers="header" class-name="w-1/3 bg-[#EFEFEF] text-[#979797]" />
    </div>
  </div>
</template>
