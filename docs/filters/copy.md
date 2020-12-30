# Copy
> *Vue 2 & 3*

<code-group>
  <code-block title="filter" active>
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
  ```
  </code-block>

  <code-block title="component">
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
  </code-block>
</code-group>
# Copy