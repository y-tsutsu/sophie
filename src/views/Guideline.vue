<template>
  <div id="guideline">
    <v-content>
      <h1>利用規約</h1>
      <p>ここに利用規約の文章が入ります．</p>
    </v-content>
  </div>
</template>

<script>
export default {
  name: 'Guideline',
  mounted: function () {
    this.$store.commit('enterGuidline')
  },
  destroyed: function () {
    this.$store.commit('leaveGuidline')
  }
}
</script>
