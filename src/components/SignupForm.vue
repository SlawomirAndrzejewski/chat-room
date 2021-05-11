<template>
  <form @submit.prevent="handleSubmit">
      <input v-model="displayName" type="text" required placeholder="display name">
      <input v-model="email" type="email" required placeholder="email">
      <input v-model="password" type="password" required placeholder="password">
      <button>Sign up</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from "../composables/useSignup"

export default {
    setup() {
        const { error, signup } = useSignup()

        const displayName = ref("")
        const email = ref("")
        const password = ref("")

        const handleSubmit = async () => {
            await signup(email.value, password.value, displayName.value)
            console.log("user signed up")
        }

        return { displayName, email, password, handleSubmit }
    }
}
</script>

<style>

</style>