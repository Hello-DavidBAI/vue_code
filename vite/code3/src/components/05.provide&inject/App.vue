<template>
  <div>
    <h1>App 根组件 -- {{ color }}</h1>
    <button type="button" class="btn btn-primary" @click="color = 'blue'">Toggle Blue</button>
    <button @click="info.age++">click++</button>
    <hr />

    <level-two></level-two>
  </div>
</template>

<script>
import LevelTwo from './LevelTwo.vue'
import { computed } from 'vue'


export default {
  name: 'MyApp',
  data() {
    return {
      color: 'red',
      info: {
        age: 23
      }
    }
  },
  provide(){
    return {
      age: computed(()=>this.info.age),
      color: computed(()=>this.color)
    }
  },
 
  components: {
    LevelTwo,
  },
}
</script>

<style lang="less" scoped></style>
