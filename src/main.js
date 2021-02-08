const app = Vue.createApp({
  data() {
    return {
      showThis: true,
      value: 'If there is Value, it will show.',
      nothing: ''
    }
  },
  methods: {
    toggleShow() {
      this.showThis = !this.showThis;
    }
  }
})

app.mount('#app');