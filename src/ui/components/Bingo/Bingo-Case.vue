<script setup lang="ts">

  import { onMounted, useTemplateRef } from "vue";
  import type { BingoCase, BingoPosition } from "./types.ts";

  const emit = defineEmits<{change: [BingoPosition]}>()
  const bingoCase = useTemplateRef<HTMLTableCellElement>('bingo-case')
  const { pos, data } = defineProps<{pos: BingoPosition, data: BingoCase }>()

  onMounted(() => console.log(data))

  function stamp(row: number, col: number) {
    emit('change', { row, col});
    if (bingoCase.value) setStampStyle(bingoCase.value)
  }

  function setStampStyle(bingoCase: HTMLTableCellElement) {
    bingoCase.style.setProperty('--stamp-x', `${Math.round(Math.random() * 40) - 20}px`)
    bingoCase.style.setProperty('--stamp-y', `${Math.round(Math.random() * 40) - 20}px`)
  }

</script>

<template>
  <td ref="bingo-case"
      v-bind:id="`bingo-${pos.row}-${pos.col}`"
      class="border-2 border-solid user-select-none cursor-pointer text-xl"
      v-on:click="() => stamp(pos.row, pos.col)"
      v-bind:class="{'stamped': data.checked}"
  > <span style="user-select: none"> {{data.value}} </span></td>
</template>

<style scoped>
  :root {
    --stamp-size: 0;
    --stamp-x: 0;
    --stamp-y: 0;
  }

  .stamped:after {
    z-index: 10;
    position: absolute;
    width: var(--stamp-size);
    height: var(--stamp-size);
    background-image: radial-gradient(rgba(255, 98, 98, 0.8), rgba(255, 98, 98, 0.6) 80%, rgba(255, 98, 98, 0.1));
    border-radius: 50%;
    content: '';
    transform: translate(calc(-50% - 8px + var(--stamp-x)), calc(-50% + 8px  + var(--stamp-y)));
    filter: blur(3px);
  }
</style>
