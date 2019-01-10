<template>
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
    <Editor v-if="isLogin"></Editor>
  </v-content>
</template>

<script>
import Home from '../components/Home'
import Editor from '../components/Editor'

export default {
  name: 'Top',
  components: {
    Home: Home,
    Editor: Editor
  },
  data () {
    return {
      isLogin: false,
      isLoading: true
    }
  },
  created: function () {
    // eslint-disable-next-line no-undef
    firebase.auth().onAuthStateChanged(user => {
      this.isLoading = false
      if (user) {
        this.isLogin = true
        this.$store.commit('updateUser', user)
      } else {
        this.isLogin = false
        this.$store.commit('resetUser')
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
