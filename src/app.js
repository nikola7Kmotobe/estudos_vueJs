const app = Vue.createApp({
    data() {
     return {
        name: "",
        Input_name: ""
     }
    },methods: {
        submitForm(event) {
            event.preventDefault();

            this.name = this.Input_name
        }
      }
})
   
app.mount('#app')