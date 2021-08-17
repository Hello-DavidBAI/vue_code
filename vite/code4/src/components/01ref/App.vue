<template>
   <div>
   <h1 ref="myh11">MyApp11</h1>
   <button ref="mybtn" @click="getRef">click get $refs</button>
   <hr>
   <count ref="mycountref"></count>
   </div>
</template>

<script>
import Count from './count.vue'
export default {
   name: 'MyApp',
   components: {
       Count,
   },
   methods: {
       getRef(){
        //    console.log(this.$refs.myh11);
        // console.log(this.$refs);
        // this.$refs.myh11.style.color = 'red'
        // console.log(this.$refs.mycountref);
        // this.$nextTick(={})
        // this.$nextTick(()=>{})
        // this.$nextTick(()=>console.log(this.$refs.myh11))
        this.$refs.mycountref.reset()
       }
   }
}
</script>
<style lang='less' scoped>

</style>