<template>
   <div>
   <h1>MyApp</h1>
   <hr>
   <my-table :data="goodslist">
     <template #header>
       <th scope="col">ID</th>
       <th scope="col">商品名称</th>
       <th scope="col">价格</th>
       <th scope="col">标签</th>
       <th scope="col">操作</th>
     </template>
     <template #body={row,index}>
       <td>{{row.id}}</td>
       <td>{{row.goods_name}}</td>
       <td>￥{{row.goods_price}}</td>
       <td>
         <input type="text" class="form-control form-control-sm ipt-tag" v-if="row.inputVisible" v-focus v-model.trim="row.inputValue" @blur="addtag(row)"  @keyup.enter="addtag(row)" @keyup.esc="row.inputValue=''">
         <button type="button" class="btn btn-primary btn-sm" v-else @click="row.inputVisible=true">+Tag</button>

         <span class="badge badge-pill badge-warning ml-2" v-for="(item,i) in row.tags" :key="i">{{item}}</span>
       </td>
       <td >
         <button type="button" class="btn btn-danger" @click="del(row.id)">删除</button>
       </td>
     </template>
  

   </my-table>
   </div>
</template>

<script>
import MyTable from './components/my-table/MyTable.vue'
export default {
   name: 'MyApp',
   components: {
     MyTable,
   },
   data() {
     return {
       goodslist: []
     }
   },
   created(){
     this.getGoodsList()
   },
   methods: {
     async getGoodsList(){
       const {data:res} = await this.$http.get('/api/goods')
      //  console.log(res.data);
      if(res.status !== 0) return alert('获取数据失败！！！')
      this.goodslist = res.data
      // console.log(this.goodslist);
     },
    del(id){
      this.goodslist = this.goodslist.filter(x=>x.id!==id)
    },
    addtag(item) {
      const val = item.inputValue
      item.inputValue = ''
      item.inputVisible = false

      if(!val || item.tags.indexOf(val) !== -1) return
      item.tags.push(val)

      // if(item.inputValue==='') return
      // item.tags.unshift(item.inputValue) 
      // item.inputVisible = false
      // item.inputValue = ''
    }
   },
   directives: {
     focus(el) {
       el.focus()
     }
   }
}
</script>
<style lang='less' scoped>
  .ipt-tag {
    width: 40px;
    display: inline;
  }
</style>