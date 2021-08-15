<template>
    <form class="form-inline" @submit.prevent="onFormSubmit">
        <div class="input-group mb-2 mr-sm-2">
          <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="请输入Task" v-model.trim="taskname">
        </div>
        <button type="submit" class="btn btn-primary mb-2">创建新Task</button>
</form>
</template>
<script>
export default {
    name: 'TodoInput',
    data(){
        return {
            taskname: ''
        }
    },
    emits: ['add'],
    methods: {
        onFormSubmit(){
            if(!this.taskname) return alert('输入不能为空！！！')
            this.$emit('add',this.taskname)
            this.taskname = ''
        }
    }
}
</script>
<style scoped>

</style>