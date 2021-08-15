<template>
   <div>
  
    <p class="big color">classstyle555</p>
    <button @click="classObj.big = !classObj.big">click big</button>
    <button @click="classObj.color = !classObj.color">click color</button>
    <p :class="classObj">classstyle666</p>

   </div>
</template>
<script>
export default {
    name: 'App.vue-style-class',
    data(){
        return {   
         classObj:{
             big: true,
             color: false
         }
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