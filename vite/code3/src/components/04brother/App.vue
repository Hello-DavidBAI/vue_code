<template>
    <div>
        <h1>APP根组件</h1>
       <div class="container">
            <left class="l"></left>
            <right class="r"></right>
       </div>
    </div>
</template>
<script>
import Left from './left.vue'
import Right from './right.vue'
export default {
    name: 'MyApp',
    components: {
        Left,
        Right,
    }
}
</script>
<style scoped>
    .container{
        display: flex;
        justify-content: space-around;
    }
    .l,.r {
        flex: 1;
        border: 1px dotted #ccc;
    }
</style>