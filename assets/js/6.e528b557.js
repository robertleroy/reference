(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{342:function(t,n,o){},387:function(t,n,o){"use strict";o(342)},397:function(t,n,o){"use strict";o.r(n);o(108);var i={name:"Number",props:["value","min","max"],model:{prop:"value",event:"change"},data:function(){return{counting:!1}},computed:{count:{get:function(){return this.value},set:function(t){this.$emit("change",t)}}},methods:{updateCount:function(t){var n=+this.count+t;n<this.min?this.count=this.min:n>this.max?this.count=this.max:this.count=n},start:function(t){var n=this;this.counting||(this.counting=setInterval((function(){return n.updateCount(t)}),300))},stop:function(t){clearInterval(this.counting),this.counting=!1}},mounted:function(){console.log(this.value)}},u=(o(387),o(25)),e=Object(u.a)(i,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"number"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.count,expression:"count"}],ref:"count",attrs:{type:"number",min:t.min,max:t.max},domProps:{value:t.count},on:{input:function(n){n.target.composing||(t.count=n.target.value)}}}),t._v(" "),o("div",{staticClass:"my-icon btn",on:{click:function(n){return t.updateCount(-1)},pointerdown:function(n){return t.start(-1)},pointerup:function(n){return t.stop(-1)}}},[o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[o("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),t._v(" "),o("path",{attrs:{d:"M19 13H5v-2h14v2z"}})])]),t._v(" "),o("div",{staticClass:"my-icon btn",on:{click:function(n){return t.updateCount(1)},pointerdown:function(n){return t.start(1)},pointerup:function(n){return t.stop(1)}}},[o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[o("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),t._v(" "),o("path",{attrs:{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}})])])])}),[],!1,null,null,null);n.default=e.exports}}]);