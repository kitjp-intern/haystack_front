import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export default new Vuex.Store({
  state:{
    datasetName:null,
    dataBase:{},
    dataSet:{},
    answerTop10:{},
    answer:{},
  },
  mutations:{
    mutateDataBase(state, payload){
      state.dataBase = payload;
    },
  },
  actions:{
    //データベース受け取り
    commitDataBase:(store)=>{
      return axios.get('https://927477f6db88.ngrok.io/get/database')
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
      axios.post('https://927477f6db88.ngrok.io/post/database',{
      database:state.datasetName
      })
    }

  },
  getters: {
    getStateDataBase: (state) => state.dataBase
   }
})