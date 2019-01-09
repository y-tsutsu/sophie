<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Sophie  </span>
        <span class="font-weight-light">MARKDOWN MEMO</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="isLogin" flat color="pink" @click="logout">
        <span class="mr-2">Logout</span>
      </v-btn>
      <v-btn flat color="indigo" href="https://github.com/y-tsutsu/sophie" target="_blank">
        <span class="mr-2">GitHub</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <v-progress-circular
        v-if="isLoading"
        :size="70"
        :width="7"
        color="primary"
        indeterminate
        class="loading-icon"
      ></v-progress-circular>
      <Home v-if="!isLogin && !isLoading"></Home>
      <Editor v-if="isLogin" :user="userData"></Editor>
    </v-content>
  </v-app>
</template>

<script>
import Home from './components/Home.vue'
import Editor from './components/Editor.vue'

export default {
  name: 'App',
  components: {
    Home: Home,
    Editor: Editor
  },
  data () {
    return {
      isLogin: false,
      userData: null,
      isLoading: true
    }
  },
  created: function () {
    // eslint-disable-next-line no-undef
    firebase.auth().onAuthStateChanged(user => {
      this.isLoading = false
      if (user) {
        this.isLogin = true
        this.userData = user
      } else {
        this.isLogin = false
        this.userData = null
      }
    })
  },
  methods: {
    logout: function () {
      // eslint-disable-next-line no-undef
      firebase.auth().signOut()
    }
  }
}
</script>

<style lang="scss" scoped>
.loading-icon {
  margin-top: 30px;
}
</style>
