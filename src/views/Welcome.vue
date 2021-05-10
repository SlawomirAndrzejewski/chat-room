<template>
  <div class="welcome container">
      <SignupForm />
  </div>
</template>

<script>
import SignupForm from "../components/SignupForm"

export default {
    components: {
        SignupForm
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
    background-color: rgb(255, 205, 205);
    border: none;
    padding: 10px 15px;
    border-radius: 8px;
    cursor: pointer;
  }
</style>