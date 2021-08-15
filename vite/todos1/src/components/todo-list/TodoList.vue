<template>
    <ul class="list-group">
        
        <li class="list-group-item d-flex justify-content-between align-items-center" v-for="item in list" :key="item.id">
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" :id="item.id" v-model="item.done">
                <label class="custom-control-label" :for="item.id" :class="item.done?'delete':''">{{item.task}}</label>
            </div>
            <span class="badge badge-primary badge-pill" v-if="item.done">已完成</span>
            <span class="badge badge-warning badge-pill" v-else>未完成</span>
        </li>
       
</ul>
</template>
<script>
export default {
    name: 'TodoList',
    props: ['list']
}
</script>
<style scoped>
 .delete {
     text-decoration: line-through;
     color: #ccc;
     font-style: italic;
 }
</style>