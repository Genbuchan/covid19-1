!function(e){function r(data){for(var r,t,l=data[0],f=data[1],d=data[2],i=0,v=[];i<l.length;i++)t=l[i],Object.prototype.hasOwnProperty.call(o,t)&&o[t]&&v.push(o[t][0]),o[t]=0;for(r in f)Object.prototype.hasOwnProperty.call(f,r)&&(e[r]=f[r]);for(h&&h(data);v.length;)v.shift()();return c.push.apply(c,d||[]),n()}function n(){for(var e,i=0;i<c.length;i++){for(var r=c[i],n=!0,t=1;t<r.length;t++){var f=r[t];0!==o[f]&&(n=!1)}n&&(c.splice(i--,1),e=l(l.s=r[0]))}return e}var t={},o={15:0},c=[];function l(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var r=[],n=o[e];if(0!==n)if(n)r.push(n[2]);else{var t=new Promise((function(r,t){n=o[e]=[r,t]}));r.push(n[2]=t);var c,script=document.createElement("script");script.charset="utf-8",script.timeout=120,l.nc&&script.setAttribute("nonce",l.nc),script.src=function(e){return l.p+""+({0:"commons/cards.card~index",1:"lang-en",2:"lang-ja",3:"lang-ja-Hira",4:"lang-ko",5:"lang-th",6:"lang-vi",7:"lang-zh_CN",8:"lang-zh_TW",11:"pages/about",12:"pages/cards/_card",13:"pages/index",14:"pages/translation"}[e]||e)+"."+{0:"5ca1ade",1:"b1599ac",2:"5501dd3",3:"4fd5f92",4:"f743712",5:"a1bfbe3",6:"7b45e84",7:"c7cf81d",8:"d3a32f6",11:"70d9b6d",12:"4f9e0f3",13:"586e138",14:"5be634f",17:"67bd07e"}[e]+".js"}(e);var f=new Error;c=function(r){script.onerror=script.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var t=r&&("load"===r.type?"missing":r.type),c=r&&r.target&&r.target.src;f.message="Loading chunk "+e+" failed.\n("+t+": "+c+")",f.name="ChunkLoadError",f.type=t,f.request=c,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:script})}),12e4);script.onerror=script.onload=c,document.head.appendChild(script)}return Promise.all(r)},l.m=e,l.c=t,l.d=function(e,r,n){l.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,r){if(1&r&&(e=l(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)l.d(n,t,function(r){return e[r]}.bind(null,t));return n},l.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(r,"a",r),r},l.o=function(object,e){return Object.prototype.hasOwnProperty.call(object,e)},l.p="/_nuxt/",l.oe=function(e){throw console.error(e),e};var f=window.webpackJsonp=window.webpackJsonp||[],d=f.push.bind(f);f.push=r,f=f.slice();for(var i=0;i<f.length;i++)r(f[i]);var h=d;n()}([]);