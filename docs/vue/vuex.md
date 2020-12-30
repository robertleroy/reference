# Vuex


<code-group>
  <code-block title='Store' active>
  ``` js
  /* ./store/store */

  import { createStore } from 'vuex'

  export default createStore({
    state: {
      count: 0,
    },
    getters: {},
    mutations: {},
    actions: {}
  })
  ```
  </code-block>

  <code-block title='Options Api'>
  ``` js
    import { mapGetters } from "vuex";
  ```
  </code-block>

  <code-block title='Composition Api' >
  ``` js
    import { computed } from "vue";
    import { useStore } from "vuex";

    export default {
      setup() {
        const store = useStore();
        const count = computed(() => store.getters.count);

        function increment() {
          store.commit("increment");
        }
        
        return { title, count, increment };
      }
    }
  ```
  </code-block>
</code-group>
