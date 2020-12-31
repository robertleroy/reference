# Checkbox

<code-group>
  <code-block title="Checkbox">
  ``` vue
  <script>
    export default {
      name: 'Checkbox',
      props: ['modelValue'],
      emits: ['update:modelValue']    
    };
  </script>

  <template>
    <label class="checkbox btn">
        <svg xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          v-if="modelValue">
          <path fill="none" d="M0 0h24v24H0z"/>
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          v-else>
          <path fill="none" d="M0 0h24v24H0z"/>
          <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
        </svg>
        
      <input ref="check" 
          type="checkbox" 
          :checked="modelValue"
          @change="$emit('update:modelValue', $event.target.checked)">   
    </label>    
  </template>

  <style scoped lang='stylus'>
    // @import '../scss/imports';
    @import '../styl/imports';

    .checkbox {
      position: relative;
      display: inline-block;
      cursor: pointer;
      line-height: 1;
      user-select: none;
      vertical-align: baseline;
      color: black;
      color: currentColor;

      &:hover {
        opacity: 0.6;
      }
      &:active {
        opacity: 0.3;    
      }
      input {
        position: absolute;
        z-index: -1;
        opacity: 0;
        height: 0;
        width: 0;   
      }
      svg {
        color: inherit;
        height: 1em;
        width: 1em;
        font-size: 24px;
        border: none;
        outline: none;
        user-select: none;
        vertical-align: text-bottom;  
      }
    }
  </style>
  ```
  </code-block>

  <code-block title="component">
  ``` html
  <Checkbox v-model="item.completed"/>
  ```
  </code-block>
</code-group>