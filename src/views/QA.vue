<template>
<v-container id="qa">
  <DatasetChoose :dataset="dataset"/>
  <h1>QA</h1>
  <v-progress-linear
    indeterminate
    color="cyan"
  ></v-progress-linear>
</v-container>
</template>

<script>
import DatasetChoose from "../components/DatasetChoose"
export default {
  components:{
    DatasetChoose
  },
  props:{
    dataset:{
      default:"",
      type:String
    }
  }

}
</script>

<style>
#qa{
  text-align:center;
}
</style>
