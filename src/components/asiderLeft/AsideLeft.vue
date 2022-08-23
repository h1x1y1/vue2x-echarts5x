<template>
  <div class="AsideLeft">
    <LeftTop></LeftTop>
    <LeftMiddle></LeftMiddle>
    <LeftBottom></LeftBottom>
    <!-- {{ msg }} -->
  </div>
</template>

<script>
import LeftTop from './leftTop/LeftTop.vue';
import LeftMiddle from './leftMiddle/LeftMiddle.vue';
import LeftBottom from './leftBottom/LeftBottom.vue';
export default {
    name: "AsideLeft",
    props: {
        msg: String
    },
    components: { LeftTop, LeftMiddle, LeftBottom }
}
</script>

<style scoped>
.AsideLeft{
  width: 25vw;
  height: 93vh;
  color: red;
  background-color: yellow;
  /* border: 1px solid green; */
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-around;
}
</style>
