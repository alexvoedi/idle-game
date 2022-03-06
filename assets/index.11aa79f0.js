var y=Object.defineProperty,I=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var _=(e,t,o)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,m=(e,t)=>{for(var o in t||(t={}))B.call(t,o)&&_(e,o,t[o]);if(p)for(var o of p(t))b.call(t,o)&&_(e,o,t[o]);return e},h=(e,t)=>I(e,w(t));import{_ as k,u as C}from"./useItem.6d841b56.js";import{_ as R,a as F,u as L}from"./index.e3829e11.js";import{g as A,y as D,o as i,j as N,w as P,f as s,t as c,u as d,e as f,h as T,F as j,A as z,B as E,D as G}from"./vendor.9740482d.js";const g=e=>(z("data-v-6f770965"),e=e(),E(),e),V=g(()=>s("h2",{class:"text-2xl font-bold px-6 pt-6 pb-2"},"Inventory",-1)),q={class:"px-6"},H={class:"w-full"},J=g(()=>s("thead",null,[s("tr",null,[s("th",{class:"text-left whitespace-nowrap"},"Item"),s("th",{class:"text-right"},"Amount"),s("th",{class:"text-right"},"Items per Second")])],-1)),K={class:"font-mono text-right"},M=A({setup(e){const t=F(),o=L(),{getItemName:x}=C(),S=D(()=>t.inventory.map(a=>h(m({},a),{amount:a.amount,productionRate:v(a.id)}))),v=a=>{const u=o.generators.filter(r=>r.active&&r.blueprint.output.some(n=>n.id===a));if(u.length>0){const r=u.reduce((n,l)=>o.calculateProductionTime(l),0);return 1/r}else return 0};return(a,u)=>{const r=k;return i(),N(r,{class:"space-y-4 overflow-hidden"},{default:P(()=>[V,s("div",q," Storage Space: "+c(d(t).remainingInventorySpace),1),s("table",H,[J,s("tbody",null,[(i(!0),f(j,null,T(d(S),(n,l)=>(i(),f("tr",{key:l},[s("td",null,c(d(x)(n.id)),1),s("td",K,c(n.amount.toLocaleString()),1),s("td",{class:G(["font-mono text-right",[n.productionRate===0?"text-red-500":"text-green-500"]])},c(n.productionRate.toFixed(4).toLocaleString()),3)]))),128))])])]),_:1})}}});var X=R(M,[["__scopeId","data-v-6f770965"]]);export{X as default};
