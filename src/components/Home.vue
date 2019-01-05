<template>
  <v-app>
    <div id="home">
      <h1>{{ msg }}</h1>
      <v-btn color="info" large class="login-btn" @click="googleLogin">Log In with Google Account</v-btn>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      msg: "Welcome to Sophie"
    };
  },
  methods: {
    googleLogin: function() {
      /* eslint no-undef: 0 */
      firebase
        .auth()
        .signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    }
  }
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 3rem;
}
.login-btn {
  text-transform: initial;
  margin-top: 30px;
}
</style>
