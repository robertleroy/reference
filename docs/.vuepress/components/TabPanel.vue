<script>
  export default {
    name: 'TabPanel',
    directives: {
      copy: {      
        bind: function (el,binding) {
          const copyToClipboard = function(e) {
            try {
              var elToCopy = el.nextElementSibling;
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
      }
    },
    props: {
      title: {
        type: String,
        default: "tab"
      },
      active: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        isSelected: false
      }
    }
  };
</script>

<template>
  <div v-if='isSelected' class="tabContent"> 
    <btn-copy v-copy class='copy'></btn-copy>
    <slot></slot>
  </div>
</template>

<style scoped lang='stylus'>
  .tabContent    
    position: relative
    padding: 0 1.5rem 0 0.666667rem

    // margin-top: -1.5rem;
    margin-bottom: -0.5rem

    @media (min-width: $MQMobileNarrow)
      padding: 0 
      margin-left: -0.66667

  .copy
    position absolute
    z-index 10;
    right 0.66667rem;
    top -1.66667rem; 
</style>