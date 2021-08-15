<template>
    <h1>App.vue</h1>
    <h1>------{{count}}--------</h1>
    <button @click="count+=1">click+1</button>
    <hr>
    <counter v-model:number="count"></counter>
</template>
<script>
import Counter from './counter1.vue'
export default {
    name: 'MyApp',
    components: {
        Counter,
    },
    data(){
        return{
            count:666
        }
    }
}
</script>