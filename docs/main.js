(()=>{"use strict";var r={556:(r,n,t)=>{t.d(n,{Z:()=>s});var e=t(81),o=t.n(e),a=t(645),i=t.n(a)()(o());i.push([r.id,"@import url(https://fonts.googleapis.com/css2?family=Overpass:wght@400;700&display=swap);"]),i.push([r.id,"/*CSS general variables*/\r\n\r\n:root {\r\n    --submitButtonColor: hsl(25, 97%, 53%);\r\n    --titleColor: hsl(0, 0%, 100%);\r\n    --paragraphColor: hsl(217, 12%, 63%);\r\n    --selectedPointsColor: hsl(216, 12%, 54%);\r\n    --unselectPointColor: hsl(213, 19%, 25%);\r\n    --cardColor: hsl(213, 19%, 18%);\r\n    --bgColor: hsl(216, 12%, 8%);\r\n    --paragraphFontSize: 15px;\r\n    --smoothtransition: all 0.3s;\r\n}\r\n\r\n/*\r\n===================\r\nInitial styles\r\n==================\r\n*/\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n/*\r\n====================\r\nGeneral Styles\r\n====================\r\n*/\r\n\r\nbody {\r\n    font-family: 'Overpass', sans-serif;\r\n    color: var(--titleColor);\r\n    height: 100vh;\r\n    background-color: var(--bgColor);\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.container {\r\n    margin: auto;\r\n    background-color: var(--cardColor);\r\n    max-width: 350px;\r\n    height: 400px;\r\n    border-radius: 20px;\r\n    padding: 15px 25px;\r\n}\r\n\r\n.title {\r\n    font-size: 30px;\r\n    font-weight: 700;\r\n}\r\n\r\n.paragraph {\r\n    font-size: var(--paragraphFontSize);\r\n    font-weight: 400;\r\n    margin: 20px 0;\r\n    color: var(--paragraphColor);\r\n}\r\n\r\ninput[type=\"radio\"] {\r\n    /*Delete radio buttons*/\r\n    display: none;\r\n}\r\n\r\n/*\r\n===================\r\nicon style\r\n===================\r\n*/\r\n\r\n.star i {\r\n    color: var(--submitButtonColor);\r\n    padding: 12px 14px;\r\n    background-color: var(--unselectPointColor);\r\n    border-radius: 50%;\r\n    margin: 20px 0;\r\n}\r\n\r\n/*\r\n ======================\r\n container card styles\r\n ======================\r\n */\r\n.container-img,\r\n.container-gratitude {\r\n    text-align: center;\r\n}\r\n\r\n.container-img {\r\n    display: block;\r\n    margin: 0 auto;\r\n    padding: 20px 0;\r\n}\r\n\r\n.container-img p {\r\n    padding: 10px 20px;\r\n    color: var(--submitButtonColor);\r\n    background-color: var(--unselectPointColor);\r\n    border-radius: 20px;\r\n    margin: 10px 0;\r\n    display: inline-block;\r\n}\r\n\r\n.container-gratitude {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.container-gratitude p {\r\n    padding: 10px 0;\r\n    color: var(--paragraphColor);\r\n    line-height: 1.4rem;\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n\r\n/*\r\n==============\r\nform styles\r\n=============\r\n*/\r\n.container-points {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.points {\r\n    padding: 15px 20px;\r\n    background-color: var(--unselectPointColor);\r\n    border-radius: 50%;\r\n    transition: var(--smoothtransition);\r\n}\r\n\r\n.points:hover {\r\n    background-color: var(--submitButtonColor);\r\n    cursor: pointer;\r\n}\r\n\r\n.btn {\r\n    background-color: var(--submitButtonColor);\r\n    color: var(--titleColor);\r\n    width: 100%;\r\n    padding: 10px;\r\n    border: none;\r\n    border-radius: 20px;\r\n    margin: 30px 0 10px 0;\r\n    font-size: 18px;\r\n    letter-spacing: 3px;\r\n    font-weight: 400;\r\n    display: block;\r\n    transition: var(--smoothtransition);\r\n}\r\n\r\n.btn:hover {\r\n    background-color: var(--titleColor);\r\n    color: var(--submitButtonColor);\r\n    cursor: pointer;\r\n}\r\n\r\n.selectedBtn {\r\n    background-color: var(--selectedPointsColor);\r\n}\r\n",""]);const s=i},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var t="",e=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),e&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=r(n),e&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(r,t,e,o,a){"string"==typeof r&&(r=[[null,r,void 0]]);var i={};if(e)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<r.length;l++){var p=[].concat(r[l]);e&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),n.push(p))}},n}},81:r=>{r.exports=function(r){return r[1]}},379:r=>{var n=[];function t(r){for(var t=-1,e=0;e<n.length;e++)if(n[e].identifier===r){t=e;break}return t}function e(r,e){for(var a={},i=[],s=0;s<r.length;s++){var c=r[s],l=e.base?c[0]+e.base:c[0],p=a[l]||0,d="".concat(l," ").concat(p);a[l]=p+1;var u=t(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var v=o(f,e);e.byIndex=s,n.splice(s,0,{identifier:d,updater:v,references:1})}i.push(d)}return i}function o(r,n){var t=n.domAPI(n);return t.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;t.update(r=n)}else t.remove()}}r.exports=function(r,o){var a=e(r=r||[],o=o||{});return function(r){r=r||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var c=e(r,o),l=0;l<a.length;l++){var p=t(a[l]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}a=c}}},569:r=>{var n={};r.exports=function(r,t){var e=function(r){if(void 0===n[r]){var t=document.querySelector(r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(r){t=null}n[r]=t}return n[r]}(r);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(t)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,t)=>{r.exports=function(r){var n=t.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(t){!function(r,n,t){var e="";t.supports&&(e+="@supports (".concat(t.supports,") {")),t.media&&(e+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(e+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),e+=t.css,o&&(e+="}"),t.media&&(e+="}"),t.supports&&(e+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(e,r,n.options)}(n,r,t)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},n={};function t(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={id:e,exports:{}};return r[e](a,a.exports,t),a.exports}t.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return t.d(n,{a:n}),n},t.d=(r,n)=>{for(var e in n)t.o(n,e)&&!t.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:n[e]})},t.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),(()=>{var r=t(379),n=t.n(r),e=t(795),o=t.n(e),a=t(569),i=t.n(a),s=t(565),c=t.n(s),l=t(216),p=t.n(l),d=t(589),u=t.n(d),f=t(556),v={};v.styleTagTransform=u(),v.setAttributes=c(),v.insert=i().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=p(),n()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;var g,h=document.querySelector("form"),m=document.querySelectorAll(".points"),b=document.querySelector(".card-container"),y=document.querySelector(".score");h.addEventListener("submit",(function(r){r.preventDefault(),g?(h.classList.add("hidden"),b.classList.remove("hidden"),y.innerHTML=g):alert("Please choose a value")})),m.forEach((function(r,n,t){r.addEventListener("click",(function(n){g=g===+n.target.textContent?null:+n.target.textContent,t.forEach((function(r){r.classList.remove("selectedBtn")})),r.classList.toggle("selectedBtn")}))}))})()})();