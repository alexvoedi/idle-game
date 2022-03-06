import{u as k,_ as L}from"./useItem.6d841b56.js";import{o as e,e as o,f as t,g as I,y as C,j as B,w as A,u as c,i as m,F as h,h as p,t as l,z as M,A as P,B as S}from"./vendor.9740482d.js";import{_ as b,u as F}from"./index.e3829e11.js";const V={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},D=t("path",{fill:"currentColor",d:"M2 19.63L13.43 8.2l-.71-.7l1.42-1.43L12 3.89c1.2-1.19 3.09-1.19 4.27 0l3.6 3.61l-1.42 1.41h2.84l.71.71l-3.55 3.59l-.71-.71V9.62l-1.47 1.42l-.71-.71L4.13 21.76L2 19.63Z"},null,-1),R=[D];function Y(n,_){return e(),o("svg",V,R)}var Z={name:"mdi-hammer",render:Y};const O={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},T=t("path",{fill:"currentColor",d:"M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m4.2 14.2L11 13V7h1.5v5.2l4.5 2.7l-.8 1.3Z"},null,-1),j=[T];function z(n,_){return e(),o("svg",O,j)}var G={name:"mdi-clock",render:z};const v=n=>(P("data-v-46433e61"),n=n(),S(),n),E=v(()=>t("h2",{class:"text-2xl font-bold px-6 pt-6 pb-2"},"Inactive Productions",-1)),q={key:0,class:"w-full"},H=v(()=>t("th",{class:"text-left"},"Output",-1)),J=v(()=>t("th",{class:"text-right w-min-32"},"Input",-1)),K={class:"text-right"},Q=v(()=>t("th",null,null,-1)),U={class:"font-mono text-right whitespace-nowrap"},W={class:"font-mono text-right"},X={class:"text-center"},tt=["onClick"],et=I({setup(n){const _=F(),{getItemName:a}=k(),d=C(()=>_.generators.filter(i=>!i.active)),f=i=>{i.active=!0};return(i,N)=>{const $=G,g=Z,w=L;return e(),B(w,{class:"space-y-4 overflow-hidden"},{default:A(()=>[E,c(d).length>0?(e(),o("table",q,[t("thead",null,[t("tr",null,[H,J,t("th",K,[m($)]),Q])]),t("tbody",null,[(e(!0),o(h,null,p(c(d),(r,y)=>(e(),o("tr",{key:y},[t("td",null,[(e(!0),o(h,null,p(r.blueprint.output,(s,u)=>(e(),o("div",{key:u},l(c(a)(s.id)),1))),128))]),t("td",U,[(e(!0),o(h,null,p(r.blueprint.input,(s,u)=>(e(),o("div",{key:u},l(c(a)(s.id))+" \xD7 "+l(s.amount),1))),128))]),t("td",W,l(c(_).calculateProductionTime(r).toFixed(2)),1),t("td",X,[t("button",{onClick:s=>f(r)},[m(g)],8,tt)])]))),128))])])):M("",!0)]),_:1})}}});var ot=b(et,[["__scopeId","data-v-46433e61"]]);const nt={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},st=t("path",{fill:"currentColor",d:"M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"},null,-1),ct=[st];function _t(n,_){return e(),o("svg",nt,ct)}var it={name:"mdi-close",render:_t};const x=n=>(P("data-v-22bc487a"),n=n(),S(),n),rt=x(()=>t("h2",{class:"text-2xl font-bold px-6 pt-6 pb-2"},"Active Productions",-1)),lt={key:0,class:"w-full"},at=x(()=>t("th",{class:"text-left"},"Output",-1)),dt=x(()=>t("th",{class:"text-right w-min-32"},"Input",-1)),ut={class:"text-right"},ht=x(()=>t("th",null,null,-1)),pt={class:"font-mono text-right whitespace-nowrap"},mt={class:"font-mono text-right"},vt={class:"text-center"},xt=["onClick"],ft=I({setup(n){const _=F(),{getItemName:a}=k(),d=C(()=>_.generators.filter(i=>i.active)),f=i=>{i.active=!1};return(i,N)=>{const $=G,g=it,w=L;return e(),B(w,{class:"space-y-4 overflow-hidden"},{default:A(()=>[rt,c(d).length>0?(e(),o("table",lt,[t("thead",null,[t("tr",null,[at,dt,t("th",ut,[m($)]),ht])]),t("tbody",null,[(e(!0),o(h,null,p(c(d),(r,y)=>(e(),o("tr",{key:y},[t("td",null,[(e(!0),o(h,null,p(r.blueprint.output,(s,u)=>(e(),o("div",{key:u},l(c(a)(s.id)),1))),128))]),t("td",pt,[(e(!0),o(h,null,p(r.blueprint.input,(s,u)=>(e(),o("div",{key:u},l(c(a)(s.id))+" \xD7 "+l(s.amount),1))),128))]),t("td",mt,l(c(_).calculateProductionTime(r).toFixed(2)),1),t("td",vt,[t("button",{onClick:s=>f(r)},[m(g)],8,xt)])]))),128))])])):M("",!0)]),_:1})}}});var $t=b(ft,[["__scopeId","data-v-22bc487a"]]);const gt={},wt={class:"h-full grid gap-4",xl:"grid-cols-2"};function yt(n,_){const a=$t,d=ot;return e(),o("div",wt,[m(a),m(d)])}var It=b(gt,[["render",yt]]);export{It as default};
