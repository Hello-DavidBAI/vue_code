<template>
   <div class="footer-container">
       <!-- 全选区域 -->
        <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="fullCheck1" :checked="isFull" @change="onCheckBoxChange">
            <label class="custom-control-label" for="fullCheck1">全选</label>
        </div>
        <!-- 合计区域 -->
        <div>
            <span>合计：</span>
            <span class="amount">￥{{amount.toFixed(2)}}</span>
        </div>
        <button class="btn-settle" type="button" class="btn btn-primary" :disabled="total===0">结算（{{total}}）</button>

   </div>
</template>

<script>
export default {
   name: 'EsFooter',
   data(){
       return{
               
       }
   },
   props: {
       amount: {
           type: Number,
           default: 0,
       },
       total: {
           type: Number,
           default: 0,
       },
       isFull: {
           type: Boolean,
           default: false,
       }
   },
   emits: ['fullChange'],
   methods: {
       onCheckBoxChange(e){
           this.$emit('fullChange',e.target.checked)
       }
   }
}
</script>
<style lang='less' scoped>
 .footer-container{
     display: flex;
     justify-content: space-around;
     align-items: center;
     position: fixed;
     bottom: 0;
     left: 0;
     width: 100%;
     height: 50px;
     background-color: #FFF;
     border-top: 1px solid #efefef;
     padding: 0 10px;
 }
 .amount {
     color: red;
     font-weight: 700;
 }
 .btn-settle {
     min-width: 90px;
     height: 38px;
     border-radius: 19px;
 }
</style>