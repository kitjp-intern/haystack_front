<!-- view Choose data -->
<template>
  <v-container id="choose">
    <DatasetChoose/>
    <v-btn 
      v-show="datasetName!=null" 
      @click="pushDataBase"
      to="/QA" 
      color="primary" 
      dense
      >データを決定し次に進む</v-btn>
    <DatasetCard/>
  </v-container>
</template>

<script>
import DatasetCard from '../components/DatasetCard'
import DatasetChoose from '../components/DatasetChoose'
import axios from 'axios'
export default {
  data:() => ({
  }),
  computed:{
    datasetName(){
      return this.$store.state.datasetName
    }
  },
  components:{
    DatasetCard,
    DatasetChoose
  },
  methods:{
    pushDataBase(){
      axios.post('https://a751440dca00.ngrok.io/post/database',{
      database:this.datasetName
      }).then(response=>{
        console.log(this.datasetName)
        console.log(response)
      }).catch(error=>{
        console.log(error)
      })
    }
  },
}
</script>

<style>
#choose{
  text-align: center;
}

</style>