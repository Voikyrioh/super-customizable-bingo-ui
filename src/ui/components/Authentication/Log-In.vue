<script setup lang="ts">
import { ref } from "vue";
  import type { Login } from "./type.ts";
import Link from "../atoms/Link.vue";
import { login } from "./authentication.service.ts";

  const emit = defineEmits<{ 'goto-signup': [], 'logged-in': [string] }>()
  const loginForm = ref<Login>({password: '', username: ''})
  const inputError = ref<{ username?: string, password?: string }>({})
  const loginError = ref<string|null>()

  function loginEvent(event: SubmitEvent) {
    event.preventDefault()
    event.stopPropagation()

    login(loginForm.value).then((resp) => { emit('logged-in', resp)})
  }
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <h3 class="w-full text-center p-4 text-3xl font-bold">Log in</h3>
    <hr class="w-full border-2 border-solid border-gray-300">
    <div
        class="w-4/5 ml-auto mr-auto mt-8 ring-0 ring-offset-red-500  bg-red-200 text-center text-red-600 rounded-sm transition-all"
        :class="{ 'ring-2': loginError, 'h-0': !loginError }"
    >{{ loginError }}</div>
    <form class="flex flex-col w-full p-8 mb-16" v-on:submit="(event) => loginEvent(event as SubmitEvent)">
      <label for="username">Account id <b class="text-red-500">*</b></label>
      <input type="text" v-model="loginForm.username" id="account" placeholder="Your account id" class="p-2 w-full h-10 border-solid border-2 rounded-lg mb-4" required
        :class="{ 'border-red': inputError.username, 'h-0': !inputError.username }">
      <label for="password">Password <b class="text-red-500">*</b></label>
      <input type="password" v-model="loginForm.password" name="password" id="password" placeholder="Your password" class="p-2 w-full h-10 border-solid border-2 rounded-lg mb-4" required>

      <button class="w-full h-10 ring-2 ring-gray-900 rounded-lg hover:cursor-pointer hover:scale-110 active:scale-95 transition-all">Log in</button>
    </form>
    <div class="w-full text-center"><span>If you don't have an account you can <Link target="_self" v-on:click="emit('goto-signup')">sign-up</Link></span></div>
  </div>
</template>

<style scoped>

</style>
