<!--  データセットカード  -->
<template>
  <v-container fluid>
    <v-row dense justify="center">

      <v-col
        v-for="card in dataOutput"
        :key="card.name"
        :cols="card.flex"
        >
        <transition name="router-transition" enter-active-class="animated slideInRight" leave-active-class="animated zoomOut" appear="" mode="out-in">
        <v-card
          elevation="5"
          outlined  
        >
          <v-card-title v-text="card.name"></v-card-title>
          <v-card-text v-text="card.summary"></v-card-text>
          
          <v-card-actions>
            <v-btn
            color="orange lighten-2"
            text
            @click="card.show = !card.show"
            >
            Explore
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn
            icon
            @click="card.show = !card.show"
          >
        <v-icon>{{ card.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
          <v-expand-transition>
            <div v-show="card.show">
              <v-divider></v-divider>
              <v-card-text>{{card.explain}}</v-card-text>
            </div>
          </v-expand-transition>
          <v-btn @click="datasetChange(card.name)" color="primary" rounded>データセット選択</v-btn>
        </v-card>
             </transition>
      </v-col>
    </v-row>
  </v-container>
  
</template>

<script>
export default {
  name:"DatasetCard",
  methods:{
    datasetChange(dataset){
      //store data change
      this.$store.state.datasetName = dataset
    }
  },
  computed:{
    dataOutput(){
      return this.$store.getters.getStateDataBase
    }
  },
  created() {
    this.$store.dispatch('commitDataBase')
  }
}
</script>

<style>

</style>