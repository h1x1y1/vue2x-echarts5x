<template>
  <div class="LeftMiddle">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'LeftMiddle',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.LeftMiddle{
  width: 25vw;
  /* height: 30vh; */
  color: red;
  background-color: rgb(23, 98, 121);
  /* border: 1px solid green; */
  display: flex;
  flex: 1;
}
</style>
