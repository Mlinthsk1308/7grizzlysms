(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{288:function(t,e,r){"use strict";r.r(e);var n=r(2),c=function(t,e,r,desc){var n,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(o=(c<3?n(o):c>3?n(e,r,o):n(e,r))||o);return c>3&&o&&Object.defineProperty(e,r,o),o},o=class extends n.Vue{linkPath(path){return"ru"==this.$i18n.localeProperties.code&&"/"==path?"/".concat(this.$i18n.localeProperties.code):path}};c([Object(n.Prop)({type:Array,default:()=>[]})],o.prototype,"breadcrumbs",void 0);var l=o=c([Object(n.Component)({components:{}})],o),m=r(4),component=Object(m.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"breadcrumbs"},[r("ul",{staticClass:"breadcrumbs__list",attrs:{itemscope:"",itemtype:"https://schema.org/BreadcrumbList"}},t._l(t.breadcrumbs,(function(e,n){var path=e.path,title=e.title;return r("li",{key:n,staticClass:"breadcrumbs__item",class:{active:n===t.breadcrumbs.length-1},attrs:{itemprop:"itemListElement",itemscope:"",itemtype:"https://schema.org/ListItem",id:path}},[n===t.breadcrumbs.length-1?[r("span",{attrs:{id:path,itemprop:"name"}},[t._v(t._s(title))])]:r("nuxt-link",{attrs:{to:t.localePath(t.linkPath(path)),itemscope:"",itemtype:"http://schema.org/Thing",itemprop:"item",itemid:"nuxt-link-"+path}},[r("span",{attrs:{itemid:"name-"+path,itemprop:"name"}},[t._v(t._s(title))])]),t._v(" "),r("meta",{attrs:{itemid:"meta-"+path,itemprop:"position",content:n+1}})],2)})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);
//# sourceMappingURL=main-layout-5b4b36d.modern.js.map