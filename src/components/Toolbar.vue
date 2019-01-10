<template>
  <v-toolbar app>
    <v-toolbar-title class="headline text-uppercase">
      <span>Sophie  </span>
      <span class="font-weight-light">MARKDOWN MEMO</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn v-if="isLogin" flat color="pink" @click="logout">
      <span class="mr-2">Logout</span>
    </v-btn>
    <v-btn flat color="deep-orange" :to="{ name: 'guideline' }">
      <span class="mr-2">Guideline</span>
    </v-btn>
    <v-btn flat color="indigo" href="https://github.com/y-tsutsu/sophie" target="_blank">
      <span class="mr-2">GitHub</span>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Toolbar',
  props: ['isLogin'],
  methods: {
    logout: function () {
      // eslint-disable-next-line no-undef
      firebase.auth().signOut()
    }
  }
}
</script>
