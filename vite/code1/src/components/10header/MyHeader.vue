<template>
    <div>
        <div class="container" :style="{backgroundColor:bgc,color:color}" >{{title||'MyHeadervue big title'}}</div>
    </div>
</template>
<script>
export default {
    name: 'MyHeader',
    props:['title','color','bgc']
}
</script>
<style lang="less" scoped>
.container{
    width: 500px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    background-color: rgb(152, 39, 39);
    font-size: 25px;
    color: #fff
}
</style>