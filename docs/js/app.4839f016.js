(function(e){function t(t){for(var r,o,c=t[0],u=t[1],l=t[2],s=0,p=[];s<c.length;s++)o=c[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function c(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"e0296be9"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"c0403a36"}[e]+".css",a=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===a))return t()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){l=p[c],s=l.getAttribute("data-href");if(s===r||s===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],d.parentNode.removeChild(d),n(i)},d.href=a;var v=document.getElementsByTagName("head")[0];v.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=c(e);var p=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",p.name="ChunkLoadError",p.type=r,p.request=o,n[1](p)}a[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var p=0;p<l.length;p++)t(l[p]);var d=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"#3698CC",dence:"",dark:""}},[n("v-app-bar-title",[e._v("Long text Q&A Demonstration")])],1),n("v-navigation-drawer",{attrs:{app:"",permanent:"",expandOnHover:"",dark:"",color:"primary"}},[n("v-list-item",[n("v-list-item-content",{attrs:{color:"primary"}},[n("v-list-item-title",{staticClass:"title"},[e._v(" Menu ")])],1)],1),n("v-divider"),n("v-list",{attrs:{dense:"",nav:""}},e._l(e.items,(function(t){return n("v-list-item",{key:t.title,attrs:{link:"",to:t.link}},[n("v-list-item-icon",[n("v-icon",[e._v(e._s(t.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(t.title))])],1)],1)})),1)],1),n("v-main",[n("router-view")],1)],1)},a=[],i={name:"App",components:{},data:function(){return{items:[{title:"Home",icon:"mdi-home",link:"/"},{title:"Choose Dataset",icon:"mdi-text-box",link:"Choose"},{title:"Question&Answering",icon:"mdi-help-box",link:"QA"}],right:null}}},c=i,u=n("2877"),l=n("6544"),s=n.n(l),p=n("7496"),d=n("40dc"),v=n("ce7e"),f=n("132d"),m=n("8860"),h=n("da13"),b=n("5d23"),y=n("34c3"),g=n("f6c4"),_=n("f774"),w=Object(u["a"])(c,o,a,!1,null,null,null),x=w.exports;s()(w,{VApp:p["a"],VAppBar:d["a"],VDivider:v["a"],VIcon:f["a"],VList:m["a"],VListItem:h["a"],VListItemContent:b["a"],VListItemIcon:y["a"],VListItemTitle:b["b"],VMain:g["a"],VNavigationDrawer:_["a"]});var k=n("f309");r["a"].use(k["a"]);var A=new k["a"]({}),C=(n("d3b7"),n("8c4f")),j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",{attrs:{justify:"center"}},[n("h1",[e._v("Haystack Q&Aの使い方")])]),n("v-row",{attrs:{justify:"center"}},[n("ol",[n("li",[e._v("メニューの"),n("v-icon",[e._v(e._s("mdi-text-box"))]),e._v("Choose dataを選んでデータを選択してください")],1),n("li",[e._v("選択後、"),n("v-btn",{attrs:{"x-small":"",rounded:"",color:"primary"}},[e._v("次に進む")]),e._v("またはメニューの"),n("v-icon",[e._v(e._s("mdi-help-box"))]),e._v("Question and Answeringを選択")],1),n("li",[e._v("質問文を記入後"),n("v-btn",{attrs:{"x-small":"",rounded:"",color:"primary"}},[e._v("Send")])],1),n("li",[e._v("答えを確認してください。詳細を知りたい場合"),n("v-btn",{attrs:{"x-small":"",rounded:"",color:"primary"}},[e._v("詳細")]),e._v("をクリック")],1),n("li",[e._v("他の回答を確認したい場合はカードをクリックしてください")])])])],1)},O=[],V={name:"Home",components:{}},E=V,L=(n("cccb"),n("8336")),P=n("a523"),S=n("0fd9"),T=Object(u["a"])(E,j,O,!1,null,null,null),I=T.exports;s()(T,{VBtn:L["a"],VContainer:P["a"],VIcon:f["a"],VRow:S["a"]}),r["a"].use(C["a"]);var Q=[{path:"/",name:"Home",component:I},{path:"/choose",name:"Choose",component:function(){return n.e("about").then(n.bind(null,"1c91"))}},{path:"/QA",name:"QA",component:function(){return n.e("about").then(n.bind(null,"e06c"))}}],D=new C["a"]({mode:"history",base:"",routes:Q}),H=D;r["a"].config.productionTip=!1,new r["a"]({vuetify:A,router:H,render:function(e){return e(x)}}).$mount("#app")},"5ced":function(e,t,n){},cccb:function(e,t,n){"use strict";n("5ced")}});
//# sourceMappingURL=app.4839f016.js.map