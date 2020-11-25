<template>
  <v-app id="app">
    <!-- アプリケーションバ ー-->
    <v-app-bar
      app
      color="#3698CC"
      dence
      dark
    >
    <v-toolbar-title>Long text Q&A Demonstration</v-toolbar-title>
    </v-app-bar>

    <!-- ナビゲーションドロワー -->
    <v-navigation-drawer 
            app 
            permanent 
            expandOnHover 
            dark 
            color="primary"
            >
      <v-list-item >
        <v-list-item-content color="primary">
          <v-list-item-title class="title">
            Menu
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title >{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- コンテンツ-->
    <v-main>
      <keep-alive><router-view v-on:dataset-change="dataset=$event" :dataset='dataset'></router-view></keep-alive>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data: () => ({
        items: [
          { title: 'Home', icon: 'mdi-home', link:'/'},
          { title: 'Choose Dataset', icon: 'mdi-text-box', link:'Choose' },
          { title: 'Question&Answering', icon: 'mdi-help-box', link:'QA' },
        ],
        dataset:"",
    
  }),
};
</script>
<style scoped>
  #app{
    background-color:lightgray
  }
</style>
