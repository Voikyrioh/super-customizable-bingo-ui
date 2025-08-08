<script setup lang="ts">
import Menu from "./ui/infrastructure/Menu.vue";
import Head from "./ui/infrastructure/Head.vue";
import Main from "./ui/infrastructure/Main.vue";

</script>

<template>
  <Head/>
  <div class="flex flex-row h-full justify-between w-3/5 m-auto">
    <Main/>
    <Menu/>
  </div>
</template>

<style scoped>
</style>
