/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{210:function(t,e,n){"use strict";var r=["compactDisplay","currency","currencyDisplay","currencySign","localeMatcher","notation","numberingSystem","signDisplay","style","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits"];function o(t,e){"undefined"!=typeof console&&(console.warn("[vue-i18n] "+t),e&&console.warn(e.stack))}var l=Array.isArray;function c(t){return null!==t&&"object"==typeof t}function h(t){return"string"==typeof t}var f=Object.prototype.toString;function _(t){return"[object Object]"===f.call(t)}function m(t){return null==t}function v(t){return"function"==typeof t}function d(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];var n=null,r=null;return 1===t.length?c(t[0])||l(t[0])?r=t[0]:"string"==typeof t[0]&&(n=t[0]):2===t.length&&("string"==typeof t[0]&&(n=t[0]),(c(t[1])||l(t[1]))&&(r=t[1])),{locale:n,params:r}}function y(t){return JSON.parse(JSON.stringify(t))}function F(t,e){return!!~t.indexOf(e)}var k=Object.prototype.hasOwnProperty;function w(t,e){return k.call(t,e)}function $(t){for(var e=arguments,output=Object(t),i=1;i<arguments.length;i++){var source=e[i];if(null!=source){var n=void 0;for(n in source)w(source,n)&&(c(source[n])?output[n]=$(output[n],source[n]):output[n]=source[n])}}return output}function M(a,b){if(a===b)return!0;var t=c(a),e=c(b);if(!t||!e)return!t&&!e&&String(a)===String(b);try{var n=l(a),r=l(b);if(n&&r)return a.length===b.length&&a.every((function(t,i){return M(t,b[i])}));if(n||r)return!1;var o=Object.keys(a),h=Object.keys(b);return o.length===h.length&&o.every((function(t){return M(a[t],b[t])}))}catch(t){return!1}}function T(t){return null!=t&&Object.keys(t).forEach((function(e){"string"==typeof t[e]&&(t[e]=t[e].replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;"))})),t}var C={name:"i18n",functional:!0,props:{tag:{type:[String,Boolean,Object],default:"span"},path:{type:String,required:!0},locale:{type:String},places:{type:[Array,Object]}},render:function(t,e){var data=e.data,n=e.parent,r=e.props,o=e.slots,l=n.$i18n;if(l){var path=r.path,c=r.locale,h=r.places,f=o(),_=l.i(path,c,function(t){var e;for(e in t)if("default"!==e)return!1;return Boolean(e)}(f)||h?function(t,e){var n=e?function(t){0;return Array.isArray(t)?t.reduce(L,{}):Object.assign({},t)}(e):{};if(!t)return n;var r=(t=t.filter((function(t){return t.tag||""!==t.text.trim()}))).every(D);0;return t.reduce(r?I:L,n)}(f.default,h):f),m=r.tag&&!0!==r.tag||!1===r.tag?r.tag:"span";return m?t(m,data,_):_}}};function I(t,e){return e.data&&e.data.attrs&&e.data.attrs.place&&(t[e.data.attrs.place]=e),t}function L(t,e,n){return t[n]=e,t}function D(t){return Boolean(t.data&&t.data.attrs&&t.data.attrs.place)}var O,x={name:"i18n-n",functional:!0,props:{tag:{type:[String,Boolean,Object],default:"span"},value:{type:Number,required:!0},format:{type:[String,Object]},locale:{type:String}},render:function(t,e){var n=e.props,o=e.parent,data=e.data,l=o.$i18n;if(!l)return null;var f=null,_=null;h(n.format)?f=n.format:c(n.format)&&(n.format.key&&(f=n.format.key),_=Object.keys(n.format).reduce((function(t,e){var o;return F(r,e)?Object.assign({},t,((o={})[e]=n.format[e],o)):t}),null));var m=n.locale||l.locale,v=l._ntp(n.value,m,f,_),d=v.map((function(t,e){var n,slot=data.scopedSlots&&data.scopedSlots[t.type];return slot?slot(((n={})[t.type]=t.value,n.index=e,n.parts=v,n)):t.value})),y=n.tag&&!0!==n.tag||!1===n.tag?n.tag:"span";return y?t(y,{attrs:data.attrs,class:data.class,staticClass:data.staticClass},d):d}};function N(t,e,n){E(t,n)&&S(t,e,n)}function W(t,e,n,r){if(E(t,n)){var o=n.context.$i18n;(function(t,e){var n=e.context;return t._locale===n.$i18n.locale})(t,n)&&M(e.value,e.oldValue)&&M(t._localeMessage,o.getLocaleMessage(o.locale))||S(t,e,n)}}function j(t,e,n,r){if(n.context){var l=n.context.$i18n||{};e.modifiers.preserve||l.preserveDirectiveContent||(t.textContent=""),t._vt=void 0,delete t._vt,t._locale=void 0,delete t._locale,t._localeMessage=void 0,delete t._localeMessage}else o("Vue instance does not exists in VNode context")}function E(t,e){var n=e.context;return n?!!n.$i18n||(o("VueI18n instance does not exists in Vue instance"),!1):(o("Vue instance does not exists in VNode context"),!1)}function S(t,e,n){var r,l,c=function(t){var path,e,n,r;h(t)?path=t:_(t)&&(path=t.path,e=t.locale,n=t.args,r=t.choice);return{path:path,locale:e,args:n,choice:r}}(e.value),path=c.path,f=c.locale,m=c.args,v=c.choice;if(path||f||m)if(path){var d=n.context;t._vt=t.textContent=null!=v?(r=d.$i18n).tc.apply(r,[path,v].concat(R(f,m))):(l=d.$i18n).t.apply(l,[path].concat(R(f,m))),t._locale=d.$i18n.locale,t._localeMessage=d.$i18n.getLocaleMessage(d.$i18n.locale)}else o("`path` is required in v-t directive");else o("value type not supported")}function R(t,e){var n=[];return t&&n.push(t),e&&(Array.isArray(e)||_(e))&&n.push(e),n}function H(t,e){void 0===e&&(e={bridge:!1}),H.installed=!0;(O=t).version&&Number(O.version.split(".")[0]);(function(t){t.prototype.hasOwnProperty("$i18n")||Object.defineProperty(t.prototype,"$i18n",{get:function(){return this._i18n}}),t.prototype.$t=function(t){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];var r=this.$i18n;return r._t.apply(r,[t,r.locale,r._getMessages(),this].concat(e))},t.prototype.$tc=function(t,e){for(var n=[],r=arguments.length-2;r-- >0;)n[r]=arguments[r+2];var o=this.$i18n;return o._tc.apply(o,[t,o.locale,o._getMessages(),this,e].concat(n))},t.prototype.$te=function(t,e){var n=this.$i18n;return n._te(t,n.locale,n._getMessages(),e)},t.prototype.$d=function(t){for(var e,n=[],r=arguments.length-1;r-- >0;)n[r]=arguments[r+1];return(e=this.$i18n).d.apply(e,[t].concat(n))},t.prototype.$n=function(t){for(var e,n=[],r=arguments.length-1;r-- >0;)n[r]=arguments[r+1];return(e=this.$i18n).n.apply(e,[t].concat(n))}})(O),O.mixin(function(t){function e(){this!==this.$root&&this.$options.__INTLIFY_META__&&this.$el&&this.$el.setAttribute("data-intlify",this.$options.__INTLIFY_META__)}return void 0===t&&(t=!1),t?{mounted:e}:{beforeCreate:function(){var t=this.$options;if(t.i18n=t.i18n||(t.__i18nBridge||t.__i18n?{}:null),t.i18n){if(t.i18n instanceof nt){if(t.__i18nBridge||t.__i18n)try{var e=t.i18n&&t.i18n.messages?t.i18n.messages:{};(t.__i18nBridge||t.__i18n).forEach((function(t){e=$(e,JSON.parse(t))})),Object.keys(e).forEach((function(n){t.i18n.mergeLocaleMessage(n,e[n])}))}catch(t){}this._i18n=t.i18n,this._i18nWatcher=this._i18n.watchI18nData()}else if(_(t.i18n)){var n=this.$root&&this.$root.$i18n&&this.$root.$i18n instanceof nt?this.$root.$i18n:null;if(n&&(t.i18n.root=this.$root,t.i18n.formatter=n.formatter,t.i18n.fallbackLocale=n.fallbackLocale,t.i18n.formatFallbackMessages=n.formatFallbackMessages,t.i18n.silentTranslationWarn=n.silentTranslationWarn,t.i18n.silentFallbackWarn=n.silentFallbackWarn,t.i18n.pluralizationRules=n.pluralizationRules,t.i18n.preserveDirectiveContent=n.preserveDirectiveContent),t.__i18nBridge||t.__i18n)try{var r=t.i18n&&t.i18n.messages?t.i18n.messages:{};(t.__i18nBridge||t.__i18n).forEach((function(t){r=$(r,JSON.parse(t))})),t.i18n.messages=r}catch(t){}var o=t.i18n.sharedMessages;o&&_(o)&&(t.i18n.messages=$(t.i18n.messages,o)),this._i18n=new nt(t.i18n),this._i18nWatcher=this._i18n.watchI18nData(),(void 0===t.i18n.sync||t.i18n.sync)&&(this._localeWatcher=this.$i18n.watchLocale()),n&&n.onComponentInstanceCreated(this._i18n)}}else this.$root&&this.$root.$i18n&&this.$root.$i18n instanceof nt?this._i18n=this.$root.$i18n:t.parent&&t.parent.$i18n&&t.parent.$i18n instanceof nt&&(this._i18n=t.parent.$i18n)},beforeMount:function(){var t=this.$options;t.i18n=t.i18n||(t.__i18nBridge||t.__i18n?{}:null),t.i18n?(t.i18n instanceof nt||_(t.i18n))&&(this._i18n.subscribeDataChanging(this),this._subscribing=!0):(this.$root&&this.$root.$i18n&&this.$root.$i18n instanceof nt||t.parent&&t.parent.$i18n&&t.parent.$i18n instanceof nt)&&(this._i18n.subscribeDataChanging(this),this._subscribing=!0)},mounted:e,beforeDestroy:function(){if(this._i18n){var t=this;this.$nextTick((function(){t._subscribing&&(t._i18n.unsubscribeDataChanging(t),delete t._subscribing),t._i18nWatcher&&(t._i18nWatcher(),t._i18n.destroyVM(),delete t._i18nWatcher),t._localeWatcher&&(t._localeWatcher(),delete t._localeWatcher)}))}}}}(e.bridge)),O.directive("t",{bind:N,update:W,unbind:j}),O.component(C.name,C),O.component(x.name,x),O.config.optionMergeStrategies.i18n=function(t,e){return void 0===e?t:e}}var V=function(){this._caches=Object.create(null)};V.prototype.interpolate=function(t,e){if(!e)return[t];var n=this._caches[t];return n||(n=function(t){var e=[],n=0,text="";for(;n<t.length;){var r=t[n++];if("{"===r){text&&e.push({type:"text",value:text}),text="";var sub="";for(r=t[n++];void 0!==r&&"}"!==r;)sub+=r,r=t[n++];var o="}"===r,l=P.test(sub)?"list":o&&A.test(sub)?"named":"unknown";e.push({value:sub,type:l})}else"%"===r?"{"!==t[n]&&(text+=r):text+=r}return text&&e.push({type:"text",value:text}),e}(t),this._caches[t]=n),function(t,e){var n=[],r=0,o=Array.isArray(e)?"list":c(e)?"named":"unknown";if("unknown"===o)return n;for(;r<t.length;){var l=t[r];switch(l.type){case"text":n.push(l.value);break;case"list":n.push(e[parseInt(l.value,10)]);break;case"named":"named"===o&&n.push(e[l.value])}r++}return n}(n,e)};var P=/^(?:\d)+/,A=/^(?:\w)+/;var B=[];B[0]={ws:[0],ident:[3,0],"[":[4],eof:[7]},B[1]={ws:[1],".":[2],"[":[4],eof:[7]},B[2]={ws:[2],ident:[3,0],0:[3,0],number:[3,0]},B[3]={ident:[3,0],0:[3,0],number:[3,0],ws:[1,1],".":[2,1],"[":[4,1],eof:[7,1]},B[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],eof:8,else:[4,0]},B[5]={"'":[4,0],eof:8,else:[5,0]},B[6]={'"':[4,0],eof:8,else:[6,0]};var U=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function z(t){if(null==t)return"eof";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"ident";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"ws"}return"ident"}function J(path){var t,a,e,n=path.trim();return("0"!==path.charAt(0)||!isNaN(path))&&(e=n,U.test(e)?(a=(t=n).charCodeAt(0))!==t.charCodeAt(t.length-1)||34!==a&&39!==a?t:t.slice(1,-1):"*"+n)}var G=function(){this._cache=Object.create(null)};G.prototype.parsePath=function(path){var t=this._cache[path];return t||(t=function(path){var t,e,n,r,o,l,c,h=[],f=-1,_=0,m=0,v=[];function d(){var t=path[f+1];if(5===_&&"'"===t||6===_&&'"'===t)return f++,n="\\"+t,v[0](),!0}for(v[1]=function(){void 0!==e&&(h.push(e),e=void 0)},v[0]=function(){void 0===e?e=n:e+=n},v[2]=function(){v[0](),m++},v[3]=function(){if(m>0)m--,_=4,v[0]();else{if(m=0,void 0===e)return!1;if(!1===(e=J(e)))return!1;v[1]()}};null!==_;)if(f++,"\\"!==(t=path[f])||!d()){if(r=z(t),8===(o=(c=B[_])[r]||c.else||8))return;if(_=o[0],(l=v[o[1]])&&(n=void 0===(n=o[2])?t:n,!1===l()))return;if(7===_)return h}}(path),t&&(this._cache[path]=t)),t||[]},G.prototype.getPathValue=function(t,path){if(!c(t))return null;var e=this.parsePath(path);if(0===e.length)return null;for(var n=e.length,r=t,i=0;i<n;){var o=r[e[i]];if(null==o)return null;r=o,i++}return r};var Y,X=/<\/?[\w\s="/.':;#-\/]+>/,Z=/(?:@(?:\.[a-z]+)?:(?:[\w\-_|./]+|\([\w\-_|./]+\)))/g,K=/^@(?:\.([a-z]+))?:/,Q=/[()]/g,tt={upper:function(t){return t.toLocaleUpperCase()},lower:function(t){return t.toLocaleLowerCase()},capitalize:function(t){return""+t.charAt(0).toLocaleUpperCase()+t.substr(1)}},et=new V,nt=function(t){var e=this;void 0===t&&(t={}),!O&&"undefined"!=typeof window&&window.Vue&&H(window.Vue);var n=t.locale||"en-US",r=!1!==t.fallbackLocale&&(t.fallbackLocale||"en-US"),o=t.messages||{},l=t.dateTimeFormats||t.datetimeFormats||{},c=t.numberFormats||{};this._vm=null,this._formatter=t.formatter||et,this._modifiers=t.modifiers||{},this._missing=t.missing||null,this._root=t.root||null,this._sync=void 0===t.sync||!!t.sync,this._fallbackRoot=void 0===t.fallbackRoot||!!t.fallbackRoot,this._formatFallbackMessages=void 0!==t.formatFallbackMessages&&!!t.formatFallbackMessages,this._silentTranslationWarn=void 0!==t.silentTranslationWarn&&t.silentTranslationWarn,this._silentFallbackWarn=void 0!==t.silentFallbackWarn&&!!t.silentFallbackWarn,this._dateTimeFormatters={},this._numberFormatters={},this._path=new G,this._dataListeners=new Set,this._componentInstanceCreatedListener=t.componentInstanceCreatedListener||null,this._preserveDirectiveContent=void 0!==t.preserveDirectiveContent&&!!t.preserveDirectiveContent,this.pluralizationRules=t.pluralizationRules||{},this._warnHtmlInMessage=t.warnHtmlInMessage||"off",this._postTranslation=t.postTranslation||null,this._escapeParameterHtml=t.escapeParameterHtml||!1,"__VUE_I18N_BRIDGE__"in t&&(this.__VUE_I18N_BRIDGE__=t.__VUE_I18N_BRIDGE__),this.getChoiceIndex=function(t,n){var r=Object.getPrototypeOf(e);if(r&&r.getChoiceIndex)return r.getChoiceIndex.call(e,t,n);var o,l;return e.locale in e.pluralizationRules?e.pluralizationRules[e.locale].apply(e,[t,n]):(o=t,l=n,o=Math.abs(o),2===l?o?o>1?1:0:1:o?Math.min(o,2):0)},this._exist=function(t,n){return!(!t||!n)&&(!m(e._path.getPathValue(t,n))||!!t[n])},"warn"!==this._warnHtmlInMessage&&"error"!==this._warnHtmlInMessage||Object.keys(o).forEach((function(t){e._checkLocaleMessage(t,e._warnHtmlInMessage,o[t])})),this._initVM({locale:n,fallbackLocale:r,messages:o,dateTimeFormats:l,numberFormats:c})},at={vm:{configurable:!0},messages:{configurable:!0},dateTimeFormats:{configurable:!0},numberFormats:{configurable:!0},availableLocales:{configurable:!0},locale:{configurable:!0},fallbackLocale:{configurable:!0},formatFallbackMessages:{configurable:!0},missing:{configurable:!0},formatter:{configurable:!0},silentTranslationWarn:{configurable:!0},silentFallbackWarn:{configurable:!0},preserveDirectiveContent:{configurable:!0},warnHtmlInMessage:{configurable:!0},postTranslation:{configurable:!0},sync:{configurable:!0}};nt.prototype._checkLocaleMessage=function(t,e,n){var r=function(t,e,n,c){if(_(n))Object.keys(n).forEach((function(o){var l=n[o];_(l)?(c.push(o),c.push("."),r(t,e,l,c),c.pop(),c.pop()):(c.push(o),r(t,e,l,c),c.pop())}));else if(l(n))n.forEach((function(n,o){_(n)?(c.push("["+o+"]"),c.push("."),r(t,e,n,c),c.pop(),c.pop()):(c.push("["+o+"]"),r(t,e,n,c),c.pop())}));else if(h(n)){if(X.test(n)){var f="Detected HTML in message '"+n+"' of keypath '"+c.join("")+"' at '"+e+"'. Consider component interpolation with '<i18n>' to avoid XSS. See https://bit.ly/2ZqJzkp";"warn"===t?o(f):"error"===t&&function(t,e){"undefined"!=typeof console&&(console.error("[vue-i18n] "+t),e&&console.error(e.stack))}(f)}}};r(e,t,n,[])},nt.prototype._initVM=function(data){var t=O.config.silent;O.config.silent=!0,this._vm=new O({data:data,__VUE18N__INSTANCE__:!0}),O.config.silent=t},nt.prototype.destroyVM=function(){this._vm.$destroy()},nt.prototype.subscribeDataChanging=function(t){this._dataListeners.add(t)},nt.prototype.unsubscribeDataChanging=function(t){!function(t,e){if(t.delete(e));}(this._dataListeners,t)},nt.prototype.watchI18nData=function(){var t=this;return this._vm.$watch("$data",(function(){for(var e,n,r=(e=t._dataListeners,n=[],e.forEach((function(a){return n.push(a)})),n),i=r.length;i--;)O.nextTick((function(){r[i]&&r[i].$forceUpdate()}))}),{deep:!0})},nt.prototype.watchLocale=function(t){if(t){if(!this.__VUE_I18N_BRIDGE__)return null;var e=this,n=this._vm;return this.vm.$watch("locale",(function(r){n.$set(n,"locale",r),e.__VUE_I18N_BRIDGE__&&t&&(t.locale.value=r),n.$forceUpdate()}),{immediate:!0})}if(!this._sync||!this._root)return null;var r=this._vm;return this._root.$i18n.vm.$watch("locale",(function(t){r.$set(r,"locale",t),r.$forceUpdate()}),{immediate:!0})},nt.prototype.onComponentInstanceCreated=function(t){this._componentInstanceCreatedListener&&this._componentInstanceCreatedListener(t,this)},at.vm.get=function(){return this._vm},at.messages.get=function(){return y(this._getMessages())},at.dateTimeFormats.get=function(){return y(this._getDateTimeFormats())},at.numberFormats.get=function(){return y(this._getNumberFormats())},at.availableLocales.get=function(){return Object.keys(this.messages).sort()},at.locale.get=function(){return this._vm.locale},at.locale.set=function(t){this._vm.$set(this._vm,"locale",t)},at.fallbackLocale.get=function(){return this._vm.fallbackLocale},at.fallbackLocale.set=function(t){this._localeChainCache={},this._vm.$set(this._vm,"fallbackLocale",t)},at.formatFallbackMessages.get=function(){return this._formatFallbackMessages},at.formatFallbackMessages.set=function(t){this._formatFallbackMessages=t},at.missing.get=function(){return this._missing},at.missing.set=function(t){this._missing=t},at.formatter.get=function(){return this._formatter},at.formatter.set=function(t){this._formatter=t},at.silentTranslationWarn.get=function(){return this._silentTranslationWarn},at.silentTranslationWarn.set=function(t){this._silentTranslationWarn=t},at.silentFallbackWarn.get=function(){return this._silentFallbackWarn},at.silentFallbackWarn.set=function(t){this._silentFallbackWarn=t},at.preserveDirectiveContent.get=function(){return this._preserveDirectiveContent},at.preserveDirectiveContent.set=function(t){this._preserveDirectiveContent=t},at.warnHtmlInMessage.get=function(){return this._warnHtmlInMessage},at.warnHtmlInMessage.set=function(t){var e=this,n=this._warnHtmlInMessage;if(this._warnHtmlInMessage=t,n!==t&&("warn"===t||"error"===t)){var r=this._getMessages();Object.keys(r).forEach((function(t){e._checkLocaleMessage(t,e._warnHtmlInMessage,r[t])}))}},at.postTranslation.get=function(){return this._postTranslation},at.postTranslation.set=function(t){this._postTranslation=t},at.sync.get=function(){return this._sync},at.sync.set=function(t){this._sync=t},nt.prototype._getMessages=function(){return this._vm.messages},nt.prototype._getDateTimeFormats=function(){return this._vm.dateTimeFormats},nt.prototype._getNumberFormats=function(){return this._vm.numberFormats},nt.prototype._warnDefault=function(t,e,n,r,o,l){if(!m(n))return n;if(this._missing){var c=this._missing.apply(null,[t,e,r,o]);if(h(c))return c}else 0;if(this._formatFallbackMessages){var f=d.apply(void 0,o);return this._render(e,l,f.params,e)}return e},nt.prototype._isFallbackRoot=function(t){return!t&&!m(this._root)&&this._fallbackRoot},nt.prototype._isSilentFallbackWarn=function(t){return this._silentFallbackWarn instanceof RegExp?this._silentFallbackWarn.test(t):this._silentFallbackWarn},nt.prototype._isSilentFallback=function(t,e){return this._isSilentFallbackWarn(e)&&(this._isFallbackRoot()||t!==this.fallbackLocale)},nt.prototype._isSilentTranslationWarn=function(t){return this._silentTranslationWarn instanceof RegExp?this._silentTranslationWarn.test(t):this._silentTranslationWarn},nt.prototype._interpolate=function(t,e,n,r,o,c,f){if(!e)return null;var d,y=this._path.getPathValue(e,n);if(l(y)||_(y))return y;if(m(y)){if(!_(e))return null;if(!h(d=e[n])&&!v(d))return null}else{if(!h(y)&&!v(y))return null;d=y}return h(d)&&(d.indexOf("@:")>=0||d.indexOf("@.")>=0)&&(d=this._link(t,e,d,r,"raw",c,f)),this._render(d,o,c,n)},nt.prototype._link=function(t,e,n,r,o,c,h){var f=n,_=f.match(Z);for(var m in _)if(_.hasOwnProperty(m)){var link=_[m],v=link.match(K),d=v[0],y=v[1],k=link.replace(d,"").replace(Q,"");if(F(h,k))return f;h.push(k);var w=this._interpolate(t,e,k,r,"raw"===o?"string":o,"raw"===o?void 0:c,h);if(this._isFallbackRoot(w)){if(!this._root)throw Error("unexpected error");var $=this._root.$i18n;w=$._translate($._getMessages(),$.locale,$.fallbackLocale,k,r,o,c)}w=this._warnDefault(t,k,w,r,l(c)?c:[c],o),this._modifiers.hasOwnProperty(y)?w=this._modifiers[y](w):tt.hasOwnProperty(y)&&(w=tt[y](w)),h.pop(),f=w?f.replace(link,w):f}return f},nt.prototype._createMessageContext=function(t,e,path,n){var r=this,o=l(t)?t:[],h=c(t)?t:{},f=this._getMessages(),_=this.locale;return{list:function(t){return o[t]},named:function(t){return h[t]},values:t,formatter:e,path:path,messages:f,locale:_,linked:function(t){return r._interpolate(_,f[_]||{},t,null,n,void 0,[t])}}},nt.prototype._render=function(t,e,n,path){if(v(t))return t(this._createMessageContext(n,this._formatter||et,path,e));var r=this._formatter.interpolate(t,n,path);return r||(r=et.interpolate(t,n,path)),"string"!==e||h(r)?r:r.join("")},nt.prototype._appendItemToChain=function(t,e,n){var r=!1;return F(t,e)||(r=!0,e&&(r="!"!==e[e.length-1],e=e.replace(/!/g,""),t.push(e),n&&n[e]&&(r=n[e]))),r},nt.prototype._appendLocaleToChain=function(t,e,n){var r,o=e.split("-");do{var l=o.join("-");r=this._appendItemToChain(t,l,n),o.splice(-1,1)}while(o.length&&!0===r);return r},nt.prototype._appendBlockToChain=function(t,e,n){for(var r=!0,i=0;i<e.length&&"boolean"==typeof r;i++){var o=e[i];h(o)&&(r=this._appendLocaleToChain(t,o,n))}return r},nt.prototype._getLocaleChain=function(t,e){if(""===t)return[];this._localeChainCache||(this._localeChainCache={});var n=this._localeChainCache[t];if(!n){e||(e=this.fallbackLocale),n=[];for(var r,o=[t];l(o);)o=this._appendBlockToChain(n,o,e);(o=h(r=l(e)?e:c(e)?e.default?e.default:null:e)?[r]:r)&&this._appendBlockToChain(n,o,null),this._localeChainCache[t]=n}return n},nt.prototype._translate=function(t,e,n,r,o,l,c){for(var h,f=this._getLocaleChain(e,n),i=0;i<f.length;i++){var _=f[i];if(!m(h=this._interpolate(_,t[_],r,o,l,c,[r])))return h}return null},nt.prototype._t=function(t,e,n,r){for(var o,l=[],c=arguments.length-4;c-- >0;)l[c]=arguments[c+4];if(!t)return"";var h=d.apply(void 0,l);this._escapeParameterHtml&&(h.params=T(h.params));var f=h.locale||e,_=this._translate(n,f,this.fallbackLocale,t,r,"string",h.params);if(this._isFallbackRoot(_)){if(!this._root)throw Error("unexpected error");return(o=this._root).$t.apply(o,[t].concat(l))}return _=this._warnDefault(f,t,_,r,l,"string"),this._postTranslation&&null!=_&&(_=this._postTranslation(_,t)),_},nt.prototype.t=function(t){for(var e,n=[],r=arguments.length-1;r-- >0;)n[r]=arguments[r+1];return(e=this)._t.apply(e,[t,this.locale,this._getMessages(),null].concat(n))},nt.prototype._i=function(t,e,n,r,o){var l=this._translate(n,e,this.fallbackLocale,t,r,"raw",o);if(this._isFallbackRoot(l)){if(!this._root)throw Error("unexpected error");return this._root.$i18n.i(t,e,o)}return this._warnDefault(e,t,l,r,[o],"raw")},nt.prototype.i=function(t,e,n){return t?(h(e)||(e=this.locale),this._i(t,e,this._getMessages(),null,n)):""},nt.prototype._tc=function(t,e,n,r,o){for(var l,c=[],h=arguments.length-5;h-- >0;)c[h]=arguments[h+5];if(!t)return"";void 0===o&&(o=1);var f={count:o,n:o},_=d.apply(void 0,c);return _.params=Object.assign(f,_.params),c=null===_.locale?[_.params]:[_.locale,_.params],this.fetchChoice((l=this)._t.apply(l,[t,e,n,r].concat(c)),o)},nt.prototype.fetchChoice=function(t,e){if(!t||!h(t))return null;var n=t.split("|");return n[e=this.getChoiceIndex(e,n.length)]?n[e].trim():t},nt.prototype.tc=function(t,e){for(var n,r=[],o=arguments.length-2;o-- >0;)r[o]=arguments[o+2];return(n=this)._tc.apply(n,[t,this.locale,this._getMessages(),null,e].concat(r))},nt.prototype._te=function(t,e,n){for(var r=[],o=arguments.length-3;o-- >0;)r[o]=arguments[o+3];var l=d.apply(void 0,r).locale||e;return this._exist(n[l],t)},nt.prototype.te=function(t,e){return this._te(t,this.locale,this._getMessages(),e)},nt.prototype.getLocaleMessage=function(t){return y(this._vm.messages[t]||{})},nt.prototype.setLocaleMessage=function(t,e){"warn"!==this._warnHtmlInMessage&&"error"!==this._warnHtmlInMessage||this._checkLocaleMessage(t,this._warnHtmlInMessage,e),this._vm.$set(this._vm.messages,t,e)},nt.prototype.mergeLocaleMessage=function(t,e){"warn"!==this._warnHtmlInMessage&&"error"!==this._warnHtmlInMessage||this._checkLocaleMessage(t,this._warnHtmlInMessage,e),this._vm.$set(this._vm.messages,t,$(void 0!==this._vm.messages[t]&&Object.keys(this._vm.messages[t]).length?Object.assign({},this._vm.messages[t]):{},e))},nt.prototype.getDateTimeFormat=function(t){return y(this._vm.dateTimeFormats[t]||{})},nt.prototype.setDateTimeFormat=function(t,e){this._vm.$set(this._vm.dateTimeFormats,t,e),this._clearDateTimeFormat(t,e)},nt.prototype.mergeDateTimeFormat=function(t,e){this._vm.$set(this._vm.dateTimeFormats,t,$(this._vm.dateTimeFormats[t]||{},e)),this._clearDateTimeFormat(t,e)},nt.prototype._clearDateTimeFormat=function(t,e){for(var n in e){var r=t+"__"+n;this._dateTimeFormatters.hasOwnProperty(r)&&delete this._dateTimeFormatters[r]}},nt.prototype._localizeDateTime=function(t,e,n,r,o){for(var l=e,c=r[l],h=this._getLocaleChain(e,n),i=0;i<h.length;i++){var f=h[i];if(l=f,!m(c=r[f])&&!m(c[o]))break}if(m(c)||m(c[o]))return null;var _=c[o],v=l+"__"+o,d=this._dateTimeFormatters[v];return d||(d=this._dateTimeFormatters[v]=new Intl.DateTimeFormat(l,_)),d.format(t)},nt.prototype._d=function(t,e,n){if(!n)return new Intl.DateTimeFormat(e).format(t);var r=this._localizeDateTime(t,e,this.fallbackLocale,this._getDateTimeFormats(),n);if(this._isFallbackRoot(r)){if(!this._root)throw Error("unexpected error");return this._root.$i18n.d(t,n,e)}return r||""},nt.prototype.d=function(t){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];var r=this.locale,o=null;return 1===e.length?h(e[0])?o=e[0]:c(e[0])&&(e[0].locale&&(r=e[0].locale),e[0].key&&(o=e[0].key)):2===e.length&&(h(e[0])&&(o=e[0]),h(e[1])&&(r=e[1])),this._d(t,r,o)},nt.prototype.getNumberFormat=function(t){return y(this._vm.numberFormats[t]||{})},nt.prototype.setNumberFormat=function(t,e){this._vm.$set(this._vm.numberFormats,t,e),this._clearNumberFormat(t,e)},nt.prototype.mergeNumberFormat=function(t,e){this._vm.$set(this._vm.numberFormats,t,$(this._vm.numberFormats[t]||{},e)),this._clearNumberFormat(t,e)},nt.prototype._clearNumberFormat=function(t,e){for(var n in e){var r=t+"__"+n;this._numberFormatters.hasOwnProperty(r)&&delete this._numberFormatters[r]}},nt.prototype._getNumberFormatter=function(t,e,n,r,o,l){for(var c=e,h=r[c],f=this._getLocaleChain(e,n),i=0;i<f.length;i++){var _=f[i];if(c=_,!m(h=r[_])&&!m(h[o]))break}if(m(h)||m(h[o]))return null;var v,d=h[o];if(l)v=new Intl.NumberFormat(c,Object.assign({},d,l));else{var y=c+"__"+o;(v=this._numberFormatters[y])||(v=this._numberFormatters[y]=new Intl.NumberFormat(c,d))}return v},nt.prototype._n=function(t,e,n,r){if(!nt.availabilities.numberFormat)return"";if(!n)return(r?new Intl.NumberFormat(e,r):new Intl.NumberFormat(e)).format(t);var o=this._getNumberFormatter(t,e,this.fallbackLocale,this._getNumberFormats(),n,r),l=o&&o.format(t);if(this._isFallbackRoot(l)){if(!this._root)throw Error("unexpected error");return this._root.$i18n.n(t,Object.assign({},{key:n,locale:e},r))}return l||""},nt.prototype.n=function(t){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];var o=this.locale,l=null,f=null;return 1===e.length?h(e[0])?l=e[0]:c(e[0])&&(e[0].locale&&(o=e[0].locale),e[0].key&&(l=e[0].key),f=Object.keys(e[0]).reduce((function(t,n){var o;return F(r,n)?Object.assign({},t,((o={})[n]=e[0][n],o)):t}),null)):2===e.length&&(h(e[0])&&(l=e[0]),h(e[1])&&(o=e[1])),this._n(t,o,l,f)},nt.prototype._ntp=function(t,e,n,r){if(!nt.availabilities.numberFormat)return[];if(!n)return(r?new Intl.NumberFormat(e,r):new Intl.NumberFormat(e)).formatToParts(t);var o=this._getNumberFormatter(t,e,this.fallbackLocale,this._getNumberFormats(),n,r),l=o&&o.formatToParts(t);if(this._isFallbackRoot(l)){if(!this._root)throw Error("unexpected error");return this._root.$i18n._ntp(t,e,n,r)}return l||[]},Object.defineProperties(nt.prototype,at),Object.defineProperty(nt,"availabilities",{get:function(){if(!Y){var t="undefined"!=typeof Intl;Y={dateTimeFormat:t&&void 0!==Intl.DateTimeFormat,numberFormat:t&&void 0!==Intl.NumberFormat}}return Y}}),nt.install=H,nt.version="8.26.7",e.a=nt}}]);
//# sourceMappingURL=npm.vue-i18n-8f532f8.js.map