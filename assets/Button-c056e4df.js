import{j as k}from"./index-4461e390.js";import{c as x}from"./clsx.m-1229b3e0.js";const m=n=>typeof n=="boolean"?"".concat(n):n===0?"0":n,y=x,j=(n,a)=>t=>{var d;if((a==null?void 0:a.variants)==null)return y(n,t==null?void 0:t.class,t==null?void 0:t.className);const{variants:u,defaultVariants:r}=a,b=Object.keys(u).map(e=>{const l=t==null?void 0:t[e],i=r==null?void 0:r[e];if(l===null)return null;const o=m(l)||m(i);return u[e][o]}),c=t&&Object.entries(t).reduce((e,l)=>{let[i,o]=l;return o===void 0||(e[i]=o),e},{}),g=a==null||(d=a.compoundVariants)===null||d===void 0?void 0:d.reduce((e,l)=>{let{class:i,className:o,...h}=l;return Object.entries(h).every(f=>{let[v,s]=f;return Array.isArray(s)?s.includes({...r,...c}[v]):{...r,...c}[v]===s})?[...e,i,o]:e},[]);return y(n,b,g,t==null?void 0:t.class,t==null?void 0:t.className)},N=j("flex items-center justify-center p-2 transition-colors duration-300",{variants:{type:{primary:["text-white dark:text-black","bg-black hover:bg-slate-700","dark:bg-white dark:hover:bg-gray-8"],secondary:["text-gray-1","bg-gray-9 hover:bg-gray-10"],danger:["text-gray-1","bg-danger-10 hover:bg-danger-11"],outline:["outline-1  outline-double","outline-current hover:outline-2 active:outline-4 focus:outline-4 "],icon:["text-white","hover:text-accent-6 scale-2","data-[active=true]:text-accent-11 hover:data-[active=true]:text-accent-9 font-extrabold"]},size:{sm:["h-9"],md:["h-10"],lg:["h-14"]},rounded:{sm:["rounded-sm"],md:["rounded"],lg:["rounded-lg"],xl:["rounded-xl"],full:["rounded-full"]}},defaultVariants:{type:"primary",size:"md",rounded:"md"}}),O=({children:n,className:a,type:t,size:d,rounded:u,...r})=>k.jsx("button",{className:x(N({type:t,size:d,rounded:u}),a),...r,children:n});export{O as B};
