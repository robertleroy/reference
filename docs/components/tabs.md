# Tabs

<code-group>
  <code-block title="TabGroup">
  ``` vue
  <script>
    export default {
      name: 'TabGroup',
      data () {
        return { 
          tabs: [],
          selectedTab: 0
        };
      },

      methods: {
        selectTab(i) {
          this.selectedTab = i;
          this.tabs.forEach((tab, index) => {
            tab.isSelected = (index === i);
          })
        }
      },
      
      mounted() {
        this.tabs.forEach((tab, index) => {
          if (tab.active) {
            // this.selectTab(index);
            this.selectedTab = index;
          } else {
            // this.selectedTab = 0;
            this.selectTab(0);
          }
        })      
      },
      created () {
        this.tabs = this.$children;
      }
    };
  </script>

  <template>
    <div class="tabsContainer">
      <div class="tabsBar">
        <div class="tab" :key='i'
            v-for='(tab, i) in tabs'
            @click='selectTab(i)'
            :class='{selectedTab: i === selectedTab}'>
          {{ tab.title }}
        </div>
      </div> <!-- tabsBar -->

        <slot></slot>
    </div>
  </template>

  <style scoped lang='stylus'>

    .tabsContainer
      color: rgba(255,255,255,0.9)
      background: #282c34
      overflow: hidden
      margin: 0 -1.5rem

      @media (min-width: $MQMobileNarrow)
        border-radius: 0.4em
        margin: 0
    
    .tabsBar
      display: flex
      flex-wrap: wrap

      font-family: "MS Shell Dlg 2"
      font-weight: 700
      font-size: 0.85em
      padding: 0.666667rem
      z-index 5
      margin-bottom: -1.5rem
      
      @media (min-width: $MQMobileNarrow)
        padding-left: 1.5rem

    .tabsContainer .tabContent 
      @media (min-width: $MQMobileNarrow)
        margin-left: -0.666667rem
    

    .tab
      padding: 0.5em 0.8em
      cursor: pointer

    .selectedTab
      border-bottom: 1px solid #42b983

  </style>

  <!--
  <tab-group>
    <tab-panel title="Panel 1" >
    ``` bash
      Panel 1
    ```
    </tab-panel>

    <tab-panel title="Panel 2" active>
    ``` bash
      Panel 2
      Active attribute triggers isActive status and 
      displaying active panel && marking active tab.
    ```
    </tab-panel>
    <tab-panel title="Panel 3" >
    ``` bash
      Panel 3
    ```
    </tab-panel>
  </tab-group>
  -->
  ```
  </code-block>

  <code-block title="TabPanel">
  ``` vue
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
  ```
  </code-block>

  <code-block title="Use">
  ``` html
  <tab-group>
    <tab-panel title="Panel 1" >
    ``` bash
    Panel 1
    ```
    </tab-panel>

    <tab-panel title="Panel 2" active>
    ``` bash
    Panel 2
    [active] attribute triggers isActive status,
    displays as active panel, and marks as active tab.
    ```
    </tab-panel>
  </tab-group>
  ```
  </code-block>
</code-group>
