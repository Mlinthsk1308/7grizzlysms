(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{1091:function(e,o,t){"use strict";t(12),t(34);o.a={computed:{isLoadingUser:function(){var e,o;return null===(e=this.$store.state)||void 0===e||null===(o=e.user)||void 0===o?void 0:o.isLoadingUser},isLoadedSuccess:function(){var e,o;return null===(e=this.$store.state)||void 0===e||null===(o=e.user)||void 0===o?void 0:o.isLoadedSuccess}},watch:{isLoadingUser:function(){this.checkClient()}},mounted:function(){this.checkClient()},methods:{checkClient:function(){if(!this.isLoadingUser)return this.isLoadedSuccess?void this.$router.replace(this.localePath("/profile")):(this.$cookies.remove("authToken"),void this.$cookies.remove("sessionToken"))}}}}}]);
//# sourceMappingURL=index-c0f720c.js.map