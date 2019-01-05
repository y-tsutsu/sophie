<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Sophie </span>
        <span class="font-weight-light">MARKDOWN MEMO</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat href="https://github.com/y-tsutsu/sophie" target="_blank">
        <span class="mr-2">GitHub</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <Home v-if="!isLogin"></Home>
      <Editor v-if="isLogin" :user="userData"></Editor>
    </v-content>
  </v-app>
</template>

<script>
import Home from "./components/Home.vue";
import Editor from "./components/Editor.vue";

export default {
  name: "App",
  components: {
    Home: Home,
    Editor: Editor
  },
  data() {
    return {
      isLogin: false,
      userData: null
    };
  },
  created: function() {
    // eslint-disable-next-line no-undef
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.isLogin = true;
        this.userData = user;
      } else {
        this.isLogin = false;
        this.userData = null;
      }
    });
  }
};
</script>
