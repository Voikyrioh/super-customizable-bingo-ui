<script setup lang="ts">

import BingoTable from "../components/Bingo/Bingo-Table.vue";
</script>

<template>
  <div class="w-full h-3/4 flex border-solid border-2 rounded-lg">
    <BingoTable v-bind:size="5" />
  </div>
</template>

<style scoped>

</style>
