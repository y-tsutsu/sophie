<template>
  <div id="editor">
    <v-container fluid="true">
      <v-layout row wrap class="editorWrapper">
        <v-flex xs2>
          <div class="memoListWrapper">
            <v-list class="memoList">
              <v-list-tile
                ripple
                v-for="(memo, index) in memos"
                :key="index"
                @click="selectMemo(index)"
              >
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
            <v-btn color="error" v-if="memos.length > 1" @click="deleteMemo">Delete Selected Memo</v-btn>
            <v-btn color="success" @click="saveMemos">Save Memos</v-btn>
          </div>
        </v-flex>
        <v-flex xs5>
          <v-textarea
            outline
            rows="40"
            label="Markdown"
            class="markdown"
            v-model="memos[selectedIndex].markdown"
          ></v-textarea>
        </v-flex>
        <v-flex xs5>
          <div class="preview markdown-body" v-html="preview()"></div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import marked from 'marked'

export default {
  name: 'Editor',
  data () {
    return {
      memos: [
        {
          markdown: 'Untitled Memo'
        }
      ],
      selectedIndex: 0
    }
  },
  created: function () {
    // eslint-disable-next-line no-undef
    firebase
      .firestore()
      .collection('memos')
      .doc(this.$store.state.user.uid)
      .get()
      .then(doc => {
        if (doc.exists && doc.data().memos) {
          this.memos = doc.data().memos
        }
      })
  },
  mounted: function () {
    document.onkeydown = e => {
      if (e.key === 's' && (e.metaKey || e.ctrlKey)) {
        this.saveMemos()
        return false
      }
    }
  },
  beforeDestroy: function () {
    document.onkeydown = null
  },
  methods: {
    addMemo: function () {
      this.memos.push({ markdown: 'Untitled Memo' })
    },
    deleteMemo: function () {
      this.memos.splice(this.selectedIndex, 1)
      if (this.selectedIndex > 0) {
        this.selectedIndex--
      }
    },
    saveMemos: function () {
      // eslint-disable-next-line no-undef
      firebase
        .firestore()
        .collection('memos')
        .doc(this.$store.state.user.uid)
        .set({ memos: this.memos })
    },
    selectMemo: function (index) {
      this.selectedIndex = index
    },
    preview: function () {
      return marked(this.memos[this.selectedIndex].markdown)
    },
    displayTitle: function (text) {
      return text.split(/\n/)[0]
    }
  }
}
</script>

<style lang="scss" scoped>
.editorWrapper > div {
  padding: 0 1rem;
}
.preview {
  text-align: left;
}
</style>
