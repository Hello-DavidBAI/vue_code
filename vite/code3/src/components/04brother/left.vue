<template>
    <div>
        <h1>left</h1>
        <button @click="add">click++</button>
        <p>{{count}}</p>
    </div>
</template>
<script>
import bus from './eventBus.js'
export default {
    name: 'Left',
    data(){
        return {
            count: 0
        }
    },
    methods: {
        add(){
            this.count++
            bus.emit('countChange',this.count)
        }
    }
}
</script>