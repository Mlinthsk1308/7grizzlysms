(window.webpackJsonp=window.webpackJsonp||[]).push([[241,53,99,100],{1015:function(t,e,r){"use strict";r.r(e);r(66);var n={name:"articleCard",props:{id:Number,title:String,announce:String,image:{type:[String,Number]},slug:{type:String},category:{type:String},isFromHome:{type:Boolean,default:function(){return!1}},count:{type:Number,default:0}}},l=r(5),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-base-100 mb-2 rounded-[10px] tm-shadow"},[r("div",{staticClass:"flex flex-col-reverse sm:flex-row p-4 sm:p-0 space-x-0 sm:space-x-6"},[r("div",{staticClass:"flex flex-col w-full sm:w-3/5 pl-0 p-0 sm:pl-8 sm:p-4"},[t.category?r("div",{staticClass:"text-base text-primary text-left font-semibold"},[t._v(t._s(t.category))]):t._e(),t._v(" "),r("div",{staticClass:"font-semibold text-[22px] leading-[110%] tm-text__invert mt-2.5 mb-3",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),r("div",{staticClass:"opacity-80 leading-[140%] text-[15px] tm-text__invert mb-4 flex-1",domProps:{innerHTML:t._s(t.announce)}}),t._v(" "),r("div",[r("div",{staticClass:"flex items-center space-x-6"},[r("nuxt-link",{staticClass:"btn btn-primary btn-sm",attrs:{to:t.localePath("/blog/"+t.slug),hreflang:t.$hreflangInitial(),rel:"alternate"}},[t._v(t._s(t.$t("blog.buttonDetails"))+"\n          ")])],1)])]),t._v(" "),r("div",{staticClass:"mb-4 sm:mb-0 rounded-md w-full sm:w-2/5 h-auto flex-auto sm:flex-1 p-0 sm:p-2.5"},[r("nuxt-img",{staticClass:"rounded-md w-full h-full object-cover",attrs:{height:"280",width:"342",loading:"lazy",src:String(t.image),alt:"blog_card-"+(t.count+1)}})],1)])])}),[],!1,null,null,null);e.default=component.exports},1072:function(t,e,r){"use strict";r(997)},1126:function(t,e,r){t.exports={}},1238:function(t,e,r){"use strict";r.r(e);var n={name:"ArticleReadMoreCard",props:{article:{type:Object,default:function(){return{}}}}},l=(r(1072),r(5)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-base-100 article-read-more tm-shadow"},[r("div",{staticClass:"article-read-more__top"},[r("div",{staticClass:"article-read-more__img"},[r("nuxt-img",{attrs:{height:"280",width:"342",loading:"lazy",src:String(t.article.image_id)}})],1)]),t._v(" "),r("div",{staticClass:"article-read-more__content"},[t.article.category?r("div",{staticClass:"article-read-more__category "},[t._v(t._s(t.article.category))]):t._e(),t._v(" "),r("div",{staticClass:"article-read-more__title tm-text__invert ",domProps:{innerHTML:t._s(t.article.title)}}),t._v(" "),r("div",{staticClass:"article-read-more__announce tm-text__invert ",domProps:{innerHTML:t._s(t.article.announce)}}),t._v(" "),r("div",{staticClass:"article-read-more__btn"},[r("nuxt-link",{staticClass:"btn btn-primary btn-sm",attrs:{to:t.localePath("/blog/"+t.article.slug),hreflang:t.$hreflangInitial(),rel:"alternate"}},[t._v(t._s(t.$t("blog.buttonDetails"))+"\n      ")])],1)])])}),[],!1,null,"2a65e310",null);e.default=component.exports},1291:function(t,e,r){"use strict";r(1126)},1459:function(t,e,r){"use strict";r.r(e);var n=r(0),l=r(14),o=(r(11),r(25),r(170),r(70),r(109),r(40),r(50),r(29),r(19),r(33),r(31),r(35),r(32),r(51)),c=r(347),d=r(1015),m=r(1238);function v(t){switch(t){case"en":return"x-default";case"cn":return"zh";default:return t}}var h=r(65),_={name:"artcle",data:function(){return{}},head:function(){var t,e,r,n,o,c,d,m,h=[];null===(t=this.$root)||void 0===t||t.$children.forEach((function(t){var e;null!=t&&t.$metaInfo&&h.push(null==t||null===(e=t.$metaInfo)||void 0===e?void 0:e.link)}));var _=(null==this||null===(e=this.article)||void 0===e?void 0:e.url_alternate)||{},f=[];null==h||h[0].forEach((function(t){var link=Object.entries(_).find((function(e){var r=Object(l.a)(e,2),n=r[0];r[1];return String((null==t?void 0:t.hid)||"").includes(n)}));null!=link&&link[1]&&t.href!=="".concat(null==link?void 0:link[1])?f.push({rel:"alternate",href:"".concat(null==link?void 0:link[1]),hreflang:v(null==link?void 0:link[0]),hid:"en"===(null==link?void 0:link[0])?"alternate-default-en":"alternate-default-".concat(null==link?void 0:link[0])}):f.push(t)}));var meta=[{hid:"metadescription",name:"description",content:(null==this||null===(r=this.article)||void 0===r?void 0:r.seo_description)||"Articles"},{hid:"og:title",name:"og:title",property:"og:title",content:(null==this||null===(n=this.article)||void 0===n?void 0:n.seo_title)||"Articles"},{hid:"og:site_name",name:"og:site_name",property:"og:site_name",content:"GrizzlySMS"},{hid:"og:description",name:"og:description",property:"og:description",content:(null==this||null===(o=this.article)||void 0===o?void 0:o.seo_description)||"Articles"},{hid:"apple-mobile-web-app-title",name:"apple-mobile-web-app-title",content:"apple-".concat((null==this||null===(c=this.article)||void 0===c?void 0:c.seo_title)||"Articles"," ")},{hid:"og:image",name:"og:image",property:"og:image",content:this.getImgPath},{hid:"og:url",name:"og:url",property:"og:url",content:this.getArticlePath},{hid:"og:type",name:"og:type",property:"og:type",content:"article"}];return{title:(null==this||null===(d=this.article)||void 0===d?void 0:d.seo_title)||(null===(m=this.appCfg)||void 0===m?void 0:m.siteName),meta:meta,link:[].concat(f)}},mixins:[o.a],components:{ArticleReadMoreCard:m.default,ArticleCard:d.default,Breadcrumbs:c.default,Comments:function(){return r.e(47).then(r.bind(null,1557))}},asyncData:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,l,o,c,d,m,v,article,h;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t.$api,c=t.route,t.redirect,t.localePath,d=t.error,m=[],v=c.params.slug,r.next=5,o.agent.transport.get("articles/".concat(encodeURIComponent(v),"?expand=tags")).then((function(t){return t.data})).catch((function(t){return null}));case 5:if(article=r.sent){r.next=9;break}return d({statusCode:404}),r.abrupt("return");case 9:if(null==article||!article.tags||null==article||null===(n=article.tags)||void 0===n||!n.length){r.next=14;break}return h=null==article?void 0:article.tags.map((function(t){return"filter[tag_id][]=".concat(t.id)})).join("&"),r.next=13,o.agent.transport.get("articles?".concat(h,"&filter[not][id]=").concat(article.id)).then((function(t){return t.data})).catch((function(t){return null}));case 13:m=r.sent;case 14:return t.store.commit("alternateLink/setLink",(null==e||null===(l=e.article)||void 0===l?void 0:l.url_alternate)||{}),r.abrupt("return",{article:article,sameArticles:m});case 16:case"end":return r.stop()}}),r)})))()},computed:{getCurrentHost:function(){var t,e=this.$i18n.locale;return null==h||null===(t=h[e])||void 0===t?void 0:t.domain},getBreadcrunmbs:function(){var t;return[{path:"/",title:this.$t("breadcrumbs.homePage")},{path:"/blog",title:this.$t("breadcrumbs.blog")},{path:this.$route.path,title:(null==this||null===(t=this.article)||void 0===t?void 0:t.title)||""}]},getContent:function(){return this.article.content?this.article.content:this.article.announce},getArticlePath:function(){return"".concat(this.getCurrentHost).concat(this.$route.path)},getImgPath:function(){var t,e=String((null==this||null===(t=this.article)||void 0===t?void 0:t.image_id)||"");return e?this.$img(e):null},getPublishDate:function(){var t,e=null===(t=this.article)||void 0===t?void 0:t.publish_from;return this.$formatDate(e)}},mounted:function(){var t;this.$store.commit("alternateLink/setLink",(null==this||null===(t=this.article)||void 0===t?void 0:t.url_alternate)||{}),document.getElementById("scroll-container").scrollTo({top:0})}},f=(r(1291),r(5)),component=Object(f.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.article?r("article",{attrs:{itemscope:"",itemtype:"http://schema.org/BlogPosting"}},[r("meta",{attrs:{href:t.getArticlePath,itemprop:"mainEntityOfPage"}}),t._v(" "),r("Breadcrumbs",{attrs:{breadcrumbs:t.getBreadcrunmbs}}),t._v(" "),r("div",[t._e(),t._v(" "),r("div",{staticClass:"blog-slug flex flex-col bg-base-100 rounded-[10px]"},[r("div",{staticClass:"mb-5 md:mb-10 p-2"},[r("div",{staticClass:"blog-image",attrs:{itemprop:"image",itemscope:"",itemtype:"https://schema.org/ImageObject"}},[r("nuxt-img",{staticClass:"blog-image",attrs:{itemprop:"url contentUrl",loading:"lazy",width:"800",height:"400",fit:"crop",src:String(t.article.image_id),alt:"blog-img"}}),t._v(" "),r("meta",{attrs:{content:"800",itemprop:"width"}}),t._v(" "),r("meta",{attrs:{content:"400",itemprop:"height"}})],1)]),t._v(" "),r("div",{staticClass:"px-3 sm:px-20 mb-16"},[t.article.category&&t.article?r("div",{staticClass:"text-primary mb-2 font-semibold"},[t._v(t._s(t.article.category)+"\n        ")]):t._e(),t._v(" "),r("h1",{attrs:{itemprop:"headline"}},[t._v(t._s(t.article.title))]),t._v(" "),r("span",{staticClass:"publish-date"},[t._v(" "+t._s(t.getPublishDate)+" ")]),t._v(" "),t.article.cms_page_id?r("div",{staticClass:"cms__page-article mt-5 md:mt-10",attrs:{itemprop:"articleBody"}},[r("cms-page",{attrs:{"page-id":Number(t.article.cms_page_id),"content-only":""}})],1):r("div",{staticClass:"font-semibold text-base sm:text-xl leading-[140%] opacity-90",attrs:{itemprop:"articleBody"},domProps:{innerHTML:t._s(t.getContent)}})])]),t._v(" "),r("Comments",{attrs:{model:"blog","model-key":t.article.id}}),t._v(" "),t.sameArticles&&t.sameArticles.length?r("div",{staticClass:"blog-read-more"},[r("div",{staticClass:"h2"},[t._v(t._s(t.$t("blog.readMore")))]),t._v(" "),r("div",{staticClass:"blog-read-more__items"},[t._l(t.sameArticles,(function(article,t){return[r("ArticleReadMoreCard",{key:"article-read-more-"+t,attrs:{article:article}})]}))],2)]):t._e()],1)],1):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CmsPage:r(598).default})},997:function(t,e,r){t.exports={}}}]);
//# sourceMappingURL=_slug-f5eb7b7.js.map