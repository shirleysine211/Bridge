(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d7b79ee"],{"1b9d":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"dash-action-template dash-article"},[a("section",{staticClass:"dash-action-template-header"},[a("figure",{staticClass:"everipedia"},[t.loading?t._e():a("img",{attrs:{src:"static/assets/everipedia.svg",alt:""}}),t.loading?a("i",{staticClass:"loading fa fa-spinner animate-spin"}):t._e()]),t.loading?t._e():a("figure",{staticClass:"above-title"},[t._v("Trending Article")])]),!t.loading&&t.trending?a("section",{staticClass:"dash-action-template-content"},[a("figure",{staticClass:"bg"},[a("img",{attrs:{src:t.image}})]),a("section",[a("figure",{staticClass:"title"},[t._v(t._s(t.trending.page_title))]),a("figure",{staticClass:"text"},[t._v(t._s(t.text.substr(0,150)))])])]):t._e(),!t.loading&&t.trending?a("section",{staticClass:"dash-action-template-footer"},[a("Button",{attrs:{primary:"1",icon:"far fa-external-link-square",text:"Read"},nativeOn:{click:function(e){return t.viewArticle(e)}}}),a("Button",{attrs:{icon:"fas fa-redo-alt",text:"Next Article"},nativeOn:{click:function(e){return t.randomize(e)}}})],1):t._e()])},i=[],r=(a("28a5"),a("a481"),a("2f62"),a("d1f3"),a("7514"),a("96cf"),a("3b8d")),o=a("d225"),s=a("b0b4"),c="https://api.everipedia.org/v2",u=function(t){return fetch("".concat(c,"/").concat(t)).then(function(t){return t.json()}).catch(function(t){return console.error(t)})},d=null,l=null,f=function(){function t(){Object(o["a"])(this,t)}return Object(s["a"])(t,null,[{key:"getTrending",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,a,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(d){t.next=4;break}return t.next=3,u("recent-activity/trending?user_agent=scatter&limit=100").then(function(t){return t.map(function(t){return t.slug})});case 3:d=t.sent;case 4:if(d){t.next=6;break}return t.abrupt("return");case 6:return e=d[Math.floor(Math.random()*d.length)],a=function(){return d=d.filter(function(t){return t!==e}),n.getTrending()},t.next=10,u("wiki/slug/lang_en/".concat(e,"?cache=true")).then(function(t){if(t)return!t.metadata||t.metadata.find(function(t){return"is_adult_content"===t.key}).value?a():t.page_body.some(function(t){return t.paragraphs.some(function(t){return t.items.some(function(t){return!!t.text&&t.text.indexOf("porn")>-1})})})?a():t.page_body[0]&&t.page_body[0].paragraphs&&t.page_body[0].paragraphs[0].items&&t.page_body[0].paragraphs[0].items[0]&&t.page_title[0]&&t.main_photo[0]&&t.main_photo[0].thumb?l===e?a():(l=e,{page_body:t.page_body[0].paragraphs[0].items[0].text,page_title:t.page_title[0].text,slug:e,main_photo:t.main_photo[0].thumb}):a()});case 10:return t.abrupt("return",t.sent);case 11:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}()}]),t}(),g={data:function(){return{trending:null,loading:!0}},computed:{text:function(){if(this.trending){var t=this.trending.page_body;return t=t.replace(/\*\*/g,""),t=t.replace(/__/g,""),t.split("[[")[0]+t.split("[[").map(function(t){var e="";if(t.indexOf("]]")>-1){var a=t.split("]]");if(-1===a[0].indexOf("|http")){var n=a[0].split("|");e=n[n.length-1]+a[1]}}return e}).join("")}},slug:function(){if(this.trending)return this.trending.slug},image:function(){if(this.trending)return this.trending.main_photo}},mounted:function(){this.randomize()},methods:{viewArticle:function(){this.openInBrowser("https://everipedia.org/".concat(this.slug))},randomize:function(){var t=this;this.loading=!0,f.getTrending().then(function(e){if(t.loading=!1,!e)return console.error("No everipedia trending?");t.trending=e})}}},p=g,h=(a("3fd1"),a("2877")),m=Object(h["a"])(p,n,i,!1,null,"48f777a8",null);e["default"]=m.exports},"3acf":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".dash-article[data-v-48f777a8]{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,168,255,0)),to(#fff));background-image:linear-gradient(180deg,rgba(0,168,255,0),#fff)}.dash-article .loading[data-v-48f777a8]{font-size:24px;color:#00a8ff}.dash-article .everipedia[data-v-48f777a8]{background:#fff;border-radius:50%;padding:2px;height:28px}.dash-article .bg[data-v-48f777a8]{position:absolute;width:100%;height:auto;z-index:-1;opacity:.25;top:0;bottom:0;left:0;right:0}.dash-article .bg img[data-v-48f777a8]{-o-object-fit:cover;object-fit:cover;width:100%;height:100%}.dash-article .details[data-v-48f777a8]{line-height:1rem;overflow-y:auto}.blue-steel .dash-article[data-v-48f777a8]{background-image:-webkit-gradient(linear,left top,left bottom,from(transparent),color-stop(95%,rgba(2,27,46,.8)));background-image:linear-gradient(180deg,transparent 12%,rgba(2,27,46,.8) 95%)}",""])},"3fd1":function(t,e,a){"use strict";var n=a("a847"),i=a.n(n);i.a},a847:function(t,e,a){var n=a("3acf");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("499e").default;i("49927fd7",n,!0,{sourceMap:!1,shadowMode:!1})}}]);