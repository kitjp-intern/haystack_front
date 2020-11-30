<template>
  <v-container  color="black" class="card" fluid>
    <v-row v-if="answer1!=[{answer:null}]" class=" pt-10" >
          <v-col
            v-for="top in answer1"
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
    dialog:false,
  }),
  computed:{
    answer1(){
      console.log(this.$store.state.answerTop10)
      return this.$store.state.answerTop10
    }
  },

}
</script>