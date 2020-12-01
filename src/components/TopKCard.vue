<template>
  <v-container  color="black" class="card" fluid>
    <v-row dense v-if="answer1!=[{answer:null}]" class=" pt-10" >
          <v-col
            v-for="top in answer1"
            :key="top.answer"
            :cols="top.flex"
          >
          <v-dialog
            v-model="top.dialog"
            width="800px"
          >
          <template v-slot:activator="{ on, attrs }">
              <v-card outlined  hover v-bind="attrs" v-on="on" >
                <v-card-title v-if="top.answer.length<15">{{top.answer}}</v-card-title>
                <v-card-title v-else>{{top.answer.substring(0,14)+ '...'}}</v-card-title> 
                <v-card-subtitle>{{'Probabilty:'+Math.floor(top.prob*1000)/1000}}</v-card-subtitle>
              </v-card>
             <v-row justify="center" id="maru">
              <h3>{{top.top}}</h3>
             </v-row>
          </template>

          <v-card>
          <v-toolbar dense dark color="primary">
            <span>詳細</span>
            <v-spacer></v-spacer>
            <v-btn icon dark @click="top.dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
            <v-card-title>
               <span class="headline">Answer:{{top.answer}}</span>
            </v-card-title>
            <v-card-subtitle>{{'Probabilty:'+Math.floor(top.prob*1000)/1000}}</v-card-subtitle>
            <v-card-text v-html="top.context">
            </v-card-text>
          </v-card>
          </v-dialog>

         </v-col>
        </v-row>
  </v-container>
</template>

<script>
export default {
  data:()=>({
    dialog:false,
  }),
  computed:{
    answer1(){
      return this.$store.state.answerTop10
    }
  },

}
</script>

<style>
#maru {
 height:30px;
 width:30px;
 border-radius:50%;
 border: solid 1px black;
 line-height:30px;
 background-color:white;
 margin-top:10px;
 margin-left:200px;
 
}
</style>