<template>
  <div>
    <h1>07</h1>

    <my-header :name="info.name || nihao" :age="info.age||info.age>20?18:info.age"></my-header>
  </div>
</template>
<script>
import MyHeader from "./MyHeader.vue";
export default {
  name: "MyHeader07-App.vue",
  components: {
    MyHeader,
  },
  data() {
    return {

      info: {
        name: "baiwei",
        age: 66,
      },
    };
  },
 
};

</script>
<style lang="less" scoped>
h1 {
  color: red;
}
</style>
