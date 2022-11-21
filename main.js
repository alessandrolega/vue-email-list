var app = new Vue({
    el: '#app',
    data: {
        dataEmails: [],
        
        
    },
    methods: {
        generateEmail(){
            for(i=0; i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    console.log(response.data.response)
                    let responseData = response.data.response;
                    this.dataEmails.push(responseData);
                    console.log(this.dataEmails)
                
            })
            }
        }
    }
  })