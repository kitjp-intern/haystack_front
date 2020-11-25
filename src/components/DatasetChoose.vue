<!--  データセットが選択された時の表示  -->
<template>
  <v-container>
    <v-row justify="center">
      <h2>あなたが選んだデータセットは...</h2>
    </v-row>
    <v-row justify="center">
      <h1 id="datasetname">{{ dataset }}</h1>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props:{
    dataset:{
      default:"",
      type:String
    }
  }

}
</script>

<style>
#datasetname{
  color:#3698CC;
}

</style>