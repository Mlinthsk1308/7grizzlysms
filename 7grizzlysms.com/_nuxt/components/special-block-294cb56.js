/*! For license information please see ../LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{1194:function(t,e,n){t.exports={}},1195:function(t,e,n){t.exports={}},1392:function(t,e,n){!function(t,e,n){"use strict";var l;e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n,function(t){t.SwiperComponent="Swiper",t.SwiperSlideComponent="SwiperSlide",t.SwiperDirective="swiper",t.SwiperInstance="$swiper"}(l||(l={}));var o,r,d=Object.freeze({containerClass:"swiper-container",wrapperClass:"swiper-wrapper",slideClass:"swiper-slide"});(function(t){t.Ready="ready",t.ClickSlide="clickSlide"})(o||(o={})),function(t){t.AutoUpdate="autoUpdate",t.AutoDestroy="autoDestroy",t.DeleteInstanceOnDestroy="deleteInstanceOnDestroy",t.CleanupStylesOnDestroy="cleanupStylesOnDestroy"}(r||(r={}));var c=["init","beforeDestroy","slideChange","slideChangeTransitionStart","slideChangeTransitionEnd","slideNextTransitionStart","slideNextTransitionEnd","slidePrevTransitionStart","slidePrevTransitionEnd","transitionStart","transitionEnd","touchStart","touchMove","touchMoveOpposite","sliderMove","touchEnd","click","tap","doubleTap","imagesReady","progress","reachBeginning","reachEnd","fromEdge","setTranslate","setTransition","resize","observerUpdate","beforeLoopFix","loopFix"];function v(){for(var s=0,i=0,t=arguments.length;i<t;i++)s+=arguments[i].length;var e=Array(s),n=0;for(i=0;i<t;i++)for(var a=arguments[i],l=0,o=a.length;l<o;l++,n++)e[n]=a[l];return e}var f,w=function(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\s+/g,"-").toLowerCase()},h=function(t,e,n){var l,r,d;if(t&&!t.destroyed){var c=(null===(l=e.composedPath)||void 0===l?void 0:l.call(e))||e.path;if((null==e?void 0:e.target)&&c){var v=Array.from(t.slides),f=Array.from(c);if(v.includes(e.target)||f.some((function(t){return v.includes(t)}))){var h=t.clickedIndex,m=Number(null===(d=null===(r=t.clickedSlide)||void 0===r?void 0:r.dataset)||void 0===d?void 0:d.swiperSlideIndex),S=Number.isInteger(m)?m:null;n(o.ClickSlide,h,S),n(w(o.ClickSlide),h,S)}}}},m=function(t,e){c.forEach((function(n){t.on(n,(function(){for(var t=arguments,l=[],o=0;o<arguments.length;o++)l[o]=t[o];e.apply(void 0,v([n],l));var r=w(n);r!==n&&e.apply(void 0,v([r],l))}))}))},S="instanceName";function y(t,e){var n=function(t,e){var n,l,o,r,d=null===(l=null===(n=t.data)||void 0===n?void 0:n.attrs)||void 0===l?void 0:l[e];return void 0!==d?d:null===(r=null===(o=t.data)||void 0===o?void 0:o.attrs)||void 0===r?void 0:r[w(e)]},c=function(element,t,e){return t.arg||n(e,S)||element.id||l.SwiperInstance},v=function(element,t,e){var n=c(element,t,e);return e.context[n]||null},f=function(t){return t.value||e},y=function(input){return[!0,void 0,null,""].includes(input)},x=function(t){var e,n,l=(null===(e=t.data)||void 0===e?void 0:e.on)||(null===(n=t.componentOptions)||void 0===n?void 0:n.listeners);return function(t){for(var e,n=arguments,o=[],r=1;r<arguments.length;r++)o[r-1]=n[r];var d=null===(e=l)||void 0===e?void 0:e[t];d&&d.fns.apply(d,o)}};return{bind:function(element,t,e){-1===element.className.indexOf(d.containerClass)&&(element.className+=(element.className?" ":"")+d.containerClass),element.addEventListener("click",(function(n){var l=x(e),o=v(element,t,e);h(o,n,l)}))},inserted:function(element,e,n){var l=n.context,r=f(e),d=c(element,e,n),v=x(n),w=l,h=null==w?void 0:w[d];h&&!h.destroyed||(h=new t(element,r),w[d]=h,m(h,v),v(o.Ready,h))},componentUpdated:function(element,t,e){var l,o,d,c,w,h,m,S,x,C,_,I,O=n(e,r.AutoUpdate);if(y(O)){var k=v(element,t,e);if(k){var D=f(t).loop;D&&(null===(o=null===(l=k)||void 0===l?void 0:l.loopDestroy)||void 0===o||o.call(l)),null===(d=null==k?void 0:k.update)||void 0===d||d.call(k),null===(w=null===(c=k.navigation)||void 0===c?void 0:c.update)||void 0===w||w.call(c),null===(m=null===(h=k.pagination)||void 0===h?void 0:h.render)||void 0===m||m.call(h),null===(x=null===(S=k.pagination)||void 0===S?void 0:S.update)||void 0===x||x.call(S),D&&(null===(_=null===(C=k)||void 0===C?void 0:C.loopCreate)||void 0===_||_.call(C),null===(I=null==k?void 0:k.update)||void 0===I||I.call(k))}}},unbind:function(element,t,e){var l,o=n(e,r.AutoDestroy);if(y(o)){var d=v(element,t,e);d&&d.initialized&&(null===(l=null==d?void 0:d.destroy)||void 0===l||l.call(d,y(n(e,r.DeleteInstanceOnDestroy)),y(n(e,r.CleanupStylesOnDestroy))))}}}}function x(t){var e;return n.extend({name:l.SwiperComponent,props:(e={defaultOptions:{type:Object,required:!1,default:function(){return{}}},options:{type:Object,required:!1}},e[r.AutoUpdate]={type:Boolean,default:!0},e[r.AutoDestroy]={type:Boolean,default:!0},e[r.DeleteInstanceOnDestroy]={type:Boolean,required:!1,default:!0},e[r.CleanupStylesOnDestroy]={type:Boolean,required:!1,default:!0},e),data:function(){var t;return(t={})[l.SwiperInstance]=null,t},computed:{swiperInstance:{cache:!1,set:function(t){this[l.SwiperInstance]=t},get:function(){return this[l.SwiperInstance]}},swiperOptions:function(){return this.options||this.defaultOptions},wrapperClass:function(){return this.swiperOptions.wrapperClass||d.wrapperClass}},methods:{handleSwiperClick:function(t){h(this.swiperInstance,t,this.$emit.bind(this))},autoReLoopSwiper:function(){var t,e;if(this.swiperInstance&&this.swiperOptions.loop){var n=this.swiperInstance;null===(t=null==n?void 0:n.loopDestroy)||void 0===t||t.call(n),null===(e=null==n?void 0:n.loopCreate)||void 0===e||e.call(n)}},updateSwiper:function(){var t,e,n,l,o,d,c,v;this[r.AutoUpdate]&&this.swiperInstance&&(this.autoReLoopSwiper(),null===(e=null===(t=this.swiperInstance)||void 0===t?void 0:t.update)||void 0===e||e.call(t),null===(l=null===(n=this.swiperInstance.navigation)||void 0===n?void 0:n.update)||void 0===l||l.call(n),null===(d=null===(o=this.swiperInstance.pagination)||void 0===o?void 0:o.render)||void 0===d||d.call(o),null===(v=null===(c=this.swiperInstance.pagination)||void 0===c?void 0:c.update)||void 0===v||v.call(c))},destroySwiper:function(){var t,e;this[r.AutoDestroy]&&this.swiperInstance&&this.swiperInstance.initialized&&(null===(e=null===(t=this.swiperInstance)||void 0===t?void 0:t.destroy)||void 0===e||e.call(t,this[r.DeleteInstanceOnDestroy],this[r.CleanupStylesOnDestroy]))},initSwiper:function(){this.swiperInstance=new t(this.$el,this.swiperOptions),m(this.swiperInstance,this.$emit.bind(this)),this.$emit(o.Ready,this.swiperInstance)}},mounted:function(){this.swiperInstance||this.initSwiper()},activated:function(){this.updateSwiper()},updated:function(){this.updateSwiper()},beforeDestroy:function(){this.$nextTick(this.destroySwiper)},render:function(t){return t("div",{staticClass:d.containerClass,on:{click:this.handleSwiperClick}},[this.$slots[f.ParallaxBg],t("div",{class:this.wrapperClass},this.$slots.default),this.$slots[f.Pagination],this.$slots[f.PrevButton],this.$slots[f.NextButton],this.$slots[f.Scrollbar]])}})}!function(t){t.ParallaxBg="parallax-bg",t.Pagination="pagination",t.Scrollbar="scrollbar",t.PrevButton="button-prev",t.NextButton="button-next"}(f||(f={}));var C=n.extend({name:l.SwiperSlideComponent,computed:{slideClass:function(){var t,e;return(null===(e=null===(t=this.$parent)||void 0===t?void 0:t.swiperOptions)||void 0===e?void 0:e.slideClass)||d.slideClass}},methods:{update:function(){var t,e=this.$parent;e[r.AutoUpdate]&&(null===(t=null==e?void 0:e.swiperInstance)||void 0===t||t.update())}},mounted:function(){this.update()},updated:function(){this.update()},render:function(t){return t("div",{class:this.slideClass},this.$slots.default)}}),_=function(t){var e=function(n,o){if(!e.installed){var r=x(t);o&&(r.options.props.defaultOptions.default=function(){return o}),n.component(l.SwiperComponent,r),n.component(l.SwiperSlideComponent,C),n.directive(l.SwiperDirective,y(t,o)),e.installed=!0}};return e};function I(t){var e;return(e={version:"4.1.1",install:_(t),directive:y(t)})[l.SwiperComponent]=x(t),e[l.SwiperSlideComponent]=C,e}var O=I(e),k=O.version,D=O.install,T=O.directive,$=O.Swiper,B=O.SwiperSlide;t.Swiper=$,t.SwiperSlide=B,t.default=O,t.directive=T,t.install=D,t.version=k,Object.defineProperty(t,"__esModule",{value:!0})}(e,n(1393),n(1))},1396:function(t,e,n){"use strict";n(1194)},1397:function(t,e,n){"use strict";n(1195)},1546:function(t,e,n){"use strict";n.r(e);n(19),n(31),n(125),n(66),n(70),n(170),n(178),n(12),n(78),n(99);var l=n(597),o=n(1392),r=(n(1395),l.a.extend({name:"SpecialBlock",data:function(){var t;return{swiperOptions:{autoplay:{delay:1e3*((null==this||null===(t=this.values)||void 0===t?void 0:t.interval_seconds)||4),disableOnInteraction:!1},slidesPerView:"auto",pagination:{el:".tm-swiper-pagination"},loop:!0,breakpoints:{0:{spaceBetween:12},768:{},1e3:{spaceBetween:12},1500:{}}}}},components:{Swiper:o.Swiper,SwiperSlide:o.SwiperSlide},computed:{},methods:{hasText:function(t){return Boolean(t.text)},getSlideTitle:function(t){return(null==t?void 0:t.title)||""},getSlideText:function(t){return(null==t?void 0:t.text)||""},getSlideImage:function(t){var e;if(!Number.parseFloat(t.is_gif||0))return String((null==t?void 0:t.image)||"");var n=((null===(e=this.extras)||void 0===e?void 0:e.items)||[]).find((function(e){return e.image===t.image}));return null==n?void 0:n.image_link},getSlideLink:function(t){return(null==t?void 0:t.link)||"#"},getSlideTypeLink:function(t){var link=(null==t?void 0:t.link)||"",e=new RegExp(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi);return link.match(e)?"a":"nuxt-link"}}})),d=(n(1396),n(1397),n(5)),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"special-block"},[n("div",{staticClass:"special-block__slider flex flex-col mt-4 sm:mt-0 overflow-hidden relative"},[n("swiper",{attrs:{options:t.swiperOptions}},t._l(t.values.items,(function(e,l){return t.getSlideImage(e)?n("swiper-slide",{key:"slide-"+l,staticClass:"swiper-slide bg-base-200 rounded-[10px] cursor-pointer relative"},[n("div",{staticClass:"flex flex-col justify-center h-full py-2 ",class:{withoutText:!t.hasText(e)}},[n("div",{staticClass:"pl-2 sm:pl-8 max-w-[50%] sm:max-w-sm slider-card mb-2"},[t.getSlideTitle(e)?n("div",{staticClass:"text-primary font-semibold text-xs sm:text-lg mb-2 text-center"},[t._v(t._s(t.getSlideTitle(e))+"\n            ")]):t._e(),t._v(" "),t.getSlideText(e)?n("div",{staticClass:" text-base sm:text-[40px] font-semibold leading-[110%] text-left sm:text-center"},[t._v(t._s(t.getSlideText(e))+"\n            ")]):t._e()])]),t._v(" "),[Boolean(e.is_gif)?t._e():n("nuxt-img",{staticClass:"rounded-[10px] absolute w-full h-full left-0 top-0",attrs:{loading:0==l?"":"lazy",width:"750",height:"270",format:"webp",fit:"fill",src:t.getSlideImage(e),alt:"main-slider"}}),t._v(" "),Boolean(e.is_gif)?n("img",{staticClass:"rounded-[10px] absolute w-full h-full left-0 top-0",attrs:{src:t.getSlideImage(e),alt:"main-slider",width:"750",height:"270"}}):t._e()],t._v(" "),"a"===t.getSlideTypeLink(e)?[n("a",{staticClass:"tm-text__invert hover:opacity-100 absolute top-0 right-0 left-0 bottom-0",attrs:{href:t.getSlideLink(e),target:"_blank"}})]:t._e(),t._v(" "),"nuxt-link"===t.getSlideTypeLink(e)?[n("nuxt-link",{staticClass:"tm-text__invert hover:opacity-100 absolute top-0 right-0 left-0 bottom-0",attrs:{to:t.getSlideLink(e)}})]:t._e()],2):t._e()})),1)],1),t._v(" "),n("div",{staticClass:"max-w-sm justify-start sm:justify-center tm-swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})])}),[],!1,null,"88db3f16",null);e.default=component.exports}}]);
//# sourceMappingURL=special-block-294cb56.js.map