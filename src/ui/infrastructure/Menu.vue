<script setup lang="ts">
  import { ref } from "vue";
  import Chat from "../components/Chat/Chat.vue";
  import ChatIcon from "../icons/Chat-Icon.vue";
  import CloseIcon from "../icons/Close-Icon.vue";
  import type { MenuTypes } from "./types.ts";
  import MenuButton from "./Atoms/Menu-button.vue";
  import AuthIcon from "../icons/Auth-icon.vue";
  import Auth from "../components/Authentication/Auth.vue";

  const open = ref<MenuTypes>(null);
  const opened = ref<MenuTypes>(null);

  function openMenu(menu: MenuTypes) {
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
    <div class="flex flex-col bg-paper">
      <MenuButton v-on:click="() => openMenu('chat')" :opened="opened" name="chat">
        <ChatIcon/>
      </MenuButton>
      <MenuButton v-on:click="() => openMenu('auth')" :opened="opened" name="auth">
        <AuthIcon/>
      </MenuButton>
    </div>
    <div v-bind:class="{'w-sm': open, 'border-2': open}" class="border-solid border-2 transition-all w-2 rounded-lg">
      <Chat v-if="opened === 'chat'" />
      <Auth v-if="opened === 'auth'" />
    </div>
  </div>
</template>

<style scoped>

</style>
