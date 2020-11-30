import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export default new Vuex.Store({
  state:{
    datasetName:null,
    dataBase:{},
    dataSet:{},
    answerTop10:[{answer:null}],
  },
  mutations:{
    mutateDataBase(state, payload){
      state.dataBase = payload;
    },
  },
  actions:{
    //データベース受け取り
    commitDataBase:(store)=>{
      return axios.get('https://a751440dca00.ngrok.io/get/database')
      .then(response => {
        for (let i=0; i < response.data.length; i++){
          response.data[i].show = false
          response.data[i].flex = 3
        }
        store.commit('mutateDataBase', response.data)
       })
       .catch((reason) => {
        console.log(reason.message)
        store.commit('mutateDataBase',{})
       })
    },
    //選択されたデータベースのpost
    pushDataBase(state){
      axios.post('https://a751440dca00.ngrok.io/post/database',{
      database:state.datasetName
      })
    }

  },
  getters: {
    getStateDataBase: (state) => state.dataBase
   }
})