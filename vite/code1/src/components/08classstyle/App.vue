<template>
   <div>
        <h1>classstyle555</h1>
    <p class="big color">classstyle555</p>
    <button @click="isbig=!isbig">Toggle big</button>
    <button @click="iscolor=!iscolor">Toggle big</button>
    <p :class="[isbig?'big':'',iscolor?'color':'']">classstyle555</p>
   </div>
</template>
<script>
export default {
    name: 'App.vue-style-class',
    data(){
        return {
            isbig:false,
            iscolor: false,
        }
    }
}
</script>
<style lang="less" scoped>
    .big{
        font-size: 40px;
      
    }
    .color{
          color: rgb(38, 196, 13);
    }
</style>    