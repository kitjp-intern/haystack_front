<template>
  <v-container>
    <v-row justify="center">
      <h1>あなたが選んだデータセットは...</h1>
    </v-row>
    <v-row justify="center">
      <h1>{{ Dataset }}</h1>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props:{
    Dataset:{
      default:"",
      type:String
    }
  }

}
</script>

<style>

</style>