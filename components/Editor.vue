<template>
<div class="editor">
  <h1>エディター画面</h1>
  <span>{{ user.displayName }}</span>
  <button @click="logout">ログアウト</button>
  <dir class="editorWrapper">
    <textarea class="markdown" v-model="markdown"></textarea>
    <div class="preview" v-html="preview()"></div>
  </dir>
</div>
</template>

<script>
import marked from 'marked'
import firebase from '~/plugins/firebase'

export default {
  name: 'editor',
  props: ['user'],
  data() {　
    return {　
      markdown: ''
    }　
  },
  methods: {
    logout: function() {
      firebase.auth().signOut()
    },
    preview: function() {
      return marked(this.markdown)
    }
  }
}　
</script>

<style lang="sass?indentedSyntax" scoped>
.editorWrapper
  display: flex

.markdown
  width: 50%
  height: 500px

.preview
  width: 50%
  text-align: left
</style>