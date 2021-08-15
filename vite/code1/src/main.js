import { createApp } from 'vue'
// import App from './App.vue'
// import App from './components/06Myheader/App.vue'
// import App from './components/07props/App.vue'
// import App from './components/08classstyle/App.vue'
// import App from './components/09classstyle/App.vue'
import App from './components/10header/App.vue'

// import Test from './components/globalreg/test.vue'
// import Test1 from './components/globalreg/test1.vue'

const app = createApp(App)
    // console.log(Test.name);
    // app.component(Test.name, Test)
    // app.component(Test1.name, Test1)
app.mount('#app')