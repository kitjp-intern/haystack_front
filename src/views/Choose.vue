<!-- view Choose data -->
<template>
  <v-container id="choose">
    <DatasetChoose/>
    <v-btn 
      v-show="dataset!=null" 
      @click="datasetChange" 
      to="/QA" 
      color="primary" 
      dense
      >データを決定し次に進む</v-btn>
    <DatasetCard/>
    {{dataset}}
  </v-container>
</template>

<script>
import DatasetCard from '../components/DatasetCard'
import DatasetChoose from '../components/DatasetChoose'
export default {
  data:() => ({
  }),
  computed:{
    dataset(){
      return this.$store.state.dataset
    }
  },
  components:{
    DatasetCard,
    DatasetChoose
  },
  methods:{
    //変更されたdatasetをemitする
    datasetChange(){
      this.$emit("dataset-change",this.dataset)
    }
  },
}
</script>

<style>
#choose{
  text-align: center;
}

</style>