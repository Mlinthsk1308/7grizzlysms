(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1071:function(t,e,r){t.exports={}},1244:function(t,e,r){"use strict";r(1071)},967:function(t,e,r){"use strict";r.r(e);var n={name:"FreeCountries",emits:["setActiveCountry"],props:{countriesList:{type:Array,default:()=>[]},currentCountry:{type:Object,default:()=>({})}},methods:{setActiveCountry(t){this.$emit("setActiveCountry",t)}}},c=(r(1244),r(4)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"freeCountries__root"},t._l(t.countriesList,(function(e){return r("div",{key:"free-country-"+e.country.external_id,staticClass:"freeCountries__country",class:{active:e.country.external_id===t.currentCountry.external_id},on:{click:function(){return t.setActiveCountry(e.country)}}},[r("div",{staticClass:"left"},[r("div",{staticClass:"free-country__img"},[r("img",{attrs:{src:e.icon,alt:"flag"}})]),t._v(" "),r("div",[t._v(t._s(e.name))])]),t._v(" "),r("div",{staticClass:"right"},[t._v(t._s(e.country_code))])])})),0)}),[],!1,null,"34e38eb6",null);e.default=component.exports}}]);
//# sourceMappingURL=free-countries-e32088c.modern.js.map