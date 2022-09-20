(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{5846:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return s}});var r=n(5534),o=n.n(r),a=n(1597),c=n(7294),i=n.p+"static/amin-06b41f124dcc76210db87fb6fe928aff.jpeg",u=["stroopwafels","dropjes","hagelslag","pepernoten","krentenbollen","poffertjes","appeltaart","haring","bitterballen","kaas","pindakaas","oliebollen"],s=function(){var t=o()(u);return c.createElement(c.Fragment,null,c.createElement("div",{className:"dark:bg-slate-900 h-screen"},c.createElement("main",null,c.createElement("div",{className:"max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8"},c.createElement("div",{className:"text-center grid grid-cols-1 gap-4 justify-items-center"},c.createElement("img",{className:"rounded-full shadow-lg shadow-gray-300 dark:shadow-gray-700",alt:"Amin's profile",src:i}),c.createElement("h3",{className:"mt-1 font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl"},"Amin Codes"),c.createElement("p",{className:"max-w-xl mt-5 mx-auto text-xl text-gray-500"},"A software developer, enjoying ",t," in Amsterdam and writing code."),c.createElement("p",{className:"dark:text-gray-400"},"I also sometimes write about things, read my ",c.createElement(a.Link,{to:"https://blog.amin.codes"},"blog"),", follow me on ",c.createElement(a.Link,{to:"https://github.com/aminmarashi"},"GitHub")," or write to ",c.createElement(a.Link,{to:"mailto:me@amin.codes"},"me"),". I keep a list of my favourite things ",c.createElement(a.Link,{to:"https://fav.amin.codes"},"here"),"."))))))}},2705:function(t,e,n){var r=n(5639).Symbol;t.exports=r},4636:function(t,e,n){var r=n(2545),o=n(5694),a=n(1469),c=n(4144),i=n(5776),u=n(6719),s=Object.prototype.hasOwnProperty;t.exports=function(t,e){var n=a(t),f=!n&&o(t),l=!n&&!f&&c(t),p=!n&&!f&&!l&&u(t),b=n||f||l||p,m=b?r(t.length,String):[],y=m.length;for(var x in t)!e&&!s.call(t,x)||b&&("length"==x||l&&("offset"==x||"parent"==x)||p&&("buffer"==x||"byteLength"==x||"byteOffset"==x)||i(x,y))||m.push(x);return m}},9932:function(t){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}},4311:function(t,e,n){var r=n(9877);t.exports=function(t){var e=t.length;return e?t[r(0,e-1)]:void 0}},4239:function(t,e,n){var r=n(2705),o=n(9607),a=n(2333),c=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":c&&c in Object(t)?o(t):a(t)}},9454:function(t,e,n){var r=n(4239),o=n(7005);t.exports=function(t){return o(t)&&"[object Arguments]"==r(t)}},8749:function(t,e,n){var r=n(4239),o=n(1780),a=n(7005),c={};c["[object Float32Array]"]=c["[object Float64Array]"]=c["[object Int8Array]"]=c["[object Int16Array]"]=c["[object Int32Array]"]=c["[object Uint8Array]"]=c["[object Uint8ClampedArray]"]=c["[object Uint16Array]"]=c["[object Uint32Array]"]=!0,c["[object Arguments]"]=c["[object Array]"]=c["[object ArrayBuffer]"]=c["[object Boolean]"]=c["[object DataView]"]=c["[object Date]"]=c["[object Error]"]=c["[object Function]"]=c["[object Map]"]=c["[object Number]"]=c["[object Object]"]=c["[object RegExp]"]=c["[object Set]"]=c["[object String]"]=c["[object WeakMap]"]=!1,t.exports=function(t){return a(t)&&o(t.length)&&!!c[r(t)]}},280:function(t,e,n){var r=n(5726),o=n(9850),a=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return o(t);var e=[];for(var n in Object(t))a.call(t,n)&&"constructor"!=n&&e.push(n);return e}},9877:function(t){var e=Math.floor,n=Math.random;t.exports=function(t,r){return t+e(n()*(r-t+1))}},4992:function(t,e,n){var r=n(4311),o=n(2628);t.exports=function(t){return r(o(t))}},2545:function(t){t.exports=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}},7518:function(t){t.exports=function(t){return function(e){return t(e)}}},7415:function(t,e,n){var r=n(9932);t.exports=function(t,e){return r(e,(function(e){return t[e]}))}},1957:function(t,e,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;t.exports=r},9607:function(t,e,n){var r=n(2705),o=Object.prototype,a=o.hasOwnProperty,c=o.toString,i=r?r.toStringTag:void 0;t.exports=function(t){var e=a.call(t,i),n=t[i];try{t[i]=void 0;var r=!0}catch(u){}var o=c.call(t);return r&&(e?t[i]=n:delete t[i]),o}},5776:function(t){var e=/^(?:0|[1-9]\d*)$/;t.exports=function(t,n){var r=typeof t;return!!(n=null==n?9007199254740991:n)&&("number"==r||"symbol"!=r&&e.test(t))&&t>-1&&t%1==0&&t<n}},5726:function(t){var e=Object.prototype;t.exports=function(t){var n=t&&t.constructor;return t===("function"==typeof n&&n.prototype||e)}},9850:function(t,e,n){var r=n(5569)(Object.keys,Object);t.exports=r},1167:function(t,e,n){t=n.nmd(t);var r=n(1957),o=e&&!e.nodeType&&e,a=o&&t&&!t.nodeType&&t,c=a&&a.exports===o&&r.process,i=function(){try{var t=a&&a.require&&a.require("util").types;return t||c&&c.binding&&c.binding("util")}catch(e){}}();t.exports=i},2333:function(t){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},5569:function(t){t.exports=function(t,e){return function(n){return t(e(n))}}},5639:function(t,e,n){var r=n(1957),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();t.exports=a},5694:function(t,e,n){var r=n(9454),o=n(7005),a=Object.prototype,c=a.hasOwnProperty,i=a.propertyIsEnumerable,u=r(function(){return arguments}())?r:function(t){return o(t)&&c.call(t,"callee")&&!i.call(t,"callee")};t.exports=u},1469:function(t){var e=Array.isArray;t.exports=e},8612:function(t,e,n){var r=n(3560),o=n(1780);t.exports=function(t){return null!=t&&o(t.length)&&!r(t)}},4144:function(t,e,n){t=n.nmd(t);var r=n(5639),o=n(5062),a=e&&!e.nodeType&&e,c=a&&t&&!t.nodeType&&t,i=c&&c.exports===a?r.Buffer:void 0,u=(i?i.isBuffer:void 0)||o;t.exports=u},3560:function(t,e,n){var r=n(4239),o=n(3218);t.exports=function(t){if(!o(t))return!1;var e=r(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},1780:function(t){t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},3218:function(t){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},7005:function(t){t.exports=function(t){return null!=t&&"object"==typeof t}},6719:function(t,e,n){var r=n(8749),o=n(7518),a=n(1167),c=a&&a.isTypedArray,i=c?o(c):r;t.exports=i},3674:function(t,e,n){var r=n(4636),o=n(280),a=n(8612);t.exports=function(t){return a(t)?r(t):o(t)}},5534:function(t,e,n){var r=n(4311),o=n(4992),a=n(1469);t.exports=function(t){return(a(t)?r:o)(t)}},5062:function(t){t.exports=function(){return!1}},2628:function(t,e,n){var r=n(7415),o=n(3674);t.exports=function(t){return null==t?[]:r(t,o(t))}}}]);
//# sourceMappingURL=component---src-pages-index-js-26ae55e5973728c0ff82.js.map