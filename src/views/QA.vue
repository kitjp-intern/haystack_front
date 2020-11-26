<!-- Q&A  -->
<template>
<v-container id="qa">
  <DatasetChoose :dataset="dataset"/>
  <QACard/>
  <TopKCard/>
</v-container>
</template>

<script>
import DatasetChoose from "../components/DatasetChoose"
import TopKCard from "../components/TopKCard"
import QACard from "../components/QACard"

export default {
  data:()=>({
  }),
  components:{
    DatasetChoose,
    TopKCard,
    QACard,
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

</style>
