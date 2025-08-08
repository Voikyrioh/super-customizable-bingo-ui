<script setup lang="ts">
  import { ref } from "vue";
  import Chat from "../components/Chat/Chat.vue";
  import ChatIcon from "../icons/Chat-Icon.vue";
  import CloseIcon from "../icons/Close-Icon.vue";

  type menuTypes = 'chat' | null;

  const open = ref<menuTypes>(null);
  const opened = ref<menuTypes>(null);

  function openMenu(menu: menuTypes) {
    const newVal = open.value === menu ? null : menu;
    open.value = newVal;

    if ( newVal === null ) opened.value = newVal;
    else
      setTimeout(() => {
        opened.value = newVal;
      }, 200)
  }
</script>

<template>
  <div class="h-3/4 flex flex-row justify-end top-0 ml-2">
    <div class="w-8 h-8 p-1 border-solid border-2 border-r-0 hover:cursor-pointer rounded-l-3xl bg-paper -m-0.5 mt-2 z-10" v-on:click="() => openMenu('chat')">
      <CloseIcon v-if="opened === 'chat'"/>
      <ChatIcon v-else />
    </div>
    <div v-bind:class="{'w-sm': open, 'border-2': open}" class="border-solid border-2 transition-all w-2 rounded-lg">
      <Chat v-if="opened === 'chat'" />
    </div>
  </div>
</template>

<style scoped>

</style>
