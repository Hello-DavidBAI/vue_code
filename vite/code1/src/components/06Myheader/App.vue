<template>
  <div>
    <h1>App.vue</h1>
    <h2>HHHHHHHHHHH222222222222222</h2>

    <my-header :name ="info.name||'白伟'" :age="uage||18"></my-header>
  </div>
</template>
<script>
import MyHeader from "./MyHeader.vue";
export default {
  name: "MyApp",
  components: {
    MyHeader,
  },
  data(){
      return {
          info: {
              name: 'andy',
              age: 23
          }
      }
  }
 

};
</script>
<style lang="less" scoped>
h1 {
  background-color: pink;
}
// /deep/ h2{
//     color: rgb(73, 57, 193)
// }
:deep(h2){
    color:aqua;
}

</style>