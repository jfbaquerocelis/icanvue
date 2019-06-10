'use strict'

let app = new Vue({
  el: '#app',
  data: {
    error: false,
    errorMessage: '',
    domain: '',
    items: null,
    history: null
  },
  methods: {
    searchInfo: function () {
      if (this.domain) {
        axios.get(`http://localhost:3000/servers/${this.domain}`).then(response => {
          this.items = response.data
        }).catch(err => {
          this.error = true
          this.errorMessage = err.message
        })
      } else {
        this.error = true
        this.errorMessage = 'Please, enter the domain for search the info'
      }
    },
    showHistory: function () {
      axios.get(`http://localhost:3000/servers`).then(response => {
        this.history = response.data
      }).catch(err => {
        this.error = true
        this.errorMessage = err.message
      })
    }
  }
})
