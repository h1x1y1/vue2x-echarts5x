<template>
  <div class="header">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.header{
  width: 100vw;
  height: 7vh;
  color: red;
  background-color: aquamarine;
  /* border: 1px solid green; */
}
</style>
