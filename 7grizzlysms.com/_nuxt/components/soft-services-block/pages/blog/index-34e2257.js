(window.webpackJsonp=window.webpackJsonp||[]).push([[83,32],{1016:function(t,n,e){"use strict";e.r(n);e(29),e(52),e(33),e(32),e(12),e(34);var o={name:"Pagination",data:function(){return{pagination:[]}},props:["page","perPage","pageCount","totalCount","loading","linkPagination","linkPaginationFirst"],computed:{shows:function(){var t=this.page*this.perPage-(this.perPage-1);return this.totalCount<t?this.totalCount:this.page*this.perPage-(this.perPage-1)},total:function(){return this.totalCount},infoMessage:function(){return"".concat(this.$t("pagination.showing")," ").concat(this.shows," - ").concat(this.page*this.perPage>this.totalCount?this.totalCount:this.page*this.perPage," ").concat(this.$t("pagination.of")," ").concat(this.total)}},watch:{page:function(){this.initPagination()},pageCount:function(){this.initPagination()},totalCount:function(){this.initPagination()}},created:function(){this.initPagination()},mounted:function(){this.initPagination()},methods:{initPagination:function(){var t=this.page,n=this.pageCount,e=function(t,n){var e=n-t+1;return Array.from({length:e},(function(n,i){return t+i}))},o=e(1,Math.min(1,n)),c=e(Math.max(n-1+1,2),n),l=Math.max(Math.min(t-1,n-1-2-1),3),r=Math.min(Math.max(t+1,5),c[0]-2),h=[].concat(o,l>3?["start-ellipsis"]:2<n-1?[2]:[],e(l,r),r<n-1-1?["end-ellipsis"]:n-1>1?[n-1]:[],c);this.pagination=h.map((function(t){return"number"==typeof t?{title:t,page:t}:{title:"...",disabled:!0}}))},onLoadMore:function(){this.$emit("onLoadMore")},onChangePage:function(t){t.disabled||(document.getElementById("scroll-container").scrollTo({top:0,left:0}),this.$emit("onChangePage",t.page))},_getLinkPaginationButton:function(t){return t.disabled?"":this.linkPagination?1===t.page?this.linkPaginationFirst:(this.linkPagination||"").replace("$page",t.page):""}}},c=(e(986),e(5)),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"pagination"},[e("div",{staticClass:"pagination__pages"},[t._l(t.pagination,(function(n){return[t._getLinkPaginationButton(n)?[e("nuxt-link",{class:{"--active":Boolean(n.page===t.page),"--disabled":Boolean(n.disabled)},attrs:{to:t._getLinkPaginationButton(n),event:""},nativeOn:{click:function(e){return function(){return t.onChangePage(n)}.apply(null,arguments)}}},[t._v(t._s(n.title))])]:t._e(),t._v(" "),t._getLinkPaginationButton(n)?t._e():[e("div",{class:{"--active":Boolean(n.page===t.page),"--disabled":Boolean(n.disabled)},on:{click:function(){return t.onChangePage(n)}}},[t._v(t._s(n.title))])]]}))],2),t._v(" "),e("div",{staticClass:"pagination__info"},[t._v("\n    "+t._s(t.infoMessage)+"\n  ")])])}),[],!1,null,"688e694b",null);n.default=component.exports},945:function(t,n,e){t.exports={}},986:function(t,n,e){"use strict";e(945)}}]);
//# sourceMappingURL=index-34e2257.js.map