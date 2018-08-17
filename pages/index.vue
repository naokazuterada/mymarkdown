<template>
<div id="app">
  <Home v-if="!isLogin"></Home>
  <Editor v-if="isLogin" :user="userData"></Editor>
</div>
</template>

<script>
import Home from '~/components/Home.vue'
import Editor from '~/components/Editor.vue'
import firebase from '~/plugins/firebase'
import auth from '~/plugins/auth'

export default {
  name: 'app',
  data() {
    return {
      isLogin: false,
      userData: null
    }
  },
  created: function() {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user)
      if(user) {
        this.isLogin = true
        this.userData = user
      }
      else {
        this.isLogin = false
        this.userData = null
      }
    })
  },
  components: {
    Home,
    Editor
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

