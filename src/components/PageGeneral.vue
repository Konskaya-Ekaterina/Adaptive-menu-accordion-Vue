<template>
  <h1>{{ getPageTitle }}</h1>
</template>

<script>
export default {
  name: "PageGeneral",
  computed: {
    getPageTitle() {
      return this.$route.path.slice(1)
    }
  }
}
</script>

<style scoped>

</style>