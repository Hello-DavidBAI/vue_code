<template>
   <div class="header-container" :style="{color:color,backgroundColor:bgcolor,fontSize:fsize+'px'}">
   <h1>{{title}}</h1>
   </div>
</template>

<script>
export default {
   name: 'EsHeader',
   data(){
       return{
               
       }
   },
   props: {
       title: {
           type: String,
           required: true,
           default: 'es-header'
       },
       color: {
           type: String,
           default: '#FFF'
       },
       bgcolor: {
           type: String,
           default: '#7952B3'
       },
       fsize: {
           type: Number,
           default: 12
       }
   },
}
</script>
<style lang='less' scoped>
    .header-container {
        height: 45px;
        line-height: 45px;
        text-align: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 999;
    }

</style>