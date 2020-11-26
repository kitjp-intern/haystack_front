<!-- Q&A  -->
<template>
<v-container id="qa">
  <DatasetChoose :dataset="dataset"/>
  <v-card class="pa-sm-3 pa-md-7" max-width="100%" >
    <v-card-title>Q&A</v-card-title>
    <h1 class="answer">Question</h1>
    <v-form ref="form" lazy-validation @submit.prevent>
      <v-container>
         <v-row justify="center" align-content="center">
         <v-col cols="2">
            <v-text-field
              v-model="questionForm.question"
              label="質問"
              outlined
              dense
            ></v-text-field>
            <template v-slot:append-outer>
              <v-btn color="primary">検索</v-btn>
            </template>
          </v-col>
          <v-col cols="1">
            <v-btn 
             @click="query=questionForm.question"
             color="primary"
             class="pa-1 ma-1"
            >SEND</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <h1 class="answer">Ansewer</h1>
    <h2>{{ answer }}</h2> 
  </v-card>
  <TopKCard/>

  
</v-container>
</template>

<script>
import DatasetChoose from "../components/DatasetChoose"
import TopKCard from "../components/TopKCard"

export default {
  data:()=>({
    questionForm: {
        question: '',
      },
    query:"",
    answer:"texttexttexttexttexttexttexttexttext",

  }),
  components:{
    DatasetChoose,
    TopKCard
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
.answer{
  display: inline;
  text-align: center;
  color:black;
  border-bottom:solid;
  border-color:gray;
  margin-right: 700px;
}
</style>
