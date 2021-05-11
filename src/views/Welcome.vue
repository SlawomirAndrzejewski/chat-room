<template>
  <div class="welcome container">
      <div v-if="loggedIn">
          <LoginForm />
          <p>No account yet? <span @click="loggedIn = false">Sign up</span> instead</p>
      </div>
      <div v-else>
          <SignupForm />
          <p>Already registered? <span @click="loggedIn = true">Login</span> instead</p>
      </div>
  </div>
</template>

<script>
import SignupForm from "../components/SignupForm"
import LoginForm from "../components/LoginForm"
import { ref } from 'vue'

export default {
    components: {
        SignupForm,
        LoginForm
    },

    setup() {
        const loggedIn = ref(true)

        return { loggedIn }
    }
}
</script>

<style>
  .welcome {
    text-align: center;
    padding: 20px 0;
  }
  /* form styles */
  .welcome form {
    width: 300px;
    margin: 20px auto;
  }
  .welcome label {
    display: block;
    margin: 20px 0 10px;
  }
  .welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }
  .welcome span{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
  .welcome button {
    margin: 20px auto;
    background-color: rgb(46, 173, 63);
    border: none;
    padding: 10px 15px;
    border-radius: 8px;
    cursor: pointer;
  }
</style>