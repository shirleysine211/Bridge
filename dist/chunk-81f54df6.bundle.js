(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-81f54df6"],{"1f7b":function(t,e,n){"use strict";var a=n("4092"),r=n.n(a);r.a},"33f3":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"re-link-app"},[n("section",{staticClass:"content"},[n("section",{staticClass:"app-details"},[n("PopOutLogos",{attrs:{app:t.app}}),n("figure",{staticClass:"action"},[t._v("Re-link App")]),n("figure",{staticClass:"app-name"},[t._v("via "),n("b",[t._v(t._s(t.app.name))])]),n("figure",{staticClass:"text"},[t._v("It looks like the linking with "),n("b",[t._v(t._s(t.app.name))]),t._v(" was somehow broken. "),n("b",[t._v("Make sure you are actually using this application before allowing re-linking!")])])],1)]),n("section",{staticClass:"popout-buttons"},[n("Button",{attrs:{text:"Deny"},nativeOn:{click:function(e){return t.closer(e)}}}),n("Button",{attrs:{primary:"1",text:"Allow"},nativeOn:{click:function(e){return t.$emit("returned",!0)}}})],1)])},r=[],s=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),o=(n("118f"),n("2f62")),p=n("92b9");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(n,!0).forEach(function(e){Object(s["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var u={components:{PopOutLogos:p["a"]},props:["popup","closer"],computed:i({},Object(o["d"])(["scatter"]),{app:function(){return this.popup.data.props.appData}}),methods:{}},l=u,f=(n("1f7b"),n("2877")),b=Object(f["a"])(l,a,r,!1,null,"a58fcbd8",null);e["default"]=b.exports},3996:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"",""])},4092:function(t,e,n){var a=n("3996");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("499e").default;r("65cc94c2",a,!0,{sourceMap:!1,shadowMode:!1})},"92b9":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{class:{logos:!!t.app.img}},[t.app.img?n("figure",{staticClass:"logo"},[t.app.img?n("img",{attrs:{src:t.app.img}}):n("span",[t._v(t._s(t.app.name))])]):t._e()])},r=[],s={props:["app"]},o=s,p=n("2877"),c=Object(p["a"])(o,a,r,!1,null,null,null);e["a"]=c.exports}}]);