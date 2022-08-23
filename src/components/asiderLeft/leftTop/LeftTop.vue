<template>
  <div class="LeftTop">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'LeftTop',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.LeftTop{
  width: 25vw;
  /* height: 30vh; */
  color: red;
  background-color: rgb(129, 218, 245);
  /* border: 1px solid green; */
  display: flex;
  flex: 1;
}
</style>
