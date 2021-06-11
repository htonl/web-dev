const app = Vue.createApp({
  data() {
    return {
      firstName: 'Luke',
      lastName: 'Doe',
      email: 'john@gmail.com',
      gender: 'male',
      picture: 'https://randomuser.me/api/portraits/men/10.jpg',
    }
  }
})

app.mount('#app')
