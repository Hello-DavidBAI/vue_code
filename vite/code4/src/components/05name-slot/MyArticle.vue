<template>
   <div>
   <h1>MyArticle</h1>
   <!-- <slot></slot> -->
   <slot name="mybody" :info="info" :msg="msg" ></slot>
   
   </div>
</template>

<script>
export default {
   name: 'MyArticle',
   data(){
       return {
           info: {
               a: 1,
               b: 2
           },
           msg: 666
       }
   }
}
</script>
<style lang='less' scoped>

</style>