<template>
  <div class="RightBottom">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'RightBottom',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.RightBottom{
  width: 25vw;
  height: 30vh;
  color: red;
  background-color: rgb(129, 218, 245);
  /* border: 1px solid green; */
  display: flex;
  flex: 1;
}
</style>
