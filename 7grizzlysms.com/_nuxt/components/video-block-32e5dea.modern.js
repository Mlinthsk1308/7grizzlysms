(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{1113:function(t,e,n){t.exports={}},1315:function(t,e,n){"use strict";n(1113)},1458:function(t,e,n){"use strict";n.r(e);n(5),n(6);var o=n(536).a.extend({name:"VideoBlock",data:()=>({isClick:!1,screenWidth:0}),mounted(){this.screenWidth=window.innerWidth},computed:{imageId(){var t,e;return this.screenWidth<=986?(null===(t=this.values)||void 0===t?void 0:t.image_mobile)||0:(null===(e=this.values)||void 0===e?void 0:e.image)||0},getContent(){var t;return(null===(t=this.values)||void 0===t?void 0:t.video_html)||""}}}),l=(n(1315),n(4)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"videoBlock"},[t.isClick?[n("div",{domProps:{innerHTML:t._s(t.getContent)}})]:[n("div",{staticClass:"videoBlock__img",on:{click:function(e){t.isClick=!0}}},[n("nuxt-img",{attrs:{src:String(t.imageId),loading:"lazy",alt:"img"}})],1)]],2)}),[],!1,null,"f80e02b0",null);e.default=component.exports}}]);
//# sourceMappingURL=video-block-32e5dea.modern.js.map