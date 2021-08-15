<template>
    <div class="btn-group mt-3 button-container" role="group" aria-label="Basic example">
        <button type="button" class="btn" :class="active===0?'btn-primary':'btn-secondary'" @click="onBtnClick(0)">全部</button>
        <button type="button" class="btn" :class="active===1?'btn-primary':'btn-secondary'" @click="onBtnClick(1)">已完成</button>
        <button type="button" class="btn" :class="active===2?'btn-primary':'btn-secondary'" @click="onBtnClick(2)">未完成</button>
    </div>
</template>
<script>
export default {
    name: 'TodoButton',
    props: {
        active: {
            type: Number,
            required: true,
            default: 0,
        }
    },
    emits: ['update:active'],
    methods: {
        onBtnClick(i){
            this.$emit('update:active',i)
        }
    },
    
}
</script>
<style scoped>
.button-container {

 width: 400px;

 text-align: center;
}
</style>