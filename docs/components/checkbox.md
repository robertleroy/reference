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
      <div class="icon">
        {{modelValue ? 'check' : 'check_box_underlined_blank'}}
      </div>        
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