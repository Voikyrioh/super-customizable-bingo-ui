<script setup lang="ts">
import { ref, useTemplateRef } from "vue";
import type { ChatMessage } from "./types.ts";
import SendIcon from "../../icons/Send-Icon.vue";

const messages = ref<ChatMessage[]>([
  {
    at: new Date('2025-08-08T19:48:11'),
    message: 'Welcome to the chat',
    type: 'SYSTEM'
  },
  {
    at: new Date('2025-08-08T19:49:58'),
    message: 'Hello',
    type: 'MESSAGE',
    username: 'John'
  },
  {
    at: new Date('2025-08-08T19:50:34'),
    message: 'Welcome on board, if you have any questions, just ask. I can also give you directions if you\'re lost. Have fun on this website !',
    type: 'MESSAGE',
    username: 'Peach'
  }
]);

const messageInput = useTemplateRef('message-input')

function sendMessage() {
  const message: string|null = messageInput.value?.value.trim() || null
  if ( message === null ) return;
  messages.value.push({
    type: 'MESSAGE',
    message,
    username: 'Me',
    at: new Date()
  })
  if ( messageInput.value ) messageInput.value.value = ''
}
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <h3 class="w-full text-center p-4 text-3xl font-bold">Chat</h3>
    <hr class="w-full border-2 border-solid border-gray-300"></hr>
    <div class="w-full h-full pt-2 pb-2 overflow-y-scroll overflow-x-clip">
      <div v-for="message of messages" class="w-full p-4 pt-1 pb-1">
        <span class="font-light text-sm"> {{ message.at.getHours() }}:{{ message.at.getMinutes() }}&nbsp;</span>
        <span v-if="message.type === 'MESSAGE'" class="font-bold text-blue-400">{{ message.username }}<span class="text-ink font-normal">:&nbsp;</span></span>
        <span v-else class="text-red-400"> [SERVER] </span>
        <span> {{ message.message }} </span>
      </div>
    </div>
    <div class="w-full h-16 flex flex-row justify-evenly p-2">
      <input ref="message-input" type="text" placeholder="Type your message here" class="border-solid border-2 h-8 w-full rounded-lg p-2">
      <button class="w-8 h-8 p-1 hover:cursor-pointer" v-on:click="() => sendMessage()"><SendIcon  /></button>
    </div>
  </div>
</template>

<style scoped>

</style>
