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
  },
  mutations:{
    mutateDataBase(state, payload){
      state.dataBase = payload;
    },
  },
  actions:{
    commitDataBase:(store)=>{
      return axios.get('https://a751440dca00.ngrok.io/get/database')
      .then(response => {
        for (let i=0; i < response.data.length; i++){
          response.data[i].show =false
          response.data[i].flex =3
        }
        store.commit('mutateDataBase', response.data)
       })
       .catch((reason) => {
        console.log(reason.message)
       })
    },
    }
  },
  getters: {
    getStateDataBase: (state) => state.dataBase
   }
})