import{x as d,b as p,_ as u,y as f}from"./index.f5b4cf16.js";import{_ as x}from"./Table.88cc5eaf.js";import{f as h,G as b,i as y,o as l,s as g,k as c,g as s,j as o,x as V,t as v,u as B,e as C}from"./vendor.6b5c0dfd.js";const k=s("h2",{class:"px-8 py-4 text-2xl font-bold"},"Items",-1),w={class:"flex-grow overflow-y-scroll"},I=h({setup(_){const a=b(()=>d.sort((e,n)=>e.name.localeCompare(n.name))),t=y([{id:"name",text:"Item",field:"name",headClasses:"text-left"},{id:"saleValue",text:"Sale Value",field:"saleValue",classes:"text-right",bodyClasses:"font-mono"}]);return(e,n)=>{const r=x,i=p;return l(),g(i,{class:"h-60vh overflow-hidden flex flex-col"},{default:c(()=>[k,s("div",w,[o(r,{columns:t.value,items:B(a)},{saleValue:c(({item:m})=>[V(v(m.saleValue.toFixed(2)),1)]),_:1},8,["columns","items"])])]),_:1})}}}),$={},N={class:"space-y-8"},T={class:"text-3xl font-bold flex items-center gap-4"},L=s("span",null,"Library",-1);function S(_,a){const t=f,e=I;return l(),C("div",N,[s("h1",T,[o(t),L]),o(e)])}var F=u($,[["render",S]]);export{F as default};
