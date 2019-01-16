<template>
  <div id="toolbar">
    <v-toolbar app dark color="blue-grey darken-4">
      <v-toolbar-title class="headline text-uppercase">
        <span>†SOPHIE† </span>
        <span class="font-weight-light">MARKDOWN MEMO</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-show="isLogin && !isGuidline" flat @click="logout">
        <span class="mr-2">Logout</span>
      </v-btn>
      <v-btn v-show="!isGuidline" flat :to="{ name: 'guideline' }">
        <span class="mr-2">Guideline</span>
      </v-btn>
      <v-btn flat href="https://github.com/y-tsutsu/sophie" target="_blank">
        <span class="mr-2">GitHub</span>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Toolbar',
  methods: {
    logout: function () {
      firebase.auth().signOut()
    }
  },
  computed: {
    isLogin () {
      return this.$store.state.user != null
    },
    isGuidline () {
      return this.$store.state.isGuidline
    }
  }
}
</script>
