(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1079:function(e,t,o){e.exports=function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(2)},,function(e,t){"use strict";function o(){function e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=e.length;if(e===l||e[0]===h[0]&&1===t)return h.split(l).concat([v]).concat(g.split(l));if(e===O&&D)return h.split(l).concat(["0",O,v]).concat(g.split(l));var o=e[0]===s&&q;o&&(e=e.toString().substr(1));var c=e.lastIndexOf(O),u=-1!==c,a=void 0,b=void 0,y=void 0;if(e.slice(-1*R)===g&&(e=e.slice(0,-1*R)),u&&(D||N)?(a=e.slice(e.slice(0,P)===h?P:0,c),b=n((b=e.slice(c+1,t)).replace(f,l))):a=e.slice(0,P)===h?e.slice(P):e,I&&(void 0===I?"undefined":r(I))===p){var w="."===S?"[.]":""+S,k=(a.match(new RegExp(w,"g"))||[]).length;a=a.slice(0,I+k*T)}return a=a.replace(f,l),B||(a=a.replace(/^0+(0$|[^0])/,"$1")),y=n(a=x?i(a,S):a),(u&&D||!0===N)&&(e[c-1]!==O&&y.push(m),y.push(O,m),b&&((void 0===J?"undefined":r(J))===p&&(b=b.slice(0,J)),y=y.concat(b)),!0===N&&e[c-1]===O&&y.push(v)),P>0&&(y=h.split(l).concat(y)),o&&(y.length===P&&y.push(v),y=[d].concat(y)),g.length>0&&(y=y.concat(g.split(l))),y}var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=t.prefix,h=void 0===o?c:o,b=t.suffix,g=void 0===b?l:b,y=t.includeThousandsSeparator,x=void 0===y||y,w=t.thousandsSeparatorSymbol,S=void 0===w?u:w,k=t.allowDecimal,D=void 0!==k&&k,L=t.decimalSymbol,O=void 0===L?a:L,$=t.decimalLimit,J=void 0===$?2:$,M=t.requireDecimal,N=void 0!==M&&M,_=t.allowNegative,q=void 0!==_&&_,j=t.allowLeadingZeroes,B=void 0!==j&&j,E=t.integerLimit,I=void 0===E?null:E,P=h&&h.length||0,R=g&&g.length||0,T=S&&S.length||0;return e.instanceOf="createNumberMask",e}function n(e){return e.split(l).map((function(e){return v.test(e)?v:e}))}function i(e,t){return e.replace(/\B(?=(\d{3})+(?!\d))/g,t)}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=o;var c="$",l="",u=",",a=".",s="-",d=/-/,f=/\D+/g,p="number",v=/\d/,m="[]"}])}}]);
//# sourceMappingURL=npm.text-mask-addons-fed247f.js.map