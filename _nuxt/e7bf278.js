(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1020:function(e,t,l){"use strict";l(794)},1021:function(e,t,l){"use strict";l(795)},1169:function(e,t,l){"use strict";l.r(t);l(11);var o,n=l(419),r=l(10),d=l(9),c=(l(406),l(86),l(407)),m=l.n(c),f=(l(408),l(409)),v=l.n(f),h=(l(37),l(127),l(68)),y=l(403),_=l(404),C=l(405),k=l(402),x=l(401),w=l.n(x),N=(l(426),{name:"form-components",layout:"DashboardLayout",components:(o={CustomStylesValidation:y.a,BrowserDefaultsValidation:_.a,ServerSideValidation:C.a},Object(d.a)(o,v.a.name,v.a),Object(d.a)(o,m.a.name,m.a),Object(d.a)(o,"FileInput",k.a),Object(d.a)(o,"flatPicker",w.a),o),data:function(){return{validated:!1,seen:!0,se:!0,sin:!0,model:{id:"",booking_date:"",date:"",name:"",email:"",phone:"",cruise:"",deck:"",kid:"",kiddetails:[],adultdetails:[],kidprice:"",pay_mode:"",payment:"",payment_id:"",person:"",total:"",stotal:"",foodtotal:0,infant:0},link:"",obj:null,ok:!0,all:[],name:""}},methods:{getcat:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var l,o,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=(l=e).$route.params.id,t.next=4,h.a.collection("Booking").getFirstListItem('id=  "'.concat(o,'"'),{});case 4:r=t.sent,l.model=r,l.model.c_redeem=0==l.model.c_redeem?"No":"Yes",l.all=[].concat(Object(n.a)(l.model.adultdetails),Object(n.a)(l.model.kiddetails)),l.name=l.model.adultdetails[0].name;case 9:case"end":return t.stop()}}),t)})))()},dlt:function(){this.link="",this.obj=null}},mounted:function(){this.getcat()}}),$=(l(1020),l(1021),l(7)),component=Object($.a)(N,(function(){var e=this,t=e._self._c;return t("div",[t("base-header",{staticClass:"pb-3"},[t("div",{staticClass:"row align-items-center py-4"},[t("div",{staticClass:"col-lg-6 col-7"},[t("h6",{staticClass:"h2 text-white"},[e._v("Booking Details")])])])]),e._v(" "),t("div",{staticClass:"container-fluid mt--6"},[t("div",{staticClass:"row ht"},[t("div",{staticClass:"col"},[t("div",{staticClass:"card-wrapper"},[t("validation-observer",{ref:"formValidator",scopedSlots:e._u([{key:"default",fn:function(l){l.handleSubmit;return[t("form",{staticClass:"needs-validation",on:{submit:function(e){e.preventDefault()}}},[t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{readonly:"",label:"Booking ID",name:"Name",placeholder:"NA","success-message":"Looks good!"},model:{value:e.model.id,callback:function(t){e.$set(e.model,"id",t)},expression:"model.id"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{readonly:"",label:"Booking Date",name:"Booking Date",placeholder:"NA"},model:{value:e.model.booking_date,callback:function(t){e.$set(e.model,"booking_date",t)},expression:"model.booking_date"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{readonly:"",label:"Boarding Date",name:"Boarding Date",placeholder:"NA"},model:{value:e.model.date,callback:function(t){e.$set(e.model,"date",t)},expression:"model.date"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{readonly:"",label:"Cruise",name:"Cruise",placeholder:"NA"},model:{value:e.model.cruise,callback:function(t){e.$set(e.model,"cruise",t)},expression:"model.cruise"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{readonly:"",label:"Deck",name:"Deck",placeholder:"NA"},model:{value:e.model.deck,callback:function(t){e.$set(e.model,"deck",t)},expression:"model.deck"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{readonly:"",label:"Total No of Person",name:"Total No of Person",placeholder:"NA"},model:{value:e.model.person,callback:function(t){e.$set(e.model,"person",t)},expression:"model.person"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{readonly:"",label:"No of Adult",name:"No of Adult",placeholder:"NA"},model:{value:e.model.adult,callback:function(t){e.$set(e.model,"adult",t)},expression:"model.adult"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{readonly:"",label:"No of Kid",name:"No of Kid",placeholder:"NA"},model:{value:e.model.kid,callback:function(t){e.$set(e.model,"kid",t)},expression:"model.kid"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{readonly:"",label:"No of Infant",name:"No of Infant",placeholder:"NA"},model:{value:e.model.infant,callback:function(t){e.$set(e.model,"infant",t)},expression:"model.infant"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{readonly:"",label:"Name",name:"Name",placeholder:"NA"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{readonly:"",label:"Email",name:"Email",placeholder:"NA"},model:{value:e.model.email,callback:function(t){e.$set(e.model,"email",t)},expression:"model.email"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{readonly:"",label:"Phone",name:"Phone",placeholder:"NA"},model:{value:e.model.phone,callback:function(t){e.$set(e.model,"phone",t)},expression:"model.phone"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{readonly:"",label:"Sub Total Price",name:"Sub Total Price",placeholder:"NA"},model:{value:e.model.stotal,callback:function(t){e.$set(e.model,"stotal",t)},expression:"model.stotal"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{readonly:"",label:"Total Price",name:"Total Price",placeholder:"NA"},model:{value:e.model.total,callback:function(t){e.$set(e.model,"total",t)},expression:"model.total"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{readonly:"",label:"Payment Mode",name:"Payment Mode",placeholder:"NA"},model:{value:e.model.pay_mode,callback:function(t){e.$set(e.model,"pay_mode",t)},expression:"model.pay_mode"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{readonly:"",label:"Payment Id",name:"Payment Id",placeholder:"NA"},model:{value:e.model.payment_id,callback:function(t){e.$set(e.model,"payment_id",t)},expression:"model.payment_id"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{readonly:"",label:"Booked By",name:"Booked By",placeholder:"NA"},model:{value:e.model.bookedBy,callback:function(t){e.$set(e.model,"bookedBy",t)},expression:"model.bookedBy"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{readonly:"",label:"Commission",name:"Commission",placeholder:"NA"},model:{value:e.model.percent,callback:function(t){e.$set(e.model,"percent",t)},expression:"model.percent"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{readonly:"",label:"Commission Redeemed ?",name:"Commission Redeemed ?",placeholder:"NA"},model:{value:e.model.c_redeem,callback:function(t){e.$set(e.model,"c_redeem",t)},expression:"model.c_redeem"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{readonly:"",label:"Commission Value",name:"Commission Value",placeholder:"NA"},model:{value:e.model.c_value,callback:function(t){e.$set(e.model,"c_value",t)},expression:"model.c_value"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{readonly:"",label:"Booking With GST",name:"Booking With GST",placeholder:"NA"},model:{value:e.model.bookingwithgst,callback:function(t){e.$set(e.model,"bookingwithgst",t)},expression:"model.bookingwithgst"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{readonly:"",label:"GST No.",name:"GST No.",placeholder:"NA"},model:{value:e.model.gstno,callback:function(t){e.$set(e.model,"gstno",t)},expression:"model.gstno"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{readonly:"",label:"CGST %",name:"CGST %",placeholder:"NA"},model:{value:e.model.gst,callback:function(t){e.$set(e.model,"gst",t)},expression:"model.gst"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{readonly:"",label:"SGST %",name:"SGST %",placeholder:"NA"},model:{value:e.model.gst1,callback:function(t){e.$set(e.model,"gst1",t)},expression:"model.gst1"}})],1),e._v(" "),e.foodtotal>0?t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{readonly:"",label:"Vat 1 %",name:"Vat 1 %",placeholder:"NA"},model:{value:e.model.vat,callback:function(t){e.$set(e.model,"vat",t)},expression:"model.vat"}})],1):e._e(),e._v(" "),e.foodtotal>0?t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{readonly:"",label:"Vat 2 %",name:"Vat 2 %",placeholder:"NA"},model:{value:e.model.vat,callback:function(t){e.$set(e.model,"vat",t)},expression:"model.vat"}})],1):e._e()]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-12"},[t("h3",[e._v("Passenger Details")])])]),e._v(" "),e.all.length>0?t("div",{staticClass:"row"},e._l(e.all,(function(i,l){return t("div",{key:i,staticClass:"col-md-12"},[t("h4",[e._v("\n                    "+e._s(l+1)+" . Name : "+e._s(""==i.name?"Accompanion ".concat(l):i.name)+" (Age :\n                    "+e._s(""==i.age?"NA":i.age)+" y/o)\n                  ")])])})),0):e._e()])]}}])})],1)])])])],1)}),[],!1,null,"fcd1bb7c",null);t.default=component.exports},401:function(e,t,l){var o;"undefined"!=typeof self&&self,e.exports=(o=l(427),function(e){var t={};function l(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,l),n.l=!0,n.exports}return l.m=e,l.c=t,l.d=function(e,t,o){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(o,n,function(t){return e[t]}.bind(null,n));return o},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l(l.s=1)}([function(e,t){e.exports=o},function(e,t,l){"use strict";l.r(t),l.d(t,"Component",(function(){return p})),l.d(t,"Plugin",(function(){return m}));var o=l(0),n=l.n(o),i=["onChange","onClose","onDestroy","onMonthChange","onOpen","onYearChange"];function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o])}return e}).apply(this,arguments)}var a=function(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()},r=function(e){return e&&e.length?e:null},d=function(e){return u({},e)},s=i.concat(["onValueUpdate","onDayCreate","onParseConfig","onReady","onPreCalendarPosition","onKeyDown"]),c=["locale","showMonths"],p={name:"flat-pickr",render:function(e){return e("input",{attrs:{type:"text","data-input":!0},props:{disabled:this.disabled},on:{input:this.onInput}})},props:{value:{default:null,required:!0,validator:function(e){return null===e||e instanceof Date||"string"==typeof e||e instanceof String||e instanceof Array||"number"==typeof e}},config:{type:Object,default:function(){return{wrap:!1,defaultDate:null}}},events:{type:Array,default:function(){return i}},disabled:{type:Boolean,default:!1}},data:function(){return{fp:null}},mounted:function(){var e=this;if(!this.fp){var t=d(this.config);this.events.forEach((function(l){var o,i=n.a.defaultConfig[l]||[];t[l]=(o=t[l]||[],o instanceof Array?o:[o]).concat(i,(function(){for(var t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];e.$emit.apply(e,[a(l)].concat(o))}))})),t.defaultDate=this.value||t.defaultDate,this.fp=new n.a(this.getElem(),t),this.fpInput().addEventListener("blur",this.onBlur),this.$on("on-close",this.onClose),this.$watch("disabled",this.watchDisabled,{immediate:!0})}},methods:{getElem:function(){return this.config.wrap?this.$el.parentNode:this.$el},onInput:function(e){var t=this,l=e.target;this.$nextTick((function(){t.$emit("input",r(l.value))}))},fpInput:function(){return this.fp.altInput||this.fp.input},onBlur:function(e){this.$emit("blur",r(e.target.value))},onClose:function(e,t){this.$emit("input",r(t))},watchDisabled:function(e){e?this.fpInput().setAttribute("disabled",e):this.fpInput().removeAttribute("disabled")}},watch:{config:{deep:!0,handler:function(e){var t=this,l=d(e);s.forEach((function(e){delete l[e]})),this.fp.set(l),c.forEach((function(e){void 0!==l[e]&&t.fp.set(e,l[e])}))}},value:function(e){e!==r(this.$el.value)&&this.fp&&this.fp.setDate(e,!0)}},beforeDestroy:function(){this.fp&&(this.fpInput().removeEventListener("blur",this.onBlur),this.fp.destroy(),this.fp=null)}},m=function(e,t){var l="flat-pickr";"string"==typeof t&&(l=t),e.component(l,p)};p.install=m,t.default=p}]).default)},402:function(e,t,l){"use strict";l(32),l(21),l(26),l(38),l(39),l(23),l(19),l(44),l(45),l(43);var o=l(9);l(11);function n(e,t){var l="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!l){if(Array.isArray(e)||(l=function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var l=Object.prototype.toString.call(e).slice(8,-1);"Object"===l&&e.constructor&&(l=e.constructor.name);if("Map"===l||"Set"===l)return Array.from(e);if("Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return r(e,t)}(e))||t&&e&&"number"==typeof e.length){l&&(e=l);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,d=!0,c=!1;return{s:function(){l=l.call(e)},n:function(){var e=l.next();return d=e.done,e},e:function(e){c=!0,n=e},f:function(){try{d||null==l.return||l.return()}finally{if(c)throw n}}}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,l=new Array(t);i<t;i++)l[i]=e[i];return l}function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,l)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={name:"file-input",inheritAttrs:!1,props:{initialLabel:{type:String,default:"Select file"}},data:function(){return{files:[]}},computed:{listeners:function(){return c(c({},this.$listeners),{},{change:this.fileChange})},label:function(){var e,t=[],l=n(this.files);try{for(l.s();!(e=l.n()).done;){var o=e.value;t.push(o.name)}}catch(e){l.e(e)}finally{l.f()}return t.length?t.join(", "):this.initialLabel}},methods:{fileChange:function(e){this.files=e.target.files,this.$emit("change",this.files)}}},f=l(7),component=Object(f.a)(m,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"custom-file"},[t("input",e._g(e._b({staticClass:"custom-file-input",attrs:{type:"file",id:"customFileLang",lang:"en"}},"input",e.$attrs,!1),e.listeners)),e._v(" "),t("label",{staticClass:"custom-file-label",attrs:{for:"customFileLang"}},[e._v("\n    "+e._s(e.label)+"\n  ")])])}),[],!1,null,null,null);t.a=component.exports},403:function(e,t,l){"use strict";var o=l(10),n=(l(37),{components:{},data:function(){return{validated:!1,model:{firstName:"Mark",lastName:"Otto",username:"",city:"",state:"",zip:"",agree:!1}}},methods:{firstFormSubmit:function(){return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}}}),r=l(7),component=Object(r.a)(n,(function(){var e=this,t=e._self._c;return t("card",[t("h3",{staticClass:"mb-0",attrs:{slot:"header"},slot:"header"},[e._v("Custom styles")]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-8"},[t("p",{staticClass:"mb-0"},[e._v("\n        For custom form validation messages, you’ll need to provide error messages to your\n        "),t("code",[e._v("<base-input>")]),e._v(" components. This disables the browser default feedback tooltips, but still\n        provides access to the form\n        validation APIs in JavaScript.\n        "),t("br"),t("br"),e._v("\n        When attempting to submit, you’ll see the"),t("code",[e._v(".is-valid")]),e._v(" and "),t("code",[e._v(".is-invalid")]),e._v(" classes applied\n        to your form controls.\n      ")])])]),e._v(" "),t("hr"),e._v(" "),t("validation-observer",{ref:"formValidator",scopedSlots:e._u([{key:"default",fn:function(l){var o=l.handleSubmit;return[t("form",{staticClass:"needs-validation",on:{submit:function(t){return t.preventDefault(),o(e.firstFormSubmit)}}},[t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"First name",name:"First name",placeholder:"First name","success-message":"Looks good!",rules:"required"},model:{value:e.model.firstName,callback:function(t){e.$set(e.model,"firstName",t)},expression:"model.firstName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Last name",name:"Last name",placeholder:"Last name",rules:"required","success-message":"Looks good!"},model:{value:e.model.lastName,callback:function(t){e.$set(e.model,"lastName",t)},expression:"model.lastName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Username",name:"Username",placeholder:"Username",rules:"required"},model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1)]),e._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-6"},[t("base-input",{attrs:{label:"City",name:"City",placeholder:"City",rules:"required"},model:{value:e.model.city,callback:function(t){e.$set(e.model,"city",t)},expression:"model.city"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"State",name:"State",placeholder:"State",rules:"required"},model:{value:e.model.state,callback:function(t){e.$set(e.model,"state",t)},expression:"model.state"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Zip",name:"Zip",placeholder:"Zip",rules:"required"},model:{value:e.model.zip,callback:function(t){e.$set(e.model,"zip",t)},expression:"model.zip"}})],1)]),e._v(" "),t("base-input",{attrs:{rules:{required:{allowFalse:!1}},name:"Terms"}},[t("base-checkbox",{model:{value:e.model.agree,callback:function(t){e.$set(e.model,"agree",t)},expression:"model.agree"}},[e._v("\n          Agree to terms and conditions\n        ")])],1),e._v(" "),t("base-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("Submit form")])],1)]}}])})],1)}),[],!1,null,null,null);t.a=component.exports},404:function(e,t,l){"use strict";var o=l(10),n=(l(37),{components:{},data:function(){return{model:{firstName:"Mark",lastName:"Otto",username:"",city:"",state:"",zip:"",agree:!1}}},methods:{submit:function(){return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}}}),r=l(7),component=Object(r.a)(n,(function(){var e=this,t=e._self._c;return t("card",[t("h3",{staticClass:"mb-0",attrs:{slot:"header"},slot:"header"},[e._v("Browser defaults")]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-8"},[t("p",{staticClass:"mb-0"},[e._v("\n        Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you’ll\n        see a slightly different style of feedback.\n        "),t("br"),t("br"),e._v("\n        While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript.\n      ")])])]),e._v(" "),t("hr"),e._v(" "),t("form",{staticClass:"needs-validation",on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"First name",name:"First name",placeholder:"First name",required:""},model:{value:e.model.firstName,callback:function(t){e.$set(e.model,"firstName",t)},expression:"model.firstName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Last name",name:"Last name",placeholder:"Last name",required:""},model:{value:e.model.lastName,callback:function(t){e.$set(e.model,"lastName",t)},expression:"model.lastName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Username",name:"Username",placeholder:"Username",required:""},model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1)]),e._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-6"},[t("base-input",{attrs:{label:"City",name:"City",placeholder:"City",required:""},model:{value:e.model.city,callback:function(t){e.$set(e.model,"city",t)},expression:"model.city"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"State",name:"State",placeholder:"State",required:""},model:{value:e.model.state,callback:function(t){e.$set(e.model,"state",t)},expression:"model.state"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Zip",name:"Zip",placeholder:"Zip",required:""},model:{value:e.model.zip,callback:function(t){e.$set(e.model,"zip",t)},expression:"model.zip"}})],1)]),e._v(" "),t("base-input",[t("base-checkbox",{model:{value:e.model.agree,callback:function(t){e.$set(e.model,"agree",t)},expression:"model.agree"}},[e._v("\n        Agree to terms and conditions\n      ")])],1),e._v(" "),t("base-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("Submit form")])],1)])}),[],!1,null,null,null);t.a=component.exports},405:function(e,t,l){"use strict";var o=l(10),n=(l(37),{components:{},data:function(){return{validated:!1,model:{firstName:"Mark",lastName:"Otto",username:"",city:"",state:"",zip:"",agree:!1}}},methods:{onSubmit:function(){return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.$refs.formValidator.validate()}}),r=l(7),component=Object(r.a)(n,(function(){var e=this,t=e._self._c;return t("card",[t("h3",{staticClass:"mb-0",attrs:{slot:"header"},slot:"header"},[e._v("Server side validation")]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-8"},[t("p",{staticClass:"mb-0"},[e._v("\n        We recommend using client side validation, but in case you require server side, you can indicate invalid and\n        valid form fields with "),t("code",[e._v(".is-invalid")]),e._v(" and "),t("code",[e._v(".is-valid")]),e._v(". Note that\n        "),t("code",[e._v(".invalid-feedback")]),e._v("\n        is also supported with these classes.\n      ")])])]),e._v(" "),t("hr"),e._v(" "),t("validation-observer",{ref:"formValidator",scopedSlots:e._u([{key:"default",fn:function(l){var o=l.handleSubmit;return[t("form",{staticClass:"needs-validation",on:{submit:function(t){return t.preventDefault(),o(e.onSubmit)}}},[t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"First name",rules:"required",name:"First name",placeholder:"First name","success-message":"Looks good!"},model:{value:e.model.firstName,callback:function(t){e.$set(e.model,"firstName",t)},expression:"model.firstName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Last name",rules:"required",name:"Last name",placeholder:"Last name","success-message":"Looks good!"},model:{value:e.model.lastName,callback:function(t){e.$set(e.model,"lastName",t)},expression:"model.lastName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Username",rules:"required",name:"Username",placeholder:"Username","success-message":"Looks good!"},model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1)]),e._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-6"},[t("base-input",{attrs:{label:"City",name:"City",rules:"required",placeholder:"City","success-message":"Looks good!"},model:{value:e.model.city,callback:function(t){e.$set(e.model,"city",t)},expression:"model.city"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"State",name:"State",rules:"required",placeholder:"State","success-message":"Looks good!"},model:{value:e.model.state,callback:function(t){e.$set(e.model,"state",t)},expression:"model.state"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Zip",name:"Zip",rules:"required",placeholder:"Zip","success-message":"Looks good!"},model:{value:e.model.zip,callback:function(t){e.$set(e.model,"zip",t)},expression:"model.zip"}})],1)]),e._v(" "),t("base-input",{attrs:{rules:{required:{allowFalse:!1}},name:"Terms"}},[t("base-checkbox",{model:{value:e.model.agree,callback:function(t){e.$set(e.model,"agree",t)},expression:"model.agree"}},[e._v("\n          Agree to terms and conditions\n        ")])],1),e._v(" "),t("base-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("Submit form")])],1)]}}])})],1)}),[],!1,null,null,null);t.a=component.exports},419:function(e,t,l){"use strict";l.d(t,"a",(function(){return d}));var o=l(129);var n=l(170),r=l(89);function d(e){return function(e){if(Array.isArray(e))return Object(o.a)(e)}(e)||Object(n.a)(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},794:function(e,t,l){},795:function(e,t,l){}}]);