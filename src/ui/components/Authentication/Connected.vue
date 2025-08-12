<script setup lang="ts">
const { username } = defineProps<{username: string}>()
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <h3 class="w-full text-center p-4 text-3xl font-bold">Connected</h3>
    <hr class="w-full border-2 border-solid border-gray-300">
    <p>Bienvenue, {{ username }} !</p>
  </div>
</template>

<style scoped>

</style>
