/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[224],{66:function(e,o,r){"use strict";var n={name:"NoSsr",functional:!0,props:{placeholder:String,placeholderTag:{type:String,default:"div"}},render:function(e,o){var r=o.parent,n=o.slots,l=o.props,t=n(),c=t.default;void 0===c&&(c=[]);var d=t.placeholder;return r._isMounted?c:(r.$once("hook:mounted",(function(){r.$forceUpdate()})),l.placeholderTag&&(l.placeholder||d)?e(l.placeholderTag,{class:["no-ssr-placeholder"]},l.placeholder||d):c.length>0?c.map((function(){return e(!1)})):e(!1))}};e.exports=n}}]);
//# sourceMappingURL=npm.vue-no-ssr-cdca304.modern.js.map