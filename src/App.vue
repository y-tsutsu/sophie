<template>
  <v-app id="app">
    <Toolbar class="toolbar"></Toolbar>
    <router-view></router-view>
  </v-app>
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

<style lang="scss" scoped>
.toolbar {
  margin-bottom: 20px;
}
</style>
