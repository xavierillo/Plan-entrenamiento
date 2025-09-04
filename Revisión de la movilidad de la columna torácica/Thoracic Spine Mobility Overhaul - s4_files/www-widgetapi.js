(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function r(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
r("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
r("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(aa(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function t(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ha(a){if(!(a instanceof Array)){a=t(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
var ia="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ja;
if("function"==typeof Object.setPrototypeOf)ja=Object.setPrototypeOf;else{var ka;a:{var la={a:!0},ma={};try{ma.__proto__=la;ka=ma.a;break a}catch(a){}ka=!1}ja=ka?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var na=ja;
function w(a,b){a.prototype=ia(b.prototype);a.prototype.constructor=a;if(na)na(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.N=b.prototype}
function oa(){this.u=!1;this.l=null;this.i=void 0;this.h=1;this.m=this.v=0;this.H=this.j=null}
function pa(a){if(a.u)throw new TypeError("Generator is already running");a.u=!0}
oa.prototype.A=function(a){this.i=a};
function ra(a,b){a.j={Ma:b,Qa:!0};a.h=a.v||a.m}
oa.prototype.return=function(a){this.j={return:a};this.h=this.m};
function y(a,b,c){a.h=c;return{value:b}}
oa.prototype.o=function(a){this.h=a};
function sa(a,b,c){a.v=b;void 0!=c&&(a.m=c)}
function ta(a,b){a.h=b;a.v=0}
function ua(a){a.v=0;var b=a.j.Ma;a.j=null;return b}
function va(a){a.H=[a.j];a.v=0;a.m=0}
function wa(a){var b=a.H.splice(0)[0];(b=a.j=a.j||b)?b.Qa?a.h=a.v||a.m:void 0!=b.o&&a.m<b.o?(a.h=b.o,a.j=null):a.h=a.m:a.h=0}
function xa(a){this.h=new oa;this.i=a}
function ya(a,b){pa(a.h);var c=a.h.l;if(c)return za(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Aa(a)}
function za(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.u=!1,e;var f=e.value}catch(g){return a.h.l=null,ra(a.h,g),Aa(a)}a.h.l=null;d.call(a.h,f);return Aa(a)}
function Aa(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.u=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,ra(a.h,c)}a.h.u=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.Qa)throw b.Ma;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ba(a){this.next=function(b){pa(a.h);a.h.l?b=za(a,a.h.l.next,b,a.h.A):(a.h.A(b),b=Aa(a));return b};
this.throw=function(b){pa(a.h);a.h.l?b=za(a,a.h.l["throw"],b,a.h.A):(ra(a.h,b),b=Aa(a));return b};
this.return=function(b){return ya(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ca(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function z(a){return Ca(new Ba(new xa(a)))}
function Da(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
r("Reflect.setPrototypeOf",function(a){return a?a:na?function(b,c){try{return na(b,c),!0}catch(d){return!1}}:null});
r("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.u=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.m()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.m=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.wa),reject:g(this.m)}};
b.prototype.wa=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.cb(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.la(g):this.v(g)}};
b.prototype.la=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.eb(h,g):this.v(g)};
b.prototype.m=function(g){this.A(2,g)};
b.prototype.v=function(g){this.A(1,g)};
b.prototype.A=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.bb();this.H()};
b.prototype.bb=function(){var g=this;e(function(){if(g.O()){var h=da.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.O=function(){if(this.u)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.H=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.cb=function(g){var h=this.l();g.na(h.resolve,h.reject)};
b.prototype.eb=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(u,q){return"function"==typeof u?function(v){try{l(u(v))}catch(x){m(x)}}:q}
var l,m,p=new b(function(u,q){l=u;m=q});
this.na(k(g,l),k(h,m));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.na=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=t(g),m=l.next();!m.done;m=l.next())d(m.value).na(h,k)})};
b.all=function(g){var h=t(g),k=h.next();return k.done?d([]):new b(function(l,m){function p(v){return function(x){u[v]=x;q--;0==q&&l(u)}}
var u=[],q=0;do u.push(void 0),q++,d(k.value).na(p(u.length-1),m),k=h.next();while(!k.done)})};
return b});
function Ea(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
r("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=t(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!Ea(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m.delete(k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!Ea(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&Ea(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&Ea(k,g)&&Ea(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&Ea(k,g)&&Ea(k[g],this.h)?delete k[g][this.h]:!1};
return b});
r("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return fa(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.data_[l];if(m&&Ea(h.data_,l))for(h=0;h<m.length;h++){var p=m[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:m,index:h,entry:p}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this.data_={};this.h=b();this.size=0;if(h){h=t(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(t([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.data_[l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},l.list.push(l.entry),this.h.previous.next=l.entry,this.h.previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Fa(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
r("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Fa(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
r("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
r("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Fa(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
function Ga(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
r("Array.prototype.entries",function(a){return a?a:function(){return Ga(this,function(b,c){return[b,c]})}});
r("Object.setPrototypeOf",function(a){return a||na});
var Ha="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Ea(d,e)&&(a[e]=d[e])}return a};
r("Object.assign",function(a){return a||Ha});
r("Set",function(a){function b(c){this.h=new Map;if(c){c=t(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(t([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
r("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Ea(b,d)&&c.push([d,b[d]]);return c}});
r("Array.prototype.keys",function(a){return a?a:function(){return Ga(this,function(b){return b})}});
r("Array.prototype.values",function(a){return a?a:function(){return Ga(this,function(b,c){return c})}});
r("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
r("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
r("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
r("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
r("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
r("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Fa(this,b,"includes").indexOf(b,c||0)}});
var B=this||self;function C(a,b){a=a.split(".");b=b||B;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ia(){}
function Ja(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ka(a){var b=Ja(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function D(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function La(a){return Object.prototype.hasOwnProperty.call(a,Ma)&&a[Ma]||(a[Ma]=++Na)}
var Ma="closure_uid_"+(1E9*Math.random()>>>0),Na=0;function Oa(a,b,c){return a.call.apply(a.bind,arguments)}
function Pa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Qa(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Qa=Oa:Qa=Pa;return Qa.apply(null,arguments)}
function E(a,b){a=a.split(".");var c=B;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function F(a,b){function c(){}
c.prototype=b.prototype;a.N=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ib=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Ra(a){return a}
;function Sa(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Sa);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.gb=b)}
F(Sa,Error);Sa.prototype.name="CustomError";function Ta(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function Ua(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Va=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},G=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Wa=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
G(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Xa(a,b){b=Va(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function Ya(a){return Array.prototype.concat.apply([],arguments)}
function Za(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function $a(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ka(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function bb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function cb(a){var b=db,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function eb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function fb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=fb(a[c]);return b}
var gb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function hb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<gb.length;f++)c=gb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var ib;function jb(a,b){this.h=a===kb&&b||""}
jb.prototype.ga=!0;jb.prototype.fa=function(){return this.h};
function lb(a){return new jb(kb,a)}
var kb={};lb("");var mb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function nb(a,b){if(b)a=a.replace(ob,"&amp;").replace(pb,"&lt;").replace(qb,"&gt;").replace(rb,"&quot;").replace(sb,"&#39;").replace(tb,"&#0;");else{if(!ub.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(ob,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(pb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(qb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(rb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(sb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(tb,"&#0;"))}return a}
var ob=/&/g,pb=/</g,qb=/>/g,rb=/"/g,sb=/'/g,tb=/\x00/g,ub=/[\x00&<>"']/;function vb(a,b){this.h=b===wb?a:""}
n=vb.prototype;n.ga=!0;n.fa=function(){return this.h.toString()};
n.Pa=!0;n.Na=function(){return 1};
n.toString=function(){return this.h.toString()};
var xb=RegExp('^(?:audio/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font/\\w+|image/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\\w+=(?:\\w+|"[\\w;,= ]+"))*$',"i"),yb=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,zb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,wb={},Bb=new vb("about:invalid#zClosurez",wb);var Cb;a:{var Db=B.navigator;if(Db){var Eb=Db.userAgent;if(Eb){Cb=Eb;break a}}Cb=""}function H(a){return-1!=Cb.indexOf(a)}
;function Fb(){return(H("Chrome")||H("CriOS"))&&!H("Edge")||H("Silk")}
;var Gb={};function Hb(a,b,c){this.h=c===Gb?a:"";this.i=b;this.ga=this.Pa=!0}
Hb.prototype.Na=function(){return this.i};
Hb.prototype.fa=function(){return this.h.toString()};
Hb.prototype.toString=function(){return this.h.toString()};
function Ib(a,b){if(void 0===ib){var c=null;var d=B.trustedTypes;if(d&&d.createPolicy){try{c=d.createPolicy("goog#html",{createHTML:Ra,createScript:Ra,createScriptURL:Ra})}catch(e){B.console&&B.console.error(e.message)}ib=c}else ib=c}a=(c=ib)?c.createHTML(a):a;return new Hb(a,b,Gb)}
;var Jb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Kb(a){return a?decodeURI(a):a}
function Lb(a){return Kb(a.match(Jb)[3]||null)}
function Mb(a){var b=a.match(Jb);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function Nb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Nb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Ob(a){var b=[],c;for(c in a)Nb(c,a[c],b);return b.join("&")}
var Pb=/#|$/;function Qb(a,b){var c=a.search(Pb);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.substr(d,e-d).replace(/\+/g," "))}
;function Rb(a){B.setTimeout(function(){throw a;},0)}
;function Sb(){return H("iPhone")&&!H("iPod")&&!H("iPad")}
;function Tb(a){Tb[" "](a);return a}
Tb[" "]=Ia;var Ub=H("Opera"),Vb=H("Trident")||H("MSIE"),Wb=H("Edge"),Xb=H("Gecko")&&!(-1!=Cb.toLowerCase().indexOf("webkit")&&!H("Edge"))&&!(H("Trident")||H("MSIE"))&&!H("Edge"),Yb=-1!=Cb.toLowerCase().indexOf("webkit")&&!H("Edge");function Zb(){var a=B.document;return a?a.documentMode:void 0}
var $b;a:{var ac="",bc=function(){var a=Cb;if(Xb)return/rv:([^\);]+)(\)|;)/.exec(a);if(Wb)return/Edge\/([\d\.]+)/.exec(a);if(Vb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Yb)return/WebKit\/(\S+)/.exec(a);if(Ub)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
bc&&(ac=bc?bc[1]:"");if(Vb){var cc=Zb();if(null!=cc&&cc>parseFloat(ac)){$b=String(cc);break a}}$b=ac}var dc=$b,ec;if(B.document&&Vb){var fc=Zb();ec=fc?fc:parseInt(dc,10)||void 0}else ec=void 0;var gc=ec;var hc=Sb()||H("iPod"),ic=H("iPad");!H("Android")||Fb();Fb();var jc=H("Safari")&&!(Fb()||H("Coast")||H("Opera")||H("Edge")||H("Edg/")||H("OPR")||H("Firefox")||H("FxiOS")||H("Silk")||H("Android"))&&!(Sb()||H("iPad")||H("iPod"));var kc={},lc=null;
function mc(a,b){Ka(a);void 0===b&&(b=0);if(!lc){lc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));kc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===lc[h]&&(lc[h]=g)}}}b=kc[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var nc="function"===typeof Uint8Array;var oc="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function pc(a){Object.isFrozen(a)||(oc?a[oc]|=1:void 0!==a.h?a.h|=1:Object.defineProperties(a,{h:{value:1,configurable:!0,writable:!0,enumerable:!1}}));return a}
;function qc(a){return null!==a&&"object"===typeof a&&a.constructor===Object}
;function rc(a,b){if(null!=a)return Array.isArray(a)||qc(a)?sc(a,b):b(a)}
function sc(a,b){if(Array.isArray(a)){for(var c=Array(a.length),d=0;d<a.length;d++)c[d]=rc(a[d],b);if(Array.isArray(a)){var e;oc?e=a[oc]:e=a.h;a=!!((null==e?0:e)&1)}else a=!1;a&&pc(c);return c}e={};for(c in a)e[c]=rc(a[c],b);return e}
function tc(a){a:switch(typeof a){case "number":a=isFinite(a)?a:String(a);break a;case "object":nc&&null!=a&&a instanceof Uint8Array&&(a=mc(a))}return Array.isArray(a)?sc(a,tc):a}
function uc(a){return nc&&null!=a&&a instanceof Uint8Array?new Uint8Array(a):a}
;var vc;function wc(a,b,c){var d=vc;vc=null;a||(a=d);d=this.constructor.Nb;a||(a=d?[d]:[]);this.j=(d?0:-1)-(this.constructor.Mb||0);this.h=null;this.J=a;a:{d=this.J.length;a=d-1;if(d&&(d=this.J[a],qc(d))){this.l=a-this.j;this.i=d;break a}void 0!==b&&-1<b?(this.l=Math.max(b,a+1-this.j),this.i=null):this.l=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)a=c[b],a<this.l?(a+=this.j,(d=this.J[a])?Array.isArray(d)&&pc(d):this.J[a]=xc):(yc(this),(d=this.i[a])?Array.isArray(d)&&pc(d):this.i[a]=xc)}
var xc=Object.freeze(pc([]));function yc(a){var b=a.l+a.j;a.J[b]||(a.i=a.J[b]={})}
function zc(a,b,c){return-1===b?null:(void 0===c?0:c)||b>=a.l?a.i?a.i[b]:void 0:a.J[b+a.j]}
wc.prototype.toJSON=function(){return sc(this.J,tc)};
wc.prototype.toString=function(){return this.J.toString()};
wc.prototype.clone=function(){var a=this.constructor,b=sc(this.J,uc);vc=b;a=new a(b);vc=null;Ac(a,this);return a};
function Ac(a,b){b.m&&(a.m=b.m.slice());var c=b.h;if(c){b=b.i;for(var d in c){var e=c[d];if(e){var f=!(!b||!b[d]),g=+d;if(Array.isArray(e)){if(e.length){var h=a,k=e[0].constructor,l=f;l=void 0===l?!1:l;h.h||(h.h={});f=h.h[g];if(!f){var m=h;l=void 0===l?!1:l;f=zc(m,g,l);null==f&&(f=xc);if(f===xc){var p=f=pc(f.slice());(l=void 0===l?!1:l)||g>=m.l?(yc(m),m.i[g]=p):m.J[g+m.j]=p}l=f;f=[];for(m=0;m<l.length;m++)f[m]=new k(l[m]);h.h[g]=f}g=f;for(h=0;h<Math.min(g.length,e.length);h++)Ac(g[h],e[h])}}else h=
a,k=e.constructor,-1===g?g=null:(h.h||(h.h={}),(l=h.h[g])?g=l:(f=zc(h,g,void 0===f?!1:f),null==f?g=l:(k=new k(f),g=h.h[g]=k))),g&&Ac(g,e)}}}}
;var Bc=window;lb("csi.gstatic.com");lb("googleads.g.doubleclick.net");lb("pagead2.googlesyndication.com");lb("partner.googleadservices.com");lb("pubads.g.doubleclick.net");lb("securepubads.g.doubleclick.net");lb("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
function Cc(a,b){this.width=a;this.height=b}
n=Cc.prototype;n.clone=function(){return new Cc(this.width,this.height)};
n.aspectRatio=function(){return this.width/this.height};
n.isEmpty=function(){return!(this.width*this.height)};
n.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
n.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
n.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
n.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function Dc(a,b){bb(b,function(c,d){c&&"object"==typeof c&&c.ga&&(c=c.fa());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Ec.hasOwnProperty(d)?a.setAttribute(Ec[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var Ec={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function Fc(a,b,c){var d=arguments,e=document,f=d[1],g=Gc(e,String(d[0]));f&&("string"===typeof f?g.className=f:Array.isArray(f)?g.className=f.join(" "):Dc(g,f));2<d.length&&Hc(e,g,d);return g}
function Hc(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}
for(var e=2;e<c.length;e++){var f=c[e];if(!Ka(f)||D(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(D(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}G(g?Za(f):f,d)}}}
function Gc(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Ic(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Jc(a){var b=Kc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Lc(){var a=[];Jc(function(b){a.push(b)});
return a}
var Kc={vb:"allow-forms",wb:"allow-modals",xb:"allow-orientation-lock",yb:"allow-pointer-lock",zb:"allow-popups",Ab:"allow-popups-to-escape-sandbox",Bb:"allow-presentation",Cb:"allow-same-origin",Db:"allow-scripts",Eb:"allow-top-navigation",Fb:"allow-top-navigation-by-user-activation"},Mc=Ua(function(){return Lc()});
function Nc(){var a=Oc(),b={};G(Mc(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Oc(){var a=void 0===a?document:a;return a.createElement("iframe")}
;var Pc=(new Date).getTime();function Qc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==
c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function Rc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(p){for(var u=g,q=0;64>q;q+=4)u[q/4]=p[q]<<24|p[q+1]<<16|p[q+2]<<8|p[q+3];for(q=16;80>q;q++)p=u[q-3]^u[q-8]^u[q-14]^u[q-16],u[q]=(p<<1|p>>>31)&4294967295;p=e[0];var v=e[1],x=e[2],A=e[3],J=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var K=A^v&(x^A);var M=1518500249}else K=v^x^A,M=1859775393;else 60>q?(K=v&x|A&(v|x),M=2400959708):(K=v^x^A,M=3395469782);K=((p<<5|p>>>27)&4294967295)+K+J+M+u[q]&4294967295;J=A;A=x;x=(v<<30|v>>>2)&4294967295;v=p;p=K}e[0]=e[0]+p&4294967295;e[1]=e[1]+v&4294967295;e[2]=
e[2]+x&4294967295;e[3]=e[3]+A&4294967295;e[4]=e[4]+J&4294967295}
function c(p,u){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var q=[],v=0,x=p.length;v<x;++v)q.push(p.charCodeAt(v));p=q}u||(u=p.length);q=0;if(0==l)for(;q+64<u;)b(p.slice(q,q+64)),q+=64,m+=64;for(;q<u;)if(f[l++]=p[q++],m++,64==l)for(l=0,b(f);q+64<u;)b(p.slice(q,q+64)),q+=64,m+=64}
function d(){var p=[],u=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var q=63;56<=q;q--)f[q]=u&255,u>>>=8;b(f);for(q=u=0;5>q;q++)for(var v=24;0<=v;v-=8)p[u++]=e[q]>>v&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,ib:function(){for(var p=d(),u="",q=0;q<p.length;q++)u+="0123456789ABCDEF".charAt(Math.floor(p[q]/16))+"0123456789ABCDEF".charAt(p[q]%16);return u}}}
;function Sc(a,b,c){var d=String(B.location.href);return d&&a&&b?[b,Tc(Qc(d),a,c||null)].join(" "):null}
function Tc(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],G(d,function(h){e.push(h)}),Uc(e.join(" "));
var f=[],g=[];G(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];G(d,function(h){e.push(h)});
a=Uc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Uc(a){var b=Rc();b.update(a);return b.ib().toLowerCase()}
;var Vc={};function Wc(a){this.h=a||{cookie:""}}
n=Wc.prototype;n.isEnabled=function(){if(!B.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{Ba:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
n.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Qb;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Ba}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
n.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=mb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
n.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Ba:0,path:b,domain:c});return d};
n.isEmpty=function(){return!this.h.cookie};
n.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=mb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Xc=new Wc("undefined"==typeof document?null:document);function Yc(a){return!!Vc.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Zc(a,b,c,d){(a=B[a])||(a=(new Wc(document)).get(b));return a?Sc(a,c,d):null}
function $c(a){var b=void 0===b?!1:b;var c=Qc(String(B.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=B.__SAPISID||B.__APISID||B.__3PSAPISID||B.__OVERRIDE_SID;Yc(e)&&(f=f||B.__1PSAPISID);if(f)e=!0;else{var g=new Wc(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID");Yc(e)&&(f=f||g.get("__Secure-1PAPISID"));e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?B.__SAPISID:B.__APISID,e||(e=new Wc(document),
e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?Sc(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&Yc(b)&&((b=Zc("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Zc("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;function ad(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function bd(){this.l=this.l;this.v=this.v}
bd.prototype.l=!1;bd.prototype.dispose=function(){this.l||(this.l=!0,this.ea())};
bd.prototype.ea=function(){if(this.v)for(;this.v.length;)this.v.shift()()};function cd(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
cd.prototype.stopPropagation=function(){this.j=!0};
cd.prototype.preventDefault=function(){this.defaultPrevented=!0};function dd(a){var b=C("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||B.$googDebugFname||b}catch(g){e="Not available",c=!0}b=ed(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,fd[c])c=fd[c];else{c=String(c);if(!fd[c]){var f=/function\s+([^\(]+)/m.exec(c);fd[c]=f?f[1]:"[Anonymous]"}c=fd[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function ed(a,b){b||(b={});b[gd(a)]=!0;var c=a.stack||"";(a=a.gb)&&!b[gd(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=ed(a,b));return c}
function gd(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var fd={};var hd=function(){if(!B.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{B.addEventListener("test",Ia,b),B.removeEventListener("test",Ia,b)}catch(c){}return a}();function id(a,b){cd.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
F(id,cd);var jd={2:"touch",3:"pen",4:"mouse"};
id.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(Xb){a:{try{Tb(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:jd[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&id.N.preventDefault.call(this)};
id.prototype.stopPropagation=function(){id.N.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
id.prototype.preventDefault=function(){id.N.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var kd="closure_listenable_"+(1E6*Math.random()|0);var ld=0;function md(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.qa=e;this.key=++ld;this.ia=this.ma=!1}
function nd(a){a.ia=!0;a.listener=null;a.proxy=null;a.src=null;a.qa=null}
;function od(a){this.src=a;this.listeners={};this.h=0}
od.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=pd(a,b,d,e);-1<g?(b=a[g],c||(b.ma=!1)):(b=new md(b,this.src,f,!!d,e),b.ma=c,a.push(b));return b};
od.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=pd(e,b,c,d);return-1<b?(nd(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function qd(a,b){var c=b.type;c in a.listeners&&Xa(a.listeners[c],b)&&(nd(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function pd(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.ia&&f.listener==b&&f.capture==!!c&&f.qa==d)return e}return-1}
;var rd="closure_lm_"+(1E6*Math.random()|0),sd={},td=0;function ud(a,b,c,d,e){if(d&&d.once)vd(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)ud(a,b[f],c,d,e);else c=wd(c),a&&a[kd]?a.X(b,c,D(d)?!!d.capture:!!d,e):xd(a,b,c,!1,d,e)}
function xd(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=D(e)?!!e.capture:!!e,h=yd(a);h||(a[rd]=h=new od(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=zd();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)hd||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Ad(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");td++}}
function zd(){function a(c){return b.call(a.src,a.listener,c)}
var b=Bd;return a}
function vd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)vd(a,b[f],c,d,e);else c=wd(c),a&&a[kd]?a.h.add(String(b),c,!0,D(d)?!!d.capture:!!d,e):xd(a,b,c,!0,d,e)}
function Cd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Cd(a,b[f],c,d,e);else(d=D(d)?!!d.capture:!!d,c=wd(c),a&&a[kd])?a.h.remove(String(b),c,d,e):a&&(a=yd(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=pd(b,c,d,e)),(c=-1<a?b[a]:null)&&Ed(c))}
function Ed(a){if("number"!==typeof a&&a&&!a.ia){var b=a.src;if(b&&b[kd])qd(b.h,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Ad(c),d):b.addListener&&b.removeListener&&b.removeListener(d);td--;(c=yd(b))?(qd(c,a),0==c.h&&(c.src=null,b[rd]=null)):nd(a)}}}
function Ad(a){return a in sd?sd[a]:sd[a]="on"+a}
function Bd(a,b){if(a.ia)a=!0;else{b=new id(b,this);var c=a.listener,d=a.qa||a.src;a.ma&&Ed(a);a=c.call(d,b)}return a}
function yd(a){a=a[rd];return a instanceof od?a:null}
var Fd="__closure_events_fn_"+(1E9*Math.random()>>>0);function wd(a){if("function"===typeof a)return a;a[Fd]||(a[Fd]=function(b){return a.handleEvent(b)});
return a[Fd]}
;function I(){bd.call(this);this.h=new od(this);this.wa=this;this.H=null}
F(I,bd);I.prototype[kd]=!0;I.prototype.addEventListener=function(a,b,c,d){ud(this,a,b,c,d)};
I.prototype.removeEventListener=function(a,b,c,d){Cd(this,a,b,c,d)};
function Gd(a,b){var c=a.H;if(c){var d=[];for(var e=1;c;c=c.H)d.push(c),++e}a=a.wa;c=b.type||b;"string"===typeof b?b=new cd(b,a):b instanceof cd?b.target=b.target||a:(e=b,b=new cd(c,a),hb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=Hd(g,c,!0,b)&&e}b.j||(g=b.h=a,e=Hd(g,c,!0,b)&&e,b.j||(e=Hd(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=Hd(g,c,!1,b)&&e}
I.prototype.ea=function(){I.N.ea.call(this);if(this.h){var a=this.h,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,nd(d[e]);delete a.listeners[c];a.h--}}this.H=null};
I.prototype.X=function(a,b,c,d){return this.h.add(String(a),b,!1,c,d)};
function Hd(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.ia&&g.capture==c){var h=g.listener,k=g.qa||g.src;g.ma&&qd(a.h,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Id(a){var b,c;I.call(this);var d=this;this.A=this.j=0;this.K=null!==a&&void 0!==a?a:{L:function(e,f){return setTimeout(e,f)},
W:clearTimeout};this.i=null!==(c=null===(b=window.navigator)||void 0===b?void 0:b.onLine)&&void 0!==c?c:!0;this.m=function(){return z(function(e){return y(e,Jd(d),0)})};
window.addEventListener("offline",this.m);window.addEventListener("online",this.m);this.A||Kd(this)}
w(Id,I);Id.prototype.dispose=function(){window.removeEventListener("offline",this.m);window.removeEventListener("online",this.m);this.K.W(this.A);delete Id.h};
Id.prototype.D=function(){return this.i};
function Kd(a){a.A=a.K.L(function(){var b;return z(function(c){if(1==c.h)return a.i?(null===(b=window.navigator)||void 0===b?0:b.onLine)?c.o(3):y(c,Jd(a),3):y(c,Jd(a),3);Kd(a);c.h=0})},3E4)}
function Jd(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f;return z(function(g){switch(g.h){case 1:return d=window.AbortController?new window.AbortController:void 0,e=null===d||void 0===d?void 0:d.signal,f=!1,sa(g,2,3),d&&(a.j=a.K.L(function(){d.abort()},b||2E4)),y(g,fetch("/generate_204",{method:"HEAD",
signal:e}),5);case 5:f=!0;case 3:va(g);a.u=void 0;a.j&&(a.K.W(a.j),a.j=0);f!==a.i&&(a.i=f,a.i?Gd(a,"networkstatus-online"):Gd(a,"networkstatus-offline"));c(f);wa(g);break;case 2:ua(g),f=!1,g.o(3)}})})}
;function Ld(){this.data_=[];this.h=-1}
Ld.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.data_[a]!=b&&(this.data_[a]=b,this.h=-1)};
Ld.prototype.get=function(a){return!!this.data_[a]};
function Md(a){-1==a.h&&(a.h=Wa(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function Nd(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
Nd.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function Od(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;var Pd;
function Qd(){var a=B.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!H("Presto")&&(a=function(){var e=Gc(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Qa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!H("Trident")&&!H("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Ja;c.Ja=null;e()}};
return function(e){d.next={Ja:e};d=d.next;b.port2.postMessage(0)}}return function(e){B.setTimeout(e,0)}}
;function Rd(){this.i=this.h=null}
Rd.prototype.add=function(a,b){var c=Sd.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Rd.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Sd=new Nd(function(){return new Td},function(a){return a.reset()});
function Td(){this.next=this.scope=this.h=null}
Td.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Td.prototype.reset=function(){this.next=this.scope=this.h=null};function Ud(a,b){Vd||Wd();Xd||(Vd(),Xd=!0);Yd.add(a,b)}
var Vd;function Wd(){if(B.Promise&&B.Promise.resolve){var a=B.Promise.resolve(void 0);Vd=function(){a.then(Zd)}}else Vd=function(){var b=Zd;
"function"!==typeof B.setImmediate||B.Window&&B.Window.prototype&&!H("Edge")&&B.Window.prototype.setImmediate==B.setImmediate?(Pd||(Pd=Qd()),Pd(b)):B.setImmediate(b)}}
var Xd=!1,Yd=new Rd;function Zd(){for(var a;a=Yd.remove();){try{a.h.call(a.scope)}catch(b){Rb(b)}Od(Sd,a)}Xd=!1}
;function $d(a,b){this.h=a[B.Symbol.iterator]();this.i=b;this.j=0}
$d.prototype[Symbol.iterator]=function(){return this};
$d.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value,this.j++),done:a.done}};
function ae(a,b){return new $d(a,b)}
;function be(){this.blockSize=-1}
;function ce(){this.blockSize=-1;this.blockSize=64;this.h=[];this.m=[];this.v=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
F(ce,be);ce.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function de(a,b,c){c||(c=0);var d=a.v;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
ce.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.m,f=this.i;d<b;){if(0==f)for(;d<=c;)de(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){de(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){de(this,e);f=0;break}}this.i=f;this.l+=b}};
ce.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.m[c]=b&255,b/=256;de(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};var ee="StopIteration"in B?B.StopIteration:{message:"StopIteration",stack:""};function fe(){}
fe.prototype.P=function(){throw ee;};
fe.prototype.next=function(){return ge};
var ge={done:!0,value:void 0};function he(a){return{value:a,done:!1}}
function ie(a){if(a.done)throw ee;return a.value}
fe.prototype.I=function(){return this};function je(a){if(a instanceof ke||a instanceof le||a instanceof me)return a;if("function"==typeof a.P)return new ke(function(){return ne(a)});
if("function"==typeof a[Symbol.iterator])return new ke(function(){return a[Symbol.iterator]()});
if("function"==typeof a.I)return new ke(function(){return ne(a.I())});
throw Error("Not an iterator or iterable.");}
function ne(a){if(!(a instanceof fe))return a;var b=!1;return{next:function(){for(var c;!b;)try{c=a.P();break}catch(d){if(d!==ee)throw d;b=!0}return{value:c,done:b}}}}
function ke(a){this.h=a}
ke.prototype.I=function(){return new le(this.h())};
ke.prototype[Symbol.iterator]=function(){return new me(this.h())};
ke.prototype.i=function(){return new me(this.h())};
function le(a){this.h=a}
w(le,fe);le.prototype.P=function(){var a=this.h.next();if(a.done)throw ee;return a.value};
le.prototype.next=function(){return this.h.next()};
le.prototype[Symbol.iterator]=function(){return new me(this.h)};
le.prototype.i=function(){return new me(this.h)};
function me(a){ke.call(this,function(){return a});
this.j=a}
w(me,ke);me.prototype.next=function(){return this.j.next()};function oe(a,b){this.i={};this.h=[];this.j=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof oe)for(c=pe(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function pe(a){qe(a);return a.h.concat()}
n=oe.prototype;n.has=function(a){return re(this.i,a)};
n.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||se;qe(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function se(a,b){return a===b}
n.isEmpty=function(){return 0==this.size};
n.clear=function(){this.i={};this.j=this.size=this.h.length=0};
n.remove=function(a){return this.delete(a)};
n.delete=function(a){return re(this.i,a)?(delete this.i[a],--this.size,this.j++,this.h.length>2*this.size&&qe(this),!0):!1};
function qe(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];re(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],re(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
n.get=function(a,b){return re(this.i,a)?this.i[a]:b};
n.set=function(a,b){re(this.i,a)||(this.size+=1,this.h.push(a),this.j++);this.i[a]=b};
n.forEach=function(a,b){for(var c=pe(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
n.clone=function(){return new oe(this)};
n.keys=function(){return je(this.I(!0)).i()};
n.values=function(){return je(this.I(!1)).i()};
n.entries=function(){var a=this;return ae(this.keys(),function(b){return[b,a.get(b)]})};
n.I=function(a){qe(this);var b=0,c=this.j,d=this,e=new fe;e.next=function(){if(c!=d.j)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return ge;var g=d.h[b++];return he(a?g:d.i[g])};
var f=e.next;e.P=function(){return ie(f.call(e))};
return e};
function re(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;var te=B.JSON.stringify;function ue(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function ve(a){this.h=0;this.u=void 0;this.l=this.i=this.j=null;this.m=this.v=!1;if(a!=Ia)try{var b=this;a.call(void 0,function(c){we(b,2,c)},function(c){we(b,3,c)})}catch(c){we(this,3,c)}}
function xe(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
xe.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var ye=new Nd(function(){return new xe},function(a){a.reset()});
function ze(a,b,c){var d=ye.get();d.i=a;d.onRejected=b;d.context=c;return d}
ve.prototype.then=function(a,b,c){return Ae(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
ve.prototype.$goog_Thenable=!0;ve.prototype.cancel=function(a){if(0==this.h){var b=new Be(a);Ud(function(){Ce(this,b)},this)}};
function Ce(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?Ce(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):De(c),Ee(c,e,3,b)))}a.j=null}else we(a,3,b)}
function Fe(a,b){a.i||2!=a.h&&3!=a.h||Ge(a);a.l?a.l.next=b:a.i=b;a.l=b}
function Ae(a,b,c,d){var e=ze(null,null,null);e.h=new ve(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Be?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;Fe(a,e);return e.h}
ve.prototype.H=function(a){this.h=0;we(this,2,a)};
ve.prototype.O=function(a){this.h=0;we(this,3,a)};
function we(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.H,f=a.O;if(d instanceof ve){Fe(d,ze(e||Ia,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(D(d))try{var k=d.then;if("function"===typeof k){He(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.u=c,a.h=b,a.j=null,Ge(a),3!=b||c instanceof Be||Ie(a,c))}}
function He(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Ge(a){a.v||(a.v=!0,Ud(a.A,a))}
function De(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
ve.prototype.A=function(){for(var a;a=De(this);)Ee(this,a,this.h,this.u);this.v=!1};
function Ee(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.m;a=a.j)a.m=!1;if(b.h)b.h.j=null,Je(b,c,d);else try{b.j?b.i.call(b.context):Je(b,c,d)}catch(e){Ke.call(null,e)}Od(ye,b)}
function Je(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Ie(a,b){a.m=!0;Ud(function(){a.m&&Ke.call(null,b)})}
var Ke=Rb;function Be(a){Sa.call(this,a)}
F(Be,Sa);Be.prototype.name="cancel";function L(a){bd.call(this);this.u=1;this.j=[];this.m=0;this.h=[];this.i={};this.A=!!a}
F(L,bd);n=L.prototype;n.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.u;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.u=e+3;d.push(e);return e};
function Le(a,b,c){var d=Me;if(a=d.i[a]){var e=d.h;(a=a.find(function(f){return e[f+1]==b&&e[f+2]==c}))&&d.ka(a)}}
n.ka=function(a){var b=this.h[a];if(b){var c=this.i[b];0!=this.m?(this.j.push(a),this.h[a+1]=Ia):(c&&Xa(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
n.ba=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.A)for(e=0;e<c.length;e++){var g=c[e];Ne(this.h[g+1],this.h[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f&&!this.l;e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.m--,0<this.j.length&&0==this.m)for(;c=this.j.pop();)this.ka(c)}}return 0!=e}return!1};
function Ne(a,b,c){Ud(function(){a.apply(b,c)})}
n.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.ka,this),delete this.i[a])}else this.h.length=0,this.i={}};
n.ea=function(){L.N.ea.call(this);this.clear();this.j.length=0};function Oe(a){this.h=a}
Oe.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,te(b))};
Oe.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Oe.prototype.remove=function(a){this.h.remove(a)};function Pe(a){this.h=a}
F(Pe,Oe);function Qe(a){this.data=a}
function Re(a){return void 0===a||a instanceof Qe?a:new Qe(a)}
Pe.prototype.set=function(a,b){Pe.N.set.call(this,a,Re(b))};
Pe.prototype.i=function(a){a=Pe.N.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Pe.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Se(a){this.h=a}
F(Se,Pe);Se.prototype.set=function(a,b,c){if(b=Re(b)){if(c){if(c<Date.now()){Se.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}Se.N.set.call(this,a,b)};
Se.prototype.i=function(a){var b=Se.N.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())Se.prototype.remove.call(this,a);else return b}};function Te(){}
;function Ue(){}
F(Ue,Te);Ue.prototype[Symbol.iterator]=function(){return je(this.I(!0)).i()};
Ue.prototype.clear=function(){var a=Array.from(this);a=t(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Ve(a){this.h=a}
F(Ve,Ue);n=Ve.prototype;n.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
n.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
n.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.h.removeItem(a)};
n.I=function(a){var b=0,c=this.h,d=new fe;d.next=function(){if(b>=c.length)return ge;var f=c.key(b++);if(a)return he(f);f=c.getItem(f);if("string"!==typeof f)throw"Storage mechanism: Invalid value was encountered";return he(f)};
var e=d.next;d.P=function(){return ie(e.call(d))};
return d};
n.clear=function(){this.h.clear()};
n.key=function(a){return this.h.key(a)};function We(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
F(We,Ve);function Xe(a,b){this.i=a;this.h=null;var c;if(c=Vb)c=!(9<=Number(gc));if(c){Ye||(Ye=new oe);this.h=Ye.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),Ye.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
F(Xe,Ue);var Ze={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Ye=null;function $e(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Ze[b]})}
n=Xe.prototype;n.isAvailable=function(){return!!this.h};
n.set=function(a,b){this.h.setAttribute($e(a),b);af(this)};
n.get=function(a){a=this.h.getAttribute($e(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.h.removeAttribute($e(a));af(this)};
n.I=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new fe;d.next=function(){if(b>=c.length)return ge;var f=c[b++];if(a)return he(decodeURIComponent(f.nodeName.replace(/\./g,"%")).substr(1));f=f.nodeValue;if("string"!==typeof f)throw"Storage mechanism: Invalid value was encountered";return he(f)};
var e=d.next;d.P=function(){return ie(e.call(d))};
return d};
n.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);af(this)};
function af(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function bf(a,b){this.i=a;this.h=b+"::"}
F(bf,Ue);bf.prototype.set=function(a,b){this.i.set(this.h+a,b)};
bf.prototype.get=function(a){return this.i.get(this.h+a)};
bf.prototype.remove=function(a){this.i.remove(this.h+a)};
bf.prototype.I=function(a){var b=this.i.I(!0),c=this,d=new fe;d.next=function(){try{var f=b.P()}catch(g){if(g===ee)return ge;throw g;}for(;f.substr(0,c.h.length)!=c.h;)try{f=b.P()}catch(g){if(g===ee)return ge;throw g;}return he(a?f.substr(c.h.length):c.i.get(f))};
var e=d.next;d.P=function(){return ie(e.call(d))};
return d};function cf(a){wc.call(this,a,1)}
w(cf,wc);var df,ef,ff,gf=B.window,hf=(null===(df=null===gf||void 0===gf?void 0:gf.yt)||void 0===df?void 0:df.config_)||(null===(ef=null===gf||void 0===gf?void 0:gf.ytcfg)||void 0===ef?void 0:ef.data_)||{},jf=(null===(ff=null===gf||void 0===gf?void 0:gf.ytcfg)||void 0===ff?void 0:ff.obfuscatedData_)||[];function kf(){cf.apply(this,arguments)}
w(kf,cf);new kf(jf);E("yt.config_",hf);E("yt.configJspb_",jf);function lf(){var a=arguments;1<a.length?hf[a[0]]=a[1]:1===a.length&&Object.assign(hf,a[0])}
function N(a,b){return a in hf?hf[a]:b}
function mf(){return N("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0)}
;var nf=[];function of(a){nf.forEach(function(b){return b(a)})}
function pf(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){qf(b)}}:a}
function qf(a,b,c,d){var e=C("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=N("ERRORS",[]),e.push([a,"ERROR",b,c,d]),lf("ERRORS",e));of(a)}
function rf(a,b,c,d){var e=C("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=N("ERRORS",[]),e.push([a,"WARNING",b,c,d]),lf("ERRORS",e))}
;var sf=0;E("ytDomDomGetNextId",C("ytDomDomGetNextId")||function(){return++sf});var tf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function uf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in tf||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
uf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
uf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
uf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var db=B.ytEventsEventsListeners||{};E("ytEventsEventsListeners",db);var vf=B.ytEventsEventsCounter||{count:0};E("ytEventsEventsCounter",vf);
function wf(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return cb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=D(e[4])&&D(d)&&eb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function xf(a){a&&("string"==typeof a&&(a=[a]),G(a,function(b){if(b in db){var c=db[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?yf()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete db[b]}}))}
var yf=Ua(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function zf(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=wf(a,b,c,d);if(!e){e=++vf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new uf(h);if(!Ic(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new uf(h);
h.currentTarget=a;return c.call(a,h)};
g=pf(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),yf()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);db[e]=[a,b,c,g,d]}}}
;function Af(a,b){"function"===typeof a&&(a=pf(a));return window.setTimeout(a,b)}
function Bf(a){"function"===typeof a&&(a=pf(a));return window.setInterval(a,250)}
;var Cf=/^[\w.]*$/,Df={q:!0,search_query:!0};function Ef(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=Ff(f[0]||""),h=Ff(f[1]||"");g in c?Array.isArray(c[g])?$a(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(p){var k=p,l=f[0],m=String(Ef);k.args=[{key:l,value:f[1],query:a,method:Gf==m?"unchanged":m}];Df.hasOwnProperty(l)||rf(k)}}return c}
var Gf=String(Ef);function Hf(a){var b=[];bb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];G(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function If(a){"?"==a.charAt(0)&&(a=a.substr(1));return Ef(a,"&")}
function Jf(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=If(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=Ob(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.substr(0,f),e,b.substr(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function Kf(a){if(!b)var b=window.location.href;var c=a.match(Jb)[1]||null,d=Lb(a);c&&d?(a=a.match(Jb),b=b.match(Jb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Lb(b)==d&&(Number(b.match(Jb)[4]||null)||null)==(Number(a.match(Jb)[4]||null)||null):!0;return a}
function Ff(a){return a&&a.match(Cf)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function O(a){a=Lf(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Mf(a,b){a=Lf(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Lf(a){var b=N("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:N("EXPERIMENT_FLAGS",{})[a]}
;var Nf={appSettingsCaptured:!0,visualElementAttached:!0,visualElementGestured:!0,visualElementHidden:!0,visualElementShown:!0,flowEvent:!0,visualElementStateChanged:!0,playbackAssociated:!0,youThere:!0,accountStateChangeSignedIn:!0,accountStateChangeSignedOut:!0},Of={latencyActionBaselined:!0,latencyActionInfo:!0,latencyActionTicked:!0,bedrockRepetitiveActionTimed:!0,adsClientStateChange:!0,streamzIncremented:!0,mdxDialAdditionalDataUpdateEvent:!0,tvhtml5WatchKeyEvent:!0,tvhtml5VideoSeek:!0,tokenRefreshEvent:!0,
adNotify:!0,adNotifyFilled:!0,tvhtml5LaunchUrlComponentChanged:!0,bedrockResourceConsumptionSnapshot:!0,deviceStartupMetrics:!0,mdxSignIn:!0,tvhtml5KeyboardLogging:!0,tvhtml5StartupSoundEvent:!0,tvhtml5LiveChatStatus:!0,tvhtml5DeviceStorageStatus:!0,tvhtml5LocalStorage:!0,directSignInEvent:!0,finalPayload:!0,tvhtml5SearchCompleted:!0,tvhtml5KeyboardPerformance:!0,adNotifyFailure:!0,latencyActionSpan:!0,tvhtml5AccountDialogOpened:!0,tvhtml5ApiTest:!0};function Pf(){}
function Qf(a,b){return Rf(a,0,b)}
Pf.prototype.L=function(a,b){return Rf(a,1,b)};
function Sf(a,b){Rf(a,2,b)}
;function Tf(){Pf.apply(this,arguments)}
w(Tf,Pf);function Uf(){Tf.h||(Tf.h=new Tf);return Tf.h}
function Rf(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=C("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Af(a,c||0)}
Tf.prototype.W=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=C("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
Tf.prototype.start=function(){var a=C("yt.scheduler.instance.start");a&&a()};var Vf=Uf();function Wf(a){var b=Xf;a=void 0===a?C("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Pc;e.flash="0";a:{try{var f=b.h.top.location.href}catch(qa){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Bc:g;try{var h=g.history.length}catch(qa){h=0}e.u_his=h;var k;e.u_h=null==(k=Bc.screen)?void 0:k.height;var l;e.u_w=null==(l=Bc.screen)?void 0:l.width;var m;e.u_ah=null==(m=Bc.screen)?void 0:m.availHeight;var p;e.u_aw=
null==(p=Bc.screen)?void 0:p.availWidth;var u;e.u_cd=null==(u=Bc.screen)?void 0:u.colorDepth}catch(qa){}h=b.h;try{var q=h.screenX;var v=h.screenY}catch(qa){}try{var x=h.outerWidth;var A=h.outerHeight}catch(qa){}try{var J=h.innerWidth;var K=h.innerHeight}catch(qa){}try{var M=h.screenLeft;var Ab=h.screenTop}catch(qa){}try{J=h.innerWidth,K=h.innerHeight}catch(qa){}try{var Dd=h.screen.availWidth;var Zi=h.screen.availTop}catch(qa){}q=[M,Ab,q,v,Dd,Zi,x,A,J,K];v=b.h.top;try{var ab=(v||window).document,Z=
"CSS1Compat"==ab.compatMode?ab.documentElement:ab.body;var ea=(new Cc(Z.clientWidth,Z.clientHeight)).round()}catch(qa){ea=new Cc(-12245933,-12245933)}ab=ea;ea={};Z=new Ld;B.SVGElement&&B.document.createElementNS&&Z.set(0);v=Nc();v["allow-top-navigation-by-user-activation"]&&Z.set(1);v["allow-popups-to-escape-sandbox"]&&Z.set(2);B.crypto&&B.crypto.subtle&&Z.set(3);B.TextDecoder&&B.TextEncoder&&Z.set(4);Z=Md(Z);ea.bc=Z;ea.bih=ab.height;ea.biw=ab.width;ea.brdim=q.join();b=b.i;b=(ea.vis={visible:1,hidden:2,
prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,ea.wgl=!!Bc.WebGLRenderingContext,ea);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Xf=new function(){var a=window.document;this.h=window;this.i=a};
E("yt.ads_.signals_.getAdSignalsString",function(a){return Hf(Wf(a))});Date.now();var Yf="XMLHttpRequest"in B?function(){return new XMLHttpRequest}:null;
function Zf(){if(!Yf)return null;var a=Yf();return"open"in a?a:null}
;var $f={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL",
"X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},ag="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ha("client_dev_mss_url client_dev_regex_map client_dev_root_url expflag jsfeat jsmode client_rollout_override".split(" "))),bg=!1;
function cg(a,b){b=void 0===b?{}:b;var c=Kf(a),d=O("web_ajax_ignore_global_headers_if_set"),e;for(e in $f){var f=N($f[e]);!f||!c&&Lb(a)||d&&void 0!==b[e]||(b[e]=f)}if(c||!Lb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!Lb(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||!Lb(a))b["X-YouTube-Ad-Signals"]=Hf(Wf(void 0));return b}
function dg(a){var b=window.location.search,c=Lb(a);O("debug_handle_relative_url_for_query_forward_killswitch")||c||!Kf(a)||(c=document.location.hostname);var d=Kb(a.match(Jb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=If(b),f={};G(ag,function(g){e[g]&&(f[g]=e[g])});
return Jf(a,f||{},!1)}
function eg(a,b){var c=b.format||"JSON";a=fg(a,b);var d=gg(a,b),e=!1,f=hg(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,p=400<=k.status&&500>k.status,u=500<=k.status&&600>k.status;if(l||p||u)m=ig(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=
!!m}m=m||{};p=b.context||B;l?b.onSuccess&&b.onSuccess.call(p,k,m):b.onError&&b.onError.call(p,k,m);b.onFinish&&b.onFinish.call(p,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
if(b.onTimeout&&0<b.timeout){var g=b.onTimeout;var h=Af(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||B,f))},b.timeout)}}
function fg(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=N("XSRF_FIELD_NAME",void 0);if(b=b.urlParams)b[c]&&delete b[c],a=Jf(a,b||{},!0);return a}
function gg(a,b){var c=N("XSRF_FIELD_NAME",void 0),d=N("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.postParams,g=N("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Lb(a)&&!b.withCredentials&&Lb(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=If(e),hb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):Ob(e));if(!(a=e)&&(a=f)){a:{for(var k in f){f=
!1;break a}f=!0}a=!f}!bg&&a&&"POST"!=b.method&&(bg=!0,qf(Error("AJAX request with postData should use POST")));return e}
function ig(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,rf(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?jg(a):null)e={},G(a.getElementsByTagName("*"),function(g){e[g.tagName]=kg(g)})}d&&lg(e);
return e}
function lg(a){if(D(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;lb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");var d=Ib(a[b],null);a[c]=d}else lg(a[b])}}
function jg(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function kg(a){var b="";G(a.childNodes,function(c){b+=c.nodeValue});
return b}
function hg(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&pf(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Zf();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;O("debug_forward_web_query_parameters")&&(a=dg(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=cg(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var mg=hc||ic;function ng(a){var b=Cb;return b?0<=b.toLowerCase().indexOf(a):!1}
;var og={},pg=0;
function qg(a,b,c,d,e){e=void 0===e?"":e;if(a)if(c&&!ng("cobalt"))a&&(a instanceof vb||(a="object"==typeof a&&a.ga?a.fa():String(a),zb.test(a)?a=new vb(a,wb):(a=String(a),a=a.replace(/(%0A|%0D)/g,""),a=(b=a.match(yb))&&xb.test(b[1])?new vb(a,wb):null)),a=a||Bb,a instanceof vb&&a.constructor===vb?a=a.h:(Ja(a),a="type_error:SafeUrl"),"about:invalid#zClosurez"===a||a.startsWith("data")?a="":(a instanceof Hb||(b="object"==typeof a,c=null,b&&a.Pa&&(c=a.Na()),a=Ib(nb(b&&a.ga?a.fa():String(a)),c)),a instanceof
Hb&&a.constructor===Hb?a=a.h:(Ja(a),a="type_error:SafeHtml"),a=encodeURIComponent(String(te(a.toString())))),/^[\s\xa0]*$/.test(a)||(a=Fc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a)));else if(e)hg(a,b,"POST",e,d);else if(N("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d)hg(a,b,"GET","",d);else{b:{try{var f=new Ta({url:a});if(f.j&&f.i||f.l){var g=Kb(a.match(Jb)[5]||null);var h=!(!g||!g.endsWith("/aclk")||
"1"!==Qb(a,"ri"));break b}}catch(k){}h=!1}h?rg(a)?(b&&b(),c=!0):c=!1:c=!1;c||sg(a,b)}}
function tg(){var a=void 0===a?"":a;rg("/generate_204",a)||qg("/generate_204",void 0,void 0,void 0,a)}
function rg(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function sg(a,b){var c=new Image,d=""+pg++;og[d]=c;c.onload=c.onerror=function(){b&&og[d]&&b();delete og[d]};
c.src=a}
;var ug=B.ytPubsubPubsubInstance||new L,vg=B.ytPubsubPubsubSubscribedKeys||{},wg=B.ytPubsubPubsubTopicToKeys||{},xg=B.ytPubsubPubsubIsSynchronous||{};L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.ka;L.prototype.publish=L.prototype.ba;L.prototype.clear=L.prototype.clear;E("ytPubsubPubsubInstance",ug);E("ytPubsubPubsubTopicToKeys",wg);E("ytPubsubPubsubIsSynchronous",xg);E("ytPubsubPubsubSubscribedKeys",vg);var yg=window,P=yg.ytcsi&&yg.ytcsi.now?yg.ytcsi.now:yg.performance&&yg.performance.timing&&yg.performance.now&&yg.performance.timing.navigationStart?function(){return yg.performance.timing.navigationStart+yg.performance.now()}:function(){return(new Date).getTime()};var zg=Mf("initial_gel_batch_timeout",2E3),Ag=Math.pow(2,16)-1,Bg=void 0,Cg=0,Dg=0,Eg=0,Fg=!0,Gg=B.ytLoggingTransportGELQueue_||new Map;E("ytLoggingTransportGELQueue_",Gg);var Hg=B.ytLoggingTransportTokensToCttTargetIds_||{};E("ytLoggingTransportTokensToCttTargetIds_",Hg);
function Ig(a,b){if("log_event"===a.endpoint){var c=Jg(a),d=Gg.get(c)||[];Gg.set(c,d);d.push(a.payload);b&&(Bg=new b);a=Mf("tvhtml5_logging_max_batch")||Mf("web_logging_max_batch")||100;b=P();d.length>=a?Kg({writeThenSend:!0},O("flush_only_full_queue")?c:void 0):10<=b-Eg&&(Lg(),Eg=b)}}
function Mg(a,b){if("log_event"===a.endpoint){var c=Jg(a),d=new Map;d.set(c,[a.payload]);b&&(Bg=new b);return new ve(function(e){Bg&&Bg.isReady()?Ng(d,e,{bypassNetworkless:!0},!0):e()})}}
function Jg(a){var b="";if(a.ya)b="visitorOnlyApprovedKey";else if(a.ca){b=a.ca;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);Hg[a.ca.token]=c;b=a.ca.token}return b}
function Kg(a,b){a=void 0===a?{}:a;new ve(function(c){window.clearTimeout(Cg);window.clearTimeout(Dg);Dg=0;if(Bg&&Bg.isReady())if(void 0!==b){var d=new Map,e=Gg.get(b)||[];d.set(b,e);Ng(d,c,a);Gg.delete(b)}else Ng(Gg,c,a),Gg.clear();else Lg(),c()})}
function Lg(){O("web_gel_timeout_cap")&&!Dg&&(Dg=Af(function(){Kg({writeThenSend:!0})},6E4));
window.clearTimeout(Cg);var a=N("LOGGING_BATCH_TIMEOUT",Mf("web_gel_debounce_ms",1E4));O("shorten_initial_gel_batch_timeout")&&Fg&&(a=zg);Cg=Af(function(){Kg({writeThenSend:!0})},a)}
function Ng(a,b,c,d){var e=Bg;c=void 0===c?{}:c;var f=Math.round(P()),g=a.size;a=t(a);for(var h=a.next();!h.done;h=a.next()){var k=t(h.value);h=k.next().value;var l=k=k.next().value;k=fb({context:Og(e.config_||Pg())});k.events=l;(l=Hg[h])&&Qg(k,h,l);delete Hg[h];h="visitorOnlyApprovedKey"===h;Rg(k,f,h);O("always_send_and_write")&&(c.writeThenSend=!1);O("send_beacon_before_gel")&&window.navigator&&window.navigator.sendBeacon&&!c.writeThenSend&&tg();Sg(e,"log_event",k,Tg(c,h,function(){g--;g||b()},
function(){g--;
g||b()},d));
Fg=!1}}
function Tg(a,b,c,d,e){return{retry:!0,onSuccess:c,onError:d,Sa:a,ya:b,Jb:!!e}}
function Rg(a,b,c){a.requestTimeMs=String(b);O("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=N("EVENT_ID",void 0))&&((c=N("BATCH_CLIENT_COUNTER",void 0)||0)||(c=Math.floor(Math.random()*Ag/2)),c++,c>Ag&&(c=1),lf("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Qg(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var Ug=B.ytLoggingGelSequenceIdObj_||{};E("ytLoggingGelSequenceIdObj_",Ug);function Vg(){if(!B.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return B.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":B.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":B.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":B.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;E("ytglobal.prefsUserPrefsPrefs_",C("ytglobal.prefsUserPrefsPrefs_")||{});var Wg={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Xg={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function Yg(){var a=B.navigator;return a?a.connection:void 0}
;function Zg(){return"INNERTUBE_API_KEY"in hf&&"INNERTUBE_API_VERSION"in hf}
function Pg(){return{innertubeApiKey:N("INNERTUBE_API_KEY",void 0),innertubeApiVersion:N("INNERTUBE_API_VERSION",void 0),kb:N("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Aa:N("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Lb:N("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:N("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),mb:N("INNERTUBE_CONTEXT_HL",void 0),lb:N("INNERTUBE_CONTEXT_GL",void 0),nb:N("INNERTUBE_HOST_OVERRIDE",void 0)||"",pb:!!N("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),ob:!!N("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:N("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function Og(a){var b={client:{hl:a.mb,gl:a.lb,clientName:a.Aa,clientVersion:a.innertubeContextClientVersion,configInfo:a.kb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=B.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=N("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];var d=N("EXPERIMENTS_FORCED_FLAGS",{});for(e in d)c.push({key:e,value:String(d[e])});var e=N("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&void 0===
d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});f=a.Aa;if(("WEB"===f||"MWEB"===f||1===f||2===f)&&b){var g;b.client.mainAppWebInfo=null!=(g=b.client.mainAppWebInfo)?g:{};b.client.mainAppWebInfo.webDisplayMode=Vg()}g=a.Aa;if(("WEB_REMIX"===g||76===g)&&!O("music_web_display_mode_killswitch")&&b){var h;b.client.Ra=null!=(h=b.client.Ra)?h:{};b.client.Ra.webDisplayMode=Vg()}var k;if(O("web_log_memory_total_kbytes")&&(null==(k=B.navigator)?0:k.deviceMemory)){var l;
h=null==(l=B.navigator)?void 0:l.deviceMemory;b&&(b.client.memoryTotalKbytes=""+1E6*h)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);a:{if(l=Yg()){a=Wg[l.type||"unknown"]||"CONN_UNKNOWN";l=Wg[l.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===a&&"CONN_UNKNOWN"!==l&&(a=l);if("CONN_UNKNOWN"!==a)break a;if("CONN_UNKNOWN"!==l){a=l;break a}}a=void 0}a&&b&&(b.client.connectionType=a);O("web_log_effective_connection_type")&&
(a=Yg(),a=null!==a&&void 0!==a&&a.effectiveType?Xg.hasOwnProperty(a.effectiveType)?Xg[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,a&&b&&(b.client.effectiveConnectionType=a));N("DELEGATED_SESSION_ID")&&!O("pageid_as_header_web")&&(b.user={onBehalfOfUser:N("DELEGATED_SESSION_ID")});a=Object;l=a.assign;h=b.client;k={};g=t(Object.entries(If(N("DEVICE",""))));for(f=g.next();!f.done;f=g.next())e=t(f.value),f=e.next().value,e=e.next().value,"cbrand"===f?k.deviceMake=e:"cmodel"===f?k.deviceModel=
e:"cbr"===f?k.browserName=e:"cbrver"===f?k.browserVersion=e:"cos"===f?k.osName=e:"cosver"===f?k.osVersion=e:"cplatform"===f&&(k.platform=e);b.client=l.call(a,h,k);return b}
function $g(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||N("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Hb||N("AUTHORIZATION"))||(a?b="Bearer "+C("gapi.auth.getToken")().Gb:b=$c([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=N("SESSION_INDEX",0),O("pageid_as_header_web")&&(d["X-Goog-PageId"]=N("DELEGATED_SESSION_ID")));return d}
;function ah(a){a=Object.assign({},a);delete a.Authorization;var b=$c();if(b){var c=new ce;c.update(N("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=mc(c.digest(),3)}return a}
;function bh(a){var b=new We;(b=b.isAvailable()?a?new bf(b,a):b:null)||(a=new Xe(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new Se(a):null;this.i=document.domain||window.location.hostname}
bh.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(te(b))}catch(f){return}else e=escape(b);b=this.i;Xc.set(""+a,e,{Ba:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
bh.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=Xc.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
bh.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;Xc.remove(""+a,"/",void 0===b?"youtube.com":b)};var ch;function dh(){ch||(ch=new bh("yt.innertube"));return ch}
function eh(a,b,c,d){if(d)return null;d=dh().get("nextId",!0)||1;var e=dh().get("requests",!0)||{};e[d]={method:a,request:b,authState:ah(c),requestTime:Math.round(P())};dh().set("nextId",d+1,86400,!0);dh().set("requests",e,86400,!0);return d}
function fh(a){var b=dh().get("requests",!0)||{};delete b[a];dh().set("requests",b,86400,!0)}
function gh(a){var b=dh().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(P())-d.requestTime)){var e=d.authState,f=ah($g(!1));eb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(P())),Sg(a,d.method,e,{}));delete b[c]}}dh().set("requests",b,86400,!0)}}
;var hh=function(){var a;return function(){a||(a=new bh("ytidb"));return a}}();
function ih(){var a;return null===(a=hh())||void 0===a?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var jh=[],kh=!1;function lh(a){kh||(jh.push({type:"ERROR",payload:a}),10<jh.length&&jh.shift())}
function mh(a,b){kh||(jh.push({type:"EVENT",eventType:a,payload:b}),10<jh.length&&jh.shift())}
;function nh(a){var b=Da.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ha(b))}
w(nh,Error);function oh(){try{return ph(),!0}catch(a){return!1}}
function ph(){if(void 0!==N("DATASYNC_ID",void 0))return N("DATASYNC_ID",void 0);throw new nh("Datasync ID not set","unknown");}
;function qh(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function rh(a){return a.substr(0,a.indexOf(":"))||a}
;var Q={},sh=(Q.AUTH_INVALID="No user identifier specified.",Q.EXPLICIT_ABORT="Transaction was explicitly aborted.",Q.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Q.MISSING_INDEX="Index not created.",Q.MISSING_OBJECT_STORES="Object stores not created.",Q.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Q.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",Q.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",
Q.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Q.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Q.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Q),R={},th=(R.AUTH_INVALID="ERROR",R.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",R.EXPLICIT_ABORT="IGNORED",R.IDB_NOT_SUPPORTED="ERROR",R.MISSING_INDEX="WARNING",R.MISSING_OBJECT_STORES="ERROR",R.DB_DELETED_BY_MISSING_OBJECT_STORES=
"WARNING",R.QUOTA_EXCEEDED="WARNING",R.QUOTA_MAYBE_EXCEEDED="WARNING",R.UNKNOWN_ABORT="WARNING",R.INCOMPATIBLE_DB_VERSION="WARNING",R),S={},uh=(S.AUTH_INVALID=!1,S.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,S.EXPLICIT_ABORT=!1,S.IDB_NOT_SUPPORTED=!1,S.MISSING_INDEX=!1,S.MISSING_OBJECT_STORES=!1,S.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,S.QUOTA_EXCEEDED=!1,S.QUOTA_MAYBE_EXCEEDED=!0,S.UNKNOWN_ABORT=!0,S.INCOMPATIBLE_DB_VERSION=!1,S);
function T(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?sh[a]:c;d=void 0===d?th[a]:d;e=void 0===e?uh[a]:e;nh.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,T.prototype)}
w(T,nh);function vh(a,b){T.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},sh.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,vh.prototype)}
w(vh,T);function wh(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,wh.prototype)}
w(wh,Error);var xh=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function yh(a,b,c,d){b=rh(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof T)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new T("QUOTA_EXCEEDED",a);if(jc&&"UnknownError"===e.name)return new T("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof wh)return new T("MISSING_INDEX",Object.assign(Object.assign({},a),{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&xh.some(function(f){return e.message.includes(f)}))return new T("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new T("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign(Object.assign({},a),{name:"IdbError",Pb:e.name})];e.level="WARNING";return e}
function zh(a,b,c){var d=ih();return new T("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null===d||void 0===d?void 0:d.hasSucceededOnce}})}
;function Ah(a){if(!a)throw Error();throw a;}
function Bh(a){return a}
function Ch(a){this.h=a}
function U(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=t(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=t(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.onRejected=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
U.all=function(a){return new U(new Ch(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={Y:0};f.Y<a.length;f={Y:f.Y},++f.Y)Dh(U.resolve(a[f.Y]).then(function(g){return function(h){d[g.Y]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})}))};
U.resolve=function(a){return new U(new Ch(function(b,c){a instanceof U?a.then(b,c):b(a)}))};
U.reject=function(a){return new U(new Ch(function(b,c){c(a)}))};
U.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:Bh,e=null!==b&&void 0!==b?b:Ah;return new U(new Ch(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){Eh(c,c,d,f,g)}),c.onRejected.push(function(){Fh(c,c,e,f,g)})):"FULFILLED"===c.state.status?Eh(c,c,d,f,g):"REJECTED"===c.state.status&&Fh(c,c,e,f,g)}))};
function Dh(a,b){a.then(void 0,b)}
function Eh(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof U?Gh(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Fh(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof U?Gh(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Gh(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof U?Gh(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Hh(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Ih(a){return new Promise(function(b,c){Hh(a,b,c)})}
function V(a){return new U(new Ch(function(b,c){Hh(a,b,c)}))}
;function Jh(a,b){return new U(new Ch(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;function Kh(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(P());this.i=!1}
n=Kh.prototype;n.add=function(a,b,c){return W(this,[a],{mode:"readwrite",G:!0},function(d){return d.objectStore(a).add(b,c)})};
n.clear=function(a){return W(this,[a],{mode:"readwrite",G:!0},function(b){return b.objectStore(a).clear()})};
n.close=function(){var a;this.h.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
n.count=function(a,b){return W(this,[a],{mode:"readonly",G:!0},function(c){return c.objectStore(a).count(b)})};
function Lh(a,b,c){a=a.h.createObjectStore(b,c);return new Mh(a)}
n.delete=function(a,b){return W(this,[a],{mode:"readwrite",G:!0},function(c){return c.objectStore(a).delete(b)})};
n.get=function(a,b){return W(this,[a],{mode:"readonly",G:!0},function(c){return c.objectStore(a).get(b)})};
function Nh(a,b){return W(a,["LogsRequestsStore"],{mode:"readwrite",G:!0},function(c){c=c.objectStore("LogsRequestsStore");return V(c.h.put(b,void 0))})}
n.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function W(a,b,c,d){var e,f,g,h,k,l,m,p,u,q,v,x;return z(function(A){switch(A.h){case 1:var J={mode:"readonly",G:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?J.mode=c:Object.assign(J,c);e=J;a.transactionCount++;f=e.G?3:1;g=0;case 2:if(h){A.o(3);break}g++;k=Math.round(P());sa(A,4);l=a.h.transaction(b,e.mode);J=new Oh(l);J=Ph(J,d);return y(A,J,6);case 6:return m=A.i,p=Math.round(P()),Qh(a,k,p,g,void 0,b.join(),e),A.return(m);case 4:u=ua(A);q=Math.round(P());v=yh(u,a.h.name,b.join(),a.h.version);
if((x=v instanceof T&&!v.h)||g>=f)Qh(a,k,q,g,v,b.join(),e),h=v;A.o(2);break;case 3:return A.return(Promise.reject(h))}})}
function Qh(a,b,c,d,e,f,g){b=c-b;e?(e instanceof T&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&mh("QUOTA_EXCEEDED",{dbName:rh(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof T&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),mh("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),Rh(a,!1,d,f,b,g.tag),lh(e)):Rh(a,!0,d,f,b,g.tag)}
function Rh(a,b,c,d,e,f){mh("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
n.getName=function(){return this.h.name};
function Mh(a){this.h=a}
n=Mh.prototype;n.add=function(a,b){return V(this.h.add(a,b))};
n.autoIncrement=function(){return this.h.autoIncrement};
n.clear=function(){return V(this.h.clear()).then(function(){})};
n.count=function(a){return V(this.h.count(a))};
function Sh(a,b){return Th(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
n.delete=function(a){return a instanceof IDBKeyRange?Sh(this,a):V(this.h.delete(a))};
n.get=function(a){return V(this.h.get(a))};
n.index=function(a){try{return new Uh(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new wh(a,this.h.name);throw b;}};
n.getName=function(){return this.h.name};
n.keyPath=function(){return this.h.keyPath};
function Th(a,b,c){a=a.h.openCursor(b.query,b.direction);return Vh(a).then(function(d){return Jh(d,c)})}
function Oh(a){var b=this;this.h=a;this.j=new Map;this.i=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.i){e=T;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function Ph(a,b){var c=new Promise(function(d,e){try{Dh(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return t(d).next().value})}
Oh.prototype.abort=function(){this.h.abort();this.i=!0;throw new T("EXPLICIT_ABORT");};
Oh.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.j.get(a);b||(b=new Mh(a),this.j.set(a,b));return b};
function Uh(a){this.h=a}
n=Uh.prototype;n.count=function(a){return V(this.h.count(a))};
n.delete=function(a){return Wh(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
n.get=function(a){return V(this.h.get(a))};
n.getKey=function(a){return V(this.h.getKey(a))};
n.keyPath=function(){return this.h.keyPath};
n.unique=function(){return this.h.unique};
function Wh(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Vh(a).then(function(d){return Jh(d,c)})}
function Xh(a,b){this.request=a;this.cursor=b}
function Vh(a){return V(a).then(function(b){return b?new Xh(a,b):null})}
n=Xh.prototype;n.advance=function(a){this.cursor.advance(a);return Vh(this.request)};
n.continue=function(a){this.cursor.continue(a);return Vh(this.request)};
n.delete=function(){return V(this.cursor.delete()).then(function(){})};
n.getKey=function(){return this.cursor.key};
n.update=function(a){return V(this.cursor.update(a))};function Yh(a,b,c){return new Promise(function(d,e){function f(){u||(u=new Kh(g.result,{closed:p}));return u}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.blocked,k=c.blocking,l=c.tb,m=c.upgrade,p=c.closed,u;g.addEventListener("upgradeneeded",function(q){try{if(null===q.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");q.dataLoss&&"none"!==q.dataLoss&&mh("IDB_DATA_CORRUPTED",{reason:q.dataLossMessage||"unknown reason",dbName:rh(a)});var v=f(),x=new Oh(g.transaction);
m&&m(v,function(A){return q.oldVersion<A&&q.newVersion>=A},x);
x.done.catch(function(A){e(A)})}catch(A){e(A)}});
g.addEventListener("success",function(){var q=g.result;k&&q.addEventListener("versionchange",function(){k(f())});
q.addEventListener("close",function(){mh("IDB_UNEXPECTEDLY_CLOSED",{dbName:rh(a),dbVersion:q.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Zh(a,b,c){c=void 0===c?{}:c;return Yh(a,b,c)}
function $h(a,b){b=void 0===b?{}:b;var c,d,e,f;return z(function(g){if(1==g.h)return sa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.blocked)&&c.addEventListener("blocked",function(){e()}),y(g,Ih(c),4);
if(2!=g.h)return ta(g,0);f=ua(g);throw yh(f,a,"",-1);})}
;function ai(a){return new Promise(function(b){Sf(function(){b()},a)})}
function bi(a,b){this.name=a;this.options=b;this.l=!0;this.m=0;this.i=500}
bi.prototype.j=function(a,b,c){c=void 0===c?{}:c;return Zh(a,b,c)};
bi.prototype.delete=function(a){a=void 0===a?{}:a;return $h(this.name,a)};
function ci(a,b){return new T("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function di(a,b){if(!b)throw zh("openWithToken",rh(a.name));return a.open()}
bi.prototype.open=function(){function a(){var f,g,h,k,l,m,p,u,q,v;return z(function(x){switch(x.h){case 1:return h=null!==(f=Error().stack)&&void 0!==f?f:"",sa(x,2),y(x,c.j(c.name,c.options.version,e),4);case 4:k=x.i;for(var A=c.options,J=[],K=t(Object.keys(A.ha)),M=K.next();!M.done;M=K.next()){M=M.value;var Ab=A.ha[M],Dd=void 0===Ab.sb?Number.MAX_VALUE:Ab.sb;!(k.h.version>=Ab.xa)||k.h.version>=Dd||k.h.objectStoreNames.contains(M)||J.push(M)}l=J;if(0===l.length){x.o(5);break}m=Object.keys(c.options.ha);
p=k.objectStoreNames();if(!(c.m<Mf("ytidb_remake_db_retries",1))){x.o(6);break}c.m++;if(!O("ytidb_remake_db_enable_backoff_delay")){x.o(7);break}return y(x,ai(c.i),8);case 8:c.i*=2;case 7:return y(x,c.delete(),9);case 9:return lh(new T("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:m,foundObjectStores:p})),x.return(a());case 6:throw new vh(p,m);case 5:return x.return(k);case 2:u=ua(x);if(u instanceof DOMException?"VersionError"!==u.name:"DOMError"in self&&u instanceof DOMError?
"VersionError"!==u.name:!(u instanceof Object&&"message"in u)||"An attempt was made to open a database using a lower version than the existing version."!==u.message){x.o(10);break}return y(x,c.j(c.name,void 0,Object.assign(Object.assign({},e),{upgrade:void 0})),11);case 11:q=x.i;v=q.h.version;if(void 0!==c.options.version&&v>c.options.version+1)throw q.close(),c.l=!1,ci(c,v);return x.return(q);case 10:throw b(),u instanceof Error&&!O("ytidb_async_stack_killswitch")&&(u.stack=u.stack+"\n"+h.substring(h.indexOf("\n")+
1)),yh(u,c.name,"",null!==(g=c.options.version)&&void 0!==g?g:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.l)throw ci(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,tb:b,upgrade:this.options.upgrade};return this.h=d=a()};var ei=new bi("YtIdbMeta",{ha:{databases:{xa:1}},upgrade:function(a,b){b(1)&&Lh(a,"databases",{keyPath:"actualName"})}});
function fi(a,b){var c;return z(function(d){if(1==d.h)return y(d,di(ei,b),2);c=d.i;return d.return(W(c,["databases"],{G:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return V(f.h.put(a,void 0)).then(function(){})})}))})}
function gi(a,b){var c;return z(function(d){if(1==d.h)return a?y(d,di(ei,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function hi(a,b){var c,d;return z(function(e){return 1==e.h?(c=[],y(e,di(ei,b),2)):3!=e.h?(d=e.i,y(e,W(d,["databases"],{G:!0,mode:"readonly"},function(f){c.length=0;return Th(f.objectStore("databases"),{},function(g){a(g.cursor.value)&&c.push(g.cursor.value);return g.continue()})}),3)):e.return(c)})}
function ii(a){return hi(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
;var ji,ki=new function(){}(new function(){});
function li(){var a,b,c;return z(function(d){switch(d.h){case 1:a=ih();if(null===a||void 0===a?0:a.hasSucceededOnce)return d.return(!0);var e;if(e=mg)e=/WebKit\/([0-9]+)/.exec(Cb),e=!!(e&&600<=parseInt(e[1],10));e&&(e=/WebKit\/([0-9]+)/.exec(Cb),e=!(e&&602<=parseInt(e[1],10)));if(e||Wb)return d.return(!1);try{if(b=self,!(b.indexedDB&&b.IDBIndex&&b.IDBKeyRange&&b.IDBObjectStore))return d.return(!1)}catch(f){return d.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return d.return(!1);
sa(d,2);c={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return y(d,fi(c,ki),4);case 4:return y(d,gi("yt-idb-test-do-not-use",ki),5);case 5:return d.return(!0);case 2:return ua(d),d.return(!1)}})}
function mi(){if(void 0!==ji)return ji;kh=!0;return ji=li().then(function(a){kh=!1;var b,c;null!==(b=hh())&&void 0!==b&&b.h&&(b=ih(),b={hasSucceededOnce:(null===b||void 0===b?void 0:b.hasSucceededOnce)||a},null===(c=hh())||void 0===c?void 0:c.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0));return a})}
function ni(){return C("ytglobal.idbToken_")||void 0}
function oi(){var a=ni();return a?Promise.resolve(a):mi().then(function(b){(b=b?ki:void 0)&&E("ytglobal.idbToken_",b);return b})}
;new ue;function pi(a){if(!oh())throw a=new T("AUTH_INVALID",{dbName:a}),lh(a),a;var b=ph();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function qi(a,b,c,d){var e,f,g,h,k,l;return z(function(m){switch(m.h){case 1:return f=null!==(e=Error().stack)&&void 0!==e?e:"",y(m,oi(),2);case 2:g=m.i;if(!g)throw h=zh("openDbImpl",a,b),O("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),lh(h),h;qh(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:pi(a);sa(m,3);return y(m,fi(k,g),5);case 5:return y(m,Zh(k.actualName,b,d),6);case 6:return m.return(m.i);case 3:return l=ua(m),sa(m,7),y(m,gi(k.actualName,
g),9);case 9:ta(m,8);break;case 7:ua(m);case 8:throw l;}})}
function ri(a,b,c){c=void 0===c?{}:c;return qi(a,b,!1,c)}
function si(a,b,c){c=void 0===c?{}:c;return qi(a,b,!0,c)}
function ti(a,b){b=void 0===b?{}:b;var c,d;return z(function(e){if(1==e.h)return y(e,oi(),2);if(3!=e.h){c=e.i;if(!c)return e.return();qh(a);d=pi(a);return y(e,$h(d.actualName,b),3)}return y(e,gi(d.actualName,c),0)})}
function ui(a,b,c){a=a.map(function(d){return z(function(e){return 1==e.h?y(e,$h(d.actualName,b),2):y(e,gi(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function vi(){var a=void 0===a?{}:a;var b,c;return z(function(d){if(1==d.h)return y(d,oi(),2);if(3!=d.h){b=d.i;if(!b)return d.return();qh("LogsDatabaseV2");return y(d,ii(b),3)}c=d.i;return y(d,ui(c,a,b),0)})}
function wi(a,b){b=void 0===b?{}:b;var c;return z(function(d){if(1==d.h)return y(d,oi(),2);if(3!=d.h){c=d.i;if(!c)return d.return();qh(a);return y(d,$h(a,b),3)}return y(d,gi(a,c),0)})}
;function xi(a){var b,c,d,e,f,g,h,k;this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.aa=function(){};
this.now=Date.now;this.da=!1;this.Za=null!==(b=a.Za)&&void 0!==b?b:100;this.Xa=null!==(c=a.Xa)&&void 0!==c?c:1;this.Va=null!==(d=a.Va)&&void 0!==d?d:2592E6;this.Ua=null!==(e=a.Ua)&&void 0!==e?e:12E4;this.Wa=null!==(f=a.Wa)&&void 0!==f?f:5E3;this.s=null!==(g=a.s)&&void 0!==g?g:void 0;this.pa=!!a.pa;this.oa=null!==(h=a.oa)&&void 0!==h?h:.1;this.ta=null!==(k=a.ta)&&void 0!==k?k:10;a.handleError&&(this.handleError=a.handleError);a.aa&&(this.aa=a.aa);a.da&&(this.da=a.da);this.B=a.B;this.K=a.K;this.C=a.C;
this.F=a.F;this.R=a.R;this.Ea=a.Ea;this.Da=a.Da;this.s&&(!this.B||this.B("networkless_logging"))&&yi(this)}
function yi(a){return z(function(b){if(1==b.h)return!a.s||a.da?b.return():a.pa&&Math.random()<=a.oa?y(b,a.C.hb(a.s),2):b.o(2);zi(a);a.F.D()&&a.ja();a.F.X(a.Ea,a.ja.bind(a));a.F.X(a.Da,a.Ia.bind(a));a.h=!0;b.h=0})}
n=xi.prototype;n.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(this.s&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.C.set(d,this.s).then(function(e){d.id=e;c.F.D()&&Ai(c,d)}).catch(function(e){Ai(c,d);
Bi(c,e)})}else this.R(a,b)};
n.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(this.s&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.B&&this.B("nwl_skip_retry")&&(e.skipRetry=c);if(this.F.D()||this.B&&this.B("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return z(function(k){if(1==k.h)return y(k,d.C.set(e,d.s).catch(function(l){Bi(d,l)}),2);
f(g,h);k.h=0})}}this.R(a,b,e.skipRetry)}else this.C.set(e,this.s).catch(function(g){d.R(a,b,e.skipRetry);
Bi(d,g)})}else this.R(a,b,this.B&&this.B("nwl_skip_retry")&&c)};
n.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(this.s&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.C.Z(d.id,c.s):e=!0;c.F.V&&c.B&&c.B("vss_network_hint")&&c.F.V(!0);f(g,h)};
this.R(d.url,d.options);this.C.set(d,this.s).then(function(g){d.id=g;e&&c.C.Z(d.id,c.s)}).catch(function(g){Bi(c,g)})}else this.R(a,b)};
n.ja=function(){var a=this;if(!this.s)throw zh("throttleSend");this.i||(this.i=this.K.L(function(){var b;return z(function(c){if(1==c.h)return y(c,a.C.Oa("NEW",a.s),2);if(3!=c.h)return b=c.i,b?y(c,Ai(a,b),3):(a.Ia(),c.return());a.i&&(a.i=0,a.ja());c.h=0})},this.Za))};
n.Ia=function(){this.K.W(this.i);this.i=0};
function Ai(a,b){var c,d;return z(function(e){switch(e.h){case 1:if(!a.s)throw c=zh("immediateSend"),c;if(void 0===b.id){e.o(2);break}return y(e,a.C.qb(b.id,a.s),3);case 3:(d=e.i)?b=d:a.aa(Error("The request cannot be found in the database."));case 2:if(Ci(a,b,a.Va)){e.o(4);break}a.aa(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.o(5);break}return y(e,a.C.Z(b.id,a.s),5);case 5:return e.return();case 4:b.skipRetry||(b=Di(a,b));if(!b){e.o(0);break}if(!b.skipRetry||
void 0===b.id){e.o(8);break}return y(e,a.C.Z(b.id,a.s),8);case 8:a.R(b.url,b.options,!!b.skipRetry),e.h=0}})}
function Di(a,b){if(!a.s)throw zh("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g;return z(function(h){switch(h.h){case 1:g=Ei(f);if(!(a.B&&a.B("nwl_consider_error_code")&&g||a.B&&!a.B("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.ta)){h.o(2);break}if(!a.F.S){h.o(3);break}return y(h,a.F.S(),3);case 3:if(a.F.D()){h.o(2);break}c(e,f);if(!a.B||!a.B("nwl_consider_error_code")||void 0===(null===b||void 0===b?void 0:b.id)){h.o(6);break}return y(h,a.C.Fa(b.id,a.s,!1),6);case 6:return h.return();case 2:if(a.B&&a.B("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.ta)return h.return();a.potentialEsfErrorCounter++;if(void 0===(null===b||void 0===b?void 0:b.id)){h.o(8);break}return b.sendCount<a.Xa?y(h,a.C.Fa(b.id,a.s),12):y(h,a.C.Z(b.id,a.s),8);case 12:a.K.L(function(){a.F.D()&&a.ja()},a.Wa);
case 8:c(e,f),h.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){return z(function(g){if(1==g.h)return void 0===(null===b||void 0===b?void 0:b.id)?g.o(2):y(g,a.C.Z(b.id,a.s),2);a.F.V&&a.B&&a.B("vss_network_hint")&&a.F.V(!0);d(e,f);g.h=0})};
return b}
function Ci(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function zi(a){if(!a.s)throw zh("retryQueuedRequests");a.C.Oa("QUEUED",a.s).then(function(b){b&&!Ci(a,b,a.Ua)?a.K.L(function(){return z(function(c){if(1==c.h)return void 0===b.id?c.o(2):y(c,a.C.Fa(b.id,a.s),2);zi(a);c.h=0})}):a.F.D()&&a.ja()})}
function Bi(a,b){a.ab&&!a.F.D()?a.ab(b):a.handleError(b)}
function Ei(a){var b;return(a=null===(b=null===a||void 0===a?void 0:a.error)||void 0===b?void 0:b.code)&&400<=a&&599>=a?!1:!0}
;var Fi=C("ytPubsub2Pubsub2Instance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.ka;L.prototype.publish=L.prototype.ba;L.prototype.clear=L.prototype.clear;E("ytPubsub2Pubsub2Instance",Fi);E("ytPubsub2Pubsub2SubscribedKeys",C("ytPubsub2Pubsub2SubscribedKeys")||{});E("ytPubsub2Pubsub2TopicToKeys",C("ytPubsub2Pubsub2TopicToKeys")||{});E("ytPubsub2Pubsub2IsAsync",C("ytPubsub2Pubsub2IsAsync")||{});E("ytPubsub2Pubsub2SkipSubKey",null);function Gi(a,b){bi.call(this,a,b);this.options=b;qh(a)}
w(Gi,bi);function Hi(a,b){var c;return function(){c||(c=new Gi(a,b));return c}}
Gi.prototype.j=function(a,b,c){c=void 0===c?{}:c;return(this.options.Ga?si:ri)(a,b,Object.assign({},c))};
Gi.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Ga?wi:ti)(this.name,a)};
function Ii(a,b){return Hi(a,b)}
;var Ji;
function Ki(){if(Ji)return Ji();var a={};Ji=Ii("LogsDatabaseV2",{ha:(a.LogsRequestsStore={xa:2},a),Ga:!1,upgrade:function(b,c,d){c(2)&&Lh(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),d.h.createIndex("newRequestV2",["status","interface","timestamp"],{unique:!1}));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return Ji()}
;function Li(a){return di(Ki(),a)}
function Mi(a,b){var c,d,e,f;return z(function(g){if(1==g.h)return c={startTime:P(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},y(g,Li(b),2);if(3!=g.h)return d=g.i,e=Object.assign(Object.assign({},a),{options:JSON.parse(JSON.stringify(a.options)),interface:N("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),y(g,Nh(d,e),3);f=g.i;c.ub=P();Ni(c);return g.return(f)})}
function Oi(a,b){var c,d,e,f,g,h,k;return z(function(l){if(1==l.h)return c={startTime:P(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},y(l,Li(b),2);if(3!=l.h)return d=l.i,e=N("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,P()],h=IDBKeyRange.bound(f,g),k=void 0,y(l,W(d,["LogsRequestsStore"],{mode:"readwrite",G:!0},function(m){return Wh(m.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(p){p.cursor.value&&(k=p.cursor.value,"NEW"===a&&(k.status="QUEUED",
p.update(k)))})}),3);
c.ub=P();Ni(c);return l.return(k)})}
function Pi(a,b){var c;return z(function(d){if(1==d.h)return y(d,Li(b),2);c=d.i;return d.return(W(c,["LogsRequestsStore"],{mode:"readwrite",G:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",V(f.h.put(g,void 0)).then(function(){return g})})}))})}
function Qi(a,b,c){c=void 0===c?!0:c;var d;return z(function(e){if(1==e.h)return y(e,Li(b),2);d=e.i;return e.return(W(d,["LogsRequestsStore"],{mode:"readwrite",G:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",c&&(h.sendCount+=1),V(g.h.put(h,void 0)).then(function(){return h})):U.resolve(void 0)})}))})}
function Ri(a,b){var c;return z(function(d){if(1==d.h)return y(d,Li(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function Si(a){var b,c;return z(function(d){if(1==d.h)return y(d,Li(a),2);b=d.i;c=P()-2592E6;return y(d,W(b,["LogsRequestsStore"],{mode:"readwrite",G:!0},function(e){return Th(e.objectStore("LogsRequestsStore"),{},function(f){if(f.cursor.value.timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Ti(){z(function(a){return y(a,vi(),0)})}
function Ni(a){if(!O("nwl_csi_killswitch")&&.01>=Math.random()){var b=C("ytPubsub2Pubsub2Instance");b&&b.publish.call(b,"nwl_transaction_latency_payload".toString(),"nwl_transaction_latency_payload",a)}}
;var Ui={},Vi=Ii("ServiceWorkerLogsDatabase",{ha:(Ui.SWHealthLog={xa:1},Ui),Ga:!0,upgrade:function(a,b){b(1)&&Lh(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function Wi(a){return di(Vi(),a)}
function Xi(a){var b,c;z(function(d){if(1==d.h)return y(d,Wi(a),2);b=d.i;c=P()-2592E6;return y(d,W(b,["SWHealthLog"],{mode:"readwrite",G:!0},function(e){return Th(e.objectStore("SWHealthLog"),{},function(f){if(f.cursor.value.timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Yi(a){var b;return z(function(c){if(1==c.h)return y(c,Wi(a),2);b=c.i;return y(c,b.clear("SWHealthLog"),0)})}
;var $i;function aj(){$i||($i=new bh("yt.offline"));return $i}
function bj(a){if(O("offline_error_handling")){var b=aj().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);aj().set("errors",b,2592E3,!0)}}
function cj(){if(O("offline_error_handling")){var a=aj().get("errors",!0);if(a){for(var b in a)if(a[b]){var c=new nh(b,"sent via offline_errors");c.name=a[b].name;c.stack=a[b].stack;c.level=a[b].level;qf(c)}aj().set("errors",{},2592E3,!0)}}}
;var dj=Mf("network_polling_interval",3E4);function X(){I.call(this);this.O=0;this.la=this.m=!1;this.j=this.za();O("use_shared_nsm")?(Id.h||(Id.h=new Id(Vf)),this.i=Id.h):(ej(this),fj(this))}
w(X,I);function gj(){if(!X.h){var a=C("yt.networkStatusManager.instance")||new X;E("yt.networkStatusManager.instance",a);X.h=a}return X.h}
n=X.prototype;n.D=function(){var a;return O("use_shared_nsm")&&this.i?null===(a=this.i)||void 0===a?void 0:a.D():this.j};
n.V=function(a){var b;O("use_shared_nsm")&&this.i?null===(b=this.i)||void 0===b?void 0:b.i=a:a!==this.j&&(this.j=a)};
n.rb=function(a){!O("use_shared_nsm")&&(this.m=!0,void 0===a?0:a)&&(this.O||hj(this))};
n.za=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
n.jb=function(){this.la=!0};
n.X=function(a,b){return O("use_shared_nsm")&&this.i?this.i.X(a,b):I.prototype.X.call(this,a,b)};
function fj(a){window.addEventListener("online",function(){return z(function(b){if(1==b.h)return y(b,a.S(),2);a.la&&cj();b.h=0})})}
function ej(a){window.addEventListener("offline",function(){return z(function(b){return y(b,a.S(),0)})})}
function hj(a){a.O=Qf(function(){return z(function(b){if(1==b.h)return a.j?a.za()||!a.m?b.o(3):y(b,a.S(),3):y(b,a.S(),3);hj(a);b.h=0})},dj)}
n.S=function(a){var b=this;return O("use_shared_nsm")&&this.i?Jd(this.i,a):this.u?this.u:this.u=new Promise(function(c){var d,e,f;return z(function(g){switch(g.h){case 1:return d=window.AbortController?new window.AbortController:void 0,e=null===d||void 0===d?void 0:d.signal,f=!1,sa(g,2,3),d&&(b.A=Vf.L(function(){d.abort()},a||2E4)),y(g,fetch("/generate_204",{method:"HEAD",
signal:e}),5);case 5:f=!0;case 3:va(g);b.u=void 0;b.A&&Vf.W(b.A);f!==b.j&&(b.j=f,b.j&&b.m?Gd(b,"ytnetworkstatus-online"):b.m&&Gd(b,"ytnetworkstatus-offline"));c(f);wa(g);break;case 2:ua(g),f=!1,g.o(3)}})})};
X.prototype.sendNetworkCheckRequest=X.prototype.S;X.prototype.listen=X.prototype.X;X.prototype.enableErrorFlushing=X.prototype.jb;X.prototype.getWindowStatus=X.prototype.za;X.prototype.monitorNetworkStatusChange=X.prototype.rb;X.prototype.networkStatusHint=X.prototype.V;X.prototype.isNetworkAvailable=X.prototype.D;X.getInstance=gj;function ij(a){a=void 0===a?{}:a;I.call(this);var b=this;this.j=this.O=0;this.m="ytnetworkstatus-offline";this.u="ytnetworkstatus-online";O("use_shared_nsm")&&(this.m="networkstatus-offline",this.u="networkstatus-online");this.i=gj();var c=C("yt.networkStatusManager.instance.monitorNetworkStatusChange").bind(this.i);c&&c(a.La);a.ra&&!O("use_shared_nsm")&&(c=C("yt.networkStatusManager.instance.enableErrorFlushing").bind(this.i))&&c();if(c=C("yt.networkStatusManager.instance.listen").bind(this.i))a.va?
(this.va=a.va,c(this.u,function(){jj(b,"publicytnetworkstatus-online");O("use_shared_nsm")&&a.ra&&cj()}),c(this.m,function(){jj(b,"publicytnetworkstatus-offline")})):(c(this.u,function(){Gd(b,"publicytnetworkstatus-online");
O("use_shared_nsm")&&a.ra&&cj()}),c(this.m,function(){Gd(b,"publicytnetworkstatus-offline")}))}
w(ij,I);ij.prototype.D=function(){var a=C("yt.networkStatusManager.instance.isNetworkAvailable").bind(this.i);return a?a():!0};
ij.prototype.V=function(a){var b=C("yt.networkStatusManager.instance.networkStatusHint").bind(this.i);b&&b(a)};
ij.prototype.S=function(a){var b=this,c;return z(function(d){return(c=C("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.i))?d.return(c(a)):d.return(!0)})};
function jj(a,b){a.va?a.j?(Vf.W(a.O),a.O=Vf.L(function(){a.A!==b&&(Gd(a,b),a.A=b,a.j=P())},a.va-(P()-a.j))):(Gd(a,b),a.A=b,a.j=P()):Gd(a,b)}
;var kj;function lj(){xi.call(this,{C:{hb:Si,Z:Ri,Oa:Oi,qb:Pi,Fa:Qi,set:Mi},F:mj(),handleError:qf,aa:rf,R:nj,now:P,ab:bj,K:Uf(),Ea:"publicytnetworkstatus-online",Da:"publicytnetworkstatus-offline",pa:!0,oa:.1,ta:Mf("potential_esf_error_limit",10),B:O,da:!oh()});this.j=new ue;this.pa&&Math.random()<=this.oa&&this.s&&Xi(this.s);O("networkless_immediately_drop_sw_health_store")&&oj(this);O("networkless_immediately_drop_all_requests")&&Ti();wi("LogsDatabaseV2")}
w(lj,xi);function pj(){var a=C("yt.networklessRequestController.instance");a||(a=new lj,E("yt.networklessRequestController.instance",a),O("networkless_logging")&&oi().then(function(b){return z(function(c){if(1==c.h)return a.s=b,y(c,yi(a),2);a.j.resolve();c.h=0})}));
return a}
lj.prototype.writeThenSend=function(a,b){b||(b={});oh()||(this.h=!1);xi.prototype.writeThenSend.call(this,a,b)};
lj.prototype.sendThenWrite=function(a,b,c){b||(b={});oh()||(this.h=!1);xi.prototype.sendThenWrite.call(this,a,b,c)};
lj.prototype.sendAndWrite=function(a,b){b||(b={});oh()||(this.h=!1);xi.prototype.sendAndWrite.call(this,a,b)};
function oj(a){var b;z(function(c){if(!a.s)throw b=zh("clearSWHealthLogsDb"),b;return c.return(Yi(a.s).catch(function(d){a.handleError(d)}))})}
function nj(a,b,c){var d;if(null===(d=b.postParams)||void 0===d?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(P());c&&0===Object.keys(b).length?qg(a):eg(a,b)}
function mj(){kj||(kj=new ij({ra:!0,La:!0}));return kj}
;var qj=0,rj=0,sj,tj=B.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1,potentialEsfErrorCounter:rj};E("ytNetworklessLoggingInitializationOptions",tj);function uj(a,b){function c(d){var e=vj().D();if(!wj()||!d||e&&O("vss_networkless_bypass_write"))xj(a,b);else{var f={url:a,options:b,timestamp:P(),status:"NEW",sendCount:0};Mi(f,d).then(function(g){f.id=g;vj().D()&&yj(f)}).catch(function(g){yj(f);
vj().D()?qf(g):bj(g)})}}
b=void 0===b?{}:b;O("skip_is_supported_killswitch")?oi().then(function(d){c(d)}):c(ni())}
function zj(a,b){function c(d){if(wj()&&d){var e={url:a,options:b,timestamp:P(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(h,k){void 0!==e.id?Ri(e.id,d):f=!0;O("vss_network_hint")&&vj().V(!0);g(h,k)};
xj(e.url,e.options);Mi(e,d).then(function(h){e.id=h;f&&Ri(e.id,d)}).catch(function(h){vj().D()?qf(h):bj(h)})}else xj(a,b)}
b=void 0===b?{}:b;O("skip_is_supported_killswitch")?oi().then(function(d){c(d)}):c(ni())}
function Aj(){var a=ni();if(!a)throw zh("throttleSend");qj||(qj=Vf.L(function(){var b;return z(function(c){if(1==c.h)return y(c,Oi("NEW",a),2);if(3!=c.h)return b=c.i,b?y(c,yj(b),3):(Vf.W(qj),qj=0,c.return());qj&&(qj=0,Aj());c.h=0})},100))}
function yj(a){var b,c,d;return z(function(e){switch(e.h){case 1:b=ni();if(!b)throw c=zh("immediateSend"),c;if(void 0===a.id){e.o(2);break}return y(e,Pi(a.id,b),3);case 3:(d=e.i)?a=d:rf(Error("The request cannot be found in the database."));case 2:var f=a.timestamp;if(!(2592E6<=P()-f)){e.o(4);break}rf(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){e.o(5);break}return y(e,Ri(a.id,b),5);case 5:return e.return();case 4:a.skipRetry||(a=Bj(a));f=a;var g,h;if(null===
(h=null===(g=null===f||void 0===f?void 0:f.options)||void 0===g?void 0:g.postParams)||void 0===h?0:h.requestTimeMs)f.options.postParams.requestTimeMs=Math.round(P());a=f;if(!a){e.o(0);break}if(!a.skipRetry||void 0===a.id){e.o(8);break}return y(e,Ri(a.id,b),8);case 8:xj(a.url,a.options,!!a.skipRetry),e.h=0}})}
function Bj(a){var b=ni();if(!b)throw zh("updateRequestHandlers");var c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){var g;return z(function(h){switch(h.h){case 1:g=Ei(f);if(!(O("nwl_consider_error_code")&&g||!O("nwl_consider_error_code")&&Cj()<=Mf("potential_esf_error_limit",10))){h.o(2);break}return y(h,vj().S(),3);case 3:if(vj().D()){h.o(2);break}c(e,f);if(!O("nwl_consider_error_code")||void 0===(null===a||void 0===a?void 0:a.id)){h.o(5);break}return y(h,Qi(a.id,b,!1),5);case 5:return h.return();case 2:if(O("nwl_consider_error_code")&&!g&&Cj()>Mf("potential_esf_error_limit",10))return h.return();
C("ytNetworklessLoggingInitializationOptions")&&tj.potentialEsfErrorCounter++;rj++;if(void 0===(null===a||void 0===a?void 0:a.id)){h.o(7);break}return 1>a.sendCount?y(h,Qi(a.id,b),11):y(h,Ri(a.id,b),7);case 11:Vf.L(function(){vj().D()&&Aj()},5E3);
case 7:c(e,f),h.h=0}})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){return z(function(g){if(1==g.h)return void 0===(null===a||void 0===a?void 0:a.id)?g.o(2):y(g,Ri(a.id,b),2);O("vss_network_hint")&&vj().V(!0);d(e,f);g.h=0})};
return a}
function vj(){if(O("use_new_nwl"))return mj();sj||(sj=new ij({ra:!0,La:!0}));return sj}
function xj(a,b,c){c&&0===Object.keys(b).length?qg(a):eg(a,b)}
function wj(){return C("ytNetworklessLoggingInitializationOptions")?tj.isNwlInitialized:!1}
function Cj(){return C("ytNetworklessLoggingInitializationOptions")?tj.potentialEsfErrorCounter:rj}
;function Dj(a){var b=this;this.config_=null;a?this.config_=a:Zg()&&(this.config_=Pg());Qf(function(){gh(b)},5E3)}
Dj.prototype.isReady=function(){!this.config_&&Zg()&&(this.config_=Pg());return!!this.config_};
function Sg(a,b,c,d){function e(v){v=void 0===v?!1:v;var x;if(d.retry&&"www.youtube-nocookie.com"!=h&&(v||O("skip_ls_gel_retry")||(x=eh(b,c,l,k)),x)){var A=g.onSuccess,J=g.onFetchSuccess;g.onSuccess=function(K,M){fh(x);A(K,M)};
c.onFetchSuccess=function(K,M){fh(x);J(K,M)}}try{v&&d.retry&&!d.Sa.bypassNetworkless?(g.method="POST",d.Sa.writeThenSend?O("use_new_nwl")?pj().writeThenSend(q,g):uj(q,g):O("use_new_nwl")?pj().sendAndWrite(q,g):zj(q,g)):(g.method="POST",g.postParams||(g.postParams={}),eg(q,g))}catch(K){if("InvalidAccessError"==K.name)x&&(fh(x),x=0),rf(Error("An extension is blocking network request."));
else throw K;}x&&Qf(function(){gh(a)},5E3)}
!N("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&rf(new nh("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new nh("innertube xhrclient not ready",b,c,d);qf(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(v,x){if(d.onSuccess)d.onSuccess(x)},
onFetchSuccess:function(v){if(d.onSuccess)d.onSuccess(v)},
onError:function(v,x){if(d.onError)d.onError(x)},
onFetchError:function(v){if(d.onError)d.onError(v)},
timeout:d.timeout,withCredentials:!0};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.nb)&&(h=f);var k=a.config_.pb||!1,l=$g(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&(g.headers["x-origin"]=window.location.origin);var m="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,p={alt:"json"},u=a.config_.ob&&f;O("omit_innertube_api_key_for_bearer_auth_header")&&(u=u&&f.startsWith("Bearer"));u||(p.key=a.config_.innertubeApiKey);var q=Jf(""+
h+m,p||{},!0);O("use_new_nwl")||wj()?mi().then(function(v){e(v)}):e(!1)}
;function Ej(a,b){var c=void 0===c?{}:c;var d=Dj;N("ytLoggingEventsDefaultDisabled",!1)&&Dj==Dj&&(d=null);a:{c=void 0===c?{}:c;if(O("lr_drop_other_and_business_payloads")){if(Of[a]||Nf[a])break a}else if(O("lr_drop_other_payloads")&&Of[a])break a;var e={},f=Math.round(c.timestamp||P());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=C("_lact",window);a=null==a?-1:Math.max(Date.now()-a,0);e.context={lastActivityMs:String(c.timestamp||!isFinite(a)?-1:a)};O("log_sequence_info_on_gel_web")&&c.Ya&&
(a=e.context,b=c.Ya,Ug[b]=b in Ug?Ug[b]+1:0,a.sequence={index:Ug[b],groupKey:b},c.Kb&&delete Ug[c.Ya]);(c.Rb?Mg:Ig)({endpoint:"log_event",payload:e,ca:c.ca,ya:c.ya},d)}}
;var Fj=[{Ca:function(a){return"Cannot read property '"+a.key+"'"},
sa:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Ca:function(a){return"Cannot call '"+a.key+"'"},
sa:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Ca:function(a){return a.key+" is not defined"},
sa:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Hj={U:[],T:[{fb:Gj,weight:500}]};function Gj(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Ij(){this.T=[];this.U=[]}
var Jj;function Kj(){if(!Jj){var a=Jj=new Ij;a.U.length=0;a.T.length=0;Hj.U&&a.U.push.apply(a.U,Hj.U);Hj.T&&a.T.push.apply(a.T,Hj.T)}return Jj}
;var Lj=new L;function Mj(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Nj(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Nj(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Nj(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Nj(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Oj(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Pj(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=Mj(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?Pj(e+".ve",f,g,h):0;d+=g;d+=Pj(e,a[e],b,c);if(500<d)break}}else c[b]=Qj(a),d+=c[b].length;else c[b]=Qj(a),d+=c[b].length;return d}
function Pj(a,b,c,d){c+="."+a;a=Qj(b);d[c]=a;return c.length+a.length}
function Qj(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;var Rj=new Set,Sj=0,Tj=0,Uj=0,Vj=[],Wj=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];var Xj={};function Yj(a){return Xj[a]||(Xj[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Zj={},ak=[],Me=new L,bk={};function ck(){for(var a=t(ak),b=a.next();!b.done;b=a.next())b=b.value,b()}
function dk(a,b){var c;"yt:"===a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[Yj(b)]:a.getAttribute("data-"+b):null;return c}
function ek(a){Me.ba.apply(Me,arguments)}
;function fk(a){this.h=a||{};a=[this.h,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.toString().replace("http://","https://"))}
function Y(a,b){a=[a.h,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(void 0!==d)return d}return null}
function gk(a,b,c){hk||(hk={},zf(window,"message",function(d){a:{if(d.origin===Y(a,"host")){try{var e=JSON.parse(d.data)}catch(f){e=void 0;break a}if(d=hk[e.id])d.u=!0,d.u&&(G(d.v,d.sendMessage,d),d.v.length=0),d.Ha(e)}e=void 0}return e}));
hk[c]=b}
var hk=null;function ik(a,b,c){this.m=this.h=this.i=null;this.j=0;this.u=!1;this.v=[];this.l=null;this.H={};if(!a)throw Error("YouTube player element ID required.");this.id=La(this);this.A=c;this.setup(a,b)}
n=ik.prototype;n.setSize=function(a,b){this.h.width=a.toString();this.h.height=b.toString();return this};
n.getIframe=function(){return this.h};
n.Ha=function(a){jk(this,a.event,a)};
n.addEventListener=function(a,b){var c=b;"string"===typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.l.subscribe(a,c);kk(this,a);return this};
function lk(a,b){b=b.split(".");if(2===b.length){var c=b[1];a.A===b[0]&&kk(a,c)}}
n.destroy=function(){this.h&&this.h.id&&(Zj[this.h.id]=null);(0,ad)(this.l);if(this.m){var a=this.h,b=a.parentNode;b&&b.replaceChild(this.m,a)}else(a=this.h)&&a.parentNode&&a.parentNode.removeChild(a);hk&&(hk[this.id]=null);this.i=null;a=this.h;for(var c in db)db[c][0]==a&&xf(c);this.m=this.h=null};
n.Ka=function(){return{}};
function mk(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.u?a.sendMessage(b):a.v.push(b)}
function jk(a,b,c){a.l.l||(c={target:a,data:c},a.l.ba(b,c),ek(a.A+"."+b,c))}
function nk(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,e=b.length;d<e;d++){var f=b[d].value;null!=f&&""!==f&&"null"!==f&&c.setAttribute(b[d].name,f)}c.setAttribute("frameBorder","0");c.setAttribute("allowfullscreen","1");c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");c.setAttribute("title","YouTube "+Y(a.i,"title"));(b=Y(a.i,"width"))&&c.setAttribute("width",b.toString());(b=Y(a.i,"height"))&&c.setAttribute("height",
b.toString());var g=a.Ka();g.enablejsapi=window.postMessage?1:0;window.location.host&&(g.origin=window.location.protocol+"//"+window.location.host);g.widgetid=a.id;window.location.href&&G(["debugjs","debugcss"],function(h){var k=Qb(window.location.href,h);null!==k&&(g[h]=k)});
window.yt_embedsTokenValue&&(g.embedsTokenValue=encodeURIComponent(window.yt_embedsTokenValue),delete window.yt_embedsTokenValue);c.src=Y(a.i,"host")+("/embed/"+Y(a.i,"videoId"))+"?"+Ob(g);return c}
n.Ta=function(){this.h&&this.h.contentWindow?this.sendMessage({event:"listening"}):window.clearInterval(this.j)};
function ok(a){gk(a.i,a,a.id);a.j=Bf(a.Ta.bind(a));zf(a.h,"load",function(){window.clearInterval(a.j);a.j=Bf(a.Ta.bind(a))})}
n.setup=function(a,b){var c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"===a.tagName.toLowerCase(),b.host||(b.host=c?Mb(a.src):"https://www.youtube.com"),this.i=new fk(b),c||(b=nk(this,a),this.m=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.h=a,this.h.id||(this.h.id="widget"+La(this.h)),Zj[this.h.id]=this,window.postMessage){this.l=new L;ok(this);b=Y(this.i,"events");for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in bk)bk.hasOwnProperty(e)&&
lk(this,e)}};
function kk(a,b){a.H[b]||(a.H[b]=!0,mk(a,"addEventListener",[b]))}
n.sendMessage=function(a){a.id=this.id;a.channel="widget";a=te(a);var b=[Mb(this.h.src||"").replace("http:","https:")];if(this.h.contentWindow)for(var c=0;c<b.length;c++)try{this.h.contentWindow.postMessage(a,b[c])}catch(A){if(A.name&&"SyntaxError"===A.name){if(!(A.message&&0<A.message.indexOf("target origin ''"))){var d=void 0,e=A;d=void 0===d?{}:d;d.name=N("INNERTUBE_CONTEXT_CLIENT_NAME",1);d.version=N("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);var f=d||{};d="WARNING";d=void 0===d?"ERROR":d;if(e){e.hasOwnProperty("level")&&
e.level&&(d=e.level);if(O("console_log_js_exceptions")){var g=e,h=[];h.push("Name: "+g.name);h.push("Message: "+g.message);g.hasOwnProperty("params")&&h.push("Error Params: "+JSON.stringify(g.params));g.hasOwnProperty("args")&&h.push("Error args: "+JSON.stringify(g.args));h.push("File name: "+g.fileName);h.push("Stacktrace: "+g.stack);window.console.log(h.join("\n"),g)}if(!(5<=Sj)){g=void 0;var k=f,l=dd(e);f=l.message||"Unknown Error";h=l.name||"UnknownError";var m=l.stack||e.i||"Not available";if(m.startsWith(h+
": "+f)){var p=m.split("\n");p.shift();m=p.join("\n")}p=l.lineNumber||"Not available";l=l.fileName||"Not available";var u=0;if(e.hasOwnProperty("args")&&e.args&&e.args.length)for(g=0;g<e.args.length&&!(u=Oj(e.args[g],"params."+g,k,u),500<=u);g++);else if(e.hasOwnProperty("params")&&e.params){var q=e.params;if("object"===typeof e.params)for(g in q){if(q[g]){var v="params."+g,x=Qj(q[g]);k[v]=x;u+=v.length+x.length;if(500<u)break}}else k.params=Qj(q)}if(Vj.length)for(g=0;g<Vj.length&&!(u=Oj(Vj[g],"params.context."+
g,k,u),500<=u);g++);navigator.vendor&&!k.hasOwnProperty("vendor")&&(k["device.vendor"]=navigator.vendor);g={message:f,name:h,lineNumber:p,fileName:l,stack:m,params:k,sampleWeight:1};f=Number(e.columnNumber);isNaN(f)||(g.lineNumber=g.lineNumber+":"+f);if("IGNORED"===e.level)e=0;else a:{e=Kj();f=t(e.U);for(h=f.next();!h.done;h=f.next())if(h=h.value,g.message&&g.message.match(h.Ob)){e=h.weight;break a}e=t(e.T);for(f=e.next();!f.done;f=e.next())if(f=f.value,f.fb(g)){e=f.weight;break a}e=1}g.sampleWeight=
e;e=g;g=t(Fj);for(f=g.next();!f.done;f=g.next())if(f=f.value,f.sa[e.name])for(p=t(f.sa[e.name]),h=p.next();!h.done;h=p.next())if(l=h.value,h=e.message.match(l.regexp)){e.params["params.error.original"]=h[0];p=l.groups;l={};for(m=0;m<p.length;m++)l[p[m]]=h[m+1],e.params["params.error."+p[m]]=h[m+1];e.message=f.Ca(l);break}e.params||(e.params={});g=Kj();e.params["params.errorServiceSignature"]="msg="+g.U.length+"&cb="+g.T.length;e.params["params.serviceWorker"]="false";B.document&&B.document.querySelectorAll&&
(e.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));lb("sample").constructor!==jb&&(e.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(e);if(0!==e.sampleWeight&&!Rj.has(e.message)){"ERROR"===d?(Lj.ba("handleError",e),O("record_app_crashed_web")&&0===Uj&&1===e.sampleWeight&&(Uj++,Ej("appCrashed",{appCrashType:"APP_CRASH_TYPE_BREAKPAD"})),Tj++):"WARNING"===d&&Lj.ba("handleWarning",e);if(O("kevlar_gel_error_routing")){g=
d;h=e;b:{f=t(Wj);for(p=f.next();!p.done;p=f.next())if(ng(p.value.toLowerCase())){f=!0;break b}f=!1}if(f)f=void 0;else{p={stackTrace:h.stack};h.fileName&&(p.filename=h.fileName);f=h.lineNumber&&h.lineNumber.split?h.lineNumber.split(":"):[];0!==f.length&&(1!==f.length||isNaN(Number(f[0]))?2!==f.length||isNaN(Number(f[0]))||isNaN(Number(f[1]))||(p.lineNumber=Number(f[0]),p.columnNumber=Number(f[1])):p.lineNumber=Number(f[0]));f={level:"ERROR_LEVEL_UNKNOWN",message:h.message,errorClassName:h.name,sampleWeight:h.sampleWeight};
"ERROR"===g?f.level="ERROR_LEVEL_ERROR":"WARNING"===g&&(f.level="ERROR_LEVEL_WARNNING");p={isObfuscated:!0,browserStackInfo:p};l={pageUrl:window.location.href,kvPairs:[]};N("FEXP_EXPERIMENTS")&&(l.experimentIds=N("FEXP_EXPERIMENTS"));m=mf();k=(k=hf.EXPERIMENT_FLAGS)?k.web_disable_gel_stp_ecatcher_killswitch:void 0;if(!k&&m)for(u=t(Object.keys(m)),k=u.next();!k.done;k=u.next())k=k.value,l.kvPairs.push({key:k,value:String(m[k])});if(h=h.params)for(m=t(Object.keys(h)),k=m.next();!k.done;k=m.next())k=
k.value,l.kvPairs.push({key:"client."+k,value:String(h[k])});h=N("SERVER_NAME",void 0);m=N("SERVER_VERSION",void 0);h&&m&&(l.kvPairs.push({key:"server.name",value:h}),l.kvPairs.push({key:"server.version",value:m}));f={errorMetadata:l,stackTrace:p,logMessage:f}}f&&(Ej("clientError",f),("ERROR"===g||O("errors_flush_gel_always_killswitch"))&&Kg())}if(!O("suppress_error_204_logging")){f=e;g=f.params||{};d={urlParams:{a:"logerror",t:"jserror",type:f.name,msg:f.message.substr(0,250),line:f.lineNumber,level:d,
"client.name":g.name},postParams:{url:N("PAGE_NAME",window.location.href),file:f.fileName},method:"POST"};g.version&&(d["client.version"]=g.version);if(d.postParams){f.stack&&(d.postParams.stack=f.stack);f=t(Object.keys(g));for(h=f.next();!h.done;h=f.next())h=h.value,d.postParams["client."+h]=g[h];if(g=mf())for(f=t(Object.keys(g)),h=f.next();!h.done;h=f.next())h=h.value,d.postParams[h]=g[h];g=N("SERVER_NAME",void 0);f=N("SERVER_VERSION",void 0);g&&f&&(d.postParams["server.name"]=g,d.postParams["server.version"]=
f)}eg(N("ECATCHER_REPORT_HOST","")+"/error_204",d)}try{Rj.add(e.message)}catch(J){}Sj++}}}}}else throw A;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function pk(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function qk(a){return 0===a.search("get")||0===a.search("is")}
;function rk(a,b){ik.call(this,a,Object.assign({title:"video player",videoId:"",width:640,height:360},b||{}),"player");this.M={};this.playerInfo={}}
w(rk,ik);n=rk.prototype;n.Ka=function(){var a=Y(this.i,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!==window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=Y(this.i,"embedConfig")){if(D(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
n.Ha=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(D(a))for(var c in a)a.hasOwnProperty(c)&&(this.M[c]=a[c]);break;case "infoDelivery":sk(this,a);break;case "initialDelivery":D(a)&&(window.clearInterval(this.j),this.playerInfo={},this.M={},tk(this,a.apiInterface),sk(this,a));break;default:jk(this,b,a)}};
function sk(a,b){if(D(b))for(var c in b)b.hasOwnProperty(c)&&(a.playerInfo[c]=b[c])}
function tk(a,b){G(b,function(c){this[c]||("getCurrentTime"===c?this[c]=function(){var d=this.playerInfo.currentTime;if(1===this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:pk(c)?this[c]=function(){this.playerInfo={};
this.M={};mk(this,c,arguments);return this}:qk(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){mk(this,c,arguments);
return this})},a)}
n.getVideoEmbedCode=function(){var a=Y(this.i,"host")+("/embed/"+Y(this.i,"videoId")),b=Number(Y(this.i,"width")),c=Number(Y(this.i,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);a=nb(a,void 0);return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'};
n.getOptions=function(a){return this.M.namespaces?a?this.M[a]?this.M[a].options||[]:[]:this.M.namespaces||[]:[]};
n.getOption=function(a,b){if(this.M.namespaces&&a&&b&&this.M[a])return this.M[a][b]};
function uk(a){if("iframe"!==a.tagName.toLowerCase()){var b=dk(a,"videoid");b&&(b={videoId:b,width:dk(a,"width"),height:dk(a,"height")},new rk(a,b))}}
;E("YT.PlayerState.UNSTARTED",-1);E("YT.PlayerState.ENDED",0);E("YT.PlayerState.PLAYING",1);E("YT.PlayerState.PAUSED",2);E("YT.PlayerState.BUFFERING",3);E("YT.PlayerState.CUED",5);E("YT.get",function(a){return Zj[a]});
E("YT.scan",ck);E("YT.subscribe",function(a,b,c){Me.subscribe(a,b,c);bk[a]=!0;for(var d in Zj)Zj.hasOwnProperty(d)&&lk(Zj[d],a)});
E("YT.unsubscribe",function(a,b,c){Le(a,b,c)});
E("YT.Player",rk);ik.prototype.destroy=ik.prototype.destroy;ik.prototype.setSize=ik.prototype.setSize;ik.prototype.getIframe=ik.prototype.getIframe;ik.prototype.addEventListener=ik.prototype.addEventListener;rk.prototype.getVideoEmbedCode=rk.prototype.getVideoEmbedCode;rk.prototype.getOptions=rk.prototype.getOptions;rk.prototype.getOption=rk.prototype.getOption;
ak.push(function(a){var b=a;b||(b=document);a=Za(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var f={};for(c=d=0;b=e[c];c++){var g=b.className,h;if(h="function"==typeof g.split)h=0<=Va(g.split(/\s+/),
"yt-player");h&&(f[d++]=b)}f.length=d;b=f}}b=Za(b);G(Ya(a,b),uk)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||ck();var vk=B.onYTReady;vk&&vk();var wk=B.onYouTubeIframeAPIReady;wk&&wk();var xk=B.onYouTubePlayerAPIReady;xk&&xk();}).call(this);
