<template>
  <v-container  color="black" class="card" fluid>
    <v-row v-if="answer==[{answer:null}]" class=" pt-10" justify="center">
          <v-col
            v-for="top in answer"
            :key="top.answer"
            :cols="top.flex"
          >
          <v-dialog
            v-model="top.dialog"
            width="400px"
          >
          <template v-slot:activator="{ on, attrs }">
              <v-card outlined link hover v-bind="attrs" v-on="on">
                <v-card-title>{{top.answer}}</v-card-title>
                <v-card-text>{{ top.top }}</v-card-text>
              </v-card>
          </template>
          <v-card>
            <v-card-title>
               <span class="headline">Answer:{{top.answer}}</span>
            </v-card-title>
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
    top5: [
      {top:"1",answer:"111111111.txt",context:"texttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttext",flex:"2",dialog:false}
      ,{top:"2",answer:"222222222.txt",context:"texttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttext",flex:"2",dialog:false}
      ,{top:"3",answer:"3333333333.txt",context:"texttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttext",flex:"2",dialog:false}
      ,{top:"4",answer:"44444444444.txt",context:"texttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttext",flex:"2",dialog:false}
      ,{top:"5",answer:"55555555555.txt",context:"texttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttext",flex:"2",dialog:false}
    ],
    dialog:false,
  }),
  computed:{
    answer(){
      console.log(this.$store.state.answerTop10)
      if (this.$store.state.answerTop10=={}){
        var asw=this.$store.state.answerTop10
      }else{
        asw=this.top5
      }
      return asw
    }
  },

}
</script>