(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{266:function(e,t,n){"use strict";var r,o="object"==typeof Reflect?Reflect:null,f=o&&"function"==typeof o.apply?o.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};r=o&&"function"==typeof o.ownKeys?o.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var c=Number.isNaN||function(e){return e!=e};function v(){v.init.call(this)}e.exports=v,e.exports.once=function(e,t){return new Promise((function(n,r){function o(n){e.removeListener(t,f),r(n)}function f(){"function"==typeof e.removeListener&&e.removeListener("error",o),n([].slice.call(arguments))}x(e,t,f,{once:!0}),"error"!==t&&function(e,t,n){"function"==typeof e.on&&x(e,"error",t,n)}(e,o,{once:!0})}))},v.EventEmitter=v,v.prototype._events=void 0,v.prototype._eventsCount=0,v.prototype._maxListeners=void 0;var l=10;function h(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function y(e){return void 0===e._maxListeners?v.defaultMaxListeners:e._maxListeners}function d(e,t,n,r){var o,f,c,v;if(h(n),void 0===(f=e._events)?(f=e._events=Object.create(null),e._eventsCount=0):(void 0!==f.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),f=e._events),c=f[t]),void 0===c)c=f[t]=n,++e._eventsCount;else if("function"==typeof c?c=f[t]=r?[n,c]:[c,n]:r?c.unshift(n):c.push(n),(o=y(e))>0&&c.length>o&&!c.warned){c.warned=!0;var l=new Error("Possible EventEmitter memory leak detected. "+c.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");l.name="MaxListenersExceededWarning",l.emitter=e,l.type=t,l.count=c.length,v=l,console&&console.warn&&console.warn(v)}return e}function m(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function L(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},o=m.bind(r);return o.listener=n,r.wrapFn=o,o}function w(e,t,n){var r=e._events;if(void 0===r)return[];var o=r[t];return void 0===o?[]:"function"==typeof o?n?[o.listener||o]:[o]:n?function(e){for(var t=new Array(e.length),i=0;i<t.length;++i)t[i]=e[i].listener||e[i];return t}(o):O(o,o.length)}function _(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function O(e,t){for(var n=new Array(t),i=0;i<t;++i)n[i]=e[i];return n}function x(e,t,n,r){if("function"==typeof e.on)r.once?e.once(t,n):e.on(t,n);else{if("function"!=typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function o(f){r.once&&e.removeEventListener(t,o),n(f)}))}}Object.defineProperty(v,"defaultMaxListeners",{enumerable:!0,get:function(){return l},set:function(e){if("number"!=typeof e||e<0||c(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");l=e}}),v.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},v.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||c(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},v.prototype.getMaxListeners=function(){return y(this)},v.prototype.emit=function(e){for(var t=[],i=1;i<arguments.length;i++)t.push(arguments[i]);var n="error"===e,r=this._events;if(void 0!==r)n=n&&void 0===r.error;else if(!n)return!1;if(n){var o;if(t.length>0&&(o=t[0]),o instanceof Error)throw o;var c=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw c.context=o,c}var v=r[e];if(void 0===v)return!1;if("function"==typeof v)f(v,this,t);else{var l=v.length,h=O(v,l);for(i=0;i<l;++i)f(h[i],this,t)}return!0},v.prototype.addListener=function(e,t){return d(this,e,t,!1)},v.prototype.on=v.prototype.addListener,v.prototype.prependListener=function(e,t){return d(this,e,t,!0)},v.prototype.once=function(e,t){return h(t),this.on(e,L(this,e,t)),this},v.prototype.prependOnceListener=function(e,t){return h(t),this.prependListener(e,L(this,e,t)),this},v.prototype.removeListener=function(e,t){var n,r,o,i,f;if(h(t),void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(o=-1,i=n.length-1;i>=0;i--)if(n[i]===t||n[i].listener===t){f=n[i].listener,o=i;break}if(o<0)return this;0===o?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,o),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,f||t)}return this},v.prototype.off=v.prototype.removeListener,v.prototype.removeAllListeners=function(e){var t,n,i;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var r,o=Object.keys(n);for(i=0;i<o.length;++i)"removeListener"!==(r=o[i])&&this.removeAllListeners(r);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(i=t.length-1;i>=0;i--)this.removeListener(e,t[i]);return this},v.prototype.listeners=function(e){return w(this,e,!0)},v.prototype.rawListeners=function(e){return w(this,e,!1)},v.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):_.call(e,t)},v.prototype.listenerCount=_,v.prototype.eventNames=function(){return this._eventsCount>0?r(this._events):[]}}}]);
//# sourceMappingURL=npm.events-6febe3d.modern.js.map