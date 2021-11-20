<template>
  <div>
    <ul class="flex">
      <li
        class="w-12 h-12 flex justify-center items-center rounded-full border duration-200
         cursor-pointer mr-6 hover:opacity-90 hover:bg-green-100
      hover:text-white-100"
        :class="pages.current === 1 ?
          'text-gray-100 border-gray-100' : 'text-green-100 border-green-100'"
        @click="goPage('-1')"
      >
        <span class="material-icons">chevron_left</span>
      </li>
      <li
        v-for="page in pages.total"
        :key="page"
        class="w-12 h-12 flex justify-center items-center rounded-full border border-green-100
          cursor-pointer duration-200 mr-6 hover:opacity-90 hover:bg-green-100 hover:text-white-100"
        :class="page === pages.current ?
          'text-white-100 bg-green-100' : 'text-dark-200'"
        @click="goPage(page)"
      >
        {{ page }}
      </li>
      <li
        class="w-12 h-12 flex justify-center items-center rounded-full border duration-200
          cursor-pointer hover:opacity-90 hover:bg-green-100
      hover:text-white-100"
        :class="pages.current === pages.total ?
          'text-gray-100 border-gray-100' : 'text-green-100 border-green-100'"
        @click="goPage('+1')"
      >
        <span class="material-icons">chevron_right</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'

const props = defineProps({
  pages: {
    type: Object as PropType<Pages>,
    default: () => ({})
  }
})

const emits = defineEmits(['change'])
const goPage = (page: number | string) => {
  if (!props.pages.current) return
  const { current, total } = props.pages

  let targetPage: number

  if (page === '+1' && current !== total) {
    targetPage = current + 1
  } else if (page === '-1' && current > 1) {
    targetPage = current - 1
  } else if (typeof page === 'number') {
    targetPage = page
  }

  if (targetPage!) {
    emits('change', targetPage)
  }
}
</script>
