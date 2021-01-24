<!-- # Directives -->

## Local Import
``` vue
<script>
  import { copy } from './directives/copy';

  directives: {
    "copy": copy,
  },  
</script>

<!-- template -->
<div v-copy:lorem
  class="icon btn btnCopy">content_copy</div>

<p id="lorem">Lorem ipsum dolor ...</p> 
```

## Global Import

<code-group>
  <code-block title="Vue 2">
  ``` js
  Vue.directive('focus', {
    inserted: el => el.focus()
  })
  ```
  </code-block>

  <code-block title="Vue 3" active>
  ``` js
  app.directive('focus', {
    mounted: el => el.focus()
  })
  ```
  </code-block>
</code-group>


## v-focus
``` js
/* vue 3 */
app.directive('focus', {
  mounted(el) {
    el.focus();
  }
})

/* <input v-focus type="text"> */
```

## v-highlight
<code-group>
  <code-block title="Vue 2">
  ``` js
  Vue.directive('highlight', {
    bind(el, binding) {
      el.style.background = binding.value
    }
  })
  
  /* <p v-highlight="'yellow'">Highlighted Text</p> */
  ```
  </code-block>

  <code-block title="Vue 3">
  ``` js
  app.directive('highlight', {
    beforeMount(el, binding) {
      el.style.background = binding.value
    }
  })
  
  /* <p v-highlight="'yellow'">Highlighted Text</p> */
  ```
  </code-block>
</code-group>



## v-copy
``` js
export const copy = ("copy", {
  // bind: function (el, binding) {     /* vue 2 */
  mounted: function (el, binding) {     /* vue 3 */ 
    if (!document.getElementById(binding.arg)) {
      console.log("error: element does not exist");
      return;
    }

    const copyToClipboard = function(e) {
      try {
        var elToCopy = document.getElementById(binding.arg);
        var range = document.createRange();  
        range.selectNodeContents(elToCopy);  
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range); 
        document.execCommand("copy");
        window.getSelection().removeAllRanges(); 
      } catch {
        console.log("error: an error occured");
      }
    }
    el.addEventListener("pointerdown", copyToClipboard);
  }
});

/* 
<div v-copy:lorem
  class="icon btn btnCopy">content_copy</div>

<p id="lorem">Lorem ipsum dolor ...</p> 
*/
```

## v-border
``` js
app.directive('border', (el, binding) => {
  el.style.borderWidth = Object.keys(binding.modifiers)[0] || '1px'
  el.style.borderStyle = binding.arg || 'solid';
  el.style.borderColor = binding.value || 'currentColor';
})
```