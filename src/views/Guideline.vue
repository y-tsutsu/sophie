<template>
  <div id="guideline">
    <v-content>
      <h1>†SOPHIE†って？</h1>
      <p>
        †SOPHIE†は簡単にすぐ使えるマークダウン対応のメモアプリです．
        Googleアカウントで簡単に登録して，すぐに利用することができます．
      </p>
      <ul>
        <li>メモの追加
          <br>ADD MEMOボタンを押して新規のメモを追加することができます．
        </li>
        <li>メモの削除
          <br>DELETE SELECTED MEMOボタンを押して選択しているメモを削除することができます．
        </li>
        <li>メモの保存
          <br>SAVE MEMOSボタンを押してすべてのメモを保存することができます．
        </li>
      </ul>
      <br>
      <h1>†SOPHIE†を支える技術</h1>
      <p>
        †SOPHIE†は次のフレームワークやサービスを使って開発しています．
      </p>
      <ul>
        <li>Vue.js
          <br>Webアプリケーションにおけるユーザーインターフェイスを構築するための，オープンソースのJavaScriptフレームワークです．
        </li>
        <li>Vuetify
          <br>Vue.jsで使える，マテリアルデザインのフレームワークです．
        </li>
        <li>Firebase
          <br>すばやく高品質のモバイルアプリを開発することができるプラットフォームで，開発に役立つ数多くの機能が用意されています．
        </li>
      </ul>
      <br>
      <v-btn color="info" class="topBtn" :to="{ name: 'top' }">Top</v-btn>
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

<style lang="scss" scoped>
h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  background: linear-gradient(transparent 70%, #ff80ab 70%);
}
p,
li {
  font-size: 1.2rem;
}
h1,
p,
ul {
  text-align: initial;
  margin-left: 30rem;
  margin-right: 30rem;
}
ul,
ol {
  color: #283593;
  border: dashed 2px #0d47a1;
  background: #f8fafd;
  padding: 0.5rem 0.5rem 0.5rem 2rem;
}
ul li,
ol li {
  padding: 0.5rem 0;
}
</style>
