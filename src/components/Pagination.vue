<template>
  <div>
    <ul class="flex">
      <li class="w-12 h-12 flex justify-center items-center text-green-100 rounded-full border
      border-green-100 duration-200 cursor-pointer mr-6 hover:opacity-90 hover:bg-green-100
      hover:text-white-100">
        <span class="material-icons">chevron_left</span>
      </li>
      <li
        class="w-12 h-12 flex justify-center items-center rounded-full border border-green-100
          cursor-pointer duration-200 mr-6 hover:opacity-90 hover:bg-green-100 hover:text-white-100"
        :class="true ? 'text-green-100' : ''"
      >
        1
      </li>
      <li class="w-12 h-12 flex justify-center items-center text-green-100 rounded-full border
      border-green-100 duration-200 cursor-pointer hover:opacity-90 hover:bg-green-100
      hover:text-white-100">
        <span class="material-icons">chevron_right</span>
      </li>
    </ul>
  </div>
</template>
