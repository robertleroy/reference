# Vue-Router

<code-group>
  <code-block title="router" >
  ``` js
  /* ./router/router.js */

  import { createRouter, createWebHistory } from 'vue-router';
  import Home from '../views/Home.vue';
  import About from '../views/About.vue';

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    { 
      path: '/:pathMatch(.*)*', 
      redirect: '/'
    }
  ]

  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

  export default router;
  ```
  </code-block>

  <code-block title="component" >
  ``` html
  <!-- Navigation -->
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>

  <!-- Animated Router Transition -->
  <router-view v-slot="{ Component }">
    <transition name='fade' mode='out-in'>
      <component :is="Component"/>
    </transition>
  </router-view>
  ```
  </code-block>
</code-group>

