<template>
   <div class="box">
        <h1>header封装案例</h1>
        <my-header bgc="#123" color="green" class="myheader" title="黑马"></my-header>
   </div>
</template>
<script>
import MyHeader from './MyHeader.vue'
export default {
    name: 'MyApp',
    components: {
        MyHeader,
    }
}
</script>
<style lang="less" scoped>
.box{

  width: 500px;
    margin: 0 auto;
}
.myheader{
    position: fixed;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
}

h1 {
  margin-top: 120px;
}
</style>