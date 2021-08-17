<template>
  <div>
    <h1>MyApp _name_slot</h1>
    <hr />
    <my-article>
      <!-- <h2>default_slot</h2> -->
      <template #mybody="{msg:m12}">
        <h1>info_slot:{{m12}}</h1>
        <h1>msg_slot:{{m12}}</h1>
      </template>
      <!-- <h2 name="myfooter" >具名slot</h2> -->
    </my-article>
  </div>
</template>

<script>
import MyArticle from "./MyArticle.vue";
export default {
  name: "MyApp",
  components: {
    MyArticle,
  },
};
</script>
<style lang='less' scoped>
</style>