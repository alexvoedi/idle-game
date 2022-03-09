var w=Object.defineProperty,z=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var B=(i,t,n)=>t in i?w(i,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[t]=n,g=(i,t)=>{for(var n in t||(t={}))P.call(t,n)&&B(i,n,t[n]);if(I)for(var n of I(t))j.call(t,n)&&B(i,n,t[n]);return i},h=(i,t)=>z(i,F(t));import{_ as $}from"./BaseCard.796307f5.js";import{_ as N}from"./Table.074b6d54.js";import{_ as D}from"./Button.87cc6a90.js";import{b,u as T,a as R,c as G}from"./index.2686970c.js";import{g as V,B as S,G as E,o as C,j as k,w as _,n as y,t as d,u as a,i as x,f as c,D as U,e as q}from"./vendor.8273ec50.js";const A=V({setup(i){const t=b(),n=T(),{getItem:m}=R(),p=e=>{const o=n.generators.filter(s=>s.active&&s.blueprint.output.some(r=>r.id===e));if(o.length>0){const s=o.reduce((r,u)=>r+n.calculateProductionTime(u),0);return 1/s}else return 0},f=S(()=>t.inventory.map(e=>{const{saleValue:o}=m(e.id),s=e.amount*o,r=p(e.id);return h(g({},e),{saleValue:o,totalSaleValue:s,productionRate:r})}).sort((e,o)=>e.id-o.id)),v=E([{id:"item",text:"Item",field:"name",headClasses:"text-left"},{id:"amount",text:"Stock",field:"amount",classes:"text-right",bodyClasses:"font-mono"},{id:"sale-value",text:"Sale Value",field:"saleValue",classes:"text-right",bodyClasses:"font-mono"},{id:"production-rate",text:"Items per Second",field:"productionRate",classes:"text-right",bodyClasses:"font-mono"},{id:"actions",text:"",field:"actions",classes:"text-right",bodyClasses:"flex justify-end"}]);return(e,o)=>{const s=G,r=D,u=N;return C(),k(u,{items:a(f),columns:v.value},{item:_(({item:l})=>[y(d(a(m)(l.id).name),1)]),"production-rate":_(({item:l})=>[y(d(l.productionRate.toFixed(2)),1)]),"sale-value":_(({item:l})=>[y(d(l.saleValue.toFixed(2))+" | "+d(l.totalSaleValue.toFixed(2)),1)]),actions:_(({item:l})=>[x(r,{onClick:st=>a(t).sellItem({id:l.id,amount:1}),class:"",hover:"text-indigo-400"},{icon:_(()=>[x(s)]),_:2},1032,["onClick"])]),_:1},8,["items","columns"])}}}),H={class:"flex items-center justify-between gap-16"},J={class:"text-center"},K={class:"font-bold text-4xl font-mono"},L=c("div",{class:"text-sm"},"Used",-1),M={class:"text-center"},O={class:"font-bold text-4xl font-mono"},Q=c("div",{class:"text-sm"},"Total",-1),W={class:"text-center"},X=c("div",{class:"text-sm"},"Remaining",-1),Y=V({setup(i){const t=b();return(n,m)=>{const p=$;return C(),k(p,{class:"px-12 py-6"},{default:_(()=>[c("div",H,[c("div",J,[c("div",K,d(a(t).inventorySize),1),L]),c("div",M,[c("div",O,d(a(t).storage),1),Q]),c("div",W,[c("div",{class:U(["font-bold text-4xl font-mono",{"text-red-500":a(t).inventorySize===a(t).storage,"text-orange-500":a(t).inventorySize/a(t).storage>.66,"text-yellow-500":a(t).inventorySize/a(t).storage>.33,"text-green-400":a(t).inventorySize/a(t).storage>0}])},d(a(t).remainingInventorySpace),3),X])])]),_:1})}}}),Z={class:"space-y-8"},tt=c("h1",{class:"text-3xl font-bold"},"Inventory",-1),et={class:"flex flex-wrap"},ot={class:"px-8 pt-6 space-y-4"},nt={class:"space-y-4"},ut=V({setup(i){const t=b(),n=T(),{getItem:m}=R(),p=S(()=>t.inventory.map(e=>{const{saleValue:o}=m(e.id),s=e.amount*o,r=f(e.id);return h(g({},e),{saleValue:o,totalSaleValue:s,productionRate:r})}).sort((e,o)=>e.id-o.id)),f=e=>{const o=n.generators.filter(s=>s.active&&s.blueprint.output.some(r=>r.id===e));if(o.length>0){const s=o.reduce((r,u)=>n.calculateProductionTime(u),0);return 1/s}else return 0},v=S(()=>p.value.reduce((e,o)=>e+o.totalSaleValue,0));return(e,o)=>{const s=Y,r=A,u=$;return C(),q("div",Z,[tt,c("div",et,[x(s),c("div",ot,[c("div",nt,[c("div",null,"Total Sale Value: "+d(a(v).toFixed(2)),1)])])]),x(u,{class:"overflow-hidden"},{default:_(()=>[x(r)]),_:1})])}}});export{ut as default};
