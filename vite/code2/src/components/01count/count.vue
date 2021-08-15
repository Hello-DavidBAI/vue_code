<template>
    <div>
        <p>数量：{{count}}</p>
        <p>状态：{{state}}</p>
        <p>info：{{info}}</p>
    </div>
</template>
<script>
export default {
    name:'MyCount',
    props:{
        count:{
            type: Number,
            required: true,
            default: 666
        },
        state: Boolean,
        info:[String,Boolean]
    }
}
</script>