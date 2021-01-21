<script>
  export default {
    name: 'App',
    data() {
      return {
        title: "Device Info",
        innerWidth: 0,
        innerHeight: 0,
        outerWidth: 0,
        outerHeight: 0,
        screen: {
          width: global.screen.width,
          height: global.screen.height,
          availWidth: global.screen.availWidth,
          availWidth: global.screen.availHeight,
          orientation: global.screen.orientation
        },
      }
    },
    computed: {
      userAgent() {        
        try {
          return navigator.userAgent;
        } catch (error) {
          return;
        }
      },
      window() {       
        try {
          return window;
        } catch (error) {
          return;
        }
      },
      devicePixelRatio() {       
        try {
          return window.devicePixelRatio;
        } catch (error) {
          return;
        }
      },
      
      navigator() {       
        try {
          return navigator;
        } catch (error) {
          return;
        }
      },
               
    },

    methods: {
      checkSize() {
        this.innerWidth = window.innerWidth;
        this.innerHeight = window.innerHeight;
        this.outerWidth = window.outerWidth;
        this.outerHeight = window.outerHeight;
      },
      
    },

    mounted() {
      this.$nextTick(function() {
        window.addEventListener('resize', this.checkSize);
      })
      console.log(window);
      this.checkSize(); 
    }
  }
</script>

<template>
  <div id="App_Grid" v-cloak>

 
<pre><code>
{{userAgent}}

window: {
  innerWidth: {{innerWidth}},
  innerHeight: {{innerHeight}},
  outerWidth: {{outerWidth}},
  outerHeight: {{outerHeight}},
  devicePixelRatio: {{devicePixelRatio}}
}

screen: {
  width: {{screen.width}},
  height: {{screen.height}},
  availWidth: {{screen.availWidth}},
  availHeight: {{screen.availHeight}},
  orientation: {{screen.orientation.type}}
}

navigator: {
  onLine: {{navigator.onLine}},
  language: {{navigator.language}},
  maxTouchPoints: {{navigator.maxTouchPoints}},
  cookieEnabled: {{navigator.cookieEnabled}},
  doNotTrack: {{navigator.doNotTrack}}
}
</code></pre>
    
  </div> 
</template>

<style lang="css">
  /* @import './scss/baseline'; */

  #App_Grid {
    height: 100%;
    padding: 1rem 2rem;
  }

</style>