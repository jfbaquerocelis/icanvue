'use strict'

let app = new Vue({
  el: '#app',
  data: {
    error: false,
    errorMessage: '',
    domain: '',
    items: null,
    history: []
  },
  methods: {
    searchInfo: function () {
      if (this.domain) {
        axios.get(`http://localhost:3000/servers/${this.domain}`).then(response => {
          this.history.push({
            search: this.domain,
            dateAt: new Intl.DateTimeFormat('es-CO', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', 'second': 'numeric' }).format(new Date())
          })
          this.items = response.data
        }).catch(err => {
          this.error = true
          this.errorMessage = err.message
        })
      } else {
        this.error = true
        this.errorMessage = 'Please, enter the domain for search the info'
      }
    }
  }
})
