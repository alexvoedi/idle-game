import{o as R,e as S,g as u,f as K,i as $,j as p,k as v,u as q,x as G,B as Q}from"./vendor.6b5c0dfd.js";import{p as ee,o as te,b as ne,q as re}from"./index.6f6d3dd2.js";import{_ as oe}from"./Button.a24054fe.js";const ae={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},ce=u("path",{fill:"currentColor",d:"M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12Z"},null,-1),ie=[ce];function se(e,n){return R(),S("svg",ae,ie)}var le={name:"mdi-delete",render:se};const ue={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},de=u("path",{fill:"currentColor",d:"m14 12l-4-4v3H2v2h8v3m10 2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3h2V6h12v12H6v-3H4v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2Z"},null,-1),fe=[de];function pe(e,n){return R(),S("svg",ue,fe)}var ve={name:"mdi-import",render:pe};const _e={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},me=u("path",{fill:"currentColor",d:"m23 12l-4-4v3h-9v2h9v3M1 18V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3h-2V6H3v12h12v-3h2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2Z"},null,-1),he=[me];function xe(e,n){return R(),S("svg",_e,he)}var be={name:"mdi-export",render:xe};function _(e){return Object.prototype.toString.call(e)==="[object Array]"}function M(e,n){if(!e)throw new Error(n)}function D(e){return Object.keys(e)}function w(e){return Object.keys(e).map(function(n){return[n,e[n]]})}function b(e,n,r){var t="."+n,o=new RegExp("(\\".concat(n,")?$"));return r(e).replace(o,t)}function ge(e){return"555xmlHello .  world!".trim().replace(/^([0-9,;]|(xml))+/,""),e.replace(/[^_a-zA-Z 0-9:\-\.]/g,"").replace(/^([ 0-9-:\-\.]|(xml))+/i,"").replace(/ +/g,"-")}function we(e){return Array(e+1).join(" ")}function ye(e){return e.replace(/([<>&])/g,function(n,r){switch(r){case"<":return"&lt;";case">":return"&gt;";case"&":return"&amp;";default:return""}})}function je(e,n,r){switch(n){case"txt":{var t="text/plain;charset=utf-8";return r?URL.createObjectURL(new Blob([e],{type:t})):"data:,".concat(t)+encodeURIComponent(e)}case"css":{var t="text/css;charset=utf-8";return r?URL.createObjectURL(new Blob([e],{type:t})):"data:,".concat(t)+encodeURIComponent(e)}case"html":{var t="text/html;charset=utf-8";return r?URL.createObjectURL(new Blob([e],{type:t})):"data:,".concat(t)+encodeURIComponent(e)}case"json":{var t="text/json;charset=utf-8";return r?URL.createObjectURL(new Blob([e],{type:t})):"data:,".concat(t)+encodeURIComponent(e)}case"csv":{var t="text/csv;charset=utf-8";return r?URL.createObjectURL(new Blob([e],{type:t})):"data:,".concat(t)+encodeURIComponent(e)}case"xls":{var t="text/application/vnd.ms-excel;charset=utf-8";return r?URL.createObjectURL(new Blob([e],{type:t})):"data:,".concat(t)+encodeURIComponent(e)}case"xml":{var t="text/application/xml;charset=utf-8";return r?URL.createObjectURL(new Blob([e],{type:t})):"data:,".concat(t)+encodeURIComponent(e)}default:return""}}function B(e,n,r,t){r===void 0&&(r="download"),t===void 0&&(t=!0);var o=je(e,n,t),c=document.createElement("a");c.href=o,c.download=r,c.setAttribute("style","visibility:hidden"),document.body.appendChild(c),c.dispatchEvent(new MouseEvent("click",{bubbles:!1,cancelable:!1,view:window})),document.body.removeChild(c)}var O=globalThis&&globalThis.__assign||function(){return O=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},O.apply(this,arguments)},y=globalThis&&globalThis.__read||function(e,n){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var t=r.call(e),o,c=[],l;try{for(;(n===void 0||n-- >0)&&!(o=t.next()).done;)c.push(o.value)}catch(s){l={error:s}}finally{try{o&&!o.done&&(r=t.return)&&r.call(t)}finally{if(l)throw l.error}}return c};function Oe(e){if(!e||_(e)&&!e.length||!_(e)&&!D(e).length)return function(r){return r};var n=_(e)?e.reduce(function(r,t){var o;return O(O({},r),(o={},o[t]=t,o))},Object.create(null)):e;return function(r){return _(r)?r.map(function(t){return w(t).reduce(function(o,c){var l=y(c,2),s=l[0],a=l[1];return s in n&&(o[n[s]]=a),o},Object.create(null))}).filter(function(t){return D(t).length}):w(r).reduce(function(t,o){var c=y(o,2),l=c[0],s=c[1];return l in n&&(t[n[l]]=s),t},Object.create(null))}}function Re(e){var n="Invalid export data. Please provide a valid JSON";try{return typeof e=="string"?JSON.parse(e):e}catch{throw new Error(n)}}function Se(e,n,r){n===void 0&&(n=null);var t="Invalid export data. Please provide valid JSON object";try{return JSON.stringify(e,n,r)}catch{throw new Error(t)}}function J(e){return e.map(w).reduce(function(n,r,t){return r.reduce(function(o,c){var l=y(c,2),s=l[0],a=l[1],i=o[s]||Array.from({length:e.length}).map(function(d){return""});return i[t]=(typeof a!="string"?JSON.stringify(a):a)||"",o[s]=i,o},n)},Object.create(null))}function H(e,n){return n===void 0&&(n=function(r){return r}),n(w(e).map(function(r){var t=y(r,2),o=t[0],c=t[1];return{fieldName:o,fieldValues:c}}))}function Ne(e,n,r){if(n===void 0&&(n=","),r===void 0&&(r=function(a){return a}),!e.length)return"";var t=J(e),o=H(t,r),c=o.map(function(a){var i=a.fieldName;return i}).join(n)+`\r
`,l=o.map(function(a){var i=a.fieldValues;return i}).map(function(a){return a.map(function(i){return'"'.concat(i.replace(/\"/g,'""'),'"')})}),s=l.reduce(function(a,i){return a.map(function(d,f){return"".concat(d).concat(n).concat(i[f])})});return c+s.join(`\r
`)}function Le(e,n){M(e.length>0);var r=J(e),t=H(r,n),o=t.map(function(s){var a=s.fieldName;return a}).join("</b></th><th><b>"),c=t.map(function(s){var a=s.fieldValues;return a}).map(function(s){return s.map(function(a){return"<td>".concat(a,"</td>")})}),l=c.reduce(function(s,a){return s.map(function(i,d){return"".concat(i).concat(a[d])})});return`
    <table>
      <thead>
        <tr><th><b>`.concat(o,`</b></th></tr>
      </thead>
      <tbody>
        <tr>`).concat(l.join(`</tr>
        <tr>`),`</tr>
      </tbody>
    </table>
  `)}function Me(e,n){if(n===void 0&&(n=function(t){return t}),!e.length)return"";var r=`<html>
  <head>
    <meta charset="UTF-8" />
  </head >
  <body>
    `.concat(Le(e,n),`
  </body>
</html >
`);return r}function Ue(e){var n=`<?xml version="1.0" encoding="utf-8"?><!DOCTYPE base>
`.concat(U(e,"base"),`
`);return n}function U(e,n,r,t){r===void 0&&(r="element"),t===void 0&&(t=0);var o=ge(n),c=we(t);if(e==null)return"".concat(c,"<").concat(o," />");var l=_(e)?e.map(function(a){return U(a,r,r,t+2)}).join(`
`):typeof e=="object"?w(e).map(function(a){var i=y(a,2),d=i[0],f=i[1];return U(f,d,r,t+2)}).join(`
`):c+"  "+ye(String(e)),s="".concat(c,"<").concat(o,`>
`).concat(l,`
`).concat(c,"</").concat(o,">");return s}var Ae={txt:"txt",css:"css",html:"html",json:"json",csv:"csv",xls:"xls",xml:"xml"};function A(e){var n=e.data,r=e.fileName,t=r===void 0?"download":r,o=e.extension,c=e.fileNameFormatter,l=c===void 0?function(L){return L.replace(/\s+/,"_")}:c,s=e.fields,a=e.exportType,i=a===void 0?"txt":a,d=e.replacer,f=d===void 0?null:d,m=e.space,N=m===void 0?4:m,j=e.processor,h=j===void 0?B:j,E=e.withBOM,P=E===void 0?!1:E,I=e.delimiter,Y=I===void 0?",":I,C=e.beforeTableEncode,T=C===void 0?function(L){return L}:C,V="Invalid export data. Please provide an array of objects",X="Can't export unknown data type ".concat(i,"."),Z="Can't export string data to ".concat(i,".");if(typeof n=="string")switch(i){case"txt":case"css":case"html":return h(n,i,b(t,o!=null?o:i,l));default:throw new Error(Z)}var z=Oe(s),x=z(Re(n)),F=Se(x,f,N);switch(i){case"txt":case"css":case"html":return h(F,i,b(t,o!=null?o:i,l));case"json":return h(F,i,b(t,o!=null?o:"json",l));case"csv":{M(_(x),V);var W="\uFEFF",k=Ne(x,Y,T),g=P?W+k:k;return h(g,i,b(t,o!=null?o:"csv",l))}case"xls":{M(_(x),V);var g=Me(x,T);return h(g,i,b(t,o!=null?o:"xls",l))}case"xml":{var g=Ue(x);return h(g,i,b(t,o!=null?o:"xml",l))}default:throw new Error(X)}}A.types=Ae;A.processors={downloadFile:B};const Ee={class:"space-y-8 max-w-screen-md mx-auto"},Ie={class:"text-3xl font-semibold flex items-center gap-4"},Ce=u("span",null,"Game",-1),Te={class:"grid grid-cols-1 gap-8"},Ve=u("h2",{class:"text-xl"},"Export Game",-1),Fe=u("p",null,"Export and download the game to your computer.",-1),ke={class:"flex justify-end"},$e=G(" Export "),De=u("h2",{class:"text-xl"},"Import Game",-1),Ge=u("p",null," Load an exported game from your local computer. The current game data will be overwritten. This action cannot be undone! ",-1),Be={class:"flex justify-end"},Je=u("span",null,"Import",-1),He=u("h2",{class:"text-2xl font-semibold"},"Restart Game",-1),Pe=u("p",null,"All game data will be lost. This action cannot be undone!",-1),Ye={class:"flex justify-end"},Xe=G(" Restart "),Ke=K({setup(e){const n=()=>{const s=Q(re.state.value);A({data:s,fileName:`save-${Date.now()}.json`,exportType:"json"})},r=ee(),t=$(),o=$(),c=s=>{const a=s.target;a.files&&(t.value=a.files[0])},l=()=>{if(!confirm("Your current save game will be overwritten. Are you sure you want to load this save game?"))return;const a=new FileReader;a.onload=i=>{const{target:d}=i;if(d==null?void 0:d.result){const f=JSON.parse(d.result.toString());r.loadGame(f),o.value&&o.value.reset()}},a.readAsText(t.value)};return(s,a)=>{const i=te,d=be,f=oe,m=ne,N=ve,j=le;return R(),S("div",Ee,[u("h1",Ie,[p(i),Ce]),u("div",Te,[p(m,{class:"px-8 py-6 space-y-6"},{default:v(()=>[Ve,Fe,u("div",ke,[p(f,{onClick:n,class:"bg-indigo-600 text-white flex items-center gap-2","not-disabled:hover":"bg-indigo-500"},{icon:v(()=>[p(d)]),default:v(()=>[$e]),_:1})])]),_:1}),p(m,{class:"px-8 py-6 space-y-6"},{default:v(()=>[De,u("form",{ref_key:"fileInputForm",ref:o,class:"space-y-4",action:""},[Ge,u("input",{type:"file",onChange:c,accept:"application/JSON",ref:"fileUpload"},null,544),u("div",Be,[p(f,{onClick:l,disabled:!t.value,class:"bg-red-700 text-white flex items-center gap-2","not-disabled:hover":"bg-red-600"},{icon:v(()=>[p(N)]),default:v(()=>[Je]),_:1},8,["disabled"])])],512)]),_:1}),p(m,{class:"px-8 py-6 space-y-6"},{default:v(()=>[He,Pe,u("div",Ye,[p(f,{onClick:q(r).resetGame,class:"bg-red-700 text-white flex items-center gap-2","not-disabled:hover":"bg-red-600"},{icon:v(()=>[p(j)]),default:v(()=>[Xe]),_:1},8,["onClick"])])]),_:1})])])}}});export{Ke as default};