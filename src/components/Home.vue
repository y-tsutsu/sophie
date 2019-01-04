<template>
  <v-app>
    <div id="home">
      <h1>{{ msg }}</h1>
      <v-btn color="info" class="login-btn">Googleアカウントでログイン</v-btn>
    </div>
  </v-app>
</template>

<script>
  export default {
    name: "home",
    data() {
      return {
        msg: "Welcome to Sophie"
      }
    }
  }
</script>

<style lang="scss" scoped>
.login-btn{
  text-transform: initial;
}
</style>
