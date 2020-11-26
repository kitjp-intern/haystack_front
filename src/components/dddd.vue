<template>
  <div>
    <pre>{{ dataOutput }}</pre>
  </div>
</template>

<script>
export default {
  computed:{
    dataOutput(){
      return this.$store.getters.getStateDataBase
    }
  },
  created() {
    this.$store.dispatch('commitDataBase')
  }
}
</script>

<style>

</style>