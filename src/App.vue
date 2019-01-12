<template>
  <dev id="app">
    <v-app>
      <Toolbar></Toolbar>
      <router-view></router-view>
    </v-app>
  </dev>
</template>

<script>
import Toolbar from './components/Toolbar'

export default {
  name: 'App',
  components: {
    Toolbar: Toolbar
  }
}
</script>
