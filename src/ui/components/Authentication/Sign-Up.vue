<script setup lang="ts">
  import { ref } from "vue";
  import type { Register } from "./type";

  const emit = defineEmits<{ 'goto-login': [] }>()
  const signupError = ref<string|null>()
  const signupForm = ref<Register>({ username: '', password: '', confirmPassword: '' })

  function signup(event: SubmitEvent) {
    event.preventDefault()
    event.stopPropagation()
    console.log(signupForm.value)
  }
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <h3 class="w-full text-center p-4 text-3xl font-bold">Sign Up</h3>
    <hr class="w-full border-2 border-solid border-gray-300">
    <div
        class="w-4/5 ml-auto mr-auto mt-8 ring-0 ring-offset-red-500  bg-red-200 text-center text-red-600 rounded-sm transition-all"
        :class="{ 'ring-2': signupError, 'h-0': !signupError }"
    >{{ signupError }}</div>
    <form class="flex flex-col w-full p-8 mb-16" v-on:submit="(event) => signup(event as SubmitEvent)">
      <label for="account">Account Id <b class="text-red-500">*</b></label>
      <input type="text" id="account" v-model="signupForm.username" placeholder="Id that you will use to login" class="p-2 w-full h-10 border-solid border-2 rounded-lg mb-4" required>
      <label for="password">Password <b class="text-red-500">*</b></label>
      <input type="password" v-model="signupForm.password" id="password" placeholder="Type your password" class="p-2 w-full h-10 border-solid border-2 rounded-lg mb-1 " required>
      <input type="password" v-model="signupForm.confirmPassword" placeholder="Confirm your password" class="p-2 w-full h-10 border-solid border-2 rounded-lg mb-4" required>
      <label for="username">Username</label>
      <input type="text" placeholder="Name you will known as" v-model="signupForm.shownName" id="username" class="p-2 w-full h-10 border-solid border-2 rounded-lg mb-4">
      <label for="email">Email</label>
      <input type="email" placeholder="Enter your email if you like" v-model="signupForm.email" id="email" class="p-2 w-full h-10 border-solid border-2 rounded-lg mb-4">

      <button class="w-full h-10 ring-2 ring-gray-900 rounded-lg hover:cursor-pointer hover:scale-110 active:scale-95 transition-all">Log in</button>
    </form>
    <div class="w-full text-center"><span>If you already have an account, you can <a class="text-blue-500 hover:cursor-pointer" target="_self" v-on:click="emit('goto-login')">sign in</a></span></div>
  </div>
</template>

<style scoped>

</style>
