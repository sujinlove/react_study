!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=5)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("path")},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),u=r(3),i=r.n(u),c=r(2),l=r.n(c),a=r(1),f=function(){return o.a.createElement("div",null)},s=r(4),p=r.n(s),d=l()(),b=l.a.static(p.a.resolve("./build"),{index:!1});d.use(b),d.use((function(e,t,r){var n=o.a.createElement(a.StaticRouter,{location:e.url,context:{}},o.a.createElement(f,null)),u=i.a.renderToString(n);t.send(u)})),d.listen(5e3,(function(){console.log("Running on http://localhost:5000")}))}]);