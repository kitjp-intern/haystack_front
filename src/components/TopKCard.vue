<template>
  <v-container  color="black" class="card" fluid>
    <v-row class=" pt-10" justify="center">
          <v-col
            v-for="top in answer10.q"
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
      {top:"1",name:"111111111.txt",content:"texttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttext",flex:"2",dialog:false}
      ,{top:"2",name:"222222222.txt",content:"texttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttext",flex:"2",dialog:false}
      ,{top:"3",name:"3333333333.txt",content:"texttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttext",flex:"2",dialog:false}
      ,{top:"4",name:"44444444444.txt",content:"texttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttext",flex:"2",dialog:false}
      ,{top:"5",name:"55555555555.txt",content:"texttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttexttexttexttexttextexttexttexttexttextettexttext",flex:"2",dialog:false}
    ],
    dialog:false,
  }),
  computed:{
    answer10(){
      return this.$store.state.answerTop10
    }
  },

}
</script>