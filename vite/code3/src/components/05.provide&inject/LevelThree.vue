<template>
  <div>
    <h5>Level Three 三级组件 </h5>
    <p>{{color.value}}</p>
    <p>{{age}}</p>
  </div>
</template>

<script>
export default {
  name: 'LevelThree',
  inject: ['color','age']
}
</script>

<style lang="less" scoped></style>
