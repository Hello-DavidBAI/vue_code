<template>
    <div>
        <h2>MyWatch</h2>
        <input type="text" v-model="info.username">
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'MyWatch',
    data(){
        return {
            username: 'admin',
            info: {
                username: 'admin',
                age: 23,
            }
        }
    },
    watch: {
    //    async username(a,b){
    //        const {data:res} = await axios.get('https://www.escook.cn/api/finduser/${a}')
    //        console.log(res);
    //    }
        // username: {
        //     async handler(a,b){
        //         const {data:res} = await axios.get('https://www.escook.cn/api/finduser/'+a)
        //         console.log(res);
        //     },
        //     immediate: true,
        // }
        info: {
            async handler(a,b){
                const {data:res} = await axios.get('https://www.escook.cn/api/finduser/'+a.username)
                console.log(res);
            },
            deep:true,
            immediate: true,
        }
        // 'info.username': {
        //     async handler(a){
        //     const {data:res} = await axios.get('https://www.escook.cn/api/finduser/${a}')
        //     console.log(res);
        //     },
        //     immediate: true,
        //     deep: true,
        // }

    }
}
</script>
<style scoped>
/* https://www.escook.cn/api/finduser/ */
</style>