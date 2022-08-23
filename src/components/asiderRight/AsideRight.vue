<template>
  <div class="AsideRight">
    <RightTop></RightTop>
    <RightMiddle></RightMiddle>
    <RightBottom></RightBottom>
    <!-- {{ msg }} -->
  </div>
</template>

<script>
import RightTop from './rightTop/RightTop.vue';
import RightMiddle from './rightMiddle/RightMiddle.vue';
import RightBottom from './rightBottom/RightBottom.vue';
export default {
    name: "AsideRight",
    props: {
        msg: String
    },
    components: { RightTop, RightMiddle, RightBottom }
}
</script>

<style scoped>
.AsideRight{
  width: 25vw;
  height: 93vh;
  color: red;
  background-color: green;
  /* border: 1px solid green; */
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-around;
}
</style>
