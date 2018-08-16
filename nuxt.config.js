module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'mymarkdown',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    secript: [
      { src: 'https://www.gstatic.com/firebasejs/5.3.1/firebase.js' },
      { innerHTML: '// Initialize Firebase\
                    var config = {\
                      apiKey: "AIzaSyD2vMqBxij3DiZ4NAbhbzTYaOiylOddyi0",\
                      authDomain: "mymarkdown-dee5f.firebaseapp.com",\
                      databaseURL: "https://mymarkdown-dee5f.firebaseio.com",\
                      projectId: "mymarkdown-dee5f",\
                      storageBucket: "",\
                      messagingSenderId: "164321246414"\
                    };\
                    firebase.initializeApp(config);' }
    ]
  },
  mode: 'spa',
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

