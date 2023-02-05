import Vue from 'vue'

new Vue({
  data: {
    message: 'Bonjour, monde !'
  },
  template: `
    <div>
      {{ message }}
    </div>
  `
}).$mount('#app')