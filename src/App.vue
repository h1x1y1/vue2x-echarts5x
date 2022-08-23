<template>
  <div id="app">
    <Header msg=""/>
    <div class="content">
      <AsideLeft></AsideLeft>
      <Center></Center>
      <AsideRight></AsideRight>
    </div>
  </div>
</template>

<script>
import Header from './components/Header/Header.vue'
import AsideLeft from './components/asiderLeft/AsideLeft.vue';
import Center from './components/center/Center.vue';
import AsideRight from './components/asiderRight/AsideRight.vue';


export default {
  name: 'App',
  components: {
    Header,
    AsideLeft,
    Center,
    AsideRight
}
}
</script>

<style scoped>
#app{
  display: flex;
  flex-direction: column;
}
.content{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
