<!-- Q&A  -->
<template>
<v-container id="qa">
  <DatasetChoose/>
  <QACard/>
  <TopKCard v-if="$store.state.answer!={}"/>
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
}
</script>

<style>

</style>
