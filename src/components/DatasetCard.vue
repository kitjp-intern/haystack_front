<!--  データセットカード  -->
<template>
  <v-container fluid>
    <v-row dense justify="center">
      <v-col
        v-for="card in cards"
        :key="card.title"
        :cols="card.flex"
      >
        <v-card
          elevation="5"
          outlined  
        >
          <v-card-title v-text="card.title"></v-card-title>
          <v-card-text v-text="card.content"></v-card-text>
          
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
          <v-btn @click="datasetChange(card.title)" color="primary" rounded>データセット選択</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  
</template>

<script>
export default {
  name:"DatasetCard",
  data:() => ({
    cards: [
        { title: 'Driving Dataset', content: '自動車データセット',explain:'自動車データセット〜', flex: 4, show:false},
        { title: '???', content: '??????????????',explain:'??????????????????', flex: 4, show:false},
      ],
    datasetCard:""
  }),
  methods:{
    datasetChange(dataset){
      console.log(dataset)
      this.datasetCard = dataset
      this.$emit("my-click",this.datasetCard)
    }
  }
}
</script>

<style>

</style>