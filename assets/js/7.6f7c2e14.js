(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{343:function(t,e,s){},388:function(t,e,s){"use strict";s(343)},398:function(t,e,s){"use strict";s.r(e);s(45),s(46);var n={name:"TabGroup",data:function(){return{tabs:[],selectedTab:0}},methods:{selectTab:function(t){this.selectedTab=t,this.tabs.forEach((function(e,s){e.isSelected=s===t}))}},mounted:function(){var t=this;this.tabs.forEach((function(e,s){e.active?t.selectedTab=s:t.selectTab(0)}))},created:function(){this.tabs=this.$children}},a=(s(388),s(25)),c=Object(a.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tabsContainer"},[s("div",{staticClass:"tabsBar"},t._l(t.tabs,(function(e,n){return s("div",{key:n,staticClass:"tab",class:{selectedTab:n===t.selectedTab},on:{click:function(e){return t.selectTab(n)}}},[t._v("\n      "+t._s(e.title)+"\n    ")])})),0),t._v(" "),t._t("default")],2)}),[],!1,null,"26f27c74",null);e.default=c.exports}}]);