(function(e){function t(t){for(var a,r,o=t[0],c=t[1],l=t[2],p=0,u=[];p<o.length;p++)r=o[p],s[r]&&u.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(u.length)u.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var o=n[r];0!==s[o]&&(a=!1)}a&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},s={app:0},i=[];function o(e){return c.p+"js/"+({}[e]||e)+"-legacy."+{"chunk-0a834e34":"66e902ba","chunk-7b29c686":"d74d35aa"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-0a834e34":1,"chunk-7b29c686":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise(function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-0a834e34":"981d59c1","chunk-7b29c686":"76e15dde"}[e]+".css",s=c.p+a,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var l=i[o],p=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(p===a||p===s))return t()}var u=document.getElementsByTagName("style");for(o=0;o<u.length;o++){l=u[o],p=l.getAttribute("data-href");if(p===a||p===s)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||s,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.request=a,delete r[e],d.parentNode.removeChild(d),n(i)},d.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(d)}).then(function(){r[e]=0}));var a=s[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise(function(t,n){a=s[e]=[t,n]});t.push(a[2]=i);var l,p=document.getElementsByTagName("head")[0],u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(e),l=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=s[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+a+": "+r+")");i.type=a,i.request=r,n[1](i)}s[e]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,p.appendChild(u)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/OpenAPI-Viewer/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],p=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=p;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},"16c7":function(e,t,n){"use strict";var a=n("707e"),r=n.n(a);r.a},2:function(e,t){},2348:function(e,t,n){},3:function(e,t){},4076:function(e,t,n){"use strict";var a=n("d9a0"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("0fb7"),n("450d");var a=n("f529"),r=n.n(a),s=(n("be4f"),n("896a")),i=n.n(s),o=(n("e612"),n("dd87")),c=n.n(o),l=(n("075a"),n("72aa")),p=n.n(l),u=(n("6611"),n("e772")),d=n.n(u),m=(n("1f1a"),n("4e4b")),f=n.n(m),h=(n("e960"),n("b35b")),v=n.n(h),g=(n("cadf"),n("551c"),n("097d"),n("2b0e")),y=(n("f559"),n("8c4f")),w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.loading,expression:"loading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"sw-app-shell",attrs:{id:"sw-app-shell"}},[n("vue-sideout-panel",{staticStyle:{"z-index":"9000"},attrs:{widths:["500px"]},on:{close:function(t){e.showSettingsPanel=!1}},model:{value:e.showSettingsPanel,callback:function(t){e.showSettingsPanel=t},expression:"showSettingsPanel"}},[n("div",{staticClass:"sw-side-panel-container"},[n("div",{staticClass:"sw-row"},[n("el-switch",{staticStyle:{"margin-right":"5px"},attrs:{"active-text":"Developer Mode"},on:{change:function(t){e.$store.commit("isDevMode",e.isDevMode)}},model:{value:e.isDevMode,callback:function(t){e.isDevMode=t},expression:"isDevMode"}}),n("el-select",{attrs:{size:"medium",placeholder:"Select API Server"},on:{change:function(t){e.$store.commit("selectedApiServer",e.selectedApiServer)}},model:{value:e.selectedApiServer,callback:function(t){e.selectedApiServer=t},expression:"selectedApiServer"}},e._l(e.parsedSpec.servers,function(e){return n("el-option",{key:e.url,attrs:{label:e.url,value:e.url}})}),1)],1)])]),n("vue-sideout-panel",{staticStyle:{"z-index":"9000"},attrs:{widths:["500px"]},on:{close:function(t){e.showLoadJsonPanel=!1}},model:{value:e.showLoadJsonPanel,callback:function(t){e.showLoadJsonPanel=t},expression:"showLoadJsonPanel"}},[n("div",{staticClass:"sw-side-panel-container"},[n("div",{staticClass:"sw-bold-small-text"},[e._v(" Paste JSON String below ")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.jsonSpecText,expression:"jsonSpecText"}],staticClass:"sw-mono-font",staticStyle:{flex:"1"},domProps:{value:e.jsonSpecText},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.loadJson()},input:function(t){t.target.composing||(e.jsonSpecText=t.target.value)}}}),n("button",{staticClass:"sw-btn sw-primary",staticStyle:{"margin-top":"5px",width:"70px","align-self":"flex-end"},on:{click:function(t){e.loadJson()}}},[e._v("LOAD")])])]),n("div",{ref:"appHeader",staticClass:"sw-app-header-container"},[n("div",{staticClass:"sw-row"},[n("div",{staticStyle:{display:"flex","align-items":"center"}},[n("mrin-logo",{staticStyle:{height:"36px",width:"36px","margin-left":"5px"}}),n("div",{staticClass:"sw-prod-title"},[e._v(" MrinDoc ")])],1),n("div",{staticStyle:{margin:"0px 8px"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.specUrl,expression:"specUrl"}],ref:"specUrl",staticClass:"sw-spec-url sw-dark sw-medium",attrs:{type:"text",placeholder:"Spec URL"},domProps:{value:e.specUrl},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.loadSpec(!1)},input:function(t){t.target.composing||(e.specUrl=t.target.value)}}}),n("button",{staticClass:"sw-btn sw-primary",staticStyle:{"border-radius":"0 2px 2px 0","padding-left":"5px","padding-right":"5px"},on:{click:function(t){e.loadSpec(!1)}}},[e._v("OPEN")])]),n("button",{staticClass:"sw-btn sw-primary",on:{click:function(t){e.showLoadJsonPanel=!0}}},[e._v("Load JSON")]),n("div",{staticStyle:{flex:"1"}}),n("div",{staticStyle:{display:"flex","flex-direction":"column","margin-right":"8px","align-items":"flex-end"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchVal,expression:"searchVal"}],staticClass:"sw-medium sw-dark",staticStyle:{width:"100px"},attrs:{type:"text",placeholder:"Search"},domProps:{value:e.searchVal},on:{keyup:e.onSearchKeyUp,input:function(t){t.target.composing||(e.searchVal=t.target.value)}}})]),n("div",{staticStyle:{display:"flex","flex-direction":"column","margin-right":"8px","align-items":"flex-start"}},[n("i",{staticClass:"el-icon-setting",staticStyle:{color:"#aaa","font-size":"32px",cursor:"pointer"},on:{click:function(t){e.showSettingsPanel=!e.showSettingsPanel}}})])])]),n("div",{ref:"pageContainer",staticClass:"sw-page-container"},[e.parsedSpec.info?n("div",{staticClass:"sw-doc-info"},[n("div",{staticClass:"sw-doc-title"},[e._v("\n          "+e._s(e.parsedSpec.info.title)+" \n          "),e.parsedSpec.info.version?n("span",{staticStyle:{"font-size":"14px","font-weight":"bold"}},[e._v(e._s(e.parsedSpec.info.version))]):e._e()]),e.docDescription?n("div",{staticClass:"sw-markdown-block"},[n("span",{domProps:{innerHTML:e._s(e.docDescription)}})]):e._e(),e.parsedSpec.info.license&&e.parsedSpec.info.license.name?n("div",{staticStyle:{"font-size":"12px",margin:"8px 0 0 0"}},[e._v(" \n          "+e._s(e.parsedSpec.info.license.name)+" \n          "),e.parsedSpec.info.license.url?n("a",{attrs:{href:e.parsedSpec.info.license.url}},[e._v(" "+e._s(e.parsedSpec.info.license.url))]):e._e()]):e._e()]):e._e(),e.parsedSpec.securitySchemes?n("security-schemes",{attrs:{schemes:e.parsedSpec.securitySchemes,authStatusText:e.authStatus}}):e._e(),e._l(e.parsedSpec.tags,function(t){return n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"tag.show"}],key:t.name,staticClass:"sw-tag-container"},[n("div",{staticClass:"sw-tag-title"},[e._v(e._s(t.name))]),t.description?n("span",{staticClass:"sw-markdown-block",domProps:{innerHTML:e._s(e.$marked(t.description))}}):e._e(),n("end-point",{attrs:{paths:t.paths,parameters:t.parameters}})],1)})],2)],1)},S=[],x=(n("a481"),n("6762"),n("2fdb"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{width:"100%"}},e._l(e.paths,function(t,a){return t.show?n("div",{key:a,class:"sw-endpoint-wrapper "+t.method+" "+(t.expanded?"sw-expanded":"sw-collapsed")},[n("div",{class:"sw-endpoint-head "+t.method+" "+(t.expanded?"sw-expanded":"sw-collapsed"),on:{click:function(n){e.expandEndPoint(t)}}},[n("div",{class:"sw-method "+t.method},[e._v(" "+e._s(t.method)+" ")]),n("div",{class:"sw-path "+(t.depricated?" sw-depricated":"")},[e._v(" "+e._s(t.path)+" ")]),t.depricated?n("span",{staticStyle:{"font-size":"12px","text-transform":"uppercase","font-weight":"bold",color:"orangered",margin:"2px 0 0 5px"}},[e._v(" Depricated ")]):e._e(),n("div",{staticStyle:{"min-width":"60px",flex:"1"}}),n("div",{staticClass:"sw-end-point-descr"},[e._v(" "+e._s(t.summary)+" ")])]),t.expandedAtLeastOnce?n("div",{directives:[{name:"show",rawName:"v-show",value:t.expanded,expression:"fullPath.expanded"}],class:"sw-endpoint-body "+t.method},[t.summary||t.description?n("div",{staticClass:"sw-end-point-summary"},[n("div",{staticClass:"sw-end-point-title"},[e._v(e._s(t.summary))]),t.summary!==t.description?n("div",{staticClass:"sw-markdown-block"},[n("span",{domProps:{innerHTML:e._s(e.toHtml(t.description))}})]):e._e()]):e._e(),n("div",{class:"sw-req-resp-container "+e.layoutClass},[n("request-parameters",{staticClass:"sw-request",attrs:{method:t.method,url:t.path,parameters:t.parameters,requestBody:t.requestBody}}),n("response-types",{staticClass:"sw-response",attrs:{responses:t.responses}})],1)]):e._e()]):e._e()}),0)}),b=[],_=n("0e54"),k=n.n(_),T={props:{paths:{type:Array,required:!0,default:function(){return[]}}},data:function(){return{layoutClass:"sw-row"}},methods:{expandEndPoint:function(e){e.expandedAtLeastOnce=!0,e.expanded=!e.expanded},toHtml:function(e){return e?k()(e):""}},mounted:function(){},components:{RequestParameters:function(){return n.e("chunk-7b29c686").then(n.bind(null,"b2da"))},ResponseTypes:function(){return n.e("chunk-0a834e34").then(n.bind(null,"1bbf"))}}},O=T,A=(n("5e46"),n("2877")),C=Object(A["a"])(O,x,b,!1,null,"7c533553",null);C.options.__file="EndPoint.vue";var P=C.exports,U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"1 0 511 512"}},[n("path",{attrs:{d:"M350.96 411.023C315.914 471.395 250.566 512 175.73 512S35.547 471.395.5 411.023c25.64-44.16 67.488-77.746 117.4-92.598 18.32-5.457 37.73-8.383 57.82-8.383 64.27 0 121.527 29.945 158.62 76.637a202.91 202.91 0 0 1 16.609 24.344zm0 0",fill:"#adc165"}}),n("path",{attrs:{d:"M334.352 386.68c-57.172 16.984-121.246 8.652-173.89-28.223-16.465-11.527-30.68-25.05-42.55-40.03 18.32-5.457 37.73-8.383 57.82-8.383 64.27 0 121.527 29.945 158.62 76.637zm77.172 32.18H85.195a7.84 7.84 0 0 1-7.84-7.84 7.84 7.84 0 0 1 7.84-7.836h326.328a7.84 7.84 0 0 1 7.84 7.84 7.84 7.84 0 0 1-7.84 7.836zm0 0",fill:"#99aa52"}}),n("path",{attrs:{d:"M374.32 337.773c-1.086 10.242-2.97 20.414-5.62 30.426-67.48 17.906-142.39.406-195.31-52.512-52.922-52.9-70.418-127.828-52.512-195.31 51.11-13.555 106.496-6.812 153.34 20.258 15 8.664 29.133 19.418 41.97 32.254 45.066 45.07 64.445 106.1 58.133 164.883zm0 0",fill:"#ffc73b"}}),n("path",{attrs:{d:"M374.32 337.773c-51.195-29.6-89.03-81.246-98.824-144.207-2.793-17.937-3.137-35.695-1.277-52.93 15 8.664 29.133 19.418 41.97 32.254 45.066 45.07 64.445 106.1 58.133 164.883zm37.203 81.086c-2.008 0-4.012-.762-5.543-2.293l-230.75-230.75a7.84 7.84 0 0 1 11.086-11.086l230.75 230.75c3.06 3.063 3.06 8.023 0 11.086-1.53 1.53-3.54 2.293-5.543 2.293zm0 0",fill:"#efb025"}}),n("path",{attrs:{d:"M310.543 175.23c0 74.84 40.605 140.184 100.98 175.234C471.895 315.418 512.5 250.07 512.5 175.23S471.898 35.047 411.523 0c-60.375 35.047-100.98 100.395-100.98 175.23zm0 0",fill:"#ff903e"}}),n("path",{attrs:{d:"M411.523 418.86a7.84 7.84 0 0 1-7.84-7.836V84.69c0-4.328 3.512-7.84 7.84-7.84s7.84 3.512 7.84 7.84v326.332a7.84 7.84 0 0 1-7.84 7.836zm0 0",fill:"#e87425"}})])])},L=[],q={props:{color:{type:String,default:"#333"}}},I=q,$=Object(A["a"])(I,U,L,!1,null,null,null);$.options.__file="Logo.vue";var j=$.exports,E=n("8d9b"),N=n.n(E),M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"sw-security-title"},[e._v(" AUTHENTICATION "),n("span",{staticStyle:{color:"orangered","font-size":"20px"}},[e._v(" "+e._s(e.authStatusData))])]),n("table",{staticClass:"sw-table",staticStyle:{"margin-top":"5px","line-height":"16px",width:"auto"}},[e._m(0),e._l(e.schemes,function(t,a){return n("tr",{key:a},[n("td",{staticClass:"sw-markdown-block",staticStyle:{width:"auto"}},[n("div",{staticClass:"sw-security-sub-title"},[e._v(" "+e._s(t.type)+" "+e._s(t.scheme?t.scheme:"")+" ")]),n("span",{domProps:{innerHTML:e._s(e.$marked(t.description?t.description:""))}})]),"apiKey"===t.type?n("td",[e._v("\n        If Activated, all requests will send "),n("code",[e._v("'"+e._s(t.name)+"'")]),e._v(" in "),n("code",[e._v("'"+e._s(t.in)+"'")]),e._v(" with the given value\n        "),n("div",{staticStyle:{margin:"5px 0 10px 0"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.apiToken,expression:"apiToken"}],staticClass:"sw-small",staticStyle:{width:"205px","margin-right":"5px"},attrs:{type:"text",placeholder:"api-token"},domProps:{value:e.apiToken},on:{input:function(t){t.target.composing||(e.apiToken=t.target.value)}}}),n("button",{staticClass:"sw-btn sw-primary sw-small",on:{click:function(n){e.onActivateSecurityScheme(t)}}},[e._v("ACTIVATE")])])]):"http"===t.type&&"basic"===t.scheme?n("td",[e._v("\n          If Activated, all requests will send "),n("code",[e._v("'Authorization'")]),e._v(" \n          header that contains the word  "),n("code",[e._v("'Basic'")]),e._v(" word followed by a space and a base64-encoded string username:password.\n          "),n("div",{staticStyle:{margin:"5px 0 10px 0"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"sw-small",staticStyle:{width:"100px"},attrs:{type:"text",placeholder:"username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"sw-small",staticStyle:{width:"100px",margin:"0 5px"},attrs:{type:"text",placeholder:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),n("button",{staticClass:"sw-btn sw-primary sw-small",on:{click:function(n){e.onActivateSecurityScheme(t)}}},[e._v("ACTIVATE")])])]):"http"===t.type&&"bearer"===t.scheme?n("td",[e._v("\n          If Activated, all requests will send "),n("code",[e._v("'Authorization'")]),e._v(" \n          header that contains the word  "),n("code",[e._v("'Bearer'")]),e._v(" word followed by a space and a Token String.\n          "),n("div",{staticStyle:{margin:"5px 0 10px 0"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.bearerToken,expression:"bearerToken"}],staticClass:"sw-small",staticStyle:{width:"205px","margin-right":"5px"},attrs:{type:"text",placeholder:"bearer-token"},domProps:{value:e.bearerToken},on:{input:function(t){t.target.composing||(e.bearerToken=t.target.value)}}}),n("button",{staticClass:"sw-btn sw-primary sw-small",on:{click:function(n){e.onActivateSecurityScheme(t)}}},[e._v("ACTIVATE")]),n("div",{staticClass:"sw-gray-small-text",staticStyle:{"font-size":"11px","margin-top":"2px"}},[e._v("Once activated, this token will be sent in 'Authorization' header of every request ")])])]):"oauth2"===t.type?n("td",e._l(t.flows,function(t,a){return n("span",{key:a},[t.authorizationUrl?n("div",[n("b",[e._v("Auth URL:")]),n("code",{staticStyle:{color:"#999"}},[e._v(" "+e._s(t.authorizationUrl))])]):e._e(),t.tokenUrl?n("div",[n("b",[e._v("Token URL: ")]),n("code",{staticStyle:{color:"#999"}},[e._v(" "+e._s(t.tokenUrl)+" ")])]):e._e(),t.refreshUrl?n("div",[n("b",[e._v("Refresh URL: ")]),n("code",{staticStyle:{color:"#999"}},[e._v(" "+e._s(t.refreshUrl))])]):e._e(),t.scopes?[n("b",[e._v("Scopes:")]),e._l(t.scopes,function(t,a){return n("code",{key:a,staticStyle:{color:"#999"}},[e._v(" \n              "+e._s(a)+", \n            ")])})]:e._e(),n("div",{staticStyle:{margin:"5px 0 10px 0"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.clientId,expression:"clientId"}],staticClass:"sw-small",staticStyle:{width:"100px"},attrs:{type:"text",placeholder:"client-id"},domProps:{value:e.clientId},on:{input:function(t){t.target.composing||(e.clientId=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.clientSecret,expression:"clientSecret"}],staticClass:"sw-small",staticStyle:{width:"100px",margin:"0 5px"},attrs:{type:"text",placeholder:"client-secret"},domProps:{value:e.clientSecret},on:{input:function(t){t.target.composing||(e.clientSecret=t.target.value)}}}),n("button",{staticClass:"sw-btn sw-primary sw-small",on:{click:function(n){e.onOAuth(a,t)}}},[e._v("ACTIVATE")])]),t.authorizationUrl?n("div",[n("b",[e._v("Directions: ")]),e._v(" Register this client with "),n("code",[e._v(e._s(e.getOAuthBaseUrl(t.authorizationUrl)))]),n("br")]):e._e(),n("ul",[e._m(1,!0),n("li",[e._v(" During registration, specify callback(redirect) url as "),n("code",[e._v(e._s(e.browserLocation.origin))])])])],2)}),0):n("td",[e._v(" \n        "+e._s(t.type)+"\n      ")])])})],2)])},D=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("th",[e._v("Type ")]),n("th",[e._v(" Authentication Procedure ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[e._v(" Obtain a "),n("code",[e._v("client-id")]),e._v(" and "),n("code",[e._v("client-secret")])])}],z=(n("7f7f"),n("c0d6"));n("6b54");function J(e,t,n,a,r){var s=Math.floor(1099511627776*(1+Math.random())).toString(16),i="".concat(e,"?response_type=").concat(a,"&client_id=").concat(t,"&redirect_uri=").concat(n,"&state=").concat(s);r&&(i=i+"&scope="+r),window.location.assign(i)}var V=n("b279"),H={props:{schemes:{type:Object},authStatusText:{type:String,default:"(Not Authenticated)"}},data:function(){return{username:"",password:"",apiToken:"",bearerToken:"",customHeader:"",customToken:"",clientId:"",clientSecret:"",authStatusData:this.authStatusText,browserLocation:location}},methods:{onActivateSecurityScheme:function(e){if("apikey"===e.type.toLowerCase()&&"header"===e.in)this.$data.apiToken&&(z["a"].commit("reqTokenType",e.type.toLowerCase()),z["a"].commit("reqSendTokenIn",e.name),z["a"].commit("reqToken",this.$data.apiToken),this.authStatusData="(API Key Active)");else if("http"===e.type&&"bearer"===e.scheme)this.$data.bearerToken&&(z["a"].commit("reqTokenType",e.scheme),z["a"].commit("reqToken",this.$data.bearerToken),this.authStatusData="(HTTP Bearer Active)");else if("http"===e.type&&"basic"===e.scheme&&this.$data.username&&this.$data.password){z["a"].commit("reqTokenType",e.scheme);var t=btoa(this.$data.username+":"+this.$data.password);z["a"].commit("reqToken",t),this.authStatusData="(HTTP Basic Active)"}},onOAuth:function(e,t){var n=location.href.substring(0,location.href.indexOf("#"))+"oauth.html",a="token",r="";z["a"].commit("oAuthTokenUrl",t.tokenUrl),J(t.authorizationUrl,this.clientId,n,a,r)},getOAuthBaseUrl:function(e){return Object(V["c"])(e)}},mounted:function(){}},R=H,B=(n("4076"),Object(A["a"])(R,M,D,!1,null,"0525926e",null));B.options.__file="SecuritySchemes.vue";var W=B.exports,K=(n("7514"),n("28a5"),n("a789")),F=n.n(K),G=n("9f5f"),Q=n.n(G);function X(e){var t,n={patch:!0,warnOnly:!0};return t="string"===typeof e?Q.a.convertUrl(e,n):Q.a.convertObj(e,n),t.then(function(e){console.info("%c Convertion to OpenAPI 3.0 - Success !!! ","color:cornflowerblue");var t=new F.a;return t.validate(e.openapi,{validate:{spec:!1,schema:!1}})}).then(function(t){console.info("%c OpenAPI 3.0 Dereferencing - Success !!! ","color:cornflowerblue");var n=["get","put","post","delete","patch","options","head"],a=[],r=0,s=function(e){var s={summary:t.paths[e].summary,description:t.paths[e].description,servers:t.paths[e].servers?t.paths[e].servers:[],parameters:t.paths[e].parameters?t.paths[e].parameters:[]};n.forEach(function(n){var i,o,c;if(t.paths[e][n]){var l=t.paths[e][n];if(l.tags)o=l.tags[0],t.tags&&(c=t.tags.find(function(e){return e.name===o}));else{var p=e.indexOf("/",1);-1===p?p=e.length-1:p-=1,o=e.substr(1,p)}i=a.find(function(e){return e.name==o}),i||(i={show:!0,name:o,description:c?c.description:"",paths:[]},a.push(i));var u=l.summary?l.summary:"",d=l.description?l.description:"";if(!u&&d)if(d.length>100){var m=-1;m=d.indexOf("\n"),(-1===m||m>100)&&(m=d.indexOf(". ")),(-1===m||m>100)&&(m=d.indexOf(".")),u=-1===m||m>100?d:d.substr(0,m)}else u=d;i.paths.push({show:!0,expanded:!1,expandedAtLeastOnce:!1,summary:u,method:n,description:l.description,path:e,operationId:l.operationId,requestBody:l.requestBody,parameters:l.parameters,servers:l.servers?s.servers.concat(l.servers):s.servers,responses:l.responses,depricated:l.deprecated,security:l.security,commonSummary:s.summary,commonDescription:s.description}),r++}})};for(var i in t.paths)s(i);var o={},c=[];o=t.components?t.components.securitySchemes:{},t.servers&&t.servers.map(function(t){if(t.url&&"/"===t.url.substr(0,1)){var n=e.split("/");t.url=n[0]+"//"+n[2]+t.url}}),c=t.servers;var l={info:t.info,tags:a,externalDocs:t.externalDocs,securitySchemes:o,servers:c,basePath:t.basePath,totalPathCount:r};return Promise.resolve(l)}).catch(function(e){console.error(e)})}var Y={data:function(){return{specUrl:"",searchVal:"",parsedSpec:{},isDevMode:!1,selectedApiServer:"",isSpecLoaded:!1,expandAll:!1,loading:!1,authStatus:"",docDescription:"",showSettingsPanel:!1,showLoadJsonPanel:!1,jsonSpecText:"",prevScrollpos:0}},methods:{loadJson:function(){var e=this;try{var t=JSON.parse(this.jsonSpecText);e.loading=!0,X(t).then(function(t){e.loading=!1,e.specUrl="https://api.apis.guru/v2/specs/bitbucket.org/2.0/swagger.json",e.showLoadJsonPanel=!1,e.afterSpecParsedAndValidated(t)}).catch(function(t){return e.loading=!1,e.$message({showClose:!0,message:"Oops, Error encountered while parsing the Spec",type:"error"}),console.error("Onoes! The API is invalid. "+t.message),!1})}catch(n){e.$message({showClose:!0,message:"Unable to parse the JSON Text",type:"error"})}},loadSpec:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this;t.loading=!0,t.$nextTick(function(){X(t.specUrl).then(function(n){t.loading=!1,t.jsonSpecText="",void 0!==n&&null!==n?t.afterSpecParsedAndValidated(n,e):t.$message({showClose:!0,message:"Network Error encountered while fetching the Spec",type:"error"})}).catch(function(e){return t.loading=!1,t.$message({showClose:!0,message:"Oops, Error encountered while parsing the Spec",type:"error"}),console.error("Onoes! The API is invalid. "+e.message),!1})})},onSearchKeyUp:Object(V["a"])(function(e){var t=this;this.parsedSpec.tags.map(function(e){for(var n=0,a=0;a<e.paths.length;a++)e.paths[a].path.toLowerCase().includes(t.searchVal.toLowerCase())?(e.paths[a].show=!0,n++):e.paths[a].show=!1;e.show=n>0})},500),afterSpecParsedAndValidated:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this,a="";n.searchVal="",n.parsedSpec=e,e.info.description&&(n.docDescription=k()(e.info.description)),(e.servers&&0==e.servers.length||!e.servers)&&(a=n.specUrl.substring(0,n.specUrl.indexOf("/",n.specUrl.indexOf("//")+2)),e.basePath&&(a=a+"/"+e.basePath.replace(/^\/|\/$/g,"")),n.parsedSpec.servers=[{url:a,description:"Auto generated Server URI"}]),n.isSpecLoaded=!0,n.isDevMode=!0,n.selectedApiServer=e.servers[0].url,z["a"].commit("specUrl",n.specUrl),z["a"].commit("selectedApiServer",e.servers[0].url),z["a"].commit("oAuthTokenUrl",""),!1===t&&(z["a"].commit("isDevMode",!0),z["a"].commit("reqToken",""),z["a"].commit("reqTokenType",""),z["a"].commit("reqSendTokenIn",""),z["a"].commit("reqHeader",""))},onExpandAll:function(e){void 0!==this.parsedSpec.tags&&this.parsedSpec.tags.map(function(t){t.paths.map(function(t){t.expanded=e,t.expandedAtLeastOnce=!0})})},onActivateSecurityScheme:function(e){console.log("%o",e)},handleScroll:function(){var e=this,t=e.$refs.pageContainer.scrollTop;e.prevScrollpos>t?(e.$refs.appHeader.style.top="0",e.$refs.pageContainer.style.marginTop="70px"):(e.$refs.appHeader.style.top="-75px",e.$refs.pageContainer.style.marginTop="0px"),e.prevScrollpos=t}},beforeRouteUpdate:function(e,t,n){e.path.startsWith("/load")&&e.params.specUrl&&(this.authStatus="(Not Authenticated)",this.specUrl=e.params.specUrl,this.loadSpec(!1)),n()},mounted:function(){console.log("Adding Listener"),this.$refs.pageContainer.addEventListener("scroll",this.handleScroll),"/reload"===this.$route.fullPath?(this.specUrl=z["a"].state.specUrl,z["a"].commit("reqToken",localStorage.getItem("accessToken")),z["a"].commit("reqTokenType",localStorage.getItem("tokenType")),this.specUrl&&(this.authStatus="(OAuth Applied)",this.loadSpec(!0))):this.$route.fullPath.startsWith("/load")&&this.$route.params.specUrl?(this.authStatus="(Not Authenticated)",this.specUrl=this.$route.params.specUrl,this.loadSpec(!1)):this.authStatus="(Not Authenticated)"},created:function(){},destroyed:function(){document.removeEventListener("scroll",this.handleScroll)},components:{EndPoint:P,MrinLogo:j,SecuritySchemes:W,VueSideoutPanel:N.a}},Z=Y,ee=(n("16c7"),Object(A["a"])(Z,w,S,!1,null,"127d0e41",null));ee.options.__file="AppShell.vue";var te=ee.exports;g["default"].use(y["a"]);var ne=new y["a"]({routes:[{path:"/",redirect:function(e){return"load"}},{path:"/load/:specUrl?",name:"load",component:te},{path:"/reload",name:"reload",component:te}]});ne.beforeEach(function(e,t,n){if(e.path.startsWith("/load")&&!e.params.specUrl){var a="";a="https://api.apis.guru/v2/specs/bitbucket.org/2.0/swagger.json",ne.push("/load/".concat(encodeURIComponent(a)))}n()});var ae=ne,re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},se=[],ie=(n("5c0b"),{}),oe=Object(A["a"])(ie,re,se,!1,null,null,null);oe.options.__file="App.vue";var ce=oe.exports,le=n("4897"),pe=n.n(le),ue=n("b2d6"),de=n.n(ue);g["default"].config.productionTip=!1,pe.a.use(de.a),g["default"].use(v.a),g["default"].use(f.a),g["default"].use(d.a),g["default"].use(p.a),g["default"].use(c.a),g["default"].use(i.a.directive),g["default"].prototype.$message=r.a,g["default"].prototype.$loading=i.a.service,g["default"].prototype.$marked=k.a;new g["default"]({router:ae,store:z["a"],render:function(e){return e(ce)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("5e27"),r=n.n(a);r.a},"5e27":function(e,t,n){},"5e46":function(e,t,n){"use strict";var a=n("2348"),r=n.n(a);r.a},"707e":function(e,t,n){},b279:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"f",function(){return i}),n.d(t,"b",function(){return o}),n.d(t,"d",function(){return s}),n.d(t,"c",function(){return p}),n.d(t,"e",function(){return u});var a=n("53ca");n("5df3"),n("c02b"),n("28a5"),n("ac6a"),n("456d"),n("f751"),n("cadf"),n("551c"),n("097d");function r(e,t){var n=null;return function(){clearTimeout(n);var a=arguments,r=this;n=setTimeout(function(){e.apply(r,a)},t)}}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a="";if("circular"===e.type)return"circular-ref";if(e.enum){var r="";e.enum.map(function(e){r=r+e+", "}),a="enum:〔 ".concat(r.slice(0,-2)," 〕")}else e.type&&(a+=e.type);"integer"!==e.type&&"number"!==e.type||(void 0!==e.minimum&&void 0!==e.maximum?a="".concat(a," (").concat(e.exclusiveMinimum?">":"").concat(e.minimum," ⋯ ").concat(e.exclusiveMaximum?"<":""," ").concat(e.maximum,")"):void 0!==e.minimum&&void 0===e.maximum?a="".concat(a," (").concat(e.exclusiveMinimum?">":"≥").concat(e.minimum,")"):void 0===e.minimum&&void 0!==e.maximum&&(a="(".concat(e.exclusiveMaximum?"<":"≤").concat(e.maximum,")")),void 0!==e.multipleOf&&(a="(multiple of ".concat(e.multipleOf,")"))),"string"===e.type&&(void 0!==e.minLength&&void 0!==e.maxLength?a="".concat(a," (").concat(e.minLength," to ").concat(e.maxLength," chars)"):void 0!==e.minLength&&void 0===chema.maxLength?a="".concat(a," (min:").concat(e.minLength,")"):void 0===e.minLength&&void 0!==e.maxLength&&(a="".concat(a," (max:").concat(e.maxLength,")"))),t?(t.readOnly&&(a="".concat(a," Ⓡ")),t.writeOnly&&(a="".concat(a," Ⓦ")),t.deprecated&&(a="".concat(a," ❌"))):(e.readOnly&&(a="".concat(a," Ⓡ")),e.writeOnly&&(a="".concat(a," Ⓦ")),e.deprecated&&(a="".concat(a," ❌")));var s=n?"":"<br/>";return e.format&&(a+=" ".concat(s," (").concat(e.format,")")),e.pattern&&(a+=" ".concat(s,"(").concat(e.pattern,")")),a}function i(e,t){if(null!=e){if("object"===e.type||e.properties)for(var n in e.properties)t[n]=i(e.properties[n],{});else if("array"===e.type||e.items)t=[i(e.items,{})];else{if(!e.allOf)return"".concat(s(e),"~|~").concat(e.description?e.description:"");if(1===e.allOf.length){if(e.allOf[0]){var a={readOnly:e.readOnly,writeOnly:e.writeOnly,depricated:e.deprecated};return"".concat(s(e.allOf[0],a),"~|~").concat(e.description?e.description:"")}return"string~|~".concat(e.description?e.description:"")}var r={};e.allOf.map(function(e){if(e&&e.properties){var t=i(e,{});Object.assign(r,t)}}),t=r}return t}}function o(e,t,n,a,r){var s=[];if(e)for(var i in e){var o="";try{o=JSON.parse(e[i].value),s.push({exampleType:"json",exampleValue:"text"===r?JSON.stringify(o,void 0,2):o})}catch(u){s.push({exampleType:"text",exampleValue:e[i].value})}}else if(t)try{var l=JSON.parse(t);s.push({exampleType:"json",exampleValue:"text"===r?JSON.stringify(l,void 0,2):l})}catch(u){s.push({exampleType:"text",exampleValue:t})}if(0==s.length)if(n){var p=c(n,{},{includeReadOnly:!0,includeWriteOnly:!0,deprecated:!0});s.push({exampleType:"json",exampleValue:"text"===r?JSON.stringify(p,void 0,2):p})}else s.push({exampleType:"text",exampleValue:""});return s}function c(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(null!=e){if("object"===e.type||e.properties)for(var a in e.properties)e.properties[a].deprecated||e.properties[a].readOnly&&!n.includeReadOnly||e.properties[a].writeOnly&&!n.includeWriteOnly||(t[a]=c(e.properties[a],{},n));else if("array"===e.type||e.items)t=[c(e.items,{},n)];else{if(!e.allOf)return l(e);if(1===e.allOf.length)return e.allOf[0]?l(e.allOf[0]):"string";var r={};e.allOf.map(function(e){if(e&&e.type){var t=c(e,{},n);Object.assign(r,t)}}),t=r}return t}}function l(e){if(e.example)return e.example;if(0===Object.keys(e).length)return null;var t=e.format||e.type||(e.enum?"enum":null);switch(t){case"int32":case"int64":case"integer":return 0;case"float":case"double":case"number":return.5;case"string":return e.enum?e.enum[0]:e.pattern?e.pattern:"string";case"byte":return btoa("string");case"binary":return"binary";case"boolean":return!1;case"date":return new Date(0).toISOString().split("T")[0];case"date-time":return new Date(0).toISOString();case"dateTime":return new Date(0).toISOString();case"password":return"password";case"enum":return e.enum[0];case"uri":return"http://example.com";case"uuid":return"3fa85f64-5717-4562-b3fc-2c963f66afa6";case"email":return"user@example.com";case"hostname":return"example.com";case"ipv4":return"198.51.100.42";case"ipv6":return"2001:0db8:5b96:0000:0000:426f:8e17:642a";case"circular":return"CIRCULAR REF";default:return e.nullable?null:(console.warn("Unknown schema value",e),"?")}}function p(e){var t=e.split("/");return t[0]+"//"+t[2]}function u(e){var t=new WeakSet;return function(n,r){if("object"===Object(a["a"])(r)&&null!==r){if(t.has(r)){if(e>0)return{};var s=JSON.parse(JSON.stringify(r,u(e+1)));return t.add(s),s}t.add(r)}return r}}},c0d6:function(e,t,n){"use strict";n("cadf"),n("551c"),n("097d");var a=n("2b0e"),r=n("2f62"),s=n("bfa9");a["default"].use(r["a"]);var i=["lang","specUrl","reqToken","reqTokenType","reqHeader","reqSendTokenIn","oAuthTokenUrl"];new s["a"]({key:"mrindoc",storage:window.localStorage,filter:function(e){return i.indexOf(e.type)>=0}});t["a"]=new r["a"].Store({state:{lang:"en",specUrl:"",isDevMode:!1,selectedApiServer:"",reqHeader:"",reqToken:"",reqTokenType:"",reqSendTokenIn:"",oAuthClientId:"",oAuthClientSecret:"",oAuthTokenUrl:""},mutations:{lang:function(e,t){e.lang=t},specUrl:function(e,t){e.specUrl=t},isDevMode:function(e,t){e.isDevMode=t},reqToken:function(e,t){e.reqToken=t},reqTokenType:function(e,t){e.reqTokenType=t},reqHeader:function(e,t){e.reqHeader=t},reqSendTokenIn:function(e,t){e.reqSendTokenIn=t},oAuthClientId:function(e,t){e.oAuthClientId=t},oAuthClientSecret:function(e,t){e.oAuthClientSecret=t},oAuthTokenUrl:function(e,t){e.oAuthTokenUrl=t},selectedApiServer:function(e,t){e.selectedApiServer=t}},plugins:[(new s["a"]).plugin]})},d9a0:function(e,t,n){}});
//# sourceMappingURL=app-legacy.7366358c.js.map