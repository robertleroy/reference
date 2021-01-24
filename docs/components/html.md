# Html Components

## Dynamic Textbox

> Expands & contracts ***width*** according to content

<code-group>
  <code-block title="html"> 
  ``` html
  <div class="dynamic-textbox">
    <input type="text" placeholder="text" size="8"
    oninput="this.parentNode.dataset.value = this.value">  
  </div>
  ```
  </code-block>

  <code-block title="css"> 
  ``` css
  .dynamic-textbox {
    position: relative;
    display: inline-grid;
    align-items: center;
    padding: 0.25em 0.5em; 
    border-radius: 0.25rem;   
    box-shadow: 0px 0px 0px 1px inset $muted-5;
    
    &::after,
    [type="text"] {
      width: auto;
      min-width: 3rem;
      grid-area: 1 / 1;
      font: inherit;
      padding: 0;
      
      overflow: hidden;  
      -webkit-appearance: none;
      appearance: none;
          
      box-shadow: none;
      &:hover {
        box-shadow: none;
      }
      &:active {
        box-shadow: none;
      }  
      &:focus {
        box-shadow: none;
      }  
    }
  }
  ```
  </code-block>
</code-group>




## Dynamic Textarea

> Expands ***height*** according to content

``` html
<textarea class="textbox" rows="1" cols="70"
  v-model="item.text" 
  placeholder='required' 
  spellcheck="false" 
  onfocus="this.style.height=this.scrollHeight+'px'"
  oninput="this.style.height=this.scrollHeight+'px'">
</textarea>
```