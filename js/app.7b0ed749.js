(function(t){function e(e){for(var n,r,i=e[0],c=e[1],l=e[2],u=0,h=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&h.push(a[r][0]),a[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);f&&f(e);while(h.length)h.shift()();return s.push.apply(s,l||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],n=!0,r=1;r<o.length;r++){var i=o[r];0!==a[i]&&(n=!1)}n&&(s.splice(e--,1),t=c(c.s=o[0]))}return t}var n={},r={app:0},a={app:0},s=[];function i(t){return c.p+"js/"+({booking:"booking",photos:"photos",shows:"shows"}[t]||t)+"."+{booking:"bf79d0f3",photos:"0c5eba64",shows:"8870ca28"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(t){var e=[],o={booking:1,photos:1,shows:1};r[t]?e.push(r[t]):0!==r[t]&&o[t]&&e.push(r[t]=new Promise((function(e,o){for(var n="css/"+({booking:"booking",photos:"photos",shows:"shows"}[t]||t)+"."+{booking:"a00cc302",photos:"3be1252e",shows:"8729856e"}[t]+".css",a=c.p+n,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===a))return e()}var h=document.getElementsByTagName("style");for(i=0;i<h.length;i++){l=h[i],u=l.getAttribute("data-href");if(u===n||u===a)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||a,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete r[t],f.parentNode.removeChild(f),o(s)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[t]=0})));var n=a[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,o){n=a[t]=[e,o]}));e.push(n[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(t);var h=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(f);var o=a[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;h.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",h.name="ChunkLoadError",h.type=n,h.request=r,o[1](h)}a[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,o){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(o,n,function(e){return t[e]}.bind(null,n));return o},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var h=0;h<l.length;h++)e(l[h]);var f=u;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"513d":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("div",{attrs:{id:"nav"}},[e("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" |\n    "),e("router-link",{attrs:{to:"/shows"}},[t._v("Shows")]),t._v(" |\n    "),e("router-link",{attrs:{to:"/photos"}},[t._v("Photos")]),t._v(" |\n    "),e("router-link",{attrs:{to:"/booking"}},[t._v("Booking")]),t._v(" | follow us:\n    "),t._m(0),t._m(1)],1),e("div",{staticClass:"main-content"},[e("router-view")],1),e("footer",[e("div",{staticClass:"footer"},["/booking"!==t.$route.path?e("div",{staticClass:"email"},[t._v("\n          Email: "),e("a",{staticClass:"our-email",attrs:{href:"mailto:somethinglikethatclt@gmail.com"}},[t._v("somethinglikethatclt@gmail.com")]),e("hr"),e("h3",[t._v("Need a reference?")]),e("h4",[t._v("Reach out to one of our favorite places to play:")]),t._m(2),t._m(3)]):t._e(),t._m(4),"/booking"!==t.$route.path?e("div",{staticClass:"logo"},[e("img",{attrs:{src:o("e1f3"),alt:""}})]):t._e()])])])},a=[function(){var t=this,e=t._self._c;return e("a",{attrs:{href:"https://www.instagram.com/somethinglikethatclt/reels/",target:"_blank"}},[e("i",{staticClass:"fab fa-instagram"})])},function(){var t=this,e=t._self._c;return e("a",{attrs:{href:"https://www.facebook.com/SomethingLikeThatCLT",target:"_blank"}},[e("i",{staticClass:"fab fa-facebook-f"})])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"reference"},[t._v("John (Edge City Brewery): "),e("a",{attrs:{href:"mailto:john@edgecitybrewery.com"}},[t._v("john@edgecitybrewery.com")])])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"reference"},[t._v("Kristen (Local Loaf): "),e("a",{attrs:{href:"mailto:events@localloafcharlotte.com"}},[t._v("events@localloafcharlotte.com")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"social-row"},[e("a",{attrs:{href:"https://www.instagram.com/somethinglikethatclt/reels/",target:"_blank"}},[e("i",{staticClass:"fab fa-instagram"})]),e("a",{attrs:{href:"https://www.facebook.com/SomethingLikeThatCLT",target:"_blank"}},[e("i",{staticClass:"fab fa-facebook-f"})])])}],s=(o("5792"),o("2877")),i={},c=Object(s["a"])(i,r,a,!1,null,null,null),l=c.exports,u=o("8c4f"),h=function(){var t=this;t._self._c;return t._m(0)},f=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("img",{staticClass:"bandimg",attrs:{alt:"The full band",src:o("da36")}}),e("h1",[t._v("Something Like That")]),e("p",[t._v("Something Like That is a 4 piece band with a penchant for harmonies, mash-ups, and jazzy sounds.  Although they primarily put their own twist on a variety of covers,  Janis Joplin to Black Street and everything in between, the band has been known to slip in an original song here and there.")])])}],p={name:"home",components:{}},m=p,d=Object(s["a"])(m,h,f,!1,null,null,null),g=d.exports;n["a"].use(u["a"]);var v=new u["a"]({mode:"history",routes:[{path:"/",name:"home",component:g},{path:"/shows",name:"shows",component:function(){return o.e("shows").then(o.bind(null,"f6f7"))}},{path:"/photos",name:"photos",component:function(){return o.e("photos").then(o.bind(null,"fcb2"))}},{path:"/booking",name:"booking",component:function(){return o.e("booking").then(o.bind(null,"7138"))}},{path:"*",component:g}]}),b=o("2f62");n["a"].use(b["a"]);var _=new b["a"].Store({state:{},mutations:{},actions:{}});n["a"].config.productionTip=!1,new n["a"]({router:v,store:_,render:function(t){return t(l)}}).$mount("#app")},5792:function(t,e,o){"use strict";o("513d")},da36:function(t,e,o){t.exports=o.p+"img/theband.a22fbf40.jpg"},e1f3:function(t,e,o){t.exports=o.p+"img/SLT-logo.45894005.png"}});
//# sourceMappingURL=app.7b0ed749.js.map