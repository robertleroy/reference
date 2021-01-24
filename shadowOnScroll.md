# Shadow on Scroll

This strategy uses the `header` and it's `::before` and `::after` pseudo elements.  
It implements an offset of `sticky` position between them.   
All content of the header moves into a child `.content` element, also `sticky`.
> 1. `header` takes care of `sticky` and `z-index` offsets.
> 2. `.content` div takes all content and any styling; ie. grid, flex, padding, etc.

``` vue
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
    <div class="content">
      header
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

#appgrid {
  height: 100vh;
  
}

header .content, main {
  padding: 1rem 2rem;
}

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
    shadow(3);
  }
  &::after {
    top: 3rem;
    background: linear-gradient(#f7f7f7 10%, rgba(#f7f7f7,0.8) 50%, rgba(#f7f7f7,0.4) 70%, transparent);
    z-index: 2;
  }
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
  backface-visibility: hidden
  -webkit-backface-visibility: hidden;
}
</style>
```