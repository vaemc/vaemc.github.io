(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0475e6cd"],{5033:function(t){t.exports=JSON.parse('{"programTypeList":[{"color":"blue","src":"https://cdn.vuetifyjs.com/images/cards/foster.jpg","title":"APP","alias":"app","subtitle":"Java、Flutter、React Native","language":["ALL","Java","Flutter","React Native"]},{"color":"deep-orange","src":"https://cdn.vuetifyjs.com/images/cards/halcyon.png","title":"网页","alias":"web","subtitle":"Vue、React、Asp.net、PHP、小程序","language":["ALL","Vue","React","Asp.net","PHP","小程序"]},{"color":"purple","src":"https://cdn.vuetifyjs.com/images/cards/halcyon.png","title":"桌面","alias":"desktop","subtitle":"WinForm、WPF、Electron、Swing","language":["ALL","WinForm","WPF","Electron","Swing"]},{"color":"teal","src":"https://cdn.vuetifyjs.com/images/cards/halcyon.png","title":"物联网","alias":"iot","subtitle":"Arduino、STM32、51、树莓派","language":["ALL","Arduino","STM32","51","树莓派"]}]}')},bb51:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Appbar"),n("v-content",[n("v-container",{staticClass:"pa-2",attrs:{fluid:""}},[n("v-row",t._l(t.data.programTypeList,(function(e,a){return n("v-col",{key:a,attrs:{cols:"12",xs:"12",sm:"6",md:"4",lg:"3",xl:"3"}},[n("v-card",{attrs:{color:e.color,dark:""}},[n("v-list-item",{attrs:{"three-line":""}},[n("v-list-item-content",{staticClass:"align-self-start"},[n("v-list-item-title",{staticClass:"headline mb-2",domProps:{textContent:t._s(e.title)}}),n("v-list-item-subtitle",{domProps:{textContent:t._s(e.subtitle)}})],1),n("v-card-actions",[n("v-btn",{attrs:{to:"/classify/"+e.alias,text:""}},[t._v("点击进入")])],1)],1)],1)],1)})),1),n("router-view")],1)],1)],1)},i=[],s=n("5033"),o=n("c9ac"),c={components:{Appbar:o["a"]},data:function(){return{data:s}},mounted:function(){},methods:{test:function(){}}},l=c,r=n("2877"),u=Object(r["a"])(l,a,i,!1,null,null,null);e["default"]=u.exports},c9ac:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{color:"#2195F2",dark:"",app:""}},[n("v-app-bar-nav-icon",{on:{click:t.back}},[n("v-icon",[t._v(t._s(t.icon))])],1),n("v-toolbar-title",[t._v(t._s(t.title))]),n("div",{staticClass:"flex-grow-1"}),n("v-btn",{attrs:{to:"/",icon:""}},[n("v-icon",[t._v("mdi-home")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-magnify")])],1),n("v-menu",{attrs:{left:"",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-btn",t._g({attrs:{icon:""}},a),[n("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[n("v-list",t._l(5,(function(e){return n("v-list-item",{key:e,on:{click:function(){}}},[n("v-list-item-title",[t._v("Option "+t._s(e))])],1)})),1)],1)],1)},i=[],s={props:{title:{default:"软件定做"},icon:{default:"mdi-menu"}},data:function(){return{selecedTabTitle:""}},mounted:function(){},methods:{tabClick:function(t){console.info(t),this.selecedTabTitle=t},back:function(){"软件定做"!=this.title&&this.$router.back(-1)}}},o=s,c=n("2877"),l=Object(c["a"])(o,a,i,!1,null,null,null);e["a"]=l.exports}}]);
//# sourceMappingURL=chunk-0475e6cd.f86c3a12.js.map