<template>
  <v-container>
    <v-row justify="center">
      <h1>あなたが選んだデータセットは...</h1>
    </v-row>
    <v-row justify="center">
      <h1>{{ dataset }}</h1>
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

</style>