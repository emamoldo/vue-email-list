console.log('works');
const { createApp } = Vue 
createApp({
    data() {
        return {
            randomEmails: null
        }
    },
    methods: {
        callApi() {
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                console.log(response.data.response);
                this.randomEmails = response.data.response
            })
        }
    },
    mounted() {
        this.callApi()
    }
}).mount('#app')