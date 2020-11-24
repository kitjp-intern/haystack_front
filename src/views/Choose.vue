<template>
  <v-container id="choose">
    <DatasetChoose :dataset="Dataset"/>
    <DatasetCard/>
  </v-container>
</template>

<script>
import DatasetCard from '../components/DatasetCard'
import DatasetChoose from '../components/DatasetChoose'
export default {
  data:() => {
    return{
      Dataset:""
    }
  },
  components:{
    DatasetCard,
    DatasetChoose
  }
}
</script>

<style>
#choose{
  text-align: center;
}

</style>