(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-nearHospital-nearHospital"],{"226f":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"content"},[e("v-uni-map",{staticStyle:{width:"100%",height:"100%"},attrs:{"show-location":!0,id:"uniMap",latitude:t.latitude,longitude:t.longitude,controls:t.controls},on:{controltap:function(n){n=t.$handleEvent(n),t.handleClick(n)}}})],1)},i=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return i})},"8b24":function(t,n,e){"use strict";e.r(n);var o=e("226f"),i=e("c05a");for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);var u=e("2877"),l=Object(u["a"])(i["default"],o["a"],o["b"],!1,null,"10b92381",null);n["default"]=l.exports},c05a:function(t,n,e){"use strict";e.r(n);var o=e("ee5e"),i=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);n["default"]=i.a},ee5e:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={onLoad:function(){uni.createMapContext()},data:function(){return{title:"map",latitude:29.60661,longitude:106.57439,controls:[{id:1,clickable:!0,position:{left:10,top:10,width:100,height:100}}]}},onReady:function(){var t=uni.createMapContext("uniMap",this);t.getCenterLocation({type:"wgs84",success:function(t){console.log(t),console.log("当前位置的经度："+t.longitude),console.log("当前位置的纬度："+t.latitude)}}),t.includePoints({points:[{latitude:29.1211,longitude:106.7897},{latitude:29.3333,longitude:106.3333}]})},methods:{handleClick:function(){console.log(1)}}};n.default=o}}]);