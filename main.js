const { createApp } = Vue;

createApp({
  data() {
    return {
      emails: [],
    };
  },
  methods: {
    callApi() {
      for (let index = 0; index < 10; index++) {
        axios
          .get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then((response) => {
            this.emails.push(response.data.response);
          });
      }
    },
  },
  mounted() {
    this.callApi();
  },
}).mount('#app');
