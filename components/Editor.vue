<template>
<div class="editor">
  <h1>エディター画面</h1>
  <button @click="googleLogout">ログアウト</button>
</div>
</template>

<script>
import firebase from '~/plugins/firebase'

export default {　
  name: 'editor',　
  data() {　
    return {　
    }　
  },
  methods: {
    googleLogout: function() {
      firebase.auth().signOut().then(function(){
        console.log('logout...')
      })
    }
  }
}　
</script>