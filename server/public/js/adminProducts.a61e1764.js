(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["adminProducts"],{"0798":function(t,e,i){"use strict";i("caad");var n=i("5530"),r=i("ade3"),s=(i("0c18"),i("10d2")),o=i("afdd"),a=i("9d26"),c=i("f2e7"),l=i("7560"),u=i("f40d"),d=i("58df"),h=i("d9bd");e["a"]=Object(d["a"])(s["a"],c["a"],u["a"]).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var t={staticClass:"v-alert__border",class:Object(r["a"])({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(o["a"],{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(a["a"],{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(a["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=Object(n["a"])(Object(n["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||l["a"].options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(h["a"])("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},"0c18":function(t,e,i){},"1e6c":function(t,e,i){"use strict";var n=i("9d65"),r=i("4e82"),s=i("c3f0"),o=i("80d2"),a=i("58df"),c=Object(a["a"])(n["a"],Object(r["a"])("windowGroup","v-window-item","v-window"));e["a"]=c.extend().extend().extend({name:"v-window-item",directives:{Touch:s["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(o["h"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(o["h"])(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}})},"4bd4":function(t,e,i){"use strict";i("4de4"),i("7db0"),i("4160"),i("caad"),i("07ac"),i("2532"),i("159b");var n=i("5530"),r=i("58df"),s=i("7e2b"),o=i("3206");e["a"]=Object(r["a"])(s["a"],Object(o["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,i=function(t){return t.$watch("hasError",(function(i){e.$set(e.errorBag,t._uid,i)}),{immediate:!0})},n={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",(function(r){r&&(e.errorBag.hasOwnProperty(t._uid)||(n.valid=i(t)))})):n.valid=i(t),n},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var i=this.watchers.find((function(t){return t._uid===e._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(n["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},d416:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{attrs:{tile:"",outlined:""}},[i("v-toolbar",{attrs:{flat:""}},[i("v-toolbar-title",[t._v("Products")]),i("v-spacer"),i("v-btn",{staticClass:"mr-5",attrs:{outlined:"",color:"primary"},on:{click:function(e){return t.open(1)}}},[t._v("new product")])],1),i("v-data-table",{staticClass:"border-top",attrs:{headers:t.headers,items:t.products,"disable-sort":""},scopedSlots:t._u([{key:"item.images",fn:function(t){var e=t.item;return[i("v-img",{attrs:{src:"http://localhost:3000/"+e.images[0],width:"10vw"}})]}},{key:"item.action",fn:function(e){var n=e.item;return[i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[i("v-icon",t._g({staticClass:"mr-2",attrs:{color:"yellow darken-3"},on:{click:function(e){return t.open(2,n)}}},r),[t._v("mdi-pencil-outline")])]}}],null,!0)},[i("span",[t._v("Update")])]),i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[i("v-icon",t._g({attrs:{color:"red"},on:{click:function(e){return t.remove(n._id)}}},r),[t._v("mdi-delete-outline")])]}}],null,!0)},[i("span",[t._v("Delete")])])]}}])}),i("v-dialog",{attrs:{"max-width":"50%",persistent:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.save(e)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[i("v-card",[i("v-card-title",[t._v(t._s(t.title))]),i("v-container",[i("v-row",{attrs:{"no-gutters":"",justify:"space-around"}},[i("v-col",{attrs:{cols:"5"}},[i("v-text-field",{staticClass:"b-tile",attrs:{label:"title",outlined:"",dense:"",clearable:"",rules:t.titleRules,success:t.titleSuccess},model:{value:t.product.title,callback:function(e){t.$set(t.product,"title",e)},expression:"product.title"}})],1),i("v-col",{attrs:{cols:"5"}},[i("v-text-field",{staticClass:"b-tile",attrs:{label:"category",outlined:"",dense:"",readonly:"",rules:t.categoryRules,success:t.categorySuccess},model:{value:t.product.category.name,callback:function(e){t.$set(t.product.category,"name",e)},expression:"product.category.name"}})],1),i("v-col",{attrs:{cols:"11"}},[i("v-card",{staticClass:"mb-5",attrs:{outlined:"",tile:""}},[i("v-window",{model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[i("v-window-item",{attrs:{value:1}},[i("v-card-title",{staticClass:"title font-weight-regular justify-space-between"},[i("span",[t._v("Category")]),i("v-avatar",{staticClass:"subheading white--text",attrs:{color:"primary lighten-2",size:"24"},domProps:{textContent:t._s(t.step)}})],1),i("v-list",[i("v-list-item-group",{model:{value:t.selectedCategory,callback:function(e){t.selectedCategory=e},expression:"selectedCategory"}},t._l(t.categories,(function(e){return i("v-list-item",{key:e._id,attrs:{value:e},on:{click:function(e){t.step++}}},[i("v-list-item-title",{domProps:{textContent:t._s(e.name)}})],1)})),1)],1)],1),t.selectedCategory?i("v-window-item",{attrs:{value:2}},[i("v-card-title",{staticClass:"title font-weight-regular justify-space-between"},[i("v-btn",{attrs:{icon:""},on:{click:function(){t.selectedCategory={},t.step--}}},[i("v-icon",[t._v("mdi-arrow-left")])],1),i("span",{domProps:{textContent:t._s(t.selectedCategory.name)}}),i("v-avatar",{staticClass:"subheading white--text",attrs:{color:"primary lighten-2",size:"24"},domProps:{textContent:t._s(t.step)}})],1),i("v-list",[i("v-list-item-group",{model:{value:t.secondSelectedCategory,callback:function(e){t.secondSelectedCategory=e},expression:"\n                                                    secondSelectedCategory\n                                                "}},t._l(t.selectedCategory.children,(function(e){return i("v-list-item",{key:e._id,attrs:{value:e},on:{click:function(e){t.step++}}},[i("v-list-item-title",{domProps:{textContent:t._s(e.name)}})],1)})),1)],1)],1):t._e(),t.secondSelectedCategory?i("v-window-item",{attrs:{value:3}},[i("v-card-title",{staticClass:"title font-weight-regular justify-space-between"},[i("v-btn",{attrs:{icon:""},on:{click:function(){t.secondSelectedCategory={},t.step--}}},[i("v-icon",[t._v("mdi-arrow-left")])],1),i("span",{domProps:{textContent:t._s(t.secondSelectedCategory.name)}}),i("v-avatar",{staticClass:"subheading white--text",attrs:{color:"primary lighten-2",size:"24"},domProps:{textContent:t._s(t.step)}})],1),i("v-list",[i("v-list-item-group",{attrs:{color:"primary"},model:{value:t.thirdSelectedCategory,callback:function(e){t.thirdSelectedCategory=e},expression:"\n                                                    thirdSelectedCategory\n                                                "}},t._l(t.secondSelectedCategory.children,(function(e){return i("v-list-item",{key:e._id,attrs:{value:e}},[i("v-list-item-title",{domProps:{textContent:t._s(e.name)}})],1)})),1)],1)],1):t._e()],1),i("v-divider")],1)],1),i("v-col",{attrs:{cols:"5"}},[i("v-text-field",{staticClass:"b-tile",attrs:{type:"number",label:"price",outlined:"",dense:"",clearable:"",rules:t.priceRules,success:t.priceSuccess},model:{value:t.product.price,callback:function(e){t.$set(t.product,"price",t._n(e))},expression:"product.price"}})],1),i("v-col",{attrs:{cols:"5"}},[i("v-text-field",{staticClass:"b-tile",attrs:{type:"number",label:"rating",outlined:"",dense:"",clearable:"",rules:t.ratingRules,success:t.ratingSuccess},model:{value:t.product.rating,callback:function(e){t.$set(t.product,"rating",t._n(e))},expression:"product.rating"}})],1),i("v-col",{attrs:{cols:"11"}},[i("v-file-input",{staticClass:"b-tile",attrs:{label:"upload product images",dense:"",outlined:"",multiple:"","error-messages":t.product.images.length?"":"Images are required",success:t.product.images.length},on:{change:t.onFileSelected}})],1),i("v-col",{staticClass:"pa-0",attrs:{cols:"11"}},[i("v-row",t._l(t.product.images,(function(t){return i("v-col",{key:t,attrs:{cols:"4"}},[i("v-card",{attrs:{tile:"",outlined:""}},[i("v-img",{attrs:{src:t}})],1)],1)})),1)],1),i("v-col",{attrs:{cols:"12"}},[t.errorMessage?i("v-alert",{staticClass:"mx-2",attrs:{type:"error"}},[t._v(t._s(t.errorMessage))]):t._e()],1)],1)],1),i("v-divider"),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{text:""},on:{click:function(e){t.dialog=!1}}},[t._v("cancel")]),i("v-btn",{attrs:{disabled:t.disabled,type:"submit",color:"success",width:"90"},on:{click:t.save}},[t._v("save")])],1)],1)],1)],1)],1)},r=[],s=(i("c740"),i("4160"),i("d81d"),i("a434"),i("159b"),i("d4ec")),o=i("bee2"),a=i("ade3"),c=i("bc3a"),l=i.n(c),u="https://evening-headland-21583.herokuapp.com/api/products",d=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(s["a"])(this,t),this._id=e._id||null,this.title=e.title||"",this.category=e.category||{},this.price=e.price||"",this.rating=e.rating||0,this.images=e.images||[],this.imageFiles=e.imageFiles||[]}return Object(o["a"])(t,null,[{key:"post",value:function(t){var e=new FormData;return t.imageFiles.forEach((function(t){e.append("imageFiles",t)})),e.append("title",t.title),e.append("category",t.category._id),e.append("price",t.price),e.append("rating",t.rating),l.a.post(u,e)}},{key:"put",value:function(t){var e=new FormData;return t.imageFiles.forEach((function(t){e.append("imageFiles",t)})),e.append("title",t.title),e.append("category",t.category._id),e.append("price",t.price),e.append("rating",t.rating),l.a.put("".concat(u,"/").concat(t._id),e)}},{key:"delete",value:function(t){return confirm("Are you sure you want to delete this product?")&&l.a.delete("".concat(u,"/").concat(t))}}]),t}();Object(a["a"])(d,"get",(function(){return l.a.get(u)}));var h={name:"Products",data:function(){var t=this;return{headers:[{text:"Title",value:"title"},{text:"Price",value:"price"},{text:"Rating",value:"rating"},{text:"Image",value:"images"},{text:"Actions",value:"action"}],products:[],product:new d,categories:[],mode:0,dialog:!1,valid:!1,step:1,selectedCategory:{},secondSelectedCategory:{},thirdSelectedCategory:{},titleSuccess:!1,titleRules:[function(e){return e?(t.titleSuccess=!0,!0):"Title is required"},function(t){return(t||"").length>=3||"Title must be at least 3 characters long"},function(t){return(t||"").length<=20||"Title must be less than 20 characters"}],categorySuccess:!1,categoryRules:[function(e){return e?(t.categorySuccess=!0,!0):"Category is required"}],priceSuccess:!1,priceRules:[function(e){return e+""?(t.priceSuccess=!0,!0):"Price is required"},function(t){return t>0||"Price must be greater 0"}],ratingSuccess:!1,ratingRules:[function(e){return e+""?(t.ratingSuccess=!0,!0):"Rating is required"},function(t){return t>=0||"Rating must be 0 to 5"},function(t){return t<=5||"Rating must be less then 5"}],errorMessage:"",snackbar:!1,disabled:!0}},computed:{title:function(){return 1===this.mode?"New Product":"Update Product"}},methods:{getProducts:function(){var t=this;d.get().then((function(e){return t.products=e.data})).catch((function(t){return console.error(t.response.data)}))},getCategories:function(){var t=this;this.$axios.get("https://evening-headland-21583.herokuapp.com/api/categories").then((function(e){return t.categories=e.data})).catch((function(t){return console.error(t.response.data)}))},open:function(t,e){var i=this;this.product=new d(e),this.selectedCategory={},this.secondSelectedCategory={},this.thirdSelectedCategory={},this.step=1,1===t&&(this.titleSuccess=!1,this.categorySuccess=!1,this.priceSuccess=!1,this.ratingSuccess=!1),2===t&&(this.product.images=this.product.images.map((function(t){return"https://evening-headland-21583.herokuapp.com/"+t}))),this.mode=t,this.dialog=!0,setTimeout((function(){return i.$refs.form.resetValidation()}),300)},save:function(){var t=this;this.disabled=!0,console.log(this.product),1===this.mode?d.post(this.product).then((function(e){t.products.push(e.data),t.dialog=!1,t.disabled=!1})).catch((function(e){t.errorMessage=e.response.data,setTimeout((function(){return t.errorMessage=""}),5e3),t.disabled=!1})):d.put(this.product).then((function(e){var i=t.products.findIndex((function(t){return t._id===e.data._id}));t.products.splice(i,1,e.data),t.dialog=!1,t.disabled=!1})).catch((function(e){t.errorMessage=e.response.data,setTimeout((function(){return t.errorMessage=""}),5e3),t.disabled=!1}))},remove:function(t){var e=this;d.delete(t).then((function(t){var i=e.products.findIndex((function(e){return e._id===t.data._id}));e.products.splice(i,1)})).catch((function(t){e.errorMessage=t.response.data,e.snackbar=!0,setTimeout((function(){e.snackbar=!1,e.errorMessage=""}),5e3)}))},onFileSelected:function(t){var e=this;this.product.imageFiles=t,this.product.imageFiles.forEach((function(t){var i=new FileReader;i.readAsDataURL(t),i.onload=function(t){return e.product.images.push(t.target.result)}}))}},watch:{valid:function(t){this.disabled=!t},thirdSelectedCategory:function(t){this.product.category=t||{}}},mounted:function(){this.getCategories(),this.getProducts()}},p=h,v=i("2877"),f=i("6544"),g=i.n(f),m=i("0798"),b=i("8212"),y=i("8336"),w=i("b0af"),C=i("99d9"),_=i("62ad"),x=i("a523"),S=i("8fea"),T=i("169a"),k=i("ce7e"),B=i("23a7"),$=i("4bd4"),V=i("132d"),I=i("adda"),E=i("8860"),j=i("da13"),P=i("1baa"),A=i("5d23"),O=i("0fd9"),F=i("2fa4"),R=i("8654"),D=i("71d9"),G=i("2a7f"),L=i("3a2f"),M=i("f665"),z=i("1e6c"),q=Object(v["a"])(p,n,r,!1,null,null,null);e["default"]=q.exports;g()(q,{VAlert:m["a"],VAvatar:b["a"],VBtn:y["a"],VCard:w["a"],VCardActions:C["a"],VCardTitle:C["c"],VCol:_["a"],VContainer:x["a"],VDataTable:S["a"],VDialog:T["a"],VDivider:k["a"],VFileInput:B["a"],VForm:$["a"],VIcon:V["a"],VImg:I["a"],VList:E["a"],VListItem:j["a"],VListItemGroup:P["a"],VListItemTitle:A["b"],VRow:O["a"],VSpacer:F["a"],VTextField:R["a"],VToolbar:D["a"],VToolbarTitle:G["a"],VTooltip:L["a"],VWindow:M["a"],VWindowItem:z["a"]})}}]);
//# sourceMappingURL=adminProducts.a61e1764.js.map