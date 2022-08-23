<template>
  <div class="RightMiddle">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'RightMiddle',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.RightMiddle{
  width: 25vw;
  height: 30vh;
  color: red;
  background-color: rgb(157, 92, 243);
  /* border: 1px solid green; */
  display: flex;
  flex: 1;
}
</style>
