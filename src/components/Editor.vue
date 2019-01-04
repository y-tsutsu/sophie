<template>
  <v-app>
    <div id="editor">
      <h1>エディター画面</h1>
      <span>{{ user.displayName }}</span>
      <v-btn color="warning" class="login-btn" @click="logout">ログアウト</v-btn>
      <div class="editorWrapper">
        <div class="memoListWrapper">
          <v-list class="memoList">
            <v-list-tile ripple v-for="(memo, index) in memos" :key="index" @click="selectMemo(index)">
              <v-list-tile-action>
                <v-icon v-if="index == selectedIndex" color="pink">check_box</v-icon>
                <v-icon v-else color="pink">check_box_outline_blank</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title v-text="displayTitle(memo.markdown)"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
          <v-btn color="info" class="addMemoBtn" @click="addMemo">Add Memo</v-btn>
        </div>
        <v-textarea
          outline
          rows="40"
          label="Markdown"
          class="markdown"
          v-model="memos[selectedIndex].markdown"
        ></v-textarea>
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
      memos: [
        {
          markdown: "Untitled Memo"
        }
      ],
      selectedIndex: 0
    };
  },
  methods: {
    logout: function() {
      // eslint-disable-next-line no-undef
      firebase.auth().signOut();
    },
    addMemo: function() {
      this.memos.push({ markdown: "Untitled Memo" });
    },
    selectMemo: function(index) {
      this.selectedIndex = index;
    },
    preview: function() {
      return marked(this.memos[this.selectedIndex].markdown);
    },
    displayTitle: function(text) {
      return text.split(/\n/)[0];
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
.memoListWrapper {
  width: 20%;
}
.memoTitle {
  white-space: nowrap;
  overflow: hidden;
}
.markdown {
  width: 50%;
}
.preview {
  width: 50%;
  text-align: left;
}
</style>
