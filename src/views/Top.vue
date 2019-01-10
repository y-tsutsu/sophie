<template>
  <v-content>
    <Toolbar :isLogin="isLogin"></Toolbar>
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
</template>

<script>
import Toolbar from '../components/Toolbar'
import Home from '../components/Home'
import Editor from '../components/Editor'

export default {
  name: 'Top',
  components: {
    Toolbar: Toolbar,
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
  }
}
</script>

<style lang="scss" scoped>
.loading-icon {
  margin-top: 30px;
}
</style>
