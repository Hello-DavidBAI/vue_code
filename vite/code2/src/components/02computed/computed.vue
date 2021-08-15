<template>
  <div>
    <!-- <input type="text" v-model="count"><p>*2={{muntiply}}</p> -->
<input type="number" v-model="count">
    <p>{{count}}乘以2等于：{{mutiply}}</p>
  </div>
</template>
<script>
export default {
    name: 'Computed',
    data(){
        return{
            count:1
        }
    },computed:{
        mutiply(){
            return this.count*2
        }
    }
}
</script>