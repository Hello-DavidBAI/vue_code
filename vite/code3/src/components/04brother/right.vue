<template>
    <div>
        <h1>right</h1>
        <p>{{num}}</p>
    </div>
</template>
<script>
import bus from './eventBus.js'
export default {
    name: 'Right',
    data(){
        return {
            num:0
        }
    },
    created(){
        bus.on('countChange',(count)=>{
            this.num = count
        })
    }
}
</script>