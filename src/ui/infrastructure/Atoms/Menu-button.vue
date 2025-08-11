<script setup lang="ts">
  import type { MenuTypes } from "../types.ts";

  const { opened, name } = defineProps<{opened: MenuTypes, name: MenuTypes}>()
</script>

<template>
  <div
      class="w-8 h-8 p-1 border-solid border-2 border-r-0 hover:cursor-pointer hover:scale-110 hover:-translate-x-0.5 active:scale-95 transition-all rounded-l-3xl mt-4 z-20 bg-paper"
      :class="{ 'translate-x-0.5': opened === name,  'hover:translate-x-0': opened === name }"
  >
    <slot/>
  </div>
</template>

<style scoped>

</style>
