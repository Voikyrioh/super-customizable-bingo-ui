import { reactive, ref } from 'vue'

export const loggedUserStore = reactive({
    token: ref<string|null>(null),
    username: ref<string|null>(null),
})

