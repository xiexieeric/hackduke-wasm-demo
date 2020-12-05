(()=>{var t={824:(t,e)=>{"use strict";const r="undefined"!=typeof BigUint64Array,n=Symbol(),o=new TextDecoder("utf-16le");function a(t,e){const r=new Uint32Array(t)[e+-4>>>2]>>>1,n=new Uint16Array(t,e,r);return r<=32?String.fromCharCode.apply(String,n):o.decode(n)}function i(t){const e={};function r(t,e){return t?a(t.buffer,e):"<yet unknown>"}const n=t.env=t.env||{};return n.abort=n.abort||function(t,o,a,i){const s=e.memory||n.memory;throw Error(`abort: ${r(s,t)} at ${r(s,o)}:${a}:${i}`)},n.trace=n.trace||function(t,o,...a){const i=e.memory||n.memory;console.log(`trace: ${r(i,t)}${o?" ":""}${a.slice(0,o).join(", ")}`)},n.seed=n.seed||Date.now,t.Math=t.Math||Math,t.Date=t.Date||Date,e}function s(t,e){const n=e.exports,o=n.memory,i=n.table,s=n.__alloc,c=n.__retain,u=n.__rtti_base||-1;function l(t){const e=function(t){const e=new Uint32Array(o.buffer);if((t>>>=0)>=e[u>>>2])throw Error(`invalid id: ${t}`);return e[(u+4>>>2)+2*t]}(t);if(!(7&e))throw Error(`not an array: ${t}, flags=${e}`);return e}function f(t){const e=new Uint32Array(o.buffer);if((t>>>=0)>=e[u>>>2])throw Error(`invalid id: ${t}`);return e[(u+4>>>2)+2*t+1]}function g(t){return 31-Math.clz32(t>>>6&31)}function p(t,e,r){const n=o.buffer;if(r)switch(t){case 2:return new Float32Array(n);case 3:return new Float64Array(n)}else switch(t){case 0:return new(e?Int8Array:Uint8Array)(n);case 1:return new(e?Int16Array:Uint16Array)(n);case 2:return new(e?Int32Array:Uint32Array)(n);case 3:return new(e?BigInt64Array:BigUint64Array)(n)}throw Error(`unsupported align: ${t}`)}function b(t){const e=new Uint32Array(o.buffer),r=l(e[t+-8>>>2]),n=g(r);let a=4&r?t:e[t+4>>>2];const i=2&r?e[t+12>>>2]:e[a+-4>>>2]>>>n;return p(n,2048&r,4096&r).subarray(a>>>=n,a+i)}function w(t,e,r){return new t(m(t,e,r))}function m(t,e,r){const n=o.buffer,a=new Uint32Array(n),i=a[r+4>>>2];return new t(n,i,a[i+-4>>>2]>>>e)}function A(e,r,n){t[`__get${r}`]=w.bind(null,e,n),t[`__get${r}View`]=m.bind(null,e,n)}return t.__allocString=function(t){const e=t.length,r=s(e<<1,1),n=new Uint16Array(o.buffer);for(var a=0,i=r>>>1;a<e;++a)n[i+a]=t.charCodeAt(a);return r},t.__getString=function(t){const e=o.buffer;if(1!==new Uint32Array(e)[t+-8>>>2])throw Error(`not a string: ${t}`);return a(e,t)},t.__allocArray=function(t,e){const r=l(t),n=g(r),a=e.length,i=s(a<<n,4&r?t:0);let u;if(4&r)u=i;else{const e=s(2&r?16:12,t),l=new Uint32Array(o.buffer);l[e+0>>>2]=c(i),l[e+4>>>2]=i,l[e+8>>>2]=a<<n,2&r&&(l[e+12>>>2]=a),u=e}const f=p(n,2048&r,4096&r);if(16384&r)for(let t=0;t<a;++t)f[(i>>>n)+t]=c(e[t]);else f.set(e,i>>>n);return u},t.__getArrayView=b,t.__getArray=function(t){const e=b(t),r=e.length,n=new Array(r);for(let t=0;t<r;t++)n[t]=e[t];return n},t.__getArrayBuffer=function(t){const e=o.buffer,r=new Uint32Array(e)[t+-4>>>2];return e.slice(t,t+r)},[Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].forEach((t=>{A(t,t.name,31-Math.clz32(t.BYTES_PER_ELEMENT))})),r&&[BigUint64Array,BigInt64Array].forEach((t=>{A(t,t.name.slice(3),3)})),t.__instanceof=function(t,e){const r=new Uint32Array(o.buffer);let n=r[t+-8>>>2];if(n<=r[u>>>2])do{if(n==e)return!0;n=f(n)}while(n);return!1},t.memory=t.memory||o,t.table=t.table||i,y(n,t)}function c(t){return"undefined"!=typeof Response&&t instanceof Response}function u(t){return t instanceof WebAssembly.Module}async function l(t,e={}){if(c(t=await t))return f(t,e);const r=u(t)?t:await WebAssembly.compile(t),n=i(e),o=await WebAssembly.instantiate(r,e);return{module:r,instance:o,exports:s(n,o)}}async function f(t,e={}){if(!WebAssembly.instantiateStreaming)return l(c(t=await t)?t.arrayBuffer():t,e);const r=i(e),n=await WebAssembly.instantiateStreaming(t,e),o=s(r,n.instance);return{...n,exports:o}}function y(t,e={}){e=Object.create(e);const r=t.__argumentsLength?e=>{t.__argumentsLength.value=e}:t.__setArgumentsLength||t.__setargc||(()=>{});for(let o in t){if(!Object.prototype.hasOwnProperty.call(t,o))continue;const a=t[o];let i=o.split("."),s=e;for(;i.length>1;){let t=i.shift();Object.prototype.hasOwnProperty.call(s,t)||(s[t]={}),s=s[t]}let c=i[0],u=c.indexOf("#");if(u>=0){const e=c.substring(0,u),i=s[e];if(void 0===i||!i.prototype){const t=function(...e){return t.wrap(t.prototype.constructor(0,...e))};t.prototype={valueOf(){return this[n]}},t.wrap=function(e){return Object.create(t.prototype,{[n]:{value:e,writable:!1}})},i&&Object.getOwnPropertyNames(i).forEach((e=>Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e)))),s[e]=t}if(c=c.substring(u+1),s=s[e].prototype,/^(get|set):/.test(c)){if(!Object.prototype.hasOwnProperty.call(s,c=c.substring(4))){let e=t[o.replace("set:","get:")],r=t[o.replace("get:","set:")];Object.defineProperty(s,c,{get(){return e(this[n])},set(t){r(this[n],t)},enumerable:!0})}}else"constructor"===c?(s[c]=(...t)=>(r(t.length),a(...t))).original=a:(s[c]=function(...t){return r(t.length),a(this[n],...t)}).original=a}else/^(get|set):/.test(c)?Object.prototype.hasOwnProperty.call(s,c=c.substring(4))||Object.defineProperty(s,c,{get:t[o.replace("set:","get:")],set:t[o.replace("get:","set:")],enumerable:!0}):"function"==typeof a&&a!==r?(s[c]=(...t)=>(r(t.length),a(...t))).original=a:s[c]=a}return e}e.instantiate=l,e.instantiateSync=function(t,e={}){const r=u(t)?t:new WebAssembly.Module(t),n=i(e),o=new WebAssembly.Instance(r,e);return{module:r,instance:o,exports:s(n,o)}},e.instantiateStreaming=f,e.demangle=y}},e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={exports:{}};return t[n](o,o.exports,r),o.exports}(async()=>{const t=r(824),e={env:{abort(t,e,r,n){console.error("abort called at index.ts:"+r+":"+n)}}},n=await t.instantiate(fetch("build/optimized.wasm"),e),o=n.instance.exports.isPrime,{__newString:a,__getString:i,__retain:s,__release:c}=n.instance.exports;console.log(a,i,s,c),console.log(n);const u=document.querySelector("#result");document.querySelector("#prime-checker").addEventListener("submit",(t=>{t.preventDefault(),u.innerText="";const e=t.target.elements.number.value;u.innerText=`${e} is ${o(e)?"":"not "}prime.`}))})()})();