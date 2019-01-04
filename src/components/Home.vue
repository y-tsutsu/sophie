<template>
  <v-app>
    <div id="home">
      <h1>{{ msg }}</h1>
      <v-btn color="info" class="login-btn" @click="googleLogin">Googleアカウントでログイン</v-btn>
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
        .signInWithRedirect(new firebase.auth.GoogleAuthProvider())
    }
  }
};
</script>

<style lang="scss" scoped>
.login-btn {
  text-transform: initial;
}
</style>
