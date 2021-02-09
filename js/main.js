const app = new Vue ( {
  el: '#app',
  data: {
    listCds: [],
  },

  mounted(){
    axios
    .get('https://flynn.boolean.careers/exercises/api/array/music')
    .then(result => {
      this.listCds = result.data.response;
      console.log(result.data.response);
    });

  }
})
