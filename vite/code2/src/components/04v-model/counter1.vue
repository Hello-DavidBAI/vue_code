<template>
  <div>
    <h1>Counter vue</h1>
    <p>{{ number }}</p>
    <button @click="add">click+1</button>
  </div>
</template>
<script>
export default {
  name: 'MyCounter',
  props: ['number'],
  emits: ['updata:number'],
  data(){
      return{
          number:0
      }
  },
 methods: {
    add() {
      console.log(123456);
      this.$emit('updata:number', this.number + 1);
    },
  },
};
</script>