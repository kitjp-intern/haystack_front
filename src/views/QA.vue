<template>
<v-container id="qa">
  <DatasetChoose :dataset="dataset"/>
  <v-card class="pa-sm-3 pa-md-7">
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
 
<v-container  color="black" class="card" fluid>
    <v-row class=" pt-10" justify="center">
          <v-col
            v-for="top in top5"
            :key="top.title"
            :cols="top.flex"
          >
          <v-dialog
            v-model="top.dialog"
            width="400px"
          >
          <template v-slot:activator="{ on, attrs }">
              <v-card outlined link hover v-bind="attrs" v-on="on">
                <v-card-title>{{top.name}}</v-card-title>
                <v-card-text>{{top.top}}</v-card-text>
              </v-card>
          </template>
          <v-card>
            <v-card-title>
               <span class="headline">{{top.name}}</span>
            </v-card-title>
            <v-card-text>
              {{top.content}}
            </v-card-text>
          </v-card>
          </v-dialog>
         </v-col>
        </v-row>
  </v-container>

  
</v-container>
</template>

<script>
import DatasetChoose from "../components/DatasetChoose"
export default {
  data:()=>({
    questionForm: {
        question: '',
      },
    query:"",
    answer:"texttexttexttexttexttexttexttexttext",
    top5: [
      {top:"1",name:"111111111.txt",content:"texttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttext",flex:"2",dialog:false}
      ,{top:"2",name:"222222222.txt",content:"texttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttext",flex:"2",dialog:false}
      ,{top:"3",name:"3333333333.txt",content:"texttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttext",flex:"2",dialog:false}
      ,{top:"4",name:"44444444444.txt",content:"texttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttext",flex:"2",dialog:false}
      ,{top:"5",name:"55555555555.txt",content:"texttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttext",flex:"2",dialog:false}
    ],
    dialog:false,
  }),
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
.answer{
  display: inline;
  text-align: center;
  color:black;
  border-bottom:solid;
  border-color:gray;
  margin-right: 700px;
}
</style>
