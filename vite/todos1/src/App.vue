<template>
  <h1>App组件</h1>
  <hr>
  <todo-list :list="todolist"></todo-list>
</template>
<script>
import TodoList from './components/todo-list/TodoList.vue'
export default {
  name: 'MyApp',
  components: {
    TodoList,
  },
  data(){
    return{
      todolist: [
        { id: 1, task: '周一早晨9点开会', done: false },
        { id: 2, task: '周一晚上8点聚餐', done: false },
        { id: 3, task: '准备周三上午的演讲稿', done: true },
      ]
    }
  }
}
</script>
<style scoped>

</style>