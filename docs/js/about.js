(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"1c91":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{id:"choose"}},[r("DatasetChoose",{attrs:{dataset:e.Dataset}}),r("DatasetCard")],1)},n=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{fluid:""}},[r("v-row",{attrs:{dense:"",justify:"center"}},e._l(e.cards,(function(t){return r("v-col",{key:t.title,attrs:{cols:t.flex}},[r("v-card",{attrs:{elevation:"5",outlined:""}},[r("v-card-title",{domProps:{textContent:e._s(t.title)}}),r("v-card-text",{domProps:{textContent:e._s(t.content)}}),r("v-card-actions",[r("v-btn",{attrs:{color:"orange lighten-2",text:""}},[e._v(" Explore ")]),r("v-spacer"),r("v-btn",{attrs:{icon:""},on:{click:function(e){t.show=!t.show}}},[r("v-icon",[e._v(e._s(t.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),r("v-expand-transition",[r("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"card.show"}]},[r("v-divider"),r("v-card-text",[e._v(e._s(t.explain))])],1)]),r("v-btn",{attrs:{color:"primary",rounded:""}},[e._v("データセット選択")])],1)],1)})),1)],1)},s=[],o={name:"DatasetCard",data:function(){return{cards:[{title:"Driving Dataset",content:"自動車データセット",explain:"自動車データセット〜",flex:4,show:!1},{title:"???",content:"??????????????",explain:"??????????????????",flex:4,show:!1}]}}},c=o,l=r("2877"),u=r("6544"),d=r.n(u),h=r("8336"),f=(r("0481"),r("4069"),r("a9e3"),r("5530")),v=(r("615b"),r("10d2")),g=r("2b0e"),p=r("37c6"),b=g["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(p["a"],{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),m=r("1c87"),_=r("58df"),y=Object(_["a"])(b,m["a"],v["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(f["a"])(Object(f["a"])({"v-card":!0},m["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},v["a"].options.computed.classes.call(this))},styles:function(){var e=Object(f["a"])({},v["a"].options.computed.styles.call(this));return this.img&&(e.background='url("'.concat(this.img,'") center center / cover no-repeat')),e}},methods:{genProgress:function(){var e=b.options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render:function(e){var t=this.generateRouteLink(),r=t.tag,a=t.data;return a.style=this.styles,this.isClickable&&(a.attrs=a.attrs||{},a.attrs.tabindex=0),e(r,this.setBackgroundColor(this.color,a),[this.genProgress(),this.$slots.default])}}),C=r("80d2"),j=Object(C["g"])("v-card__actions"),O=(Object(C["g"])("v-card__subtitle"),Object(C["g"])("v-card__text")),B=Object(C["g"])("v-card__title"),k=(r("4160"),r("caad"),r("13d5"),r("45fc"),r("4ec9"),r("b64b"),r("d3b7"),r("ac1f"),r("3ca3"),r("5319"),r("2ca0"),r("159b"),r("ddb0"),r("ade3")),x=(r("4b85"),r("d9f7")),w=["sm","md","lg","xl"],S=function(){return w.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{})}(),V=function(){return w.reduce((function(e,t){return e["offset"+Object(C["r"])(t)]={type:[String,Number],default:null},e}),{})}(),$=function(){return w.reduce((function(e,t){return e["order"+Object(C["r"])(t)]={type:[String,Number],default:null},e}),{})}(),z={col:Object.keys(S),offset:Object.keys(V),order:Object.keys($)};function E(e,t,r){var a=e;if(null!=r&&!1!==r){if(t){var n=t.replace(e,"");a+="-".concat(n)}return"col"!==e||""!==r&&!0!==r?(a+="-".concat(r),a.toLowerCase()):a.toLowerCase()}}var D=new Map,N=g["a"].extend({name:"v-col",functional:!0,props:Object(f["a"])(Object(f["a"])(Object(f["a"])(Object(f["a"])({cols:{type:[Boolean,String,Number],default:!1}},S),{},{offset:{type:[String,Number],default:null}},V),{},{order:{type:[String,Number],default:null}},$),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var r=t.props,a=t.data,n=t.children,i=(t.parent,"");for(var s in r)i+=String(r[s]);var o=D.get(i);return o||function(){var e,t;for(t in o=[],z)z[t].forEach((function(e){var a=r[e],n=E(t,e,a);n&&o.push(n)}));var a=o.some((function(e){return e.startsWith("col-")}));o.push((e={col:!a||!r.cols},Object(k["a"])(e,"col-".concat(r.cols),r.cols),Object(k["a"])(e,"offset-".concat(r.offset),r.offset),Object(k["a"])(e,"order-".concat(r.order),r.order),Object(k["a"])(e,"align-self-".concat(r.alignSelf),r.alignSelf),e)),D.set(i,o)}(),e(r.tag,Object(x["a"])(a,{class:o}),n)}}),P=r("a523"),L=r("ce7e"),T=r("0789"),R=r("132d"),q=r("0fd9"),F=(r("20f6"),Object(C["g"])("spacer","div","v-spacer")),H=Object(l["a"])(c,i,s,!1,null,null,null),I=H.exports;d()(H,{VBtn:h["a"],VCard:y,VCardActions:j,VCardText:O,VCardTitle:B,VCol:N,VContainer:P["a"],VDivider:L["a"],VExpandTransition:T["a"],VIcon:R["a"],VRow:q["a"],VSpacer:F});var A=r("956f"),J={data:function(){return{Dataset:""}},components:{DatasetCard:I,DatasetChoose:A["a"]}},M=J,Q=(r("7fbe"),Object(l["a"])(M,a,n,!1,null,null,null));t["default"]=Q.exports;d()(Q,{VContainer:P["a"]})},"37c6":function(e,t,r){"use strict";var a=r("8e36");t["a"]=a["a"]},5398:function(e,t,r){},"615b":function(e,t,r){},"6ece":function(e,t,r){},"7fbe":function(e,t,r){"use strict";r("9359")},"8e36":function(e,t,r){"use strict";r("a9e3"),r("c7cd");var a=r("5530"),n=r("ade3"),i=(r("6ece"),r("0789")),s=r("a9ad"),o=r("fe6c"),c=r("a452"),l=r("7560"),u=r("80d2"),d=r("58df"),h=Object(d["a"])(s["a"],Object(o["b"])(["absolute","fixed","top","bottom"]),c["a"],l["a"]);t["a"]=h.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(u["f"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(u["f"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var e,t=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return e={opacity:t},Object(n["a"])(e,this.isReversed?"right":"left",Object(u["f"])(this.normalizedValue,"%")),Object(n["a"])(e,"width",Object(u["f"])(this.normalizedBuffer-this.normalizedValue,"%")),e},classes:function(){return Object(a["a"])({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?i["b"]:i["c"]},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=Object(u["f"])(this.normalizedBuffer,"%")),e}},methods:{genContent:function(){var e=Object(u["k"])(this,"default",{value:this.internalLazyValue});return e?this.$createElement("div",{staticClass:"v-progress-linear__content"},e):null},genListeners:function(){var e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar:function(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(n["a"])({},e,!0)}))},onClick:function(e){if(this.reactive){var t=this.$el.getBoundingClientRect(),r=t.width;this.internalValue=e.offsetX/r*100}},normalize:function(e){return e<0?0:e>100?100:parseFloat(e)}},render:function(e){var t={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(u["f"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return e("div",t,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}})},9359:function(e,t,r){},"956f":function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",{attrs:{justify:"center"}},[r("h1",[e._v("あなたが選んだデータセットは...")])]),r("v-row",{attrs:{justify:"center"}},[r("h1",[e._v(e._s(e.Dataset))])])],1)},n=[],i={props:{Dataset:{default:"",type:String}}},s=i,o=r("2877"),c=r("6544"),l=r.n(c),u=r("a523"),d=r("0fd9"),h=Object(o["a"])(s,a,n,!1,null,null,null);t["a"]=h.exports;l()(h,{VContainer:u["a"],VRow:d["a"]})},c4b0:function(e,t,r){"use strict";r("5398")},e06c:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{id:"qa"}},[r("DatasetChoose"),r("h1",[e._v("QA")]),r("v-progress-linear",{attrs:{indeterminate:"",color:"cyan"}})],1)},n=[],i=r("956f"),s={components:{DatasetChoose:i["a"]}},o=s,c=(r("c4b0"),r("2877")),l=r("6544"),u=r.n(l),d=r("a523"),h=r("8e36"),f=Object(c["a"])(o,a,n,!1,null,null,null);t["default"]=f.exports;u()(f,{VContainer:d["a"],VProgressLinear:h["a"]})}}]);