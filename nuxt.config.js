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
    ]
  },
  mode: 'spa',
  env: {
    APIKEY: 'AIzaSyD2vMqBxij3DiZ4NAbhbzTYaOiylOddyi0',
    AUTHDOMAIN: 'mymarkdown-dee5f.firebaseapp.com',
    DATABASEURL: 'https://mymarkdown-dee5f.firebaseio.com',
    PROJECTID: 'mymarkdown-dee5f',
    STORAGEBUCKET: '',
    MESSAGINGSENDERID: '164321246414'
  },
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

