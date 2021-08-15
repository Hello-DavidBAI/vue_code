<template>
  <div>
    <h1>07 header</h1>
    <p>name------{{ name }}</p>
    <p>age------{{ age }}</p>
  </div>
</template>
<script>
export default {
  name: "MyHeader",
  props:['name','age']
};
</script>
<style lang="less" scoped>
h1 {
  color: rgb(0, 255, 81);
}
</style>