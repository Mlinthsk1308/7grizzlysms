/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{349:function(t,e,n){"use strict";function r(t,source){for(var e=function(e){Object.defineProperty(t,e,{get:function(){return source[e]}})},n=0,r=Object.keys(source||{});n<r.length;n++){e(r[n])}}function o(t){if(!t._vmdModuleName)throw new Error("ERR_GET_MODULE_NAME : Could not get module accessor.\n      Make sure your module has name, we can't make accessors for unnamed modules\n      i.e. @Module({ name: 'something' })");return"vuexModuleDecorators/"+t._vmdModuleName}n.r(e),n.d(e,"Action",(function(){return _})),n.d(e,"Module",(function(){return w})),n.d(e,"Mutation",(function(){return M})),n.d(e,"MutationAction",(function(){return j})),n.d(e,"VuexModule",(function(){return c})),n.d(e,"config",(function(){return O})),n.d(e,"getModule",(function(){return f}));var c=function(t){this.actions=t.actions,this.mutations=t.mutations,this.state=t.state,this.getters=t.getters,this.namespaced=t.namespaced,this.modules=t.modules};function f(t,e){var n=o(t);if(e&&e.getters[n])return e.getters[n];if(t._statics)return t._statics;var r=t._genStatic;if(!r)throw new Error("ERR_GET_MODULE_NO_STATICS : Could not get module accessor.\n      Make sure your module has name, we can't make accessors for unnamed modules\n      i.e. @Module({ name: 'something' })");var c=r(e);return e?e.getters[n]=c:t._statics=c,c}var l=["actions","getters","mutations","modules","state","namespaced","commit"];function d(t,e,n,r){return new(n||(n=Promise))((function(o,c){function f(t){try{d(r.next(t))}catch(t){c(t)}}function l(t){try{d(r.throw(t))}catch(t){c(t)}}function d(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(f,l)}d((r=r.apply(t,e||[])).next())}))}function m(t,body){var e,n,r,g,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return g={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function c(c){return function(f){return function(c){if(e)throw new TypeError("Generator is already executing.");for(;o;)try{if(e=1,n&&(r=2&c[0]?n.return:c[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,c[1])).done)return r;switch(n=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,n=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==c[0]&&2!==c[0])){o=0;continue}if(3===c[0]&&(!r||c[1]>r[0]&&c[1]<r[3])){o.label=c[1];break}if(6===c[0]&&o.label<r[1]){o.label=r[1],r=c;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(c);break}r[2]&&o.ops.pop(),o.trys.pop();continue}c=body.call(t,o)}catch(t){c=[6,t],n=0}finally{e=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,f])}}}function h(){for(var s=0,i=0,t=arguments.length;i<t;i++)s+=arguments[i].length;var e=Array(s),n=0;for(i=0;i<t;i++)for(var a=arguments[i],r=0,o=a.length;r<o;r++,n++)e[n]=a[r];return e}function v(t,e){Object.getOwnPropertyNames(e.prototype).forEach((function(n){var o=Object.getOwnPropertyDescriptor(e.prototype,n);o.get&&t.getters&&(t.getters[n]=function(t,e,n,c){var f={context:{state:t,getters:e,rootState:n,rootGetters:c}};return r(f,t),r(f,e),o.get.call(f)})}))}function y(t){return function(e){var n=e,r=function(){return function(t){var e=new t.prototype.constructor({}),s={};return Object.keys(e).forEach((function(t){if(-1===l.indexOf(t))e.hasOwnProperty(t)&&"function"!=typeof e[t]&&(s[t]=e[t]);else if(void 0!==e[t])throw new Error("ERR_RESERVED_STATE_KEY_USED: You cannot use the following\n        ['actions', 'getters', 'mutations', 'modules', 'state', 'namespaced', 'commit']\n        as fields in your module. These are reserved as they have special purpose in Vuex")})),s}(n)};n.state||(n.state=t&&t.stateFactory?r:r()),n.getters||(n.getters={}),n.namespaced||(n.namespaced=t&&t.namespaced);for(var o=Object.getPrototypeOf(n);"VuexModule"!==o.name&&""!==o.name;)v(n,o),o=Object.getPrototypeOf(o);v(n,n);var c=t;return c.name&&(Object.defineProperty(e,"_genStatic",{value:function(t){var e={store:t||c.store};if(!e.store)throw new Error("ERR_STORE_NOT_PROVIDED: To use getModule(), either the module\n            should be decorated with store in decorator, i.e. @Module({store: store}) or\n            store should be passed when calling getModule(), i.e. getModule(MyModule, this.$store)");return function(t,e,n){var r=e.stateFactory?t.state():t.state;Object.keys(r).forEach((function(t){r.hasOwnProperty(t)&&-1===["undefined","function"].indexOf(typeof r[t])&&Object.defineProperty(n,t,{get:function(){for(var path=e.name.split("/"),data=n.store.state,r=0,o=path;r<o.length;r++)data=data[o[r]];return data[t]}})}))}(n,c,e),n.getters&&function(t,e,n){Object.keys(t.getters).forEach((function(r){t.namespaced?Object.defineProperty(n,r,{get:function(){return n.store.getters[e.name+"/"+r]}}):Object.defineProperty(n,r,{get:function(){return n.store.getters[r]}})}))}(n,c,e),n.mutations&&function(t,e,n){Object.keys(t.mutations).forEach((function(r){t.namespaced?n[r]=function(){for(var t,o=[],c=0;c<arguments.length;c++)o[c]=arguments[c];(t=n.store).commit.apply(t,h([e.name+"/"+r],o))}:n[r]=function(){for(var t,e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];(t=n.store).commit.apply(t,h([r],e))}}))}(n,c,e),n.actions&&function(t,e,n){Object.keys(t.actions).forEach((function(r){t.namespaced?n[r]=function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];return d(this,void 0,void 0,(function(){var o;return m(this,(function(c){return[2,(o=n.store).dispatch.apply(o,h([e.name+"/"+r],t))]}))}))}:n[r]=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return d(this,void 0,void 0,(function(){var e;return m(this,(function(o){return[2,(e=n.store).dispatch.apply(e,h([r],t))]}))}))}}))}(n,c,e),e}}),Object.defineProperty(e,"_vmdModuleName",{value:c.name})),c.dynamic&&function(t,e){if(!e.name)throw new Error("Name of module not provided in decorator options");if(!e.store)throw new Error("Store not provided in decorator options when using dynamic option");e.store.registerModule(e.name,t,{preserveState:e.preserveState||!1})}(n,c),e}}function w(t){if("function"!=typeof t)return y(t);y({})(t)}var O={};function E(t){var e=t||{},n=e.commit,c=void 0===n?void 0:n,l=e.rawError,h=void 0===l?!!O.rawError:l,v=e.root,y=void 0!==v&&v;return function(t,e,n){var l=t.constructor;l.hasOwnProperty("actions")||(l.actions=Object.assign({},l.actions));var v=n.value,w=function(t,n){return d(this,void 0,void 0,(function(){var d,y,w,O,E;return m(this,(function(m){switch(m.label){case 0:return m.trys.push([0,5,,6]),d=null,l._genStatic?(y=o(l),(w=t.rootGetters[y]?t.rootGetters[y]:f(l)).context=t,[4,v.call(w,n)]):[3,2];case 1:return d=m.sent(),[3,4];case 2:return r(O={context:t},t.state),r(O,t.getters),[4,v.call(O,n)];case 3:d=m.sent(),m.label=4;case 4:return c&&t.commit(c,d),[2,d];case 5:throw E=m.sent(),h?E:new Error('ERR_ACTION_ACCESS_UNDEFINED: Are you trying to access this.someMutation() or this.someGetter inside an @Action? \nThat works only in dynamic modules. \nIf not dynamic use this.context.commit("mutationName", payload) and this.context.getters["getterName"]\n'+new Error("Could not perform action "+e.toString()).stack+"\n"+E.stack);case 6:return[2]}}))}))};l.actions[e]=y?{root:y,handler:w}:w}}function _(t,e,n){if(!e&&!n)return E(t);E()(t,e,n)}function M(t,e,n){var r=t.constructor;r.hasOwnProperty("mutations")||(r.mutations=Object.assign({},r.mutations));var o=n.value;r.mutations[e]=function(t,e){o.call(t,e)}}function P(t){return function(e,n,r){var o=e.constructor;o.hasOwnProperty("mutations")||(o.mutations=Object.assign({},o.mutations)),o.hasOwnProperty("actions")||(o.actions=Object.assign({},o.actions));var c=r.value,f=function(e,r){return d(this,void 0,void 0,(function(){var o,f;return m(this,(function(l){switch(l.label){case 0:return l.trys.push([0,2,,3]),[4,c.call(e,r)];case 1:return o=l.sent(),e.commit(n,o),[3,3];case 2:if(f=l.sent(),t.rawError)throw f;return console.error("Could not perform action "+n.toString()),console.error(f),[2,Promise.reject(f)];case 3:return[2]}}))}))};o.actions[n]=t.root?{root:!0,handler:f}:f,o.mutations[n]=function(e,n){t.mutate||(t.mutate=Object.keys(n));for(var r=0,o=t.mutate;r<o.length;r++){var c=o[r];if(!e.hasOwnProperty(c)||!n.hasOwnProperty(c))throw new Error("ERR_MUTATE_PARAMS_NOT_IN_PAYLOAD\n          In @MutationAction, mutate: ['a', 'b', ...] array keys must\n          match with return type = {a: {}, b: {}, ...} and must\n          also be in state.");e[c]=n[c]}}}}function j(t,e,n){if(!e&&!n)return P(t);P({})(t,e,n)}}}]);
//# sourceMappingURL=npm.vuex-module-decorators-4770f20.modern.js.map