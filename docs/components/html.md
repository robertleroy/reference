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


<br>
---



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

<br>
---

## Shadow on Scroll

Uses the `header` , `::before` and `::after` pseudo elements.  
Implements an offset of `sticky` positions between them.   
All content moves into a child `.content` element, also `sticky`.
> 1. `header` offsets `sticky` and `z-index` offsets.
> 2. `.content` does all content and styling; ie. display, padding, etc.

``` vue
<template>
<div id="appgrid" v-cloak>
  <header>
    <div class="content">
      Header Content
    </div>    
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

#appgrid { height: 100vh;  }

header .content, main {
  padding: 1rem 2rem; }

header {
  position: sticky;
  height: 5rem;
  top: -1rem;
  z-index: 1;
  &::before, &::after {
    content: '';
    position: sticky;
    display: block;
    width: 100%;
    height: 1rem;
  }
  &::before {
    top: 3rem;
    shadow(3); }
  &::after {
    top: 3rem;
    background: linear-gradient(#f7f7f7 10%, rgba(#f7f7f7,0.8) 50%, rgba(#f7f7f7,0.4) 70%, transparent);
    z-index: 2; }
  .content {
    position: sticky;
    margin-top: -1rem;
    height: 4rem;
    top: 0;
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    background: $backgroundColor;
    box-shadow: 0 1px 0 rgba(0,0,0,0.1);
    z-index: 3;
  }
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
</style>
```

<br>
---


