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

export default {
    setup() {
        const displayName = ref("")
        const email = ref("")
        const password = ref("")

        const handleSubmit = () => {
            console.log(displayName.value, email.value, password.value)
        }

        return { displayName, email, password, handleSubmit }
    }
}
</script>

<style>

</style>