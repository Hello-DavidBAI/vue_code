<template>
  <h1>App组件</h1>
  <hr>
  <todo-input @add="onAddNewTask"></todo-input>
  <todo-list :list="tasklist"></todo-list>
  <todo-button v-model:active="activeBtnIndex"></todo-button>
</template>
<script>
import TodoList from './components/todo-list/TodoList.vue'
import TodoInput from './components/todo-input/TodoInput.vue'
import TodoButton from './components/todo-button/TodoButton.vue'
export default {
  name: 'MyApp',
  components: {
    TodoList,
    TodoInput,
    TodoButton
  },
  data(){
    return{
      todolist: [
        { id: 1, task: '周一早晨9点开会', done: false },
        { id: 2, task: '周一晚上8点聚餐', done: false },
        { id: 3, task: '准备周三上午的演讲稿', done: true },
      ],
      nextId: 4,
      activeBtnIndex: 0
    }
  },
  methods: {
    onAddNewTask(tk){
     this.todolist.push({id:this.nextId,task:tk,done:false})
     this.nextId++
    }
  },
  computed: {
    tasklist(){
      switch(this.activeBtnIndex){
        case 0: return this.todolist
        case 1: return this.todolist.filter(x=>x.done)
        case 2: return this.todolist.filter(x=>!x.done)

      }
    }
  }
}
</script>
<style scoped>

</style>