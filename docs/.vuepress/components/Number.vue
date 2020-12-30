<script>
  export default {
    name: 'Number',
    props: ['value','min','max'],
    // emits: ['update:modelValue'],
    model: {
      prop: 'value',
      event: 'change'
    },
    data() {
      return { counting: false };
    },
    computed: {
      count: {
        get() { return this.value; },
        set(val) { this.$emit('change', val); }
      }
    },
    methods: { 
      updateCount(i) {
        let x = +this.count + i;
        if (x < this.min) { this.count = this.min }
        else if (x > this.max) { this.count = this.max }
        else { this.count = x }
      },
      start(i){
        if(!this.counting){
          this.counting = setInterval(() => this.updateCount(i), 300)	
        }
      },
      stop(i){
        clearInterval(this.counting)
        this.counting = false
      }
    },
    mounted() {
      console.log(this.value);
    }
  };
</script>

<template>
  <div class='number'>  
      <input ref="count" type="number" 
          :min='min' :max='max'
          v-model="count">
          <!-- :value="count"
          @change="$emit('change', $event.target.value)"> -->

      <div class="my-icon btn"
        @click="updateCount(-1)"        
        @pointerdown="start(-1)" 
        @pointerup="stop(-1)">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0z"/>
          <path d="M19 13H5v-2h14v2z"/>
        </svg>
      </div>

      <div class="my-icon btn"
        @click="updateCount(1)"
        @pointerdown="start(1)" 
        @pointerup="stop(1)">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0z"/>
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
        </svg>
      </div>
  </div>
</template>

<style >
  /* [type="number"] {
    -moz-appearance: textfield;
  }
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .number {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0 0.3rem 0 0.5rem;
    box-shadow: 0 1px 0 rgba(0,0,0,0.3);
  }
  .number input {
    font-size: initial;
    width: 100%;
    min-width: 3rem;
  }
  .my-icon svg {
      color: inherit;
      height: 1em;
      width: 1em;
      // font-size: 2rem; 
      border: none;
      outline: none;
      user-select: none;
      vertical-align: text-bottom;
      cursor: pointer;
  }

  .number .my-icon {
    font-size: 20px !important;
  } */
</style>