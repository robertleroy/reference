<!-- ## Vue

* [Vue 3](/vue/vue.md) 
* [Vue-Router](/vue/vue-router.md) 
* [Vuex](/vue/vuex.md)   -->

# Vue 3

## Create Project 

<code-group>
  <code-block title="Vue Cli" >
  ``` bash
  vue create <project-name>
  ```
  </code-block>

  <code-block title="Vite" active>
  ``` bash
  # Vite   
  npm init @vitejs/app <project-name>
  npm install
  npm run dev
  
  # Utilities 
  npm install -D sass
  npm install -D stylus
  npm install vue-router@next
  npm install vuex@next
  ```
  </code-block>
</code-group>


## App

<code-group>
  <code-block title="main.js">
``` js
  /* main.js */

  import { createApp } from 'vue'
  import App from './App.vue'
  // import router from './router/router'
  // import store from './store/store'
  // import './index.css'

  createApp(App)
  // .use(router)
  // .use(store)
  .mount('#app')
```
  </code-block>

  <code-block title="App.vue" active>
  ``` vue
<!--App.vue -->

<script>
export default {
  name: 'App',
  data() {
    return {
      title: "Vue 3!"
    }
  }
}
</script>

<template>
<div id="appgrid" v-cloak>
  <header>
    <h4>{{title}}</h4>
    
  </header>

  <main>
    Main
    
  </main>
</div> 
</template>

<!--
<style lang="scss">
@import './scss/baseline';
-->
<style lang="stylus">
@import './stylus/baseline';

#appgrid {
  height: 100vh;
  
}

header, main {
  padding: 1rem 2rem;
}

header {
  position: sticky;
  top: 0;
  background: 
    $backgroundColor;

  display: flex;
  justify-content: space-between;

  // @include shadow(3);
  shadow(3);
}
</style>
  ```
  </code-block>
</code-group>

