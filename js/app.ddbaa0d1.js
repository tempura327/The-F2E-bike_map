(function(t){function e(e){for(var H,n,a=e[0],o=e[1],s=e[2],i=0,L=[];i<a.length;i++)n=a[i],Object.prototype.hasOwnProperty.call(V,n)&&V[n]&&L.push(V[n][0]),V[n]=0;for(H in o)Object.prototype.hasOwnProperty.call(o,H)&&(t[H]=o[H]);c&&c(e);while(L.length)L.shift()();return r.push.apply(r,s||[]),C()}function C(){for(var t,e=0;e<r.length;e++){for(var C=r[e],H=!0,n=1;n<C.length;n++){var a=C[n];0!==V[a]&&(H=!1)}H&&(r.splice(e--,1),t=o(o.s=C[0]))}return t}var H={},n={app:0},V={app:0},r=[];function a(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-01406e6d":"ede7aac6","chunk-5491e5ba":"d8f9b516","chunk-57ff0fe1":"43c4831b","chunk-27fd3c78":"10b88d35","chunk-41b12f71":"714c740a"}[t]+".js"}function o(e){if(H[e])return H[e].exports;var C=H[e]={i:e,l:!1,exports:{}};return t[e].call(C.exports,C,C.exports,o),C.l=!0,C.exports}o.e=function(t){var e=[],C={"chunk-5491e5ba":1,"chunk-57ff0fe1":1,"chunk-27fd3c78":1,"chunk-41b12f71":1};n[t]?e.push(n[t]):0!==n[t]&&C[t]&&e.push(n[t]=new Promise((function(e,C){for(var H="css/"+({}[t]||t)+"."+{"chunk-01406e6d":"31d6cfe0","chunk-5491e5ba":"ced599c3","chunk-57ff0fe1":"ced599c3","chunk-27fd3c78":"475d331b","chunk-41b12f71":"8a3f1176"}[t]+".css",V=o.p+H,r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var s=r[a],i=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(i===H||i===V))return e()}var L=document.getElementsByTagName("style");for(a=0;a<L.length;a++){s=L[a],i=s.getAttribute("data-href");if(i===H||i===V)return e()}var c=document.createElement("link");c.rel="stylesheet",c.type="text/css",c.onload=e,c.onerror=function(e){var H=e&&e.target&&e.target.src||V,r=new Error("Loading CSS chunk "+t+" failed.\n("+H+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=H,delete n[t],c.parentNode.removeChild(c),C(r)},c.href=V;var l=document.getElementsByTagName("head")[0];l.appendChild(c)})).then((function(){n[t]=0})));var H=V[t];if(0!==H)if(H)e.push(H[2]);else{var r=new Promise((function(e,C){H=V[t]=[e,C]}));e.push(H[2]=r);var s,i=document.createElement("script");i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.src=a(t);var L=new Error;s=function(e){i.onerror=i.onload=null,clearTimeout(c);var C=V[t];if(0!==C){if(C){var H=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;L.message="Loading chunk "+t+" failed.\n("+H+": "+n+")",L.name="ChunkLoadError",L.type=H,L.request=n,C[1](L)}V[t]=void 0}};var c=setTimeout((function(){s({type:"timeout",target:i})}),12e4);i.onerror=i.onload=s,document.head.appendChild(i)}return Promise.all(e)},o.m=t,o.c=H,o.d=function(t,e,C){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:C})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var C=Object.create(null);if(o.r(C),Object.defineProperty(C,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var H in t)o.d(C,H,function(e){return t[e]}.bind(null,H));return C},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/The-F2E-bike_map/",o.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var L=0;L<s.length;L++)e(s[L]);var c=i;r.push([0,"chunk-vendors"]),C()})({0:function(t,e,C){t.exports=C("56d7")},"56d7":function(t,e,C){"use strict";C.r(e);C("e260"),C("e6cf"),C("cca6"),C("a79d");var H=C("2b0e"),n=function(){var t=this,e=t.$createElement,C=t._self._c||e;return C("div",{attrs:{id:"app"}},[C("Header"),C("router-view"),C("Footer")],1)},V=[],r=function(){var t=this,e=t.$createElement,H=t._self._c||e;return H("b-nav",{staticClass:"d-flex justify-content-between"},[H("router-link",{staticClass:"d-flex",attrs:{to:"/The-F2E-bike_map"}},[H("img",{staticClass:"logo",attrs:{src:C("cf05"),alt:""}}),H("div",[H("svg",{attrs:{width:"129",height:"14",viewBox:"0 0 129 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[H("path",{attrs:{d:"M2.36042 2.668H0.408422V0.539999H7.17642V2.668H5.24042V13.5H2.36042V2.668ZM14.1233 0.539999H17.3873L19.8033 13.5H17.1633L16.7313 10.764H14.8273L14.3793 13.5H11.6753L14.1233 0.539999ZM16.4593 9.052L15.7713 3.996L15.0833 9.052H16.4593ZM25.6878 0.539999H28.5518V13.5H25.6878V0.539999ZM34.5163 0.539999H36.9483L37.7163 8.092L38.6923 0.556H40.5963L41.6203 8.044L42.4043 0.539999H44.8043L43.2523 13.5H40.7563L39.6523 5.676L38.6123 13.5H36.0843L34.5163 0.539999ZM52.2408 0.539999H55.5048L57.9208 13.5H55.2808L54.8488 10.764H52.9448L52.4968 13.5H49.7928L52.2408 0.539999ZM54.5768 9.052L53.8888 3.996L53.2008 9.052H54.5768ZM63.7893 0.539999H65.8053L68.4613 6.78V0.539999H70.8293V13.5H68.8933L66.2373 6.78V13.5H63.7893V0.539999ZM85.9718 0.539999H89.3478C90.1905 0.539999 90.9051 0.630666 91.4918 0.811999C92.0891 0.982666 92.5691 1.31867 92.9318 1.82C93.2945 2.32133 93.4758 3.02533 93.4758 3.932C93.4758 4.7 93.3105 5.29733 92.9798 5.724C92.6491 6.15067 92.1798 6.42267 91.5718 6.54C92.3185 6.636 92.8891 6.95067 93.2838 7.484C93.6785 8.01733 93.8758 8.74267 93.8758 9.66C93.8758 12.22 92.5691 13.5 89.9558 13.5H85.9718V0.539999ZM89.3958 5.724C90.0038 5.724 90.4145 5.58533 90.6278 5.308C90.8518 5.03067 90.9638 4.59867 90.9638 4.012C90.9638 3.5 90.8251 3.116 90.5478 2.86C90.2705 2.59333 89.8651 2.46 89.3318 2.46H88.8358V5.724H89.3958ZM89.4438 11.5C90.0518 11.5 90.4785 11.3507 90.7238 11.052C90.9798 10.7427 91.1078 10.2627 91.1078 9.612C91.1078 8.876 90.9798 8.35867 90.7238 8.06C90.4785 7.76133 90.0465 7.612 89.4278 7.612H88.8358V11.5H89.4438ZM99.954 0.539999H102.818V13.5H99.954V0.539999ZM109.311 0.539999H112.175V5.836L114.351 0.539999H117.151L114.751 6.396L117.263 13.5H114.351L112.479 7.772L112.175 8.284V13.5H109.311V0.539999ZM122.949 0.539999H128.773V2.492H125.813V5.708H128.069V7.692H125.813V11.564H128.805V13.5H122.949V0.539999Z",fill:"#333333"}})]),H("br"),H("svg",{attrs:{width:"159",height:"17",viewBox:"0 0 159 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[H("path",{attrs:{d:"M10.5124 10.644V13.412H3.85642V10.644H10.5124ZM1.90442 15.876H3.85642V15.236H10.5124V15.86H12.5604V8.836H1.90442V15.876ZM8.86442 3.668C9.36042 4.1 9.88842 4.58 10.4004 5.092C8.56042 5.172 6.70442 5.252 4.97642 5.316C5.74442 4.148 6.54442 2.804 7.21642 1.54L5.02442 0.835999C4.48042 2.244 3.56842 4.004 2.67242 5.396C1.77642 5.412 0.944422 5.444 0.208422 5.46L0.320422 7.38C3.29642 7.268 7.76042 7.092 11.9844 6.868C12.4164 7.396 12.7684 7.892 13.0084 8.324L14.6564 7.06C13.8404 5.684 11.9364 3.844 10.3524 2.548L8.86442 3.668ZM30.7204 1.22H27.9364V2.132H30.7204V1.22ZM23.9364 2.756C23.4564 2.244 22.4164 1.572 21.6324 1.14L20.5444 2.436C21.3444 2.916 22.3364 3.652 22.7844 4.18L23.9364 2.756ZM23.6324 6.836C23.1044 6.34 22.0644 5.716 21.2484 5.332L20.2084 6.66C21.0084 7.092 22.0484 7.796 22.5124 8.292L23.6324 6.836ZM22.2564 15.7C22.8964 14.148 23.5524 12.292 24.0644 10.58L22.5604 9.62C21.9684 11.492 21.1524 13.508 20.5764 14.756L22.2564 15.7ZM29.7124 8.02H28.9124V7.316H29.7124V8.02ZM25.1684 9.012H26.3684V5.828L26.8644 5.78C26.8964 5.94 26.9124 6.084 26.9284 6.212L27.7924 5.892C27.7284 5.396 27.5044 4.628 27.2324 4.052L26.4324 4.34C26.4804 4.468 26.5284 4.612 26.5764 4.756L25.8884 4.772C26.3844 4.212 26.8964 3.556 27.3604 2.948V3.524H31.1844V3.348C31.5524 3.668 31.9044 4.052 32.1444 4.372C32.0004 4.532 31.8564 4.708 31.7284 4.852L30.9764 4.868L31.0884 6.02L32.4644 5.94V6.532L31.4244 6.292C31.2964 6.884 31.1204 7.524 30.8644 8.052V6.468H27.8084V8.868H30.8644V8.34C31.1524 8.468 31.5364 8.676 31.7284 8.82C32.0004 8.308 32.2884 7.54 32.4644 6.82V9.012H33.6804V5.876L34.3044 5.828C34.3364 5.972 34.3684 6.1 34.3844 6.212L35.3444 5.796C35.2324 5.268 34.9284 4.484 34.6084 3.908L33.6964 4.276C33.7764 4.436 33.8564 4.612 33.9364 4.788L33.0564 4.804C33.6324 4.18 34.2404 3.444 34.7684 2.788L33.7124 2.196C33.5044 2.564 33.2164 2.98 32.8964 3.412C32.8004 3.3 32.6884 3.172 32.5604 3.06C32.8964 2.596 33.2644 2.004 33.6324 1.46L32.5444 0.931999C32.3684 1.332 32.0804 1.908 31.8084 2.404L31.6004 2.244L31.1844 2.804V2.532H27.3604V2.804L26.4004 2.26C26.2244 2.58 25.9844 2.932 25.7284 3.316C25.6324 3.204 25.5044 3.108 25.3924 2.996C25.6964 2.532 26.0484 1.972 26.3844 1.428L25.3124 0.884C25.1364 1.316 24.8644 1.892 24.5924 2.372C24.5124 2.324 24.4164 2.26 24.3364 2.212L23.7444 3.14C24.1764 3.46 24.6564 3.892 25.0084 4.276C24.8644 4.468 24.7044 4.66 24.5604 4.836L23.5844 4.868L23.7124 6.02C24.1604 5.988 24.6564 5.956 25.1684 5.908V6.532L24.1124 6.292C23.9684 7.012 23.7444 7.78 23.3764 8.356C23.6644 8.468 24.1444 8.708 24.3844 8.852C24.6884 8.324 24.9764 7.54 25.1684 6.82V9.012ZM33.7284 6.58C34.0004 7.236 34.2884 8.084 34.3844 8.644L35.3924 8.308C35.2644 7.764 34.9604 6.932 34.6884 6.292L33.7284 6.58ZM27.8244 6.036H30.8644V5.172H27.8244V6.036ZM30.8644 3.94H27.8244V4.804H30.8644V3.94ZM27.7604 8.036C27.6804 7.588 27.5044 6.884 27.3284 6.356L26.4164 6.564C26.5764 7.124 26.7364 7.844 26.8004 8.308L27.7604 8.036ZM26.6404 12.436L26.7684 11.94H33.8564V9.284H24.7844V10.356H32.0964V10.852H25.2644C25.0724 11.844 24.7684 13.028 24.4804 13.844L26.1924 14.068C26.2404 13.924 26.2884 13.764 26.3364 13.604H32.6404C32.4964 14.052 32.3524 14.308 32.1764 14.436C32.0164 14.548 31.8244 14.564 31.5044 14.564C31.1044 14.564 30.0484 14.548 29.0884 14.452C29.3604 14.852 29.5684 15.428 29.6004 15.844C30.5924 15.876 31.5684 15.892 32.0804 15.876C32.7204 15.844 33.1684 15.764 33.5684 15.46C34.0004 15.108 34.2884 14.404 34.5444 13.124C34.6084 12.9 34.6404 12.436 34.6404 12.436H26.6404ZM44.6084 13.316V11.652H52.2084V13.316H44.6084ZM52.2084 8.244V9.892H44.6084V8.244H52.2084ZM52.2084 4.836V6.484H44.6084V4.836H52.2084ZM48.7524 3.012C49.0084 2.436 49.2644 1.812 49.5044 1.172L47.2004 0.915999C47.1204 1.556 46.9444 2.324 46.7684 3.012H42.6724V15.876H44.6084V15.076H52.2084V15.86H54.2404V3.012H48.7524ZM75.8404 1.86H68.0644V3.668H75.8404V1.86ZM64.9924 0.947999C64.2244 2.068 62.7044 3.508 61.3764 4.356C61.7124 4.724 62.1924 5.492 62.4324 5.908C63.9524 4.852 65.6804 3.204 66.8324 1.7L64.9924 0.947999ZM65.6004 4.404C64.5764 6.212 62.8324 8.068 61.2004 9.188C61.5844 9.588 62.2244 10.452 62.4964 10.836C62.9284 10.484 63.3604 10.084 63.8084 9.652V15.908H65.7124V7.556C66.3524 6.756 66.9444 5.924 67.4244 5.108L65.6004 4.404ZM76.2404 6.26H67.3924V8.068H72.1124V13.636C72.1124 13.876 72.0004 13.94 71.7124 13.94C71.4244 13.956 70.3684 13.956 69.4564 13.908C69.7124 14.468 69.9524 15.284 70.0324 15.844C71.4564 15.844 72.4804 15.812 73.1524 15.524C73.8564 15.236 74.0484 14.708 74.0484 13.684V8.068H76.2404V6.26ZM85.6484 9.652V8.676H88.4324V9.652H85.6484ZM85.6484 6.276H88.4324V7.252H85.6484V6.276ZM93.1844 6.276V7.252H90.3844V6.276H93.1844ZM93.1844 9.652H90.3844V8.676H93.1844V9.652ZM96.7684 12.036H90.3844V11.172H95.1044V4.756H90.3844V3.988H96.3044V2.26H90.3844V0.964H88.4324V2.26H82.6244V3.988H88.4324V4.756H83.8244V11.172H88.4324V12.036H82.2404V13.748H88.4324V15.908H90.3844V13.748H96.7684V12.036ZM107.552 2.34C106.752 1.956 105.232 1.444 104.176 1.188L103.344 2.484C104.448 2.804 105.952 3.38 106.688 3.78L107.552 2.34ZM106.64 11.364H113.568V12.068H106.64V11.364ZM106.64 9.604H113.568V10.292H106.64V9.604ZM106.64 7.844H113.568V8.532H106.64V7.844ZM109.232 6.708C110.704 6.292 111.6 5.732 112.16 4.98C112.64 5.668 113.376 6.26 114.608 6.708H109.232ZM115.504 13.204V6.98C115.824 7.06 116.176 7.124 116.56 7.188C116.736 6.724 117.152 5.988 117.504 5.636C114.272 5.252 113.36 4.372 113.024 3.348H114.8C114.592 3.684 114.368 3.988 114.176 4.228L115.648 4.692C116.176 4.1 116.752 3.14 117.168 2.276L115.904 1.956L115.616 2.004H110.896C111.056 1.748 111.184 1.492 111.312 1.22L109.632 0.947999C109.216 1.876 108.432 2.932 107.28 3.732C107.712 3.908 108.368 4.292 108.704 4.628C109.2 4.228 109.616 3.796 109.984 3.348H111.136C110.784 4.484 109.936 5.172 107.392 5.588L107.232 4.148C105.536 4.548 103.824 4.948 102.64 5.172L103.344 6.836C104.544 6.5 106.032 6.068 107.408 5.668L107.392 5.604C107.648 5.86 107.952 6.324 108.144 6.708H104.8V13.204H107.152C106.048 13.748 104.304 14.26 102.752 14.548C103.152 14.884 103.824 15.572 104.16 15.94C105.776 15.492 107.824 14.708 109.152 13.844L107.696 13.204H112.368L110.928 14.036C112.544 14.644 114.176 15.396 115.088 15.924L117.296 15.076C116.208 14.548 114.368 13.78 112.736 13.204H115.504ZM128.624 1.444H123.92V2.884H128.624V1.444ZM129.2 3.588H123.12V5.092H129.2V3.588ZM128.672 5.812H123.872V7.268H128.672V5.812ZM123.872 9.428H128.672V8.004H123.872V9.428ZM127.072 13.556H125.424V11.716H127.072V13.556ZM129.328 1.572V3.38H130.896V6.788V6.932H129.152V8.708H130.832C130.672 10.612 130.176 12.58 128.688 14.212V10.212H123.824V15.668H125.424V15.044H128.688V14.788C129.088 15.108 129.536 15.588 129.776 15.908C131.856 13.844 132.48 11.22 132.656 8.708H134.208V6.932H132.704V6.804V3.38H134.528C134.544 9.492 134.592 15.108 136.304 15.764C137.344 16.196 138.176 15.652 138.432 13.172C138.144 12.884 137.68 12.116 137.392 11.62C137.344 12.724 137.248 13.828 137.136 13.796C136.368 13.604 136.304 7.012 136.464 1.572H129.328ZM144.224 10.308C144.096 11.652 143.872 13.076 143.408 14.02C143.792 14.164 144.48 14.468 144.8 14.692C145.248 13.668 145.6 12.084 145.744 10.564L144.224 10.308ZM154.048 12.036C153.84 12.036 153.808 11.908 153.808 11.508V10.1H156.128V8.66H154.704V7.412H156.08V5.972H155.312C155.568 5.428 155.872 4.692 156.208 4.004L154.768 3.588C154.656 4.212 154.384 5.156 154.144 5.748L154.784 5.972H152.8L153.568 5.7C153.504 5.156 153.248 4.292 152.928 3.668L151.808 4.068C152.048 4.644 152.256 5.428 152.336 5.972H151.76V7.412H153.104V8.66H151.712V10.1H152.224V11.492C152.224 12.996 152.544 13.524 154.048 13.524H155.12C155.488 13.524 155.824 13.508 156.064 13.412C156.016 13.044 155.968 12.324 155.936 11.94C155.712 12.004 155.344 12.036 155.12 12.036H154.048ZM158.24 1.636H149.648V8.196C149.376 7.492 149.008 6.74 148.64 6.1L147.296 6.66C147.472 6.98 147.648 7.332 147.808 7.684L146.416 7.764C147.424 6.484 148.512 4.9 149.392 3.556L147.84 2.836C147.472 3.62 146.96 4.532 146.4 5.428C146.256 5.236 146.08 5.012 145.888 4.804C146.48 3.908 147.136 2.644 147.696 1.54L146.048 0.964C145.792 1.78 145.344 2.852 144.896 3.732C144.768 3.62 144.64 3.508 144.528 3.396L143.6 4.676C144.24 5.332 144.976 6.196 145.424 6.916C145.184 7.252 144.944 7.572 144.704 7.86L143.552 7.924L143.744 9.572L145.968 9.396V15.892H147.6V9.268L148.4 9.204C148.496 9.556 148.592 9.876 148.64 10.148L149.648 9.684V11.908C149.488 11.348 149.296 10.74 149.072 10.244L147.744 10.644C148.096 11.556 148.4 12.74 148.48 13.524L149.648 13.14V15.924H151.344V3.284H156.512V14.004C156.512 14.228 156.432 14.308 156.208 14.324C155.984 14.324 155.264 14.324 154.624 14.292C154.848 14.724 155.072 15.444 155.12 15.892C156.24 15.908 156.992 15.86 157.536 15.588C158.064 15.316 158.24 14.884 158.24 14.004V1.636Z",fill:"#333333"}})])])]),H("ul",{staticClass:"d-flex"},[H("li",{staticClass:"nav-item mr-7"},[H("router-link",{staticClass:"text-dark font-weight-3",attrs:{to:"/news"}},[t._v("最新消息")])],1),H("li",{staticClass:"nav-item mr-7"},[H("router-link",{staticClass:"text-dark font-weight-3",attrs:{to:"/map"}},[t._v("自行車路線")])],1),H("li",{staticClass:"nav-item mr-7"},[H("router-link",{staticClass:"text-dark font-weight-3",attrs:{to:"/rent_bike"}},[t._v("單車租借")])],1),H("li",{staticClass:"nav-item"},[H("router-link",{staticClass:"text-dark font-weight-3",attrs:{to:"/tip"}},[t._v("騎乘小叮嚀")])],1)])],1)},a=[],o={name:"Header",data:function(){return{}},methods:{}},s=o,i=(C("a546"),C("2877")),L=Object(i["a"])(s,r,a,!1,null,"3f6c1972",null),c=L.exports,l=function(){var t=this,e=t.$createElement,H=t._self._c||e;return H("footer",{staticClass:"footer"},[H("div",[H("div",{staticClass:"d-flex align-items-center mb-5"},[H("img",{staticClass:"logo mr-4",attrs:{src:C("cf05"),alt:""}}),H("div",[H("svg",{attrs:{width:"129",height:"14",viewBox:"0 0 129 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[H("path",{attrs:{d:"M2.36042 2.20535H0.408422V0.0773525H7.17642V2.20535H5.24042V13.0374H2.36042V2.20535ZM14.1233 0.0773525H17.3873L19.8033 13.0374H17.1633L16.7313 10.3014H14.8273L14.3793 13.0374H11.6753L14.1233 0.0773525ZM16.4593 8.58935L15.7713 3.53335L15.0833 8.58935H16.4593ZM25.6878 0.0773525H28.5518V13.0374H25.6878V0.0773525ZM34.5163 0.0773525H36.9483L37.7163 7.62935L38.6923 0.0933533H40.5963L41.6203 7.58135L42.4043 0.0773525H44.8043L43.2523 13.0374H40.7563L39.6523 5.21335L38.6123 13.0374H36.0843L34.5163 0.0773525ZM52.2408 0.0773525H55.5048L57.9208 13.0374H55.2808L54.8488 10.3014H52.9448L52.4968 13.0374H49.7928L52.2408 0.0773525ZM54.5768 8.58935L53.8888 3.53335L53.2008 8.58935H54.5768ZM63.7893 0.0773525H65.8053L68.4613 6.31735V0.0773525H70.8293V13.0374H68.8933L66.2373 6.31735V13.0374H63.7893V0.0773525ZM85.9718 0.0773525H89.3478C90.1905 0.0773525 90.9051 0.168019 91.4918 0.349353C92.0891 0.52002 92.5691 0.85602 92.9318 1.35735C93.2945 1.85869 93.4758 2.56269 93.4758 3.46935C93.4758 4.23735 93.3105 4.83469 92.9798 5.26135C92.6491 5.68802 92.1798 5.96002 91.5718 6.07735C92.3185 6.17335 92.8891 6.48802 93.2838 7.02135C93.6785 7.55469 93.8758 8.28002 93.8758 9.19735C93.8758 11.7574 92.5691 13.0374 89.9558 13.0374H85.9718V0.0773525ZM89.3958 5.26135C90.0038 5.26135 90.4145 5.12269 90.6278 4.84535C90.8518 4.56802 90.9638 4.13602 90.9638 3.54935C90.9638 3.03735 90.8251 2.65335 90.5478 2.39735C90.2705 2.13069 89.8651 1.99735 89.3318 1.99735H88.8358V5.26135H89.3958ZM89.4438 11.0374C90.0518 11.0374 90.4785 10.888 90.7238 10.5894C90.9798 10.28 91.1078 9.80002 91.1078 9.14935C91.1078 8.41335 90.9798 7.89602 90.7238 7.59735C90.4785 7.29869 90.0465 7.14935 89.4278 7.14935H88.8358V11.0374H89.4438ZM99.954 0.0773525H102.818V13.0374H99.954V0.0773525ZM109.311 0.0773525H112.175V5.37335L114.351 0.0773525H117.151L114.751 5.93335L117.263 13.0374H114.351L112.479 7.30935L112.175 7.82135V13.0374H109.311V0.0773525ZM122.949 0.0773525H128.773V2.02935H125.813V5.24535H128.069V7.22935H125.813V11.1014H128.805V13.0374H122.949V0.0773525Z",fill:"#333333"}})]),H("br"),H("svg",{attrs:{width:"159",height:"16",viewBox:"0 0 159 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[H("path",{attrs:{d:"M10.5124 10.1814V12.9494H3.85642V10.1814H10.5124ZM1.90442 15.4134H3.85642V14.7734H10.5124V15.3974H12.5604V8.37335H1.90442V15.4134ZM8.86442 3.20535C9.36042 3.63735 9.88842 4.11735 10.4004 4.62935C8.56042 4.70935 6.70442 4.78935 4.97642 4.85335C5.74442 3.68535 6.54442 2.34135 7.21642 1.07735L5.02442 0.373353C4.48042 1.78135 3.56842 3.54135 2.67242 4.93335C1.77642 4.94935 0.944422 4.98135 0.208422 4.99735L0.320422 6.91735C3.29642 6.80535 7.76042 6.62935 11.9844 6.40535C12.4164 6.93335 12.7684 7.42935 13.0084 7.86135L14.6564 6.59735C13.8404 5.22135 11.9364 3.38135 10.3524 2.08535L8.86442 3.20535ZM30.7204 0.757353H27.9364V1.66935H30.7204V0.757353ZM23.9364 2.29335C23.4564 1.78135 22.4164 1.10935 21.6324 0.677353L20.5444 1.97335C21.3444 2.45335 22.3364 3.18935 22.7844 3.71735L23.9364 2.29335ZM23.6324 6.37335C23.1044 5.87735 22.0644 5.25335 21.2484 4.86935L20.2084 6.19735C21.0084 6.62935 22.0484 7.33335 22.5124 7.82935L23.6324 6.37335ZM22.2564 15.2374C22.8964 13.6854 23.5524 11.8294 24.0644 10.1174L22.5604 9.15735C21.9684 11.0294 21.1524 13.0454 20.5764 14.2934L22.2564 15.2374ZM29.7124 7.55735H28.9124V6.85335H29.7124V7.55735ZM25.1684 8.54935H26.3684V5.36535L26.8644 5.31735C26.8964 5.47735 26.9124 5.62135 26.9284 5.74935L27.7924 5.42935C27.7284 4.93335 27.5044 4.16535 27.2324 3.58935L26.4324 3.87735C26.4804 4.00535 26.5284 4.14935 26.5764 4.29335L25.8884 4.30935C26.3844 3.74935 26.8964 3.09335 27.3604 2.48535V3.06135H31.1844V2.88535C31.5524 3.20535 31.9044 3.58935 32.1444 3.90935C32.0004 4.06935 31.8564 4.24535 31.7284 4.38935L30.9764 4.40535L31.0884 5.55735L32.4644 5.47735V6.06935L31.4244 5.82935C31.2964 6.42135 31.1204 7.06135 30.8644 7.58935V6.00535H27.8084V8.40535H30.8644V7.87735C31.1524 8.00535 31.5364 8.21335 31.7284 8.35735C32.0004 7.84535 32.2884 7.07735 32.4644 6.35735V8.54935H33.6804V5.41335L34.3044 5.36535C34.3364 5.50935 34.3684 5.63735 34.3844 5.74935L35.3444 5.33335C35.2324 4.80535 34.9284 4.02135 34.6084 3.44535L33.6964 3.81335C33.7764 3.97335 33.8564 4.14935 33.9364 4.32535L33.0564 4.34135C33.6324 3.71735 34.2404 2.98135 34.7684 2.32535L33.7124 1.73335C33.5044 2.10135 33.2164 2.51735 32.8964 2.94935C32.8004 2.83735 32.6884 2.70935 32.5604 2.59735C32.8964 2.13335 33.2644 1.54135 33.6324 0.997353L32.5444 0.469353C32.3684 0.869353 32.0804 1.44535 31.8084 1.94135L31.6004 1.78135L31.1844 2.34135V2.06935H27.3604V2.34135L26.4004 1.79735C26.2244 2.11735 25.9844 2.46935 25.7284 2.85335C25.6324 2.74135 25.5044 2.64535 25.3924 2.53335C25.6964 2.06935 26.0484 1.50935 26.3844 0.965353L25.3124 0.421353C25.1364 0.853353 24.8644 1.42935 24.5924 1.90935C24.5124 1.86135 24.4164 1.79735 24.3364 1.74935L23.7444 2.67735C24.1764 2.99735 24.6564 3.42935 25.0084 3.81335C24.8644 4.00535 24.7044 4.19735 24.5604 4.37335L23.5844 4.40535L23.7124 5.55735C24.1604 5.52535 24.6564 5.49335 25.1684 5.44535V6.06935L24.1124 5.82935C23.9684 6.54935 23.7444 7.31735 23.3764 7.89335C23.6644 8.00535 24.1444 8.24535 24.3844 8.38935C24.6884 7.86135 24.9764 7.07735 25.1684 6.35735V8.54935ZM33.7284 6.11735C34.0004 6.77335 34.2884 7.62135 34.3844 8.18135L35.3924 7.84535C35.2644 7.30135 34.9604 6.46935 34.6884 5.82935L33.7284 6.11735ZM27.8244 5.57335H30.8644V4.70935H27.8244V5.57335ZM30.8644 3.47735H27.8244V4.34135H30.8644V3.47735ZM27.7604 7.57335C27.6804 7.12535 27.5044 6.42135 27.3284 5.89335L26.4164 6.10135C26.5764 6.66135 26.7364 7.38135 26.8004 7.84535L27.7604 7.57335ZM26.6404 11.9734L26.7684 11.4774H33.8564V8.82135H24.7844V9.89335H32.0964V10.3894H25.2644C25.0724 11.3814 24.7684 12.5654 24.4804 13.3814L26.1924 13.6054C26.2404 13.4614 26.2884 13.3014 26.3364 13.1414H32.6404C32.4964 13.5894 32.3524 13.8454 32.1764 13.9734C32.0164 14.0854 31.8244 14.1014 31.5044 14.1014C31.1044 14.1014 30.0484 14.0854 29.0884 13.9894C29.3604 14.3894 29.5684 14.9654 29.6004 15.3814C30.5924 15.4134 31.5684 15.4294 32.0804 15.4134C32.7204 15.3814 33.1684 15.3014 33.5684 14.9974C34.0004 14.6454 34.2884 13.9414 34.5444 12.6614C34.6084 12.4374 34.6404 11.9734 34.6404 11.9734H26.6404ZM44.6084 12.8534V11.1894H52.2084V12.8534H44.6084ZM52.2084 7.78135V9.42935H44.6084V7.78135H52.2084ZM52.2084 4.37335V6.02135H44.6084V4.37335H52.2084ZM48.7524 2.54935C49.0084 1.97335 49.2644 1.34935 49.5044 0.709352L47.2004 0.453353C47.1204 1.09335 46.9444 1.86135 46.7684 2.54935H42.6724V15.4134H44.6084V14.6134H52.2084V15.3974H54.2404V2.54935H48.7524ZM75.8404 1.39735H68.0644V3.20535H75.8404V1.39735ZM64.9924 0.485353C64.2244 1.60535 62.7044 3.04535 61.3764 3.89335C61.7124 4.26135 62.1924 5.02935 62.4324 5.44535C63.9524 4.38935 65.6804 2.74135 66.8324 1.23735L64.9924 0.485353ZM65.6004 3.94135C64.5764 5.74935 62.8324 7.60535 61.2004 8.72535C61.5844 9.12535 62.2244 9.98935 62.4964 10.3734C62.9284 10.0214 63.3604 9.62135 63.8084 9.18935V15.4454H65.7124V7.09335C66.3524 6.29335 66.9444 5.46135 67.4244 4.64535L65.6004 3.94135ZM76.2404 5.79735H67.3924V7.60535H72.1124V13.1734C72.1124 13.4134 72.0004 13.4774 71.7124 13.4774C71.4244 13.4934 70.3684 13.4934 69.4564 13.4454C69.7124 14.0054 69.9524 14.8214 70.0324 15.3814C71.4564 15.3814 72.4804 15.3494 73.1524 15.0614C73.8564 14.7734 74.0484 14.2454 74.0484 13.2214V7.60535H76.2404V5.79735ZM85.6484 9.18935V8.21335H88.4324V9.18935H85.6484ZM85.6484 5.81335H88.4324V6.78935H85.6484V5.81335ZM93.1844 5.81335V6.78935H90.3844V5.81335H93.1844ZM93.1844 9.18935H90.3844V8.21335H93.1844V9.18935ZM96.7684 11.5734H90.3844V10.7094H95.1044V4.29335H90.3844V3.52535H96.3044V1.79735H90.3844V0.501353H88.4324V1.79735H82.6244V3.52535H88.4324V4.29335H83.8244V10.7094H88.4324V11.5734H82.2404V13.2854H88.4324V15.4454H90.3844V13.2854H96.7684V11.5734ZM107.552 1.87735C106.752 1.49335 105.232 0.981353 104.176 0.725353L103.344 2.02135C104.448 2.34135 105.952 2.91735 106.688 3.31735L107.552 1.87735ZM106.64 10.9014H113.568V11.6054H106.64V10.9014ZM106.64 9.14135H113.568V9.82935H106.64V9.14135ZM106.64 7.38135H113.568V8.06935H106.64V7.38135ZM109.232 6.24535C110.704 5.82935 111.6 5.26935 112.16 4.51735C112.64 5.20535 113.376 5.79735 114.608 6.24535H109.232ZM115.504 12.7414V6.51735C115.824 6.59735 116.176 6.66135 116.56 6.72535C116.736 6.26135 117.152 5.52535 117.504 5.17335C114.272 4.78935 113.36 3.90935 113.024 2.88535H114.8C114.592 3.22135 114.368 3.52535 114.176 3.76535L115.648 4.22935C116.176 3.63735 116.752 2.67735 117.168 1.81335L115.904 1.49335L115.616 1.54135H110.896C111.056 1.28535 111.184 1.02935 111.312 0.757353L109.632 0.485353C109.216 1.41335 108.432 2.46935 107.28 3.26935C107.712 3.44535 108.368 3.82935 108.704 4.16535C109.2 3.76535 109.616 3.33335 109.984 2.88535H111.136C110.784 4.02135 109.936 4.70935 107.392 5.12535L107.232 3.68535C105.536 4.08535 103.824 4.48535 102.64 4.70935L103.344 6.37335C104.544 6.03735 106.032 5.60535 107.408 5.20535L107.392 5.14135C107.648 5.39735 107.952 5.86135 108.144 6.24535H104.8V12.7414H107.152C106.048 13.2854 104.304 13.7974 102.752 14.0854C103.152 14.4214 103.824 15.1094 104.16 15.4774C105.776 15.0294 107.824 14.2454 109.152 13.3814L107.696 12.7414H112.368L110.928 13.5734C112.544 14.1814 114.176 14.9334 115.088 15.4614L117.296 14.6134C116.208 14.0854 114.368 13.3174 112.736 12.7414H115.504ZM128.624 0.981353H123.92V2.42135H128.624V0.981353ZM129.2 3.12535H123.12V4.62935H129.2V3.12535ZM128.672 5.34935H123.872V6.80535H128.672V5.34935ZM123.872 8.96535H128.672V7.54135H123.872V8.96535ZM127.072 13.0934H125.424V11.2534H127.072V13.0934ZM129.328 1.10935V2.91735H130.896V6.32535V6.46935H129.152V8.24535H130.832C130.672 10.1494 130.176 12.1174 128.688 13.7494V9.74935H123.824V15.2054H125.424V14.5814H128.688V14.3254C129.088 14.6454 129.536 15.1254 129.776 15.4454C131.856 13.3814 132.48 10.7574 132.656 8.24535H134.208V6.46935H132.704V6.34135V2.91735H134.528C134.544 9.02935 134.592 14.6454 136.304 15.3014C137.344 15.7334 138.176 15.1894 138.432 12.7094C138.144 12.4214 137.68 11.6534 137.392 11.1574C137.344 12.2614 137.248 13.3654 137.136 13.3334C136.368 13.1414 136.304 6.54935 136.464 1.10935H129.328ZM144.224 9.84535C144.096 11.1894 143.872 12.6134 143.408 13.5574C143.792 13.7014 144.48 14.0054 144.8 14.2294C145.248 13.2054 145.6 11.6214 145.744 10.1014L144.224 9.84535ZM154.048 11.5734C153.84 11.5734 153.808 11.4454 153.808 11.0454V9.63735H156.128V8.19735H154.704V6.94935H156.08V5.50935H155.312C155.568 4.96535 155.872 4.22935 156.208 3.54135L154.768 3.12535C154.656 3.74935 154.384 4.69335 154.144 5.28535L154.784 5.50935H152.8L153.568 5.23735C153.504 4.69335 153.248 3.82935 152.928 3.20535L151.808 3.60535C152.048 4.18135 152.256 4.96535 152.336 5.50935H151.76V6.94935H153.104V8.19735H151.712V9.63735H152.224V11.0294C152.224 12.5334 152.544 13.0614 154.048 13.0614H155.12C155.488 13.0614 155.824 13.0454 156.064 12.9494C156.016 12.5814 155.968 11.8614 155.936 11.4774C155.712 11.5414 155.344 11.5734 155.12 11.5734H154.048ZM158.24 1.17335H149.648V7.73335C149.376 7.02935 149.008 6.27735 148.64 5.63735L147.296 6.19735C147.472 6.51735 147.648 6.86935 147.808 7.22135L146.416 7.30135C147.424 6.02135 148.512 4.43735 149.392 3.09335L147.84 2.37335C147.472 3.15735 146.96 4.06935 146.4 4.96535C146.256 4.77335 146.08 4.54935 145.888 4.34135C146.48 3.44535 147.136 2.18135 147.696 1.07735L146.048 0.501353C145.792 1.31735 145.344 2.38935 144.896 3.26935C144.768 3.15735 144.64 3.04535 144.528 2.93335L143.6 4.21335C144.24 4.86935 144.976 5.73335 145.424 6.45335C145.184 6.78935 144.944 7.10935 144.704 7.39735L143.552 7.46135L143.744 9.10935L145.968 8.93335V15.4294H147.6V8.80535L148.4 8.74135C148.496 9.09335 148.592 9.41335 148.64 9.68535L149.648 9.22135V11.4454C149.488 10.8854 149.296 10.2774 149.072 9.78135L147.744 10.1814C148.096 11.0934 148.4 12.2774 148.48 13.0614L149.648 12.6774V15.4614H151.344V2.82135H156.512V13.5414C156.512 13.7654 156.432 13.8454 156.208 13.8614C155.984 13.8614 155.264 13.8614 154.624 13.8294C154.848 14.2614 155.072 14.9814 155.12 15.4294C156.24 15.4454 156.992 15.3974 157.536 15.1254C158.064 14.8534 158.24 14.4214 158.24 13.5414V1.17335Z",fill:"#333333"}})])])]),H("h6",{staticClass:"h6"},[t._v("©2021 , Taiwan Bike. All Rights Reserved.")])]),H("div",[H("ul",{staticClass:"d-flex h6"},[H("li",{staticClass:"mr-12"},[H("p",{staticClass:"font-weight-3 mb-4"},[t._v("最新消息")]),H("router-link",{staticClass:"a d-block mb-4",attrs:{to:"/"}},[t._v("最新消息")]),H("router-link",{staticClass:"a d-block",attrs:{to:"/"}},[t._v("活動資訊")])],1),H("li",{staticClass:"mr-12"},[H("p",{staticClass:"font-weight-3 mb-4"},[t._v("自行車路線")]),H("router-link",{staticClass:"a d-block mb-4",attrs:{to:"/"}},[t._v("自行車路線")])],1),H("li",{staticClass:"mr-12"},[H("p",{staticClass:"font-weight-3 mb-4"},[t._v("單車租借")]),H("router-link",{staticClass:"a d-block mb-4",attrs:{to:"/"}},[t._v("單車租借")])],1),H("li",[H("p",{staticClass:"font-weight-3 mb-4"},[t._v("騎乘小叮嚀")]),H("router-link",{staticClass:"a d-block mb-4",attrs:{to:"/"}},[t._v("騎乘小叮嚀")])],1)])])])},u=[],f=(C("7e66"),{}),d=Object(i["a"])(f,l,u,!1,null,"3c9e2c58",null),M=d.exports,Z={name:"App",components:{Header:c,Footer:M},data:function(){return{}},methods:{}},h=Z,p=(C("78a8"),C("372f"),C("dd65"),Object(i["a"])(h,n,V,!1,null,"753b0486",null)),m=p.exports,v=(C("d3b7"),C("3ca3"),C("ddb0"),C("8c4f")),b=function(){return C.e("chunk-27fd3c78").then(C.bind(null,"bb51"))},g=function(){return C.e("chunk-41b12f71").then(C.bind(null,"a2f9"))},w=function(){return Promise.all([C.e("chunk-01406e6d"),C.e("chunk-57ff0fe1")]).then(C.bind(null,"4bb4"))},k=function(){return Promise.all([C.e("chunk-01406e6d"),C.e("chunk-5491e5ba")]).then(C.bind(null,"c1c4"))};H["default"].use(v["a"]);var _=[{path:"/The-F2E-bike_map",name:"Home",component:b},{path:"/news",name:"News",component:g},{path:"/map",name:"Map",component:w},{path:"/rent_bike",name:"RentBike",component:k}],y=new v["a"]({mode:"history",routes:_,props:{default:!0},scrollBehavior:function(){return{x:0,y:0,behavior:"smooth"}}}),x=y,j=C("5f5b"),E=(C("9453"),C("2dd8"),C("ecee")),O=C("ad3d"),P=C("c074"),T=C("f2d1");C("ac6d"),C("6cc5");E["c"].add(P["a"]),E["c"].add(T["a"]),H["default"].component("font-awesome-icon",O["a"]),H["default"].use(j["a"]),H["default"].config.productionTip=!1,new H["default"]({router:x,render:function(t){return t(m)}}).$mount("#app")},"7a9e":function(t,e,C){},"7e66":function(t,e,C){"use strict";C("951b")},"951b":function(t,e,C){},a546:function(t,e,C){"use strict";C("a7fd")},a7fd:function(t,e,C){},cf05:function(t,e,C){t.exports=C.p+"img/logo.5e00949a.png"},dd65:function(t,e,C){"use strict";C("7a9e")}});
//# sourceMappingURL=app.ddbaa0d1.js.map