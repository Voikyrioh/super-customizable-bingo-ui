<script setup lang="ts">
import { onMounted, ref, useTemplateRef, watch  } from "vue";
import BingoCase from "./Bingo-Case.vue";
import type { BingoTable } from "./types.ts";

  const { size } = defineProps<{size: number}>()
  const table = ref<BingoTable>([])
  const bingo = useTemplateRef<HTMLTableElement>('bingo')
  const stampSize = ref<number>(0)

  watch(() => bingo.value?.clientWidth, () => {
    if (bingo.value) stampSize.value = bingo.value.clientWidth / size * 0.6
    else stampSize.value = 0
  }, { deep: true })

  watch(stampSize, () => {
    if(bingo.value) {
      bingo.value.style.setProperty('--stamp-size', `${stampSize.value}px`)
    }
  })

  onMounted(() => {
    for ( let row = 0; row < size; row++ ) {
      table.value.push([])
      for ( let col = 0; col < size; col++ ) {
        table.value[row].push({ value: 'test', checked: false })
      }
    }
  })

  function stamp(row: number, col: number) {
    table.value[row][col].checked = !table.value[row][col].checked;
  }

</script>

<template>
  <div ref="bingo" class="w-full h-full">
    <table class="w-full h-full p-4 text-center border-hidden border-collapse">
      <tr v-for="(row, r) in table">
        <BingoCase v-for="(col, c) in row" :pos="{ row: r, col: c }" :data="col" v-on:change="() => stamp(r, c)"/>
      </tr>
    </table>
  </div>

</template>

<style scoped>
</style>
