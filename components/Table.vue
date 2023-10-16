<script setup>
defineProps({
  tableData: Array,
  tableHeaders: Array,
  className: String,
});

const emit = defineEmits(["click"]);

function handleColClick(rowIndex) {
  emit("click", rowIndex);
}
</script>

<template>
  <div class="overflow-x-auto">
    <table class="min-w-full border-l border-r">
      <thead class="border-b">
        <tr>
          <th
            v-for="(key, index) in tableHeaders"
            :key="index"
            class="text-base font-normal text-[#212121] px-6 py-4 text-center border-r"
            :class="className"
            scope="col"
          >
            {{ key }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, rowIndex) in tableData"
          :key="rowIndex"
          class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 cursor-pointer"
        >
          <td
            v-for="(value, colIndex) in item"
            :key="colIndex"
            class="px-6 py-4 whitespace-nowrap text-base font-normal text-[#757575] text-center border-r"
            :class="
              tableHeaders[tableHeaders.length - 1] === '입학안내' && colIndex === 'guide'
                ? 'text-[#1a1919]'
                : ''
            "
            @click="
              tableHeaders[tableHeaders.length - 1] === '입학안내' && colIndex === 'guide'
                ? handleColClick(rowIndex)
                : null
            "
          >
            {{ value }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
