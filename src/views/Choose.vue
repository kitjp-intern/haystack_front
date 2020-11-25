<template>
  <v-container id="choose">
    <DatasetChoose :dataset="dataset"/>
    <v-btn  color="primary" @click="datasetChange">データを決定</v-btn>
    <v-btn to="/QA">次に進む</v-btn>
    <DatasetCard v-on:my-click="dataset=$event"/>
  </v-container>
</template>

<script>
import DatasetCard from '../components/DatasetCard'
import DatasetChoose from '../components/DatasetChoose'
export default {
  data:() => ({
  }),
  props:{
    dataset:{
      default:"",
      type:String
    }
  },
  components:{
    DatasetCard,
    DatasetChoose
  },
  methods:{
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