<template>
  <div>
    <h1>MyHeader 年龄：{{ age }}</h1>
    <h2>HHHHHHHHHHH {{ name }} 222222222222222</h2>
  </div>
</template>
<script>
export default {
  name: "MyHeader",
  props: ["name", "age"],
};
</script>
<style lang="less" scoped>
h1 {
  background-color: rgb(125, 213, 112);
}
</style>