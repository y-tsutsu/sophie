<template>
  <div id="home">
    <h1>
      <img alt="Sophie" src="../assets/logo.png">
    </h1>
    <v-btn color="info" large class="login-btn" @click="googleLogin">Log in - Google Accounts</v-btn>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Home',
  data () {
    return {}
  },
  methods: {
    googleLogin: function () {
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
