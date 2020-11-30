<!-- Q&A  -->
<template>
<v-container id="qa">
  <DatasetChoose/>
  <transition name="router-transition" enter-active-class="animated zoomIn" leave-active-class="animated zoomOut" appear="" mode="out-in">
    <QACard/>
  </transition>
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
}
</script>

<style>

</style>
