<!--QAcard-->
<template>
<v-container id="qa">
  <v-row justify="center">
    <v-card class="pa-sm-3 pa-md-7" max-width="100%" >
    <v-card-title>Q&A</v-card-title>
    <h1 class="answer">Question</h1>
    <v-form ref="form" lazy-validation @submit.prevent>
      <v-container>
         <v-row justify="center" align-content="center">
         <v-col cols="8">
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
             @click="GetAnswer(questionForm.question)"
             color="primary"
             class="pa-1 ma-1"
            >SEND</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <h1 class="answer">Answer</h1>
    <h2>{{ answer1.answer }}</h2>
  </v-card>
  <v-snackbar
       v-model="snackBar.show"
       :color="snackBar.color"
       top
       :timeout="6000"
       class="font-weight-bold">
      {{snackBar.message}}
   </v-snackbar>
  </v-row>
</v-container>
</template>

<script>
import axios from 'axios'
export default {
  data:()=>({
    questionForm: {
        question: '',
    },
    snackBar: {
        show: false,
        color: '',
        message: ''
      }
  }),
  computed:{
    answerOutput(){
      return this.$store.state.answerTop10
    },
    answer1(){
      return this.$store.state.answer
    }
  },
  methods:{
    GetAnswer(query){
      let url = 'https://a751440dca00.ngrok.io/get/' + decodeURI(query);
      axios.get(url)
      .then(response=>{
        for (let i=0; i < response.data.q.length; i++){
          response.data.q[i].dialog =false
          response.data.q[i].flex = 4
          response.data.q[i].top = i + 1
        }
        this.$store.state.answerTop10 = response.data.q
        this.$store.state.answer = response.data.q[0]
        this.showSnackBar('success','通信成功')
      })
      .catch((reason)=>{
        console.log(reason.message)
        this.showSnackBar('error','取得に失敗しました。時間をおいて再度お試しください')
      })
    },
    showSnackBar: function (color, message) {
        this.snackBar.message = message
        this.snackBar.color = color
        this.snackBar.show = true
      },
  },
}
</script>

<style scoped>
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