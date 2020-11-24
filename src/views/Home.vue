<template>
  <v-container >
    <v-row justify="center">
    <h1>Haystack Q&Aの使い方</h1>
    </v-row>
    <v-row justify="center">
      <ol>
        <li>メニューの<v-icon>{{'mdi-text-box'}}</v-icon>Choose dataを選んでデータを選択してください</li>
        <li>選択後、<v-btn x-small rounded color='primary'>次に進む</v-btn>またはメニューの<v-icon>{{'mdi-help-box'}}</v-icon>Question and Answeringを選択</li>
        <li>質問文を記入後<v-btn x-small rounded  color='primary'>Send</v-btn></li>
        <li>答えを確認してください。詳細を知りたい場合<v-btn x-small rounded color='primary'>詳細</v-btn>をクリック</li>
        <li>他の回答を確認したい場合はカードをクリックしてください</li>
      </ol>
    </v-row>

  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style>
#home{
  text-align: center;
}

</style>
