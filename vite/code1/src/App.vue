<template>
  <div>
    <h1>App.vue</h1>
    <mysearch></mysearch>
    <MyTest></MyTest>
    <Test1></Test1>
    <mysearch-1><mysearch-1>
  </div>
</template>
<script>
import Search from './components/private/search.vue'
import s1 from './components/private/search1.vue'
export default {
  name: 'App6',
  components: {
    'mysearch':Search,
    'mysearch1': s1,
  }
}
</script>