import{r as a,a as n,i as o,j as r,k as i}from"./index-d8552601.js";import{d as m,f as t}from"./helpers-f505966d.js";const u=()=>r.jsxs("div",{className:"w-full p-0 m-0",children:[r.jsx(l,{}),r.jsx(x,{})]}),l=a.memo(()=>{const[s]=n(o),e=(s==null?void 0:s.meta)||{};return r.jsx("input",{type:"range",min:0,value:e==null?void 0:e.currentTime,max:e==null?void 0:e.duration,className:"w-full py-0 mx-1 my-0 cursor-grab active:cursor-grabbing accent-accent-8 seekbar",onChange:c=>m(i.seek,150)(c.target.value)})}),x=()=>{const[s]=n(o),e=(s==null?void 0:s.meta)||{};return r.jsxs("div",{className:"flex justify-between w-full px-2 py-1 my-1 text-xs text-neutral-100/70",children:[r.jsx("p",{children:t(e==null?void 0:e.currentTime)}),r.jsx("p",{children:t(e==null?void 0:e.duration)})]})},j=a.memo(u);export{j as S};
