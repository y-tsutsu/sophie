<template>
  <v-app>
    <div id="editor">
      <h1>エディター画面</h1>
      <span>{{ user.displayName }}</span>
      <v-btn color="warning" class="login-btn" @click="logout">ログアウト</v-btn>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "Editor",
  props: ["user"],
  data() {
    return {};
  },
  methods: {
    logout: function() {
      // eslint-disable-next-line no-undef
      firebase.auth().signOut();
    }
  }
};
</script>
