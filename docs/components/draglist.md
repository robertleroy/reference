# Vue Draggable

[Documentation](https://github.com/SortableJS/vue.draggable.next)  
[Examples](https://sortablejs.github.io/vue.draggable.next/#/simple)

``` vue
<!-- npm i -S vuedraggable@next -->

<script>
  import draggable from 'vuedraggable'
  export default {
    name: 'example',
    components: {     
      'draggable': draggable, 
    },
    data() {
      return {
        drag: false,
        numbers: [
          { name: 'One', id: 1 },
          { name: 'Two', id: 2 },
          { name: 'Three', id: 3 }
        ],
        letters: [
          { name: 'A', id: 'a' },
          { name: 'B', id: 'b' },
          { name: 'C', id: 'c' }
        ],        
      };
    },
    methods: { 
      clone: function(el) {
        return { name: el.name + " cloned" };
      },
    }
  };
</script>

<template>
  <section id='example'>
      <div class="row">
        <div class="col">
          <draggable 
            class="list-group"
            :list="numbers"
            group="lemons"
            itemKey="id">
            <template #item="{ element, index }">
              <div class="list-group-item">{{ element.name }} {{ index }}</div>
            </template>
          </draggable>
        </div>

        <div class="col">
          <draggable 
            class="list-group"
            :list="letters"
            group="lemons"
            itemKey="id">
            <template #item="{ element, index }">
              <div class="list-group-item">{{ element.name }} {{ index }}</div>
            </template>
          </draggable>
        </div> <!-- col -->
      </div> <!-- row --> 
  </section>
</template>

<style scoped lang='scss'>
  @import '../scss/imports';
  
  #example {
    padding: 1rem;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem 4rem;
  }
  .list-group {    
    min-height: 3rem;
    background: rgba(0,0,0,0.03);
  }
  .col {
    flex: 1;
  }
  .list-group-item {
    padding: 0.5rem 1rem;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    cursor: move;
    background: $backgroundColor
  }
  .ghost {
    opacity: 0.5;
    background: #c8ebfb;
  }
  .not-draggable {
    cursor: no-drop;
  }
</style>
````