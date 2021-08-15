<template>
    <div>
        <h1>Appvue</h1>
    <count :count="num" :state="true" :info=str></count>
    </div>
</template>
<script>
import Count from './count.vue'
export default {
    name: 'MyApp',
    data(){
        return{
            num: 1821,
            str:'你好'
        }
    },
    components:{
        Count,
    }
}
</script>