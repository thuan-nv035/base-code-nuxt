<script setup>
import { computed, ref, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: Number,
    default: 0,
  },
  initData: {
    type: Array,
    default: () => ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'],
  },
})
const emit = defineEmits(['update:modelValue'])

// Create reactive variables
const activeIndex = ref(props.modelValue)

const menuItems = computed(() => {
  const data = props.initData.map((menuItem, indexItem) => ({
    title: menuItem,
    active: indexItem === activeIndex.value,
  }))
  return data
})

const animatedLineStyles = computed(() => {
  const itemWidth = 100 / menuItems.value.length
  const left = `${activeIndex.value * itemWidth}%`
  const width = `${itemWidth}%`

  return {
    left,
    width,
    transition: 'left 0.3s ease-out',
  }
})

// Emit an update event on activeIndex change
watch(activeIndex, (newIndex) => {
  emit('update:modelValue', newIndex)
})

// Define functions
function setActive(item, index) {
  menuItems.value.forEach((menuItem, indexItem) => {
    menuItem.active = indexItem === index
  })
  activeIndex.value = menuItems.value.findIndex(menuItem => menuItem.active)
}
</script>

<template>
  <div>
    <ul class="flex justify-around list-none">
      <li
        v-for="(item, index) in menuItems"
        :key="index"
        :class="{ 'text-black': item.active }"
        class="p-3 cursor-pointer"
        @click="setActive(item, index)"
      >
        {{ item.title }}
      </li>
    </ul>
    <div class="h-[3px] bg-[#ECECEC] relative">
      <div class="absolute bottom-0 h-[3px] bg-black" :style="animatedLineStyles" />
    </div>
  </div>
</template>

<style scoped>
/* Add your styles here */
</style>
