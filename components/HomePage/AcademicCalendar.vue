<script setup>
import { ref } from "vue";

const attrs = ref([
  {
    key: "today",
    highlight: {
      style: {
        backgroundColor: "#B30000",
        borderRadius: 0,
        width: "44px",
        height: "44px",
      },
    },
    dates: new Date(),
  },
  {
    content: {
      style: {
        color: "#FF453A",
      },
    },
    dates: { repeat: { weekdays: 1 } }, // Every Friday
  },
  {
    dot: {
      style: {
        backgroundColor: "#B30000",
      },
    },
    dates: [new Date(2023, 9, 2), new Date(2023, 9, 10), new Date(2023, 9, 22)],
  },
]);
</script>

<template>
  <section class="py-20 max-w-[1296px] mx-auto">
    <div class="flex justify-between w-full">
      <h4 class="text-[32px] font-bold">학사 일정</h4>
    </div>
    <article class="grid grid-cols-2 pt-5">
      <div class="h-full mr-[134px]">
        <VDatePicker
          expanded
          title-position="left"
          locale="ko"
          :attributes="attrs"
          style="border: none; height: 100%"
        />
      </div>
      <div>
        <h6 class="text-2xl font-bold">
          <span class="text-[#B30000]">9월 18일 수요일</span>
          <span class="text-black">일정</span>
        </h6>
        <div class="mt-10 space-y-5">
          <div class="px-5 py-[22px] border border-[#EFEFEF]">
            <strong>9월 18일 - 9월 20일</strong>
            <p>중간성적 제출 마감</p>
          </div>
          <div class="px-5 py-[22px] border border-[#EFEFEF]">
            <strong>9월 18일 - 9월 20일</strong>
            <p>중간성적 제출 마감</p>
          </div>
          <div class="px-5 py-[22px] border border-[#EFEFEF]">
            <strong>9월 18일 - 9월 20일</strong>
            <p>중간성적 제출 마감</p>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<style scoped>
::v-deep .vc-day {
  padding: 8px;
}
::v-deep .vc-focus:focus-within {
  box-shadow: none;
}
::v-deep .vc-day-content {
  width: 44px;
  height: 44px;
}
::v-deep .vc-highlight-bg-solid {
  width: 44px;
  height: 44px;
  border-radius: 0;
}
::v-deep .vc-day-content:hover {
  background: none;
}
</style>
