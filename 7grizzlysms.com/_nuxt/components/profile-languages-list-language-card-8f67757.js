(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{1135:function(e,t,n){e.exports={}},1136:function(e,t,n){e.exports={}},1302:function(e,t,n){"use strict";n(1135)},1303:function(e,t,n){"use strict";n(1136)},1492:function(e,t,n){"use strict";n.r(t);n(20),n(22),n(15),n(13),n(25),n(38);var r=n(0),o=n(3),l=(n(11),n(35),n(19),n(33),n(31),n(29),n(23),n(1014));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h,v={name:"LanguageCard",data:function(){return{localPrice:"",isOpenFooter:!1,isRepeatRequest:!1,isLocalPriceLoading:!1}},props:{language:{type:Object,default:function(){return{}}},currentServiceForRepeat:{type:String,default:""},isWholesale:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},computed:{isAuthUser:function(){var e,t;return Boolean(null===(e=this.$store.state.user)||void 0===e||null===(t=e.user)||void 0===t?void 0:t.id)},isUseNuxtLink:function(){return Boolean("buy"===this.typeNumberReceiving)},langInfo:function(){var e;return"rent"===this.typeNumberReceiving?d(d({},this.language),null===(e=this.language)||void 0===e?void 0:e.country):this.language},getCurrency:function(){return this.$store.getters["currency/currentCurrency"]},priceValue:function(){var e=Boolean("rub"===this.getCurrency)?"₽":"$",t=this.$convertCurrency(this.localPrice||this.langInfo.price||this.langInfo.cost);return this.isWholesale?["".concat(this.$t("servicesList.from")," "),t,e].join(""):[t,e].join("")},buttonLabel:function(){return this.isWholesale?"INFO":this.loading?this.$t("servicesList.buttonWaiting"):"rent"===this.typeNumberReceiving?this.$t("servicesList.buttonRent"):this.$t("servicesList.buttonBuy")},countLanguages:function(){var e,t=(null===(e=this.langInfo)||void 0===e?void 0:e.count)||0;return t<=0?this.$t("servicesList.quantityFew"):[t,this.$t("servicesList.quantity")].join(" ")},hreflang:function(){var e,t;return(null==this||null===(e=this.$i18n)||void 0===e?void 0:e.locale)||(null==this||null===(t=this.$i18n)||void 0===t?void 0:t.defaultLocale)||"en"},isDisabledButtonBuy:function(){var e;return"rent"===this.typeNumberReceiving?Boolean(this.loading):Boolean(this.loading||!(null!==(e=this.langInfo)&&void 0!==e&&e.button_status))},messageDisabledCard:function(){var e;return"rent"===this.typeNumberReceiving?"":null!==(e=this.langInfo)&&void 0!==e&&e.button_status?void 0:this.$t("servicesList.numberTemporarilyUnavailable")},typeNumberReceiving:function(){var e,t;return(null===(e=this.$store.state)||void 0===e||null===(t=e["languages-list"])||void 0===t?void 0:t.typeNumberReceiving)||""},isDisabledRussian:function(){var e,t,n;return Boolean("0"===String(null===(e=this.langInfo)||void 0===e?void 0:e.country_external_id)||"0"===String(null===(t=this.langInfo)||void 0===t||null===(n=t.country)||void 0===n?void 0:n.external_id))}},components:{RentInformation:function(){return Promise.all([n.e(17),n.e(23),n.e(38),n.e(72)]).then(n.bind(null,1574))},HelpDisabledRuCountry:l.default},methods:{clickLink:function(){this.loading||(this.$cookies.set("selectedCountryId",this.langInfo.country_external_id),this.$router.push(this.localePath("/countries/".concat(this.langInfo.country_slug||this.langInfo.slug))))},clickButton:(h=Object(r.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.loading){e.next=2;break}return e.abrupt("return");case 2:if(t.stopPropagation(),!this.isWholesale){e.next=7;break}return e.next=6,this.$router.push(this.localePath("/docs"));case 6:return e.abrupt("return");case 7:if("rent"!==this.typeNumberReceiving){e.next=14;break}if(this.isAuthUser){e.next=12;break}return e.next=11,this.$router.push(this.localePath("/authorization"));case 11:return e.abrupt("return");case 12:return this.isOpenFooter=!this.isOpenFooter,e.abrupt("return");case 14:this.$emit("onBuyNumber",d({isNeedRepeat:this.isRepeatRequest&&"".concat(this.language.name,"-").concat(this.language.service_slug)===this.currentServiceForRepeat},this.langInfo));case 15:case"end":return e.stop()}}),e,this)}))),function(e){return h.apply(this,arguments)}),setLocalPrice:function(e){this.localPrice=e},setLocalPriceLoading:function(e){this.isLocalPriceLoading=e}}},f=v,_=(n(1302),n(1303),n(5)),component=Object(_.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"language-item",class:{loading:e.loading,"rent-type":Boolean("rent"===e.typeNumberReceiving),"rent-type-open":Boolean("rent"===e.typeNumberReceiving&&e.isOpenFooter),"disabled-russian":Boolean(e.isDisabledRussian)}},[n("div",{staticClass:"language-item__body"},[n("div",{staticClass:"language-item__icon"},[n("img",{attrs:{alt:"icon",loading:"lazy",src:e.langInfo.icon}})]),e._v(" "),n("div",{staticClass:"language-item__name"},[e._v("\n      "+e._s(e.langInfo.name)+"\n    ")]),e._v(" "),n("div",{staticClass:"language-item__count"},[e._v("\n      "+e._s(e.countLanguages)+"\n    ")]),e._v(" "),n("div",{staticClass:"language-item__price",class:{"--loading":e.isLocalPriceLoading}},[e._v("\n      "+e._s(e.priceValue)+"\n    ")]),e._v(" "),n("div",{staticClass:"language-item__button"},[n("button",{staticClass:"btn btn-primary",attrs:{disabled:e.isDisabledButtonBuy},on:{click:e.clickButton}},[n("span",{staticClass:"button__label"},[e._v(e._s(e.buttonLabel))]),e._v(" "),n("span",{staticClass:"button__price"},[e._v(e._s(e.priceValue))])]),e._v(" "),e.language.name+"-"+e.language.service_slug===e.currentServiceForRepeat?n("label",{staticClass:"repeat-checkbox"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.isRepeatRequest,expression:"isRepeatRequest"}],staticClass:"checkbox checkbox-primary",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.isRepeatRequest)?e._i(e.isRepeatRequest,null)>-1:e.isRepeatRequest},on:{change:function(t){var n=e.isRepeatRequest,r=t.target,o=!!r.checked;if(Array.isArray(n)){var l=e._i(n,null);r.checked?l<0&&(e.isRepeatRequest=n.concat([null])):l>-1&&(e.isRepeatRequest=n.slice(0,l).concat(n.slice(l+1)))}else e.isRepeatRequest=o}}}),e._v(" "),n("span",[e._v(e._s(e.$t("languagesList.repeatMsg",{min:20})))])]):e._e()]),e._v(" "),e.isUseNuxtLink?[n("nuxt-link",{staticClass:"language-item__link",attrs:{to:e.localePath("/countries/"+(e.langInfo.country_slug||e.langInfo.slug)),event:"",hreflang:e.$hreflangInitial(),rel:"alternate"},nativeOn:{click:function(t){return e.clickLink.apply(null,arguments)}}},[e._v(e._s(e.langInfo.name)+" "+e._s(e.countLanguages)+" "+e._s(e.priceValue))])]:e._e(),e._v(" "),e.messageDisabledCard&&!e.isDisabledRussian?n("div",{staticClass:"language-item__message-disabled"},[e._v("\n      "+e._s(e.messageDisabledCard)+"\n    ")]):e._e()],2),e._v(" "),n("client-only",[e.isOpenFooter?[n("div",{staticClass:"language-item__footer"},[n("RentInformation",{attrs:{item:e.langInfo},on:{setPrice:e.setLocalPrice,setLocalPriceLoading:e.setLocalPriceLoading}})],1)]:e._e()],2),e._v(" "),e.isDisabledRussian?[n("HelpDisabledRuCountry",{attrs:{bottom:!0}})]:e._e()],2)}),[],!1,null,"24afa8c2",null);t.default=component.exports}}]);
//# sourceMappingURL=profile-languages-list-language-card-8f67757.js.map