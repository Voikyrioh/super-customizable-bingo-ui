<script setup lang="ts">
  import { ref } from "vue";
  import { loggedUserStore } from "../../../store/logged-user.ts";
  import { userInfos } from "./authentication.service.ts";
  import Connected from "./Connected.vue";
  import LogIn from "./Log-In.vue";
  import SignUp from "./Sign-Up.vue";

  const mode = ref<"log-in"|"sign-up">("log-in")
  function fetchLoggedUser(token: string) {
    if ( token ) {
      userInfos(token).then(user => { loggedUserStore.username = user.username, loggedUserStore.token = token })
    }
  }
</script>

<template>
  <Connected v-if="loggedUserStore.username" :username="loggedUserStore.username"/>
  <div v-else class="w-full h-full">
    <LogIn v-if="mode === 'log-in'" v-on:goto-signup="mode = 'sign-up'" v-on:logged-in="fetchLoggedUser($event)"/>
    <SignUp v-else v-on:goto-login="mode = 'log-in'"/>
  </div>
</template>

<style scoped>

</style>
