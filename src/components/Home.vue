<template>
  <v-app>
    <div id="home">
      <h1>
        <img alt="Sophie" src="../assets/logo.png">
      </h1>
      <v-btn color="info" large class="login-btn" @click="googleLogin">Log In with Google Account</v-btn>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {}
  },
  methods: {
    googleLogin: function () {
      /* eslint no-undef: 0 */
      firebase
        .auth()
        .signInWithRedirect(new firebase.auth.GoogleAuthProvider())
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 3rem;
}
.login-btn {
  text-transform: initial;
}
</style>
