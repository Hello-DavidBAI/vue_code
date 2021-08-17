<template>
   <div>
   <h1>Count:{{count}}</h1>
   <button @click="count++">click+1</button>
   </div>
</template>

<script>
export default {
   name: 'Count',
   data(){
       return {
           count: 0,
       }
   },
   methods: {
       reset(){
           this.count = 0
       }
   }
}
</script>
<style lang='less' scoped>

</style>