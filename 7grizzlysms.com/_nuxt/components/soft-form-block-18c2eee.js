(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{1189:function(t,o,n){t.exports={}},1387:function(t,o,n){"use strict";n(1189)},1543:function(t,o,n){"use strict";n.r(o);n(19),n(31),n(33);var e=n(597).a.extend({data:function(){return{isShowForm:!1}},computed:{title:function(){var t;return(null===(t=this.values)||void 0===t?void 0:t.title)||""},description:function(){var t;return(null===(t=this.values)||void 0===t?void 0:t.text)||""},image:function(){var t;return String((null===(t=this.values)||void 0===t?void 0:t.image)||"")}},components:{Feedback:function(){return Promise.resolve().then(n.bind(null,942))}},methods:{changeShowForm:function(){this.isShowForm=!this.isShowForm},openFormFeedback:function(){}}}),r=(n(1387),n(5)),component=Object(r.a)(e,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("section",{staticClass:"soft-form-block"},[n("div",{staticClass:"container --small"},[n("div",{staticClass:"soft-form-block__content"},[t.image?n("div",{staticClass:"soft-form-block__left"},[n("nuxt-img",{attrs:{src:String(t.image),width:"300px",loading:"lazy"}})],1):t._e(),t._v(" "),n("div",{staticClass:"soft-form-block__right"},[t.title?n("div",{staticClass:"soft-form-block__title",domProps:{innerHTML:t._s(t.title)}}):t._e(),t._v(" "),t.description?n("div",{staticClass:"soft-form-block__description",domProps:{innerHTML:t._s(t.description)}}):t._e(),t._v(" "),n("div",{staticClass:"soft-form-block__button"},[n("button",{staticClass:"btn btn-primary",on:{click:t.changeShowForm}},[t._v("\n            "+t._s(t.$t("soft.submit_application"))+"\n          ")])]),t._v(" "),t.isShowForm?[n("div",{staticClass:"soft-form-block__form"},[n("Feedback",{attrs:{"form-title":""}})],1)]:t._e()],2)])])])}),[],!1,null,null,null);o.default=component.exports;installComponents(component,{Feedback:n(942).default})}}]);
//# sourceMappingURL=soft-form-block-18c2eee.js.map