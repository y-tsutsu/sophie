<template>
  <v-app>
    <div id="editor">
      <h1>エディター画面</h1>
      <span>{{ user.displayName }}</span>
      <v-btn color="warning" class="login-btn" @click="logout">ログアウト</v-btn>
      <div class="editorWrapper">
        <v-textarea outline rows="40" label="Markdown" class="markdown" v-model="markdown"></v-textarea>
        <div class="preview" v-html="preview()"></div>
      </div>
    </div>
  </v-app>
</template>

<script>
import marked from "marked";
export default {
  name: "Editor",
  props: ["user"],
  data() {
    return {
      markdown: ""
    };
  },
  methods: {
    logout: function() {
      // eslint-disable-next-line no-undef
      firebase.auth().signOut();
    },
    preview: function() {
      return marked(this.markdown);
    }
  }
};
</script>

<style lang="scss" scoped>
.editorWrapper {
  display: flex;
}
.editorWrapper > * {
  padding: 1rem;
}
.markdown {
  width: 50%;
}
.preview {
  width: 50%;
  text-align: left;
}
</style>
