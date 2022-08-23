<template>
  <div class="LeftBottom">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'LeftBottom',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.LeftBottom{
  width: 25vw;
  /* height: 30vh; */
  color: red;
  background-color: rgb(52, 196, 240);
  /* border: 1px solid green; */
  display: flex;
  flex: 1;
}
</style>
