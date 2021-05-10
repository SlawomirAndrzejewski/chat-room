<template>
  <form @submit.prevent="handleSubmit">
      <input v-model="email" type="email" required placeholder="email">
      <input v-model="password" type="password" required placeholder="password">
      <button>Log in</button>
  </form>
</template>

<script>
import { ref } from 'vue'

export default {
    setup() {
        const email = ref("")
        const password = ref("")

        const handleSubmit = () => {
            console.log(displayName.value, email.value, password.value)
        }

        return { email, password, handleSubmit }
    }
}
</script>

<style>

</style>