<script setup lang="ts">
  import { ref } from "vue";
  import type { LoggedUser } from "./type.ts";
  import Connected from "./Connected.vue";
  import LogIn from "./Log-In.vue";
  import SignUp from "./Sign-Up.vue";

  const loggedUser = ref<LoggedUser|null>(null)
  const mode = ref<"log-in"|"sign-up">("log-in")
</script>

<template>
  <Connected v-if="loggedUser" :logged-user="loggedUser"/>
  <div v-else class="w-full h-full">
    <LogIn v-if="mode === 'log-in'" v-on:goto-signup="mode = 'sign-up'"/>
    <SignUp v-else v-on:goto-login="mode = 'log-in'"/>
  </div>
</template>

<style scoped>

</style>
